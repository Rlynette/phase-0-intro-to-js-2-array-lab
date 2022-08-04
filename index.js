// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name){

    var cat2 = cats.slice()

    cat2.push(name)

    return cat2

}
function prependCat(name){
    var cat2 = cats.slice()

    cat2.unshift(name)

    return cat2
}
function removeLastCat(name){
    var cat2 = cats.slice()

    cat2.pop()
    return cat2
}
function removeFirstCat(name){
    var cat2 = cats.slice()

    cat2.shift()

    return cat2
}