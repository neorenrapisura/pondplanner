import dayjs from "dayjs";

export default function getMonth(month?: number, year?: number): string {
	return dayjs().month().toString();
}
