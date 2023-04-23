const obj1 = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 }
// obj1 is gonna contain { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 }

const obj2 = { 
	one: 1, 
	two: 2, 
	three: 3, 
	four: 4, 
	five: 5, 
	six: 6, 
	...{seven: 7} 
}
// obj2 is still gonna contain what obj1 contains
//------------------------------------------------------------------------
/*
Now this is where my hack comes in. Assume you wanna show a part of a javascript object based on some boolean condition. Consider this scenario, you are building an API and u wanna send some JSON to some client. This response contains some database columns that can be null or contain values depending on if the client filled these columns during the creation of the resource. You want to sanitize the payload such that every key in the JSON has a truthy value and not a null or undefined. Here's a quick example for better comprehension
const validJSON = {
	id: 1, 
	name: 'Mazi Nature', 
	age: 29, 
	hobbies: ['Singing', 'Coding', 'Play-Play Gym']
}

const invalidJSON = {
	id: 1,
	name: 'Sergio Pinto',
	age: 19,
	hobbies: null
} 
Invalid JSON is invalid coz of the null value attached to the hobbies key.
What my trick aims to do is to remove the object property completely from the object based on some boolean condition. 
*/
const obj3 = { 
	one: 1, 
	two: 2, 
	three: 3, 
	four: 4, 
	five: 5, 
	six: 6, 
	...(true ? null : {seven: 7}) 
}
// obj3 will contain { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6}
// Observe that the seven key item is scraped out

const obj4 = { 
	one: 1, 
	two: 2, 
	three: 3, 
	four: 4, 
	five: 5, 
	six: 6, 
	...(false ? null : {seven: 7}) 
}
//obj4 = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 }
// Observe that the seven key item is included. This is determined by the ternary operator. This Hack was discovered by ME, MYSELF & I :yum::yum::yum::yum:
