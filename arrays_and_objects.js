/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

// DONE Extract the latitude value, and log it to the console.
// Read data from position object within location object
console.log(iss_location.iss_position.latitude)

// DONE Extract the longitude value, and log it to the console.
// Read data from position object within location object
console.log(iss_location.iss_position.longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194,
    // Add Swiss values
    "CHF": 1.1787
};

// DONE write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// DONE if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)

// Create a function multiplying the desired number of Euros by the exchange rate for a given
// country within the "rates" object

function convert(euro, country) {
    let conversion = euro * country
    return conversion
}
console.log(convert(100, rates.AUD).toFixed(2))

// DONE-ISH write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

// Got close thanks to https://stackoverflow.com/questions/11142884/fast-way-to-get-the-min-max-values-among-properties-of-object
// but can't figure out how to display the corresponded currency symbol instead of the highest value
let currency = Object.values(rates)
let max = Math.max(...currency)
console.log( `Highest currency value: ${max}` )

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

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

// Create an object containing Taylor Swift's name and her cat's name and add it to the cats_and_owners array
cats_and_owners[4] = {name: "Taylor Swift", cat: "Meredith"}

// DONE write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

// Create a function to loop the objects within the array using ForEach
cats_and_owners.forEach(function (element) {
    console.log(`${element.name}'s cat is ${element.cat}`)
})


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// DONE print the full name of the Literature Nobel laureate.
// DONE print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// DONE write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// DONE write code to print the total number of prize categories
// DONE-ISH write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
};

// Locate name data from within the Literature category's laureates and combine the first and sur names
console.log(`The 2017 Nobel laureate for Literature was ` + (nobel_prize_winners_2017.prizes[3].laureates[0].firstname)
    + ` ` + (nobel_prize_winners_2017.prizes[3].laureates[0].surname) +`.`)

// Create a function to loop the ids within the physics category using ForEach
nobel_prize_winners_2017.prizes[0].laureates.forEach(function (element) {
    console.log(`${element.id}`)
})

// Create a function to loop all the categories within the prizes array using ForEach
nobel_prize_winners_2017.prizes.forEach(function (element) {
    console.log(`${element.category}`)
})

// For some reason this was very tricky for me. I'm hoping the correct answer is not a coincidence.
// Thanks, Stack Overflow!
// https://stackoverflow.com/questions/2693021/how-to-count-javascript-array-objects
console.log(Object.keys(nobel_prize_winners_2017.prizes).length)

// As close as I got using slides and Google:
// for(const prop in nobel_prize_winners_2017.prizes.laureates) {
//     let count = 0
//     if (nobel_prize_winners_2017.prizes.laureates.hasOwnProperty(prop)) {
//         count++
//         console.log(count)
//     }
// }
