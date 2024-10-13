import HashMap from "./HashMap.js"
import HashSet from "./HashSet.js"

const content = document.getElementById("content")
const test = new HashMap()
const testSet = new HashSet()
var txt = ""
content.innerHTML = ""

console.log(`test.set('apple', 'red')`)
test.set('apple', 'red')
content.innerHTML += "test.set('apple', 'red')"

console.log(`test.set('banana', 'yellow')`)
test.set('banana', 'yellow')
content.innerHTML += "<br>test.set('banana', 'yellow')"

console.log(`test.set('carrot', 'orange')`)
test.set('carrot', 'orange')
content.innerHTML += "<br>test.set('carrot', 'orange')"

console.log(`test.set('dog', 'brown')`)
test.set('dog', 'brown')
content.innerHTML += "<br>test.set('dog', 'brown')"

console.log(`test.set('elephant', 'gray')`)
test.set('elephant', 'gray')
content.innerHTML += "<br>test.set('elephant', 'gray')"

console.log(`test.set('frog', 'green')`)
test.set('frog', 'green')
content.innerHTML += "<br>test.set('frog', 'green')"

console.log(`test.set('grape', 'purple')`)
test.set('grape', 'purple')
content.innerHTML += "<br>test.set('grape', 'purple')"

console.log(`test.set('hat', 'black')`)
test.set('hat', 'black')
content.innerHTML += "<br>test.set('hat', 'black')"

console.log(`test.set('ice cream', 'white')`)
test.set('ice cream', 'white')
content.innerHTML += "<br>test.set('ice cream', 'white')"

console.log(`test.set('jacket', 'blue')`)
test.set('jacket', 'blue')
content.innerHTML += "<br>test.set('jacket', 'blue')"

console.log(`test.set('kite', 'pink')`)
test.set('kite', 'pink')
content.innerHTML += "<br>test.set('kite', 'pink')"

console.log(`test.set('lion', 'golden')`)
test.set('lion', 'golden')
content.innerHTML += "<br>test.set('lion', 'golden')"

console.log(test.entries())
test.entries().forEach((e) => {
  txt += `[${e}] `
});
content.innerHTML += `<p>console.log(test.entries())<br>${txt}</p>`
txt = ""

console.log("\nprint table")
content.innerHTML += `print table<br>`
test.printTable().forEach((e, i) => {
  txt += `${e}<br>`
});
console.log(`${test.printTable()}`)
content.innerHTML += txt
txt = ""

console.log(`\nconsole.log(test.get("kite"))`)
console.log(test.get("kite"))
content.innerHTML += `<p>test.get("kite")<br>${test.get("kite")}</p>`

console.log(`\nconsole.log(test.has("kite"))`)
console.log(test.has("kite"))
content.innerHTML += `<p>test.has("kite")<br>${test.has("kite")}</p>`

console.log(`\nconsole.log(test.length())`)
console.log(test.length())
content.innerHTML += `<p>test.length()<br>${test.length()}</p>`

console.log(`\nconsole.log(test.keys())`)
console.log(test.keys())
test.keys().forEach((e) => {
  txt += `< ${e} > `
});
content.innerHTML += `<p>test.keys()<br>${txt}</p>`
txt = ""

console.log(`\nconsole.log(test.values())`)
console.log(test.values())
test.values().forEach((e) => {
  txt += `( ${e} ) `
});
content.innerHTML += `<p>test.values()<br>${txt}</p>`
txt = ""

console.log(`\nconsole.log(test.entries())`)
console.log(test.entries())
test.entries().forEach((e) => {
  txt += `[ ${e} ] `
});
content.innerHTML += `<p>test.entries()<br>${txt}</p>`
txt = ""

console.log(`\ntest.set('moon', 'silver')`)
test.set('moon', 'silver')
content.innerHTML += `test.set('moon', 'silver')`

console.log(`\nconsole.log(test.entries())`)
console.log(test.entries())
test.entries().forEach((e) => {
  txt += `[ ${e} ] `
});
content.innerHTML += `<p>test.entries()<br>${txt}</p>`
txt = ""

