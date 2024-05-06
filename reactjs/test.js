// function a(value) {
//     return new Promise((resolve, reject) => {
//         console.log(value);
//         resolve(value + 10);
//     })
// }
// function b(value) {
//     return new Promise((resolve, reject) => {
//         console.log(value);
//         resolve(value + 10);
//     })
// }
// function c(value) {
//     return new Promise((resolve, reject) => {
//         console.log(value);
//         resolve(value + 10);
//     })
// }


// async function main() {
//     try {
//         let result = await a(10);
//         result = await b(result);
//         result = await c(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// a(10)
//     .then((result) => {return b(result)})
//     .then((result) => {return c(result)})
//     .then((result)=> console.log(result));

// let value = main();
// console.log(value);

// console.log(typeof null);

while (true) {
    console.log('Execute');
}