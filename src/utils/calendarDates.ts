import dayjs from "dayjs";

export function getMonth(
	year = dayjs().year(),
	month = dayjs().month(),
): string {
	const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
	return firstDayOfMonth.toString();
}
