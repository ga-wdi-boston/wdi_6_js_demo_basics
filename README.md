# JavaScript Basics

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a high-level programming language like Ruby, but with a very different syntax and different ways of dealing with objects. It is also the only language understood by web browsers, so JavaScript is crucial in writing web applications that respond immediately to user actions, without having to wait for a server to send back a whole new HTML page.

## Running JavaScript

When developing in Ruby, we'd run code files by typing `ruby some_file.rb`. We *can* do something similar with JavaScript by typing `node some_file.js`. This runs the file through [NodeJS](http://nodejs.org/), a framework that can run JavaScript outside of a web browser. This is useful when developing JavaScript applications that run on a server &ndash; but since we'll mostly be using JavaScript in the browser, we'll rarely use this method.

* **Try it:** Examine the contents of `testrun.js`. Then type `node testrun.js` in your terminal and you should see "It works!"

Browsers run JavaScript when they see a `<script>` tag in a web page that points to the URL of a JavaScript file. The browser will make a separate request to download the file, run it, then proceed with parsing the rest of the page.

There is no "terminal" in the browser, but there is something called the **console** that shows output and errors from JavaScript programs. It also lets us type in and run JavaScript code one line at a time, like Ruby's `pry`.

* **Try it:** Examine the contents of `testrun.html`. Then open this file in your browser. Press `Cmd+Opt+I` (Mac) or `Ctrl+Shift+I` (Linux) to open the console, and you should see "It works!"

*Note:* If you type `node` in your terminal without specifying a filename, it will let you enter and run JavaScript one line at a time just like the browser console.

## Data Types

Like Ruby, in JavaScript everything is an object. Unlike Ruby, in JavaScript there is no such thing as a "class" &ndash; each object stands alone, and can have properties and behaviors unique to it. We can still create something that looks and acts a lot like a class, but we'll get into this in a later lesson.

There are some special objects in JavaScript called "primitives", also known as the standard [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). Try typing the following lines into either your browser console or `node`, and changing the values to see what happens.

```js
// Unlike in Ruby there is no special distinction between numbers with and
// without decimal points. They are all just "numbers".
var currentLevel = 17;
var price = 1499.99;
var fiveMinutes = 60 * 5; // all the basic math operations work
var threeHalves = 3 / 2; // this results in 1.5 -- no weird "integer division"

price = 1299.99; // only the first assignment needs a `var`
price += 100; // this kind of shortcut still works

// Unlike in Ruby there is no difference between single quotes and double
// quotes... since JavaScript has no string interpolation. Strings are also
// "immutable", meaning we can't modify them in-place (no shoveling!)
var greeting = 'Hello there!';
var firstName = "Alex";
var lastName = "Grant";
var myName = firstName + ' ' + lastName; // clunky, but it's the only way

// Like in Ruby, we have the booleans true and false.
// We also have nil, but here it's called "null".
var excited = true;
var testMode = false;
var result = null;

var excitedlyTesting = excited && testMode; // boolean && and || are here
var calm = !excited; // boolean "not" is also here

// Unlike in Ruby, we have an extra nil-like value called "undefined". It's
// what you'll get if you access a variable that's not assigned yet, or call
// a function that doesn't return anything.
var mystery = undefined;
var spooky; // This does the same thing as above! The value is "undefined"
```

We already have some notable syntax differences from Ruby:

* Variable and function names use `lowerCamelCase` rather than `snake_case`. This is a much weaker convention in JavaScript than snake case in Ruby &ndash; although it's the style used by the language itself, many JavaScript developers use snake case anyway.
* Lines of code usually end in a semicolon. We *can* leave these out, but JavaScript will be left to guess where they should be inserted, and sometimes it guesses wrong. The rules for when to use a semicolon are hard to remember, but your JSHint plugin for Sublime Text will steer you right.
* The first time we assign a variable (and *only* the first time), we must prefix the assignment with `var`. This is known as "declaring" the variable. As with semicolons, if you don't do this your program will still work *sometimes*, but not always. We'll get into why this is when we talk about functions.

A common theme in JavaScript is "things you can easily get wrong and have your program usually still work, but sometimes not". Attention to detail is your ally when writing JavaScript.

## Basic Input/Output

