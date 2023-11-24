const input = "1-3, 5-7, 10-11, 8, 9, 11 aaaaa";

let inparr = input.replaceAll(/^(?!.*0-9\-\,)/gi, "").split(",");
let finisharr = []; 

for(let i = 0; i < inparr.length; i++) {
    if (inparr[i].split("-").length == 2) {
        for (let j = inparr[i].split("-")[0]; j <= inparr[i].split("-")[1]; j++) {
            finisharr.push(Number(j));
        }
    } else {
        finisharr.push(Number(inparr[i]));
    }
}

finisharr = [...new Set(finisharr)].sort(function(a, b) {return a - b;});
//remove NaN

console.log(finisharr)