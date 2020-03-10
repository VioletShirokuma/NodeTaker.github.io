const path = require('path');

module.exports = function(app){
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    app.get("../public/assets/index.js", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/index.js")); 
    });

    app.get("../public/assets/style.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/style.css")); 
    });

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    
}