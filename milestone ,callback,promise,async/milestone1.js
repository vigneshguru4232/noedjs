//Nodejs

//Asynchoronize data means that it goes on it won't wait for thing is done.

//Callbacks

//Callback is called when the task is completed. 

//example in callbacks.js file.

//promises

//Advancement of callbacks .

//It is eventual completion of async process.

//It uses then function to success and catch to catch errors.

//HTTP

//Methods

//GET - retrive data -Read- sorting filter

//POST - getting payload from the body and sends to the server - create 

//PUT - replaces the data from the requested payload - update

//DELETE - remove the specified resource.

//PATCH - Similar like PUT ,modifies the particular resources.

//CONNECT - establishes a tunnel to the server identified by the target resource.

//ACCESS - It used to acceptable request in CORS.

//Status code:


// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// Some imortant codes

// 200 ok -for success .result depends on methods

//ex.GET -resources fetched and transmitted to the body.

//201 created - new resources was created .
//404 - N0 content. cannot find anythig.
//400 -Bad request .server cannot process the request .
//401 - unauthorized means that unauthenticate.
//500 -Internal server error.
//502 -Bad gateway 


//Content-Type:

//content-type is type of the content that sent to the browser

//example:application/json , text/html , text/plain

// if CT is image then image.

//Headers

//Headers pass the additional information to the HTTP request or response.

//case-insenstive string followed by (:) .


//example:

// In jwt header carries Authorization credentials .

//Body

//It is the final part of the request . It not only contains feching data (GET , DELETE).

//Some of them send request to the server to modifie the data.

//single data body consists onlt two headers.

// content-type and content-length.

// example
const data = { username: 'example' };

fetch('http URL', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

// Using fetch

//Using axios // thirs party library

axios.post("http URL",{Data},headers).then()


