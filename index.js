// TypeError: Failed to fetch and CORS in JavaScript

// EXAMPLE 1 - Make sure to pass the correct configuration to `fetch()`

// ✅ Works
async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

getUser();

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// // EXAMPLE 2 - If you don't have access to the server, use a proxy

// import express from 'express';

// const app = express();

// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');

//   next();
// });

// app.get('/users', async (_req, res) => {
//   const url = 'https://randomuser.me/api/';

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return res.json(result);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({error: 'An error occurred'});
//   }
// });

// const port = 3456;

// app.listen(port, () =>
//   console.log(`Server running on http://localhost:${port}`),
// );

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the cors-anywhere package as a proxy

// import cors_proxy from 'cors-anywhere';

// // const cors_proxy = require('cors-anywhere');

// const host = process.env.HOST || '0.0.0.0';

// // Listen on a specific port via the PORT environment variable
// const port = process.env.PORT || 8080;

// cors_proxy
//   .createServer({
//     originWhitelist: [], // Allow all origins
//   })
//   .listen(port, host, function () {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
//   });