Since we won't be interacting with web pages for a little while, we can use `console.log` or `alert` as the JavaScript equivalents of `puts`. There is also a JavaScript equivalent to `gets`, which is `prompt`. Just like in Ruby, these are mostly used for temporary debugging purposes and you'd never see them on a production web site.

```js
console.log('Here I am');

var name = prompt('What is your name?');
alert('Hello there, ' + name);
```

`console.log`, `alert`, and `prompt` are all built-in **functions**, the JavaScript equivalent of Ruby's methods. We'll learn more about them soon, but do note that *the parentheses are required* when calling a function &ndash; even if you don't pass any parameters!

## Control Flow

```js
var holyNumber = prompt('What number did you count to?');
if(holyNumber > 3) {
  alert('Four shalt thou not count. Five is right out.');
} else if(holyNumber < 3) {
  alert('Count neither one nor two, excepting that thou then proceedest to three.');
} else {
  alert('Throw the holy hand grenade!');
}
```

Important differences from Ruby:

* Conditions must be enclosed in parentheses.
* Code blocks are always enclosed in braces. There is no `end` in JavaScript.
* The "else-if" syntax is two separate words, `else if`, rather than `elsif`.
* There is no `unless` in JavaScript. Use the "not" operator (`!`) instead.

### Loose vs. Strict

Notice above that even though `holyNumber` is a string, we can use the `>` and `<` operators to compare it with numbers. This is because most JavaScript [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), **including `==`**, are "loose" &ndash; meaning JavaScript will try to convert both sides of the operator to the same data type before evaluating. This has some counter-intuitive consequences:

```js
// All of these are true
3 == '3'
0 == false
1 == true
2 != true
2 != false
0 == ''
0 == []
'' == []
'wat' == ['wat']
null == undefined
```

Fortunately, JavaScript also has the `===` operator, known as the "strict" equality operator or the "threequals", which does not attempt to convert data types and works much closer to Ruby's notion of equality. ***Always use this operator to check equality!***

There is also a "strict" not-equal operator, `!==`. Unfortunately, there are no strict greater-than or less-than operators, so we kind of have to live with the data type conversion when using those.

```js
// Never use these operators
3 == '3' // true
1 != '1' // false

// Always use these operators
3 === '3' // false
1 !== '1' // true
```

### Less-Used Flow Control

JavaScript also has `while` loops (but no `until` loops).

```js
var input = '';
while(input !== 'stop') {
  input = prompt('Enter "stop" to cut it out');
}
```

Instead of `case`/`when`, JavaScript has `switch`/`case` (just to trip you up).

```js
var year = 'sophomore';
switch(year) {
  case 'freshman':
    console.log('cannon fodder');
    break;
  case 'sophomore':
    console.log('mildly respectable');
    break;
  case 'junior':
    console.log('some influence');
    break;
  case 'senior':
    console.log('phenomenal cosmic power');
    break;
  default:
    console.log('mysterious stranger')
    break;
}
```

Note that `case` blocks are *not* enclosed in braces, and each one also needs a `break` statement at the end &ndash; otherwise code execution will "fall through" to the next block and keep on going! Thankfully `switch` uses the threequals for comparison, but due to its quirks and inflexibility, you don't see it that often in real-world programs.

## Arrays

[JavaScript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) work mostly the same as Ruby arrays.

```js
var colors = ['red', 'green', 'blue'];

var green = colors[1];
var colorsCount = colors.length;
var indexOfBlue = colors.indexOf('blue');

colors.push('purple');
var purple = colors.pop();

colors.sort(); // now they're in alphabetical order
```

Like all objects, arrays have *properties* and *methods*. We can access properties like `.length` directly, but methods like `.sort()` must be called with parentheses, even if we're not passing any arguments.

### Iterating

In Ruby we avoid `for` loops in favor of methods like `each` or `map`, but in JavaScript they are seen frequently for simple iteration.

```js
var colors = ['red', 'green', 'blue'];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i] + ' is one of my favorite colors');
}
```

The three semicolon-separated components of a `for` loop are:

* A statement that will be executed once before the first iteration
* An expression evaluated at the start of each iteration &ndash; if `false`, the loop is terminated
* A statement that will be executed at the start of each iteration

## Hashes?
