// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

// console.log("10 + 3 = ", 10 + 3);
// console.log("10 - 3 = ", 10 - 3);
// console.log("10 * 3 = ", 10 * 3);
// console.log("10 / 3 = ", 10 / 3);

// console.log("10 ** 3 =", 10 ** 3);
// console.log("10 % 3 = ", 10 % 3);

// console.log("Misha", "Hello");

// let num1 = prompt("Друг введи число");
// num1 += 5;
// console.log(num1);
// alert(num1);
let n1 = 5;
let n2 = 10;
let n3 = 15;
let n4 = 20;
console.log(n1 < n2 && n3 === n4);

let num1 = 54342; // number / integer( int ) -2^53 - 2^53
let bNum = 4534352865n; //bigInt
let userName = "Ivan"; // string (str)
let canSwim = true; // boolean (bool)

let count = null; //null
let x = undefined; //undefined
let zz = Symbol("da"); //Symbol
let obj = Object(); // object

// console.log(typeof obj);
// // let age = prompt();
// let isAbult = false;
// if (isAbult) {
// 	console.log("Доступ разрешен");
// } else {
// 	console.log("Доступ запрещен");
// }

// let cola = false;
// let fanta = false;
// let pepsi = false;

// if (cola) {
// 	console.log("Cola");
// } else if (fanta) {
// 	console.log("Fanta");
// } else if (pepsi) {
// 	console.log("Pepsi");
// } else {
// 	console.log("No");
// }
// let isAwake = true;
// while (true) {
// 	console.log("study, work");
// 	isAwake = confirm("Силы есть?");
// 	if (!isAwake) {
// 		break;
// 	}
// }
// for (let i = 1; i <= 1000; i++) {
// 	console.log(i);
// }

// let arr = ["Ivan", "Alex", "Platon"];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// console.log("----------------------");

// arr.push("Dima");
// for (let i in arr) {
// 	console.log(arr[i]);
// }
// console.log("----------------------");
// arr[3] = "Dima";
// for (let i in arr) {
// arr.splice(arr.indexOf("Ivan"), 1);
// for (let name of arr) {
// 	console.log(name);
// }

// let sZ = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// console.log(sZ[2][0]);
let z = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
	[
		[13, 14, 15],
		[16, [17], 18],
	],
];
console.log(z[2][1][1][0] + 34);

// let friends = ["Ivan", "Alex", "Platon"];
// console.log(friends, friends.length);
// friends.push("Dima");
// console.log(friends, friends.length);
// friends.pop();
// friends.splice(friends.indexOf("Alex"), 1);
// let arr = [154, 54, 356, 34, 55, 67, 87];
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
// 	arr[i] = 0;
// }
// console.log(arr);

// for (let i of arr) {
// 	console.log(i);
// }

// for (let i in arr) {
// 	console.log(i);
// }

// let myStr = "Ivan Platon is a programmer";
// let myStr2 = myStr.split("");
// for (let i = 0; i < myStr2.length; i++) {
// 	if (myStr2[i] != " ") {
// 		myStr2[i] = "a";
// 	} else {
// 		myStr2[i] = "_";
// 	}
// }

// myStr2 = myStr2.join("");
// console.log(myStr2);

// let dS = new Date("2022-01-01");
// let dE = new Date();
// console.log((dE.getTime() - dS.getTime()) / 1000 / 60 / 60 / 24);

let past = new Date("2001-09-12");
let now = new Date();
console.log((now - past) / 1000 / 3600 / 24 / 365);
