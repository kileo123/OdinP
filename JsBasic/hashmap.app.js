import HashMap from "./HashMap.js"
import HashSet from "./HashSet.js"

const test = new HashMap()
const testSet = new HashSet()

console.log(`test.set('apple', 'red')`)
test.set('apple', 'red')
console.log(test.entries())

console.log(`test.set('banana', 'yellow')`)
test.set('banana', 'yellow')
console.log(test.entries())

console.log(`test.set('carrot', 'orange')`)
test.set('carrot', 'orange')
console.log(test.entries())

console.log(`test.set('dog', 'brown')`)
test.set('dog', 'brown')
console.log(test.entries())

console.log(`test.set('elephant', 'gray')`)
test.set('elephant', 'gray')
console.log(test.entries())

console.log(`test.set('frog', 'green')`)
test.set('frog', 'green')
console.log(test.entries())

console.log(`test.set('grape', 'purple')`)
test.set('grape', 'purple')
console.log(test.entries())

console.log(`test.set('hat', 'black')`)
test.set('hat', 'black')
console.log(test.entries())

console.log(`test.set('ice cream', 'white')`)
test.set('ice cream', 'white')
console.log(test.entries())

console.log(`test.set('jacket', 'blue')`)
test.set('jacket', 'blue')
console.log(test.entries())

console.log(`test.set('kite', 'pink')`)
test.set('kite', 'pink')
console.log(test.entries())

console.log(`test.set('lion', 'golden')`)
test.set('lion', 'golden')
console.log(test.entries())

console.log(`\nconsole.log(test.entries())`)
console.log(test.entries())

console.log(`\nconsole.log(test.length())`)
console.log(test.length())

console.log(`\nconsole.log(test.keys())`)
console.log(test.keys())

console.log("print table")
console.log(test.printTable())

console.log("---- has ----")
console.log(test.has("kite"))
console.log("---- get ----")
console.log(test.get("kite"))

console.log(`\ntest.set('moon', 'silver')`)
test.set('moon', 'silver')
console.log(test.entries())
console.log(test.keys())

console.log("print table")
console.log(test.printTable())

console.log("Again more")
test.set('hawkeye', 'Clint Barton')
console.log(test.entries())
console.log(test.keys())

console.log("Again more 2")
test.set('wonderwoman', 'Diana Prince')
console.log(test.entries())
console.log(test.keys())

console.log("Again more 3")
test.set('hulk', 'Bruce Banner')
console.log(test.entries())
console.log(test.keys())

console.log("=================================")
console.log("Again more 4")
test.set('blackwidow', 'Natasha Romanoff')
console.log(test.get("blackwidow"))
console.log(test.keys())
console.log(test.entries())

console.log("Again more 5")
test.set('blackwidow', 'Yelena Belova')
console.log(test.get("blackwidow"))
console.log(test.entries())
console.log("=================================")
console.log(test.length())
console.log(test.keys())

console.log("Again more 6")
test.set('superman', 'Clark Kent')
console.log("Again more 7")
test.set('batman', 'Bruce Wayne')
console.log(test.length())
console.log(test.entries())
console.log(test.keys())

console.log("remove")
console.log(test.remove("batman"))
console.log(test.entries())
console.log(test.keys())

console.log("print table")
console.log(test.printTable())

console.log("Again more 8")
test.set('ironman', 'Tony Stark')
console.log("Again more 9")
test.set('she-hulk', 'Jennifer Walters')
console.log("Again more 10")
test.set('wolverine', 'Logan')
console.log("Again more 11")
test.set('cyclops', 'Scott Summers')
console.log("Again more 12")
test.set('magik', 'Ilyana Rasputin')
console.log("Again more 13")
test.set('wolfsbane', 'Rahne Sinclair')

console.log("print table")
console.log(test.printTable())

console.log("Again more 14")
test.set('spiderman', 'Peter Parker')
// console.log("Again more 15")
// test.set('juggernaut', 'Cain Marko')
// console.log("Again more 16")
// test.set('abomination', 'Emil Blonsky')
// console.log("Again more 17")
// test.set('deadpool', 'Wade Wilson')
// console.log("Again more 18")
// test.set('cable', 'Nathan Summers')
// console.log("Again more 19")
// test.set('mystique', 'Raven Darkholme')

console.log("print table")
test.printTable()

console.log("======= TEST HashSet =======")
testSet.set("ironman")
testSet.set('she-hulk')
testSet.set('wolverine')
testSet.set('cyclops')
testSet.set('magik')
testSet.set('wolfsbane')
testSet.set('spiderman')
testSet.set('juggernaut')
testSet.set('abomination')
testSet.set('deadpool')
testSet.set('cable')
testSet.set('mystique')

console.log("print table")
testSet.printTable()
console.log(testSet.keys())

console.log("Again more")
testSet.set('sabretooth')
testSet.set('storm')
testSet.set('quicksilver')
testSet.set('iceman')
testSet.set('rocket')
testSet.set('starlord')
testSet.set('thanos')
testSet.set('black panther')
testSet.set('blackwidow')
testSet.set('captain america')
testSet.set('falcon')
testSet.set('gambit')

console.log("print table")
testSet.printTable()
console.log(testSet.keys())

testSet.set('celestial')
testSet.set('eternity')
testSet.set('infinity')

console.log("print table")
testSet.printTable()
console.log(testSet.keys())
