/* -- Data Section -----------------------------------------------*/

let multiplier = 4.234;
let starting_value = 10;
let stopping_value = 1;
let steps = -1;

/* -- Logic section -----------------------------------------------*/
for (
	let count = starting_value; // count = 10
	count >= stopping_value; // 10 <= 1 ?
	count = count + steps // count = 10 - 1
) {
	console.log(count);
	console.log(starting_value);
	document.write("<br>", count, " X ", multiplier, " = ", count * multiplier);
}
