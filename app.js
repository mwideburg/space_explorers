const express = require('express');
const app = express();



app.get("/", (req, resp) => {
    resp.send("hello Mike")
});

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`)})
  
