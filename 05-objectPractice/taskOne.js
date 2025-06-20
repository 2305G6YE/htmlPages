// Creating an Object

let user = {
    name: "John",
    surname: "Smith",
};
console.log(user);

user.name = "Pete";
console.log(user.name);

delete user.name;
console.log (user);


// Check for True/False in Object

let schedule = {};
function isEmpty(obj) {
   for (let key in obj) {
    return false;
    };
return true;
}
console.log(isEmpty(schedule));

schedule["8.30"] = "get up";
console.log(isEmpty(schedule));


// Summing object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);


// Multiplying all object property values

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        } 
    }
}

multiplyNumeric(menu);
console.log(menu);