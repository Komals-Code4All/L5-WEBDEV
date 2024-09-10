

/* data types 

integers - whole numbers
real        - decimals
floating    - expressed as a power of 10 ( e.g. 10.34556 * 10 cubed)
strings     - alphabetic & numeric ==> alphanumeric


Data Structures
----------------
    array

    lists

    data dictionary

    sets

    Objects

*/


// let student1 = "John";
// let student2 = "Barry";
// let student3 = "Sheldon";

/* list starts counting from 0 */
let students = [ "John", "Barry", "Sheldon", "Sherry", "Mary", "Fredia", "barney", "Wilma", "Bambam" , "Matt"]
/*   index ==>       0,      1,      2          3       4           5       6           7       8        */



// document.write("<br>", students[0]);
// document.write("<br>", students[1]);
// document.write("<br>", students[2]);
// document.write("<br>", students[3]);




// simple way of processsing arays, usng FOR loop
let listLength = students.length;       // number of elements in array
document.write(listLength);

for (let index = 0; index < listLength ; index++) {
     document.write("<br>", index, students[  index   ]);

}

document.write("<hr>");
// common and better way of processing arrays -- NB using "IN"
// student takes the INDEX number of the element from the array
for (let student in students ){
    document.write("<br>", students[student ]);
}

document.write("<hr>");
// common and better way of processing arrays -- NB using "OF"
// student takes the VALUE of the element from the array
for (let student of students ){
    document.write("<br>", student );
}



