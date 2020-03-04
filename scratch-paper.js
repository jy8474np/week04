let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
];

// DONE print Gary Oldman's cat's name

// Select "cat" from object 1 in the array to display Gary Oldman's cat's name
console.log(cats_and_owners [1].cat)
// DONE Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners[4] = {name: "Taylor Swift", cat: "Meredith"}
console.log(cats_and_owners)

cats_and_owners.forEach(function (element) {
console.log(`${element.name}'s cat is ${element.cat}`)
})