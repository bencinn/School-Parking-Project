const input = [1, 3, 4, 5, 7, 8, 9, 11, 13, 15, 16, 19, 33, 45];

input.sort(function(a, b){return a - b});

let msg = [];
let mi = 0;
let fmsg = "";

msg[0] = {from: input[0]};

for (let i = 0; i < input.length - 1; i++) {
    if (input[i + 1] != input[i] + 1) {
        msg[mi].to = input[i];
        msg[mi + 1] = {from: input[i + 1]};
        mi++;
    }
}

msg[msg.length - 1].to = input[input.length - 1];

if (msg[0].from != msg[0].to) fmsg = `${msg[0].from}-${msg[0].to}`;
else fmsg = `${msg[0].from}`;

for (let i = 1; i < msg.length; i++) {
    if (msg[i].from == msg[i].to) {
        fmsg = fmsg + ", " + msg[i].from;
    } else {
        fmsg = fmsg + ", " + msg[i].from + "-" + msg[i].to;
    }
}
console.log(fmsg);