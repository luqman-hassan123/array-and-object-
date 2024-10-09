
// // make an array of number which contain an other array an dthen destructuring it 

// let number =[1, 2, 3, 4, 5, 6, 7, 8 ,[100, 1200 ]]

// let [first, second, third, fourth, , , , , [ninth]] = number;

// console.log(first, fourth, ninth);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //*                         ARRAY


// ************************************************************************************************************
// // create object then Destructuring it 

// let person ={
//     name: 'Luqman',
//     no: 11,
//     degree: 'BS',
// // nested object
//     address : {    
//         street: 1111,
//         house: 1
//     }
// }

// let {name, no ,address: {street}} = person;

// console.log(name, no, street)




// **************************************************************************************************************
            //                OBJECT
//***************************************************************************************************************





// create an object subject  arrey in it and also subject of address in it
// then create a function that accept  student as parameter and update subject array
// update the city of address and  
// logs the updated student

// let student={
//     name: 'Luqman',
//     age:23,
//     subject:['english', 'math'],
//     address:{
//         city: 'isb',
//         street: 1,
//         zipcode: 44466
//     }
// }


// //  destructuring object
// let {name, age, subject:[english], address:{street, city}} = student;


// // console.log(name, age , english, street)

// // function that update values
// function updatestudent(studentob){
    
//     studentob.name = 'salar'

//     studentob.subject.push('urdu')

//     studentob.address.city = 'Peshawer';

//     console.log(studentob)


    
// }
// // call function
// updatestudent(student)

// console.log(name, age , english, city)

// console.log("________________________");
// console.log(student.address.city)

// //  this wil print updates value which is salar
// console.log(student .name)



// ***********************************************************************************************************************



//*************************************************************************************

// ARRAY OF OBJECT

// *************************************************************************************



// create an array of books which contain object that contain properties of book
let books = [
    {
        title: "The Histroy of the Wolrd",
        author: "franklen",
        year: 1951,

    },
     {
        title: "The Thousand Night and one ",
        auther: "abc",
        year: 1895,
     },

     {
        title: "The Witcher",
        auther: "RHOl Dhall",
        year: 1899,
     }


]

// function that get data form books array 
function  getbooks(books) {
     return books
    //  .filter(books => books.year <1899)
     .map(books => books.title)
}

// call the updatebooks and save it in a variable 
let filt = getbooks(books)


// print only title 
// filt.forEach(title => console.log(title))



// this update specific title
function updatebooks(books){

    books.forEach(books => {
        if (books.title === "The Witcher"){
            books.title = "The witcher season 2"
        }
    });

}
 updatebooks(books)
// console.log(books)


// console update title
books.forEach(books => {
    console.log(books.title)
})


//********************************************************************************************************* */

