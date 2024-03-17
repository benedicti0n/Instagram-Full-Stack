const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    id: String,
    datecreated: {
        type: Date,
        default: Date.now()
    }
});

const postsModel = mongoose.model("posts", postSchema);

module.exports = postsModel;