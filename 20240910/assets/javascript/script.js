

/* data types 

integers - whole numbers
real        - decimals
floating    - expressed as a power of 10 ( e.g. 10.34556 * 10 cubed)
strings     - alphabetic & numeric ==> alphanumeric


Data Structures
----------------
    arrays within arrays

*/

/* list starts counting from 0 */
// studnets = [ [name, age,[previous score array], [current scores array ]]]

let students = [ 
    
    ["John", 23, [34,23,43,34, 100], [34,45,45,45,23]],
    ["Barry", 45, [54, 23, 23]],  
    ["Sheldon", 55,[45,45,23,32,45,56,67,78,78]], 
    ["Sherry",52, [25,78,65,67,34,56]], 
    [ "Mary", 17, [56,67,45,67,78,]]
]

//   index       [0]            [1]               [2]
//   index      [0][1]          [0]     [1]       [0]       [1]             [0][1]              [0][1]




//   index       [0]            [1]               [2]
//   index      [0][1]          [0]     [1]       [0]       [1]             [0][1]              [0][1]


document.write("<hr>");
// common and better way of processing arrays -- NB using "IN"
// student takes the INDEX number of the element from the array
for (let element in students ){
    document.write("<br>", students[element]);
}


document.write("<hr>");
// In gaming, you might think of a gameboard as an array of arrays, i.e matrix. 
// 1 represents a wall
// 0 represents a corridor
let maze = [ 
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,0,1,0,0,0,1,0,1], 
    [1,0,1,0,0,0,1,0,0,1,0,1], 
    [1,0,1,0,0,0,1,0,0,0,0,1], 
    [1,0,0,0,0,0,0,0,0,0,1,1], 
    [1,0,1,0,1,0,1,0,0,0,0,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1],
]


 for (let row in maze){
    document.write("<br>");     // start a new row
     document.write(maze[row])

        
 }


