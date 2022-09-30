/*  The challenge is to include a multi-line comment (like this one), as well as a single line comment (which you will see below).
    It is also to log my name and favorite food to the console automatically upon page load.
    I'm going to attempt to make it a button response. We'll see how it goes. */

// Here's the basic, automatic function, to be commented out if I'm successful in my button responses:
/* console.log('Big Sean')
    console.log('Cheese Ravioli with Pesto') */

// Here's where I'll attempt the more fun coding:
// var fullName = document.getElementById('fullname');
const FULLNAME = "Big Sean";
const FAVFOOD = "Cheese Ravioli with Pesto";
const YEAR = 1988;
const SUPERWORD = "Supercalifragilisticexpialidocious";
let superLength = SUPERWORD.length;
let number = 42;

const HEADER = `
    <h1>Hello, my name is ${FULLNAME}</h1>
`;

const SECTION = `
    <section>
        <p>number is ${number}
    </section
`;
const FOOTER = `
    <footer>
        <p>&copy; ${YEAR}</p>
    </footer>
`;

fullname.onclick = function() {
    console.log(FULLNAME);
}

favfood.onclick = function() {
    console.log(FAVFOOD);
}

superca.onclick = function() {
    console.log(superLength);
}

day2.onclick = function() {
    document.body.innerHTML = HEADER + SECTION + FOOTER;
}