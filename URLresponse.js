const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');

  // Handle different URLs
  if (req.url === '/') {
    // Render the home page
    res.write(`
      <h1>Please Click any Button</h1>
      <button onclick="window.location.href='/home'">Home</button>
      <button onclick="window.location.href='/about'">About</button>
      <button onclick="window.location.href='/node'">Node</button>
    `);
  } else if(req.url ==='/home'){
    // Render the home page
    res.write(`
    <h1>Welcome to Home Page</h1>
    <button onclick="window.location.href='/home'">Home</button>
    <button onclick="window.location.href='/about'">About</button>
    <button onclick="window.location.href='/node'">Node</button>
    `);
  }
  else if (req.url === '/about') {
    // Render the about page
    res.write(`
      <h1>Welcome to About Us page</h1>
      <button onclick="window.location.href='/home'">Home</button>
      <button onclick="window.location.href='/'">Home</button>
      <button onclick="window.location.href='/node'">Node</button>
    `);
  } else if (req.url === '/node') {
    // Render the node page
    res.write(`
      <h1>Welcome to my Node Js project</h1>
      <button onclick="window.location.href='/home'">Home</button>
      <button onclick="window.location.href='/'">Home</button>
      <button onclick="window.location.href='/about'">About</button>
    `);
  } else {
    // Handle 404 error
    res.write(`
      <h1>404 Page not found</h1>
      <p>The requested URL ${req.url} was not found on this server.</p>
    `);
    res.statusCode = 404;
  }

  // End the response
  res.end();
});

// Start the server
server.listen(1000, () => {
  console.log('Server is listening on port 1000...');
});
