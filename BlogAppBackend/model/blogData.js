const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: String,
    image: String,
    description : String
})
const blogData = mongoose.model('blog', blogSchema);
module.exports = blogData;