// console.log("hello");

// let userName = "Ivan";
// let userAge = 18;
// let isMan = true;
// let drinkVodka = true;
// console.log(userName, userAge);

// userName = "Alisa";
// isMan = false;

// console.log(userName, userAge);

// console.log(2024 - userAge);

// console.log(9 * 3);
// console.log(9 - 3);
// console.log(9 / 3);
// console.log(10 % 3);
// console.log(9 ** 3);

// if (userAge >= 30 && drinkVodka == true && isMan == true) {
// 	console.log(userName, "- is Skuff");
// } else if (userAge <= 23 && isMan == false) {
// 	console.log(userName, "- is Altgirl");
// } else {
// 	console.log("IDK");
// }

// let userName = "Platon";
// let userAge = 20;
// let isMan = true;
// let drinkVodka = true;
// let isAlive = true;

// for (let i = 1; i <= 10; i++) {
// 	console.log("Пьем пиво, банка номер", i);
// 	for (let j = 1; j <= 2; j++) {
// 		console.log("Закунились рыбкой", j);
// 	}
// }
// let counter = 0;
// while (isAlive == true) {
// 	console.log("Пьем пиво, банка номер");
// 	counter++;
// 	if (counter >= 1000) {
// 		break;
// 	}
// }
// function drinkBeer(name) {
// 	console.log("взять банку", name);
// 	console.log("открыть банку");
// 	console.log("выпить банку банку");
// 	console.log("отрыгнуть");
// }
// let userBeer = prompt("Какоке пиво будешь");
// drinkBeer(userBeer);
// console.log("ivan ", "hello", 2024 - 30);

// function F(s, e) {
// 	let r = "";

// 	for (let i = s; i <= e; i++) {
// 		r += i;
// 	}
//     while(s <= e){
//         r += s;
//         s++;
//     }
// 	return r;
// }

// console.log(F(6, 11));

let arr = ["Ivan", "Alex", "Platon"];

let users = [
	{
		name: "Platon",
		age: 12,
		isMan: true,
		phoneNumber: 38274092634,
	},
	{
		name: "Dimyan",
		age: 22,
		isMan: true,
		phoneNumber: 654653532453,
	},
	{
		name: "Din",
		age: 34,
		isMan: true,
		phoneNumber: 7856435646,
	},
];

console.log(users);

for (let i = 0; i < users.length; i++) {
	console.log(users[i].name);
}
console.log("-----------------------------");

for (let i in users) {
	if (i == 0) {
		continue;
	}
	console.log(users[i].name);
}
console.log("-----------------------------");

for (let user of users) {
	console.log(user.name);
}
console.log("-----------------------------");
users.forEach((user) => {
	console.log(user.name);
});

let contB = document.querySelector(".cont");
let boxR = document.querySelector(".box");
let btnL = document.querySelector(".btn");
let btnL2 = document.querySelector(".d");

// contB.addEventListener("mousemove", function (e) {
// 	// e.stopPropagation();
// 	console.log("cont");
// });

// boxR.addEventListener("mousemove", function (e) {
// 	// e.stopPropagation();
// 	console.log("box");
// });

btnL.addEventListener("mousemove", function (e) {
	// e.stopImmediatePropagation();
	console.log("btn");
});
btnL2.addEventListener("mousemove", function (e) {
	// e.stopImmediatePropagation();
	console.log("btn2");
});
