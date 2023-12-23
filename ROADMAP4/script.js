//1.For the given JSON iterateover all loops (for, for in, for off, forEach)

var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}


var person = {
    fname: "sing",
    lname: "raj",
    age: 26
 }; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }


 const cars = ["BMW", "Volvo", "Mini"];

 let text = "";
 for (let x of cars) {
   text += x;
 }
   console.log(text);


 var names = ["apple", "orange", "mango", "fruits", "graps"];
 names.forEach(function1);
 function function1(currentValue, index) {
    console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
 }


 let myResume={
    "basics": {
      "name": "k singaraj",
      "email": "singaraja318@gmail.com",
      "phone": 9884330029,
      "degree": "bba",
      "location": {
        "address": "3/421 thejas garden",
        "postalCode": 641107,
        "city": "coimbatore",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
         
          "github":"https://github.com/singaraja318"
        }
      ]
    },
    "work": [
      {
        "company": "mold well india pvt ltd",
        "position": "supervisor",
        "startDate": "2022-05-10",
        "endDate": "2023-12-23",
        "summary": "i am in production supervisor manage production",
      },
    ],
    "education": [
      {
        "institution": "sms collage ",
        "department": "bba",
        "studyType": "part time",
        "batch start year": 2007,
        "batch end year": 2009,
        "gpa": 7.5,
      }
    ],
    
    "languages": [
      {
        "language": "Tamil,Enlish,hindi",
      }
    ],
    "interests": [
      {
        "name": "softwere,youtuber,",
      }
    ]
  }
  console.log(myResume);