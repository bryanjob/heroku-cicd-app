const app = require('./index');

let port = process.env.PORT || 3000;

// start server
// -----------------------
app.listen(port, function () {
    console.log(`Running on port ${port}`);
});
