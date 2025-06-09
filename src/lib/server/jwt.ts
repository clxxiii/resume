import {
	exportJWK,
	exportPKCS8,
	generateKeyPair,
	importJWK,
	importPKCS8,
	SignJWT,
	jwtVerify,
	type JWTPayload
} from 'jose';
import ShortUniqueId from 'short-unique-id';
const { randomUUID } = new ShortUniqueId({ length: 12, dictionary: 'alpha' });

const ALG = 'ES256';

export const createJWT = async (source: App.Source, refresh = false) => {
	const { getLatestKey, incrementSourceUse } = await import('./db/queries');

	let keyObj = await getLatestKey();
	if (!keyObj) {
		keyObj = await newKey();
	}
	const keyString = (keyObj.private as Buffer).toString();
	const key = await importPKCS8(keyString, ALG);

	const jwt = await new SignJWT()
		.setSubject(source.code)
		.setIssuedAt()
		.setExpirationTime(keyObj.expires_at)
		.setProtectedHeader({ alg: ALG })
		.sign(key);

	if (!refresh) incrementSourceUse(source.id);

	return jwt;
};

export const verifyJWT = async (jwt: string) => {
	const { getAvailableKeys } = await import('./db/queries');

	const keyring = await getAvailableKeys();
	for (const keyObj of keyring) {
		const keyString = (keyObj.public as Buffer).toString();
		const key = await importJWK(JSON.parse(keyString));
		let payload: JWTPayload & { source?: App.Source };
		try {
			const verified = await jwtVerify(jwt, key);
			payload = verified.payload;
		} catch (_) {
			continue;
		}

		return { payload, deprecated: new Date(keyObj.deprecates_at).valueOf() < new Date().valueOf() };
	}

	return null;
};

const newKey = async () => {
	const { createKey } = await import('./db/queries');
	const { publicKey, privateKey } = await generateKeyPair(ALG, {
		extractable: true
	});

	const jwk = await exportJWK(publicKey);
	jwk.kid = `key_${randomUUID()}`;
	jwk.alg = ALG;

	const prv = await exportPKCS8(privateKey);
	return createKey(jwk.kid, JSON.stringify(jwk), prv);
};
