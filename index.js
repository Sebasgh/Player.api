const express = require('express');
const app = express();

app.get("/test", (request, response) =>{
    response.send("Hello from API");
} );

app.listen(9999, () => {
    console.log("app is Listening!");
});