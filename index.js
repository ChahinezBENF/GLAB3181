//***********PART 4 : Creating a Server***********/
//1- Requere the HTTP module
const http = require('http');

//2- Define the location and port of the server
const hostname = '127.0.0.1';// this is localhost @ , it means it run only localy
const port = 3000;

//3- Create the Server
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
//   });


//4- Start the server
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//***********PART 5 : Open Exploration***********/
const server = http.createServer((req, res) => {
    // Default headers  for all responses
    res.setHeader('Content-Type', 'text/html');

    // Switch statement to handle routing
    switch (true) {
        // Default route '/'
        case req.url === `/`:
            res.statusCode = 200;
            res.write('<h1>Welcome to the Home Page!</h1>');
            res.write('<p>This is the default route of my Node.js server.</p>');
            break;

        // About route '/about'
        case req.url === `/about`:
            res.statusCode = 200;
            res.write('<h1>About Us</h1>');
            res.write('<p>This is another route of my Node.js server.</p>');
            break;


        // Info route '/info'
        case req.url === `/info`:
            res.statusCode = 200;
            res.write('<h1>Information</h1>');
            res.write('<p>This is again another route of my Node.js server.</p>');
            break;



        // Manage dynamic '/name/:name'
        case req.url.startsWith('/name/'):
            const name = req.url.split('/')[2]; // Extract name from URL after 2nd '/'
            res.statusCode = 200;
            res.write(`<h1>Hello ${name}!</h1>`);
            res.write(`<p>Welcome to my server! I'm glad you're here ${name}.</p>`);
            break;

        // Catch all route for unknown paths
        default:
            res.statusCode = 404;
            res.write('<h1>404 Not Found</h1>');
            res.write('<p>The page you requested could not be found.</p>');
            break;
    }

    // End the response
    res.end();
});


//Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});