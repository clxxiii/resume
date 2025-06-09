export enum Flag {
	CHANGE_SOURCES = 1,
	SHOW_ADDRESS = 2,
	SHOW_PHONE = 4,
	HIDE_QR = 8
}

export const hasPermission = (flag: number, permission: Flag) => {
	return flag & permission;
};
