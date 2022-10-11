// function printName(person: { first: string; last: string }): string {
// 	return `${person.first} ${person.last}`;
// }

// printName({ first: "Billy", last: "Bob" });

type Point = {
	x: number;
	y: number;
};

type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: { producer: string; writer: string };
};

let coordinate: Point = { x: 3, y: 21 };

function randomCoordinate(): Point {
	return { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
}

function doublePoint(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}

function calculatePayout(song: Song): number {
	return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
	console.log(`${song.title} - ${song.artist}`);
}

const anSong = {
	title: "We surrendered",
	artist: "Le Franche",
	numStreams: 234523462,
	credits: {
		producer: "eschar",
		writer: "go-home",
	},
};

const earnings = calculatePayout(anSong);
console.log(earnings);
printSong(anSong);

type OptionalPoint = {
	x: number;
	y: number;
	z?: number;
};

const newPoint: OptionalPoint = { x: 2, y: 3 };

const newerPoint: OptionalPoint = { x: 2, y: 3, z: 10 };

type User = {
	readonly id: number;
	username: string;
};

const user: User = {
	id: 23,
	username: "Le Franche",
};

type Circle = {
	radius: number;
};

type Colors = {
	color: string;
};

type ColoredCircle = Circle & Colors;

const happyFace: ColoredCircle = {
	radius: 4,
	color: "yellow",
};

type Cat = {
	numLives: number;
};

type Dog = {
	breed: string;
};

type CatDog = Cat &
	Dog & {
		age: number;
	};

const YoungBreezy: CatDog = {
	numLives: 3,
	breed: "Yorkie Terrier",
	age: 10,
};
