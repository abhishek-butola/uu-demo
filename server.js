const express = require('express');
const app = express();

const PORT = process.env.PORT || 5004;

app.get('/', (req, res) => {
  const html = `
        <html> 
            <head> 
                <title> 
                    UU Demo
                </title>
            </head>
            <body>
                <h1>Uttaranchal Institute of management </h1>
                <ul> 
                 <li>Project 1
                 <li> Project 2
                 <li> project 3
                </ul>
            </body>
        </html>

    `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log('Server running');
});
