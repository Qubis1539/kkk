// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let x2 = x.filter((item) => item % 2 == 0);

// let x3 = x2.map((item) => {
// 	return item ** 2;
// });

// let x4 = x3.reduce((cntr, item) => (cntr += item), 0);

// let c = 0;
// for (let i of x3){
//     c += i
// }
// console.log(x, x2, x3, x4);

function downStairs(x) {
	console.log(x);
	return x > 0 ? downStairs(x - 1) : x;
}

downStairs(4);
