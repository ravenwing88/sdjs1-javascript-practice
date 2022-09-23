/*  The challenge is to include a multi-line comment (like this one), as well as a single line comment (which you will see below).
    It is also to log my name and favorite food to the console automatically upon page load.
    I'm going to attempt to make it a button response. We'll see how it goes. */

// Here's the basic, automatic function, to be commented out if I'm successful in my button responses:
/* console.log('Big Sean')
    console.log('Cheese Ravioli with Pesto') */

// Here's where I'll attempt the more fun coding:
var fullName = document.getElementById('fullname');
var favFood = document.getElementById('favfood');

fullName.onclick = function() {
    console.log('Big Sean');
}

favFood.onclick = function() {
    console.log('Cheese Ravioli with Pesto');
}