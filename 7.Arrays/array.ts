// Incorrect way to defining array 
const superMan:[]=[]  // []: means the type should always ber empty array but we are sending a string so it will throw an error
// superMan.push("hulk")


//Correct way of defining array
const superHeroes:string[]=[] // here this means it is a array of strings
superHeroes.push("spiderman")
const superPower:number[]=[] // here this means it is a array of number
superPower.push(1)


// Another way of defining array 
// const supperMan1:Array<data-type>=[]
const supperMan2:Array<number>=[]
const supperMan3:Array<string>=[]


// Another way of defining array 
type User={
    name:string
    age:number
}

const allUsers:User[]=[]

allUsers.push({
    name:"charu",
    age:23
})


// Another way of defining array 
const MLModels:number[][]=[     // array inside array
    [255,155,255],
    []
]





export {}