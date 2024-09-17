// example of functions


Students = ["Barry", "John", "Alice", "Katy", "Joanna"];


function printArray() {
// function to print the contents of an array

    console.log("------ Students Array ------------------");
    for (student in Students) {
        console.log(student, Students[student])
    }

}

function sortArray() {
    Students.sort();
}



function addStudent() {

    let newStudent = window.prompt("Enter new name");

    // add the new student if name is not blank
    if (newStudent != "") {
        Students.push(newStudent);}
}


// -----------  MAIN CODE START HERE -------------------

// printArray();

//sort the array first
//sortArray();
//printArray();

// Students.push("David");
//  printArray();

//sort the array first
// sortArray()
// printArray();


// Students.pop()      // remove last person
// printArray();


