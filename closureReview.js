var callFriend = function () {
  var friend = 'Jake';
  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here
var jake = callFriend();
jake('435-215-9248');


/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.
*/

var consoleLog = function () {
    console.log("hello");
};

var foo = function (cb) {
    var runValue = true;
    return function () {
        if(runValue) {
            cb();
            runValue = false;
        }
    }
};

var bar = foo(consoleLog);

bar();
bar();


/*
Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/

var consoleLog = function () {
    console.log("hello");
};

var foo = function (cb, N) {
    var count = 1;
    return function () {
        if(count <= N) {
            cb();
            count++;
        }
    }
};

var bar = foo(consoleLog, 5);

bar(); //console log: hello
bar(); //console log: hello
bar(); //console log: hello
bar(); //console log: hello
bar(); //console log: hello
bar(); //undefined


