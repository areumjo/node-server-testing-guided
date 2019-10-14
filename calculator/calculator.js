module.exports = {
    add,
    subtract,
    multiply
}

function add(a, b) {
    if (!a||!b) {
        return 0;
    } else {
        return a+b;
    }
};
// function add(a=0, b=0) {
//     return a+b;
// }; this means a, b' default is 0 

function subtract() {

}

function multiply() {

}

// TDD (test-driven-development) : write a test before coding