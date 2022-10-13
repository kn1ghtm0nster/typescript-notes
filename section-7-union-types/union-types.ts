const guessAge = (age: number | string): string => {
	return `Your age is ${age}`;
};

type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coordinates: Point | Loc = { x: 1, y: 32 }; // valid!

coordinates = { lat: 40.7128, long: 74.006 }; // ALSO VALID!

function calculateTax(price: number | string, tax: number) {
	if (typeof price === "string") {
		price.replace("$", "");
	} else {
		return price * tax;
	}
}

const giveAnswer = (answer: "yes" | "no" | "maybe"): string => {
	return `The answer is ${answer}.`;
};
