let mongoose = require('mongoose');

let TaleSchema = mongoose.Schema({
    title: String,
    content: String,
    categorieIds: [],
    createDate: {type: Date, default: new Date()}
});

module.exports = mongoose.model('tales', TaleSchema);

module.exports.addNew = function (data, cb) {
    let Tale = this;
    let newTale = new Tale();

    let categorieIds = [];

    categorieIds = categorieIds.concat(data.categories);

    newTale.title = data.title;
    newTale.content = data.content;
    newTale.categorieIds = categorieIds;

    newTale.save(cb);
};

module.exports.getAll = function (cb) {
    let Tale = this;
    Tale.find(cb);
};

module.exports.getById = function (id, cb) {
    let Tale = this;
    Tale.findById(id,cb);
};

module.exports.remove = function (id, cb) {
    let Tale = this;
    Tale.findByIdAndRemove(id,cb);
};