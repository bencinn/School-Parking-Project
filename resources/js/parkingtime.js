function CurrentTime () {
    let Current = new Date().toLocaleString("th-TH");
    document.getElementById('currenttime').innerHTML = Current;
};

CurrentTime()
setInterval(CurrentTime, 1000)


let Parking = new Date(),
    ParkingLocale = Parking.toLocaleString("th-TH");
document.getElementById('parktime').innerHTML = ParkingLocale;


function ParkPeriod(parktime) {
    let UnixMS = Date.now() - new Date(parktime).getTime();
    let hours = Math.floor((UnixMS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((UnixMS % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((UnixMS % (1000 * 60)) / 1000);

    if (minutes <= 9) {
        minutes = `0${minutes}`
    };

    if (seconds <= 9) {
        seconds = `0${seconds}`
    };

    let Output = `${hours}:${minutes}:${seconds}`;
    document.getElementById('parkperiod').innerHTML = Output;
}

ParkPeriod(Parking)
setInterval(function(){ParkPeriod(Parking)}, 1000)