console.log("\nprint table")
content.innerHTML += `print table<br>`
test.printTable().forEach((e, i) => {
  txt += `${e}<br>`
});
console.log(`${test.printTable()}`)
content.innerHTML += txt
txt = ""

console.log(`\ntest.remove("dog")`)
content.innerHTML += `<p>test.remove("dog")</p>`
test.remove("dog")

console.log("print table")
content.innerHTML += `print table<br>`
test.printTable().forEach((e, i) => {
  txt += `${e}<br>`
});
console.log(`${test.printTable()}`)
content.innerHTML += txt
txt = ""

console.log(`\ntest.clear()`)
content.innerHTML += `<p>test.clear()</p>`
test.clear()

console.log(`\ntest.entries()`)
console.log(test.entries())
content.innerHTML += `<p>test.entries()<br>${test.entries()}</p>`

console.log("======= TEST HashSet =======")
content.innerHTML += `<p>======= TEST HashSet =======</p>`

console.log(`testSet.set("ironman")`)
testSet.set("ironman")
console.log(`testSet.set("she-hulk")`)
testSet.set('she-hulk')
console.log(`testSet.set("wolverine")`)
testSet.set('wolverine')
console.log(`testSet.set("cyclops")`)
testSet.set('cyclops')
console.log(`testSet.set("magik")`)
testSet.set('magik')
console.log(`testSet.set("wolfsbane")`)
testSet.set('wolfsbane')
console.log(`testSet.set("spiderman")`)
testSet.set('spiderman')
console.log(`testSet.set("juggernaut")`)
testSet.set('juggernaut')
console.log(`testSet.set("abomination")`)
testSet.set('abomination')
console.log(`testSet.set("deadpool")`)
testSet.set('deadpool')
console.log(`testSet.set("cable")`)
testSet.set('cable')
console.log(`testSet.set("mystique")`)
testSet.set('mystique')

console.log("print keys")
console.log(testSet.keys())
console.log("print table")
content.innerHTML += `print table<br>`
testSet.printTable().forEach((e, i) => {
  txt += `${e}<br>`
});
console.log(testSet.printTable())
content.innerHTML += txt
txt = ""

console.log(`testSet.set("sabretooth")`)
testSet.set('sabretooth')
console.log(`testSet.set("storm")`)
testSet.set('storm')
console.log(`testSet.set("quicksilver")`)
testSet.set('quicksilver')
console.log(`testSet.set("iceman")`)
testSet.set('iceman')
console.log(`testSet.set("rocket")`)
testSet.set('rocket')
console.log(`testSet.set("starlord")`)
testSet.set('starlord')
console.log(`testSet.set("thanos")`)
testSet.set('thanos')
console.log(`testSet.set("black panther")`)
testSet.set('black panther')
console.log(`testSet.set("blackwidow")`)
testSet.set('blackwidow')
console.log(`testSet.set("captain america")`)
testSet.set('captain america')
console.log(`testSet.set("falcon")`)
testSet.set('falcon')
console.log(`testSet.set("gambit")`)
testSet.set('gambit')

console.log("print keys")
console.log(testSet.keys())
console.log("print table")
content.innerHTML += `<br>print table<br>`
testSet.printTable().forEach((e, i) => {
  txt += `${e}<br>`
});
console.log(testSet.printTable())
content.innerHTML += txt
txt = ""

console.log(`testSet.set("celestial")`)
testSet.set('celestial')
console.log(`testSet.set("eternity")`)
testSet.set('eternity')
console.log(`testSet.set("infinity")`)
testSet.set('infinity')

console.log("print keys")
console.log(testSet.keys())
console.log("print table")
content.innerHTML += `<br>print table<br>`
testSet.printTable().forEach((e, i) => {
  txt += `${e}<br>`
});
console.log(testSet.printTable())
content.innerHTML += txt
txt = ""