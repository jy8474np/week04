console.log('hello world')

let name = 'Michael'
console.log(name)

let bfName = 'Sam'
console.log(bfName)

console.log(`Hello, my name is ${name}. My boyfriend's name is ${bfName}.`)

let letters = name.length
if (letters > 5) {
    console.log(`${name} contains more than five letters!`)
} else {
    `${name} contains five or fewer letters.`
}

let bfLetters = bfName.length
if (bfLetters > 5) {
    console.log(`${bfName} contains more than five letters!`)
} else {
    console.log(`${bfName} contains five or fewer letters.`)
}

let todaysTemp = 27
console.log(todaysTemp)

console.log(`Today's temperature is ${todaysTemp} F.`)

let freezing = name.length
if (todaysTemp > 32) {
    console.log(`${todaysTemp} F is above freezing!`)
} else if (todaysTemp < 32) {
    console.log(`${todaysTemp} F is below freezing.`)
} else {
    console.log(`${todaysTemp} F is freezing.`)
}

function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    }
    else {
        return false
    }
}

console.log(validGPA(-2))
console.log(validGPA(3.4))
console.log(validGPA('pizza'))

function cityState(city , state) {
    let location = `${city}, ${state.toUpperCase()}`
    return location
}

let location = cityState('Minneapolis', 'mn')
console.log(location)

let trees = ['Fir', 'Sequoia', 'Maple']

trees.forEach( function(tree){
    console.log(tree)
})

trees.forEach( function(tree, index){
    console.log(tree, index)
})

trees.push('Pine')
console.log(trees)
