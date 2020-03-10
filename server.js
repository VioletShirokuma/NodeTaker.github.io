const express = require("express");
const app = express();


const PORT = process.env.PORT || 3600;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/APIROUTES")(app);

require("./routes/HTMLROUTES")(app);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));