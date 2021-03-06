const express = require('express');
const routerSections = express.Router();

const Section = require('../models/section');

routerSections.get('/', (req, res, next) => {
    Section.find({}, function (err, items) {
        if (err) {
            console.log(err);
            res.json({ err: err });
        } else {
            res.json({ sections: items });
        }
    });
});

routerSections.get('/section/:id', (req, res, next) => {
    const sectionId = req.params.id;
    Section.findOne({ _id: sectionId }, (err, item) => {
        if (err) {
            console.log(err);
            res.json({ err: err });
        } else {
            res.json({ section: item });
        }
    });
});

routerSections.put('/section/:id', (req, res, next) => {
    const sectionId = req.params.id;
    const sectionObj = req.body;
    Section.findByIdAndUpdate({ _id: sectionId }, sectionObj, (err, result) => {
        if (err) {
            res.status(500).json({ success: false, msg: 'Section Not Updated. Error: ' + err });
        } else if (!result) {
            res.status(500).json({ success: false, msg: 'Section With Specified ID Not Found.' }); // ???
        } else {
            result.save((err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: false, msg: 'An Error Occurred!' + err
                    });
                }
                res.status(200).json({ succes: true, msg: 'Secion Updated. ' + result });
            });
        }
    });
});

module.exports = routerSections;
