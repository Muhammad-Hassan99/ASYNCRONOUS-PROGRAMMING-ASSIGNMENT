"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World"
function w1(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function print() {
    return __awaiter(this, void 0, void 0, function* () {
        yield w1(1500);
        return "Hello world";
    });
}
function main1() {
    return __awaiter(this, void 0, void 0, function* () {
        const mes = yield print();
        console.log(mes);
    });
}
main1();
// Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
function h2(cb) {
    setTimeout(() => {
        cb();
    }, 1000);
}
h2(() => {
    console.log("hassan");
});
// Question 3: Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.
function h3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        }, 3000);
    })
        .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}
h3();
//Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.
function h4() {
    return __awaiter(this, void 0, void 0, function* () {
        let prom1 = new Promise((resolve) => {
            setTimeout(() => {
                console.log("hassan");
                resolve(" Succesfully Promise 1 resolve");
            }, 5000);
        });
        let prom2 = new Promise((resolve) => {
            setTimeout(() => {
                console.log("Shurem");
                resolve(" Succesfully Promise 2 resolve");
            }, 7000);
        });
        let z1 = yield prom1;
        let z2 = yield prom2;
        return [z1, z2];
    });
}
h4().then((res) => {
    console.log(res);
});
//Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.
function h5() {
    return __awaiter(this, void 0, void 0, function* () {
        let prom3 = new Promise((resolve, reject) => {
            resolve("Hassan");
        });
        let z3 = yield prom3
            .then((res) => {
            console.log(res);
        })
            .catch((err) => {
            console.log(err);
        });
    });
}
h5();
//Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.
function h6() {
    return __awaiter(this, void 0, void 0, function* () {
        let prom4 = new Promise((resolve, reject) => {
            reject("rejected");
        });
        let z3 = yield prom4
            .then((res) => {
            console.log(res);
        })
            .catch((err) => {
            console.log(err);
        });
    });
}
h6();
// Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.
function h7(j1) {
    let prom5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(j1 ** 2);
        }, 1000);
    });
    return prom5;
}
h7(5).then((res) => {
    console.log(res);
});
//Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.
function m1(arrayofPromises) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = [];
        for (let i = 0; i < arrayofPromises.length; i++) {
            let promise12 = arrayofPromises[i];
            const result = yield promise12;
            res.push(result);
        }
        return res;
    });
}
let myPromise1 = Promise.resolve("resolves 1");
let myPromise2 = Promise.resolve("resolves 2");
let myPromise3 = Promise.resolve("resolves 3");
let myPromise4 = Promise.resolve("resolves 4");
let logPromise = m1([
    myPromise1,
    myPromise2,
    myPromise3,
    myPromise4,
]).then((res) => console.log(res));
//Question 9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.
function m3() {
    console.log("Hello world");
}
function m4() {
    m3();
    setTimeout(m4, 2000);
}
m4();
//Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2. 
function m5(prom) {
    return __awaiter(this, void 0, void 0, function* () {
        let ans = yield prom;
        return ans * 2;
    });
}
let newprom = new Promise((resolve) => {
    setTimeout(() => {
        resolve(9);
    });
});
m5(newprom).then((result) => {
    console.log(result);
});
