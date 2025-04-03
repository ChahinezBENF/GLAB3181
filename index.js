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
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//***********PART 5 : Open Exploration***********/
const server = http.createServer((req, res) => {
    // Default headers  for all responses
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Switch statement to handle routing
    switch (req.url) {
 // Default route '/'
        case `/`:
            res.statusCode = 200;
            break;
            // About route '/about'
        case `/about`:
            res.statusCode = 200;
            break;    
// Info route '/info'
case `/info`:
    res.statusCode = 200;
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
