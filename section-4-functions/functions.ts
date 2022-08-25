const square = (num: number) => num * num;

square(4);

const greet = (person: string = "stranger") => {
	return `Hi there, ${person}!`;
};

greet();

const addNums = (x: number, y: number): number => {
	return x + y;
};

const colors = ["red", "green", "blue"];

colors.map((color) => {
	return color.toUpperCase();
});

const logTwice = (msg: string): void => {
	console.log(msg);
	console.log(msg);
};

const makeError = (msg: string): never => {
	throw new Error(msg);
};
