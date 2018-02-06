const express = require('express')
var path = require('path')
var fs = require('fs')

const app = express()

/* */
let blogposts;

const blogpost = {
    "title": "hey there 22222",
    "text": "oh hi 22222!"
}
app.use(express.static(path.join(__dirname, '../docs')));

app.post('/add', (req, res) => {
    console.log("ADD")
    console.log(req)    
    const body = req.body
    console.log(body)
    res.end()
    if(blogposts === 'undefined'){
        blogposts = getAllBlogposts()
    }
    blogposts.push(blogpost)
    
    let data = JSON.stringify(blogposts);  
    fs.writeFileSync('server/blogposts.json', data);  
})

app.get('/getAll', (req, res) => {
    // Set global array to the blogposts
    blogposts = getAllBlogposts()
    res.json(blogposts)
})

app.listen(process.env.PORT || 8080, () => {
    console.log('listening on port 8080')
})

getAllBlogposts = () => {
    var rawdata = fs.readFileSync('server/blogposts.json')
    return JSON.parse(rawdata);
}