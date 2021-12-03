var express = require('express');

const router = require("./src/Router/product.router.js");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(express.urlencoded({extended: true}))
app.use("/api", router)

async function startApp() {
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (e) {
        console.log(e.message)
    }
}

startApp()