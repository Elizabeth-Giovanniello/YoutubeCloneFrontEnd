export const parseDateTime = timestamp => {
	const dateTime = new Date(timestamp);
	const date = dateTime.toLocaleDateString();
	const time = dateTime.toLocaleTimeString();
	return `${date} ${time}`;
};
