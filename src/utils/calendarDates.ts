import dayjs from "dayjs";

export const generateMonthDate = (month: number, year: number): string => {
	const firstDay = dayjs().year(year).month(month).startOf("month");
	const lastDay = dayjs().year(year).month(month).endOf("month");

	const dates: number[] = [];

	for (let date = firstDay.date(); date <= lastDay.date(); date++) {
		dates.push(date);
	}

	return dates.toString();
};
