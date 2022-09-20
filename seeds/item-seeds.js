const { Item } = require('../models');

var itemsObjectList = [];
var itemsList = ["Everything Bagel",
                "Rusted Key",
                "Computer Password",
                "Knife",
                "Cream Cheese",
                "Frog",
                "Frog's Crown",
                "Coffee Mug",
                "Crowbar",
                "Floppy Disk",
                "Flashlight",
                "Batteries",
                "Snazzy Jacket"];

itemsList.forEach(function(entry) {
    var singleObj = {};
    singleObj['item'] = entry;
    itemsObjectList.push(singleObj);
})

const seedItems = () => Item.bulkCreate(itemsObjectList);

module.exports = seedItems;