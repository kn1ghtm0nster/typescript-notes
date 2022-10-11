// function printName(person: { first: string; last: string }): string {
// 	return `${person.first} ${person.last}`;
// }
var coordinate = { x: 3, y: 21 };
function randomCoordinate() {
    return { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var anSong = {
    title: "We surrendered",
    artist: "Le Franche",
    numStreams: 234523462,
    credits: {
        producer: "eschar",
        writer: "go-home"
    }
};
var earnings = calculatePayout(anSong);
console.log(earnings);
printSong(anSong);
