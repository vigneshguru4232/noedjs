//Exporting and Consuming Modules

//Module either can be imported or required by the require() function.

//exapmle: Module importation

// suppose importing express module.

const { application } = require("express");
const express = require("express");

//We can also import the file that your are creating.

// suppose importing user module.

const user = require('./path');

//import and export 

// exports can be done by module.exports

// import in recent version of nodejs cannot be done directly we need to add some package and then we can use ES6 syntax.

//Using babel/cli ,babel/core , babel/preset-env we can use ES6 syntax.

//babel used to write the Recent upadate syntax in JS.

//How modules are loaded:

// Module are the block of any node application.
//modules of loaded using require or import using babel.

//Event -Emitters

// In front-end we can handle events like click , submit etc .

//In backend nodejs also has event module.

//EventEmitters used to handle our event in the nodejs.

// declaration of event-emmiters
const EventEmitter = require("events");
const eventemitter = new EventEmitter();


// It has two methods on and emit.

// emit used to tigger the event. 
// on used to add callback function when the event is triggred.


// example:

eventemitter.on('start',()=>{
    console.log("Hello Everone"); //added callback.
})

eventemitter.emit('start'); // event triggred


// Exception handling:

// creating exception:

// throw used to create exception 

// example:

throw new Error('Running out of coffee');

//Handlling exception:
//Try catch
try {

}
catch(err){
throw new Error(err.message);
}

//In promises we can do exception handling in end using catch.

doSometing1()
.then(doSometing2)
.then(doSometing3)
.catch((err)=>{console.log(err)});


//async await error handling:

async function name(){
    try {
        await someOtherFunction()
    } catch (error) {
        console.log(error)
    }
}


//Event loop

//Nodejs is a single threaded .only single process do at a time. if more number of users using waiting time increasing graduvally.

//That is called blocking.

//Non-blocking is doing another process when other process is in waiting.

//Thread pool 
// The blocking task that was not done by the kernal can done by the thread pool then we get the callback.

// thread pool has four thread default.

//There are phases in the Event loop .

//the phase execute callbacks by sedudled by setTimeout and setInterval.










