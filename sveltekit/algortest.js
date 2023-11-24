const input = "19-23, e87-88";

let inparr = input.replaceAll(/[^0-9,-]+/g, "").split(",");
let finisharr = []; 

for(let i = 0; i < inparr.length; i++) {
    if (inparr[i].split("-").length == 2) {
        for (let j = Number(inparr[i].split("-")[0]); j <= Number(inparr[i].split("-")[1]); j++) {
            finisharr.push(Number(j));
        }
    } else {
        finisharr.push(Number(inparr[i]));
    }
}

finisharr = [...new Set(finisharr)].sort(function(a, b) {return a - b;});
finisharr = finisharr.filter(arg => isNaN(arg) === false);

console.log(finisharr);