// 1. What does the following print and why? Add your answer as a multi-line comment

if (true) {
    var name = 'Joel'; const likes = 'Coding';
}
console.log(name);
console.log(likes);

/*
Joel + ReferenceError: likes is not defined
Reasons:
- name is hoisted because it is declared with var so it is visible outside coding block of if statement
- likes is not visible (as declared by const)
*/
