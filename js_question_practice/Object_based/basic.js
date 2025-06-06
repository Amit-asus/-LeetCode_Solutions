const user = {
  name: "Amit",
  age: 25,
  location: "Bangalore",
};


//Task: Update the age to 26, and add a new property isActive: true.
user.age = 26  ;
// console.log(user) ;

// Q: Loop over this object and print keys and values.
for(let key in  user)
{
    console.log(key  , ': ' , user[key])
}

const subjects = {
  Math: 90,
  Chemistry: 85,
};

// Q: Check whether the key "Physics" exists in this object:
if (subjects.Chemistry) {
    console.log('present')
} else {
  console.log("no present");
}

// Q: Group the array of objects by department:
const users = [
  { name: "Amit", department: "IT" },
  { name: "Ravi", department: "HR" },
  { name: "Anita", department: "IT" },
];


const result  = users.reduce((acc,el)=> { 
    if (acc[el.department]) {
      acc[el.department].push(el);
    } else {
      acc[el.department] = [];
      acc[el.department].push(el);
    }
  return {...acc }
} , {})
console.log(result) ;