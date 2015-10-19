// Exercise to satisfy Thinkful's Front End Development course

/* DO NOT spend any time designing this app or making it look pretty. We don’t want you to consider UX at all here, since the point is to build up your programming fundamentals.*/

/*At a minimum, you’ll need an HTML file and a JavaScript file. The HTML file should link to jQuery and to your application JavaScript file. The program should append each number (or its “fizz”/”buzz”/”fizzbuzz” substitution) to the body element of the DOM (On the page).*/

/*The program should print out each number (not 'one' for 1, but 1 for 1), from 1 to 100, replacing numbers divisible by both 3 and 5 with “fizz buzz”, those divisible by 3 with “fizz”, and those divisible by 5 with “buzz”.*/

//REFACTORING REQUIREMENTS
//When the page loads, the user should be prompted to supply a number. The
// easiest way to do this would be with the prompt() function, but you should
// also feel free to create a simple text input with text telling the user to
// input a number.

//You’ll need to write one named function that takes an integer as argument,
// and then counts from 1 to the argument value, substituting “fizz”, “buzz”,
// and “fizzbuzz” accordingly.

//You’ll need to convert the value the user supplies from a string to a number.
// Remember that the value that you get from prompt() or the val() on your form
// will by default be a string. To convert this to an integer you can use the +
// operator to convert a string to an integer. For instance, if you had the
// string “22”, you could convert that to a number with +”22”.

//You will need to validate user input to ensure the user is submitting a
// number. You can use the parseInt() function in javascript to convert a
// string into an integer. For example, parseInt('597a') will return 597 where
// parseInt('hello') will return NaN. Read more about parseInt() on MDN.

//Optionally, you can also write code to ensure that the user has not supplied
// a decimal value. For an easy way to do this, check out this answer on Stack
// Overflow.

//DO NOT spend any time thinking about design for this app. Like the first
// version, the goal here is not to create a pretty app, but instead to hone
// your JavaScript skills.

//As usual, use Git to store your changes. When you’ve completed this
// assignment, push it up to GitHub pages, and share a link with your mentor
// and fellow students.



$( document ).ready(function() {
    //supply a number
    userValue = window.prompt("Enter an integer larger than 10");

    fizzbuzz(userValue);

    var result = "begin";
    $('li:last-child').text(result);
});

function fizzbuzz(aString){
//counts from 1 to the argument value, substituting “fizz”, “buzz”,
// and “fizzbuzz” accordingly
    var myInt = parseInt(aString);

    for (var i = 0; i < myInt; i++){
        //is i evenly divisible by 3? result = "fizz"
        if (i % 3 === 0 && i % 5 === 0) {
            result = "FizzBuzz";
            console.log(result);
            $('#list').append("<li>" + result + "</li>");
        } else

        //is i evenly divisible by 5? result = "buzz"
        if (i % 5 === 0) {
            result = "Buzz";
            console.log(result);
            $('#list').append("<li>" + result + "</li>");
        } else

        //is i evenly divisible by 3 && 5?  result = "fizzbuzz"
        if (i % 3 === 0) {
            result = "Fizz";
            console.log(result);
            $('#list').append("<li>" + result + "</li>");
        } else
        //list number
        {
            result = i;
            console.log(result);
            $('#list').append("<li>" + result + "</li>");
        }
    }
}
