// Exercise to satisfy Thinkful's Front End Development course

/* DO NOT spend any time designing this app or making it look pretty. We don’t want you to consider UX at all here, since the point is to build up your programming fundamentals.*/

/*At a minimum, you’ll need an HTML file and a JavaScript file. The HTML file should link to jQuery and to your application JavaScript file. The program should append each number (or its “fizz”/”buzz”/”fizzbuzz” substitution) to the body element of the DOM (On the page).*/

/*The program should print out each number (not 'one' for 1, but 1 for 1), from 1 to 100, replacing numbers divisible by both 3 and 5 with “fizz buzz”, those divisible by 3 with “fizz”, and those divisible by 5 with “buzz”.*/

$( document ).ready(function() {
    var result = "begin";
    $('li:last-child').text(result);

    for (var i = 1; i < 101; i++) {

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
});
