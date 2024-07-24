const NASABAH = require('../models/nasabah.model');

const index = async (req, res) => {
    try {
        const nasabah = await NASABAH.getNasabah();
        res.json(nasabah);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createdata = async (req, res) => {
    try {
        const nasabahData = req.body;
        const nasabah = await NASABAH.createNasabah(nasabahData);
        res.status(201).json(nasabah);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updatedata = async (req, res) => {
    try{
        const { id } = req.params;
        const data_update = req.body;
        const update = await NASABAH.updateNasabah(parseInt(id), data_update);
        res.json(update);
    }catch (err){
        res.status(500).send(err.message);
    }
};

const deletedata = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedata = await NASABAH.deleteNasabah(parseInt(id));
        res.json(deletedata);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    index, 
    createdata,
    updatedata,
    deletedata
};