// const num = 5;

// for (let i = 0; i <= num; i++){
//     console.log(i);
// }
// -------------------------------------------------------------------------

// let sum =0;
// n = 100;

// for (let i = 1; i <= n; i++){
//     sum +=i;
// }
// console.log(`sum:`, sum);
// ----------------------------------------------------------------------------

// let time = 10;

// if (time < 10) {
//     console.log(`Good morning`);
// }
// else if (time < 20) {
//     console.log(`Good evening`);
// }
// else {
//     console.log(`Good afternoon`);
// }

// console.log(time) = 8;
// console.log(9);
// console.log(1);
// --------------------------------------------------------------------------------------

function isSpeedLimit(value) {
    if (value < 60) {
        return (`Good Safe Driwing`);
    }

    if (value > 65) {
        let a = 0;
        a = (value - 60) / 5;
        console.log(a);

        if (a || c >= 25) {
            return (`Your licence cancel`);
        }

        if (a >= 15) {
            let c = 0;
            c = a * 2;
            console.log (c);
            
            if (c >= 20){
                return (`Your are driwing overspeed limit get penallity ` + c);
            }
            
        }

        else {
            return (`You crossed speed limit get penallity ` + a);
        }

    }
}

let check = isSpeedLimit(150);
console.log(check);