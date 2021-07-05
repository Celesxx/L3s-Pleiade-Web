const Data = require('../models/Data.model.js');
const mongoose = require('mongoose');

exports.createData = (req, res) => 
{
    // var datetime = new Date();
    // hours = parseInt(datetime.toISOString().slice(11,13)) + 2
    // date = `${datetime.toISOString().slice(0,10)}_${hours}:${datetime.toISOString().slice(14,19)}`;

    const data = new Data(
    {
        // filename: `${req.body.activite}_${date}`,
        // createdAt: date,
        filename: req.body.filename,
        utilisateur: req.body.utilisateur,
        activité: req.body.activite,
        accelero: req.body.accelero,
        tag: req.body.tag,
    });

    data.save().then(data => 
    {
        res.status(200).json(data);
    }).catch(err => 
    {
        res.status(500).json(
        {
            message: "Fail!",
            error: err.message
        });
    });
};
  
exports.getDatas = (req, res) => 
{
    Data.find().select('-__v').then(dataInfos => 
    {
        res.status(200).json(dataInfos);
    }).catch(error => {
        console.log(error);
        res.status(500).json(
        {
            message: "Error!",
            error: error
        });
    });
};


exports.getData = (req, res) => 
{
    Data.find({id_data: req.params.id})
    .then(data => 
    {
        res.status(200).json(data);
    }).catch(err => 
    {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "data not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving data with id " + req.params.id,
              error: err
          });
    });
};
 

exports.updateData = (req, res) => {
    Data.updateOne({id_data: req.params.id},
    {
        filename: req.body.filename,
        utilisateur: req.body.utilisateur,
        date: req.body.date,
        activité: req.body.activite,
        accelero: req.body.accelero,
        tag: req.body.tag,
    }, {new: true})
    .then(data => 
    {
        if(!data) 
        {
            return res.status(404).send({
                message: "Error -> Can NOT update a data with id = " + req.params.id,
                error: "Not Found!"
            });
        }

    res.status(200).json(data);

    }).catch(err => {
        return res.status(500).send({
            message: "Error -> Can not update a data with id = " + req.params.id,
            error: err.message
        });
    });
};

exports.deleteData = (req, res) => 
{
    let dataId = req.params.id

    Data.remove({id_data:dataId})
    .then(data => {
        if(!data) {
            res.status(404).json({
            message: "Does Not exist a data with id = " + dataId,
            error: "404",
            });
        }
        res.status(200).json({});
    }).catch(err => {
        return res.status(500).send({
            message: "Error -> Can NOT delete a data with id = " + dataId,
            error: err.message
        });
    });
};


exports.getDataName = (req, res) => 
{
    Data.find().select('filename -_id').then(dataInfos => 
    {
        res.status(200).json(dataInfos);
    }).catch(error => {
        console.log(error);
        res.status(500).json(
        {
            message: "Error!",
            error: error
        });
    });
};


exports.getDataByName = (req, res) => 
{
    Data.find({filename: req.params.filename})
    .then(data => 
    {
        res.status(200).json(data);
    }).catch(err => 
    {
          if(err.kind === 'ObjectFilename') {
              return res.status(404).send({
                  message: "data not found with this filename " + req.params.filename,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving data with this filename " + req.params.filename,
              error: err
          });
    });
};