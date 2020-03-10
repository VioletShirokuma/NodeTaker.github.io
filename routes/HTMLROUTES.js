const path = require('path');

module.exports = function(app){
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    app.get("index.js", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.js")); 
    });

    app.get("style.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/style.css")); 
    });

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    
}