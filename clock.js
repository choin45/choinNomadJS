function clockStart() {
	const date = new Date();
	const dateGetHours = String(date.getHours()).padStart(2, "0");
	const dateGetMinutes = String(date.getMinutes()).padStart(2, "0");
	const dateGetSeconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = ` ${dateGetHours}:${dateGetMinutes}:${dateGetSeconds} `;
}
clockStart();
setInterval(clockStart, 1000);
