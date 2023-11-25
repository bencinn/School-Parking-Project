export function FormatTime(date) {
    let inp = new Date((typeof date === "string" ? new Date(date) : date).toISOString().toLocaleString("th-TH", {timeZone: 'Asia/Jakarta'}))
    let tzdate = new Date(inp);

    let day = tzdate.getDate();
    let month = tzdate.getMonth() + 1;
    let year = tzdate.getFullYear();
    let hours = tzdate.getHours();
    let minutes = tzdate.getMinutes();
    let seconds = tzdate.getSeconds();

    let formattedDay = String(day).padStart(2, "0");
    let formattedMonth = String(month).padStart(2, "0");
    let formattedHours = String(hours).padStart(2, "0");
    let formattedMinutes = String(minutes).padStart(2, "0");
    let formattedSeconds = String(seconds).padStart(2, "0");

    let formattedDate = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    return formattedDate;   
}