import express from 'express';
import ShortUniqueID from 'short-unique-id';
import Data from '../model/data.model.js';
import Image from '../model/image.model.js';

const router = express.Router();
router.use(express.json());

router.get('/api/getToken', (req, res) => {
    const getID = new ShortUniqueID();
    const uid = getID();
    //Debugging purposes: console.log('id from backend ' + uid);
    res.send(uid);
})

router.get('/api/getNumImages', async (req, res) => {
    const amount = await Image.count();
    res.send(String(amount));
})

router.post('/api/getImages', async (req, res) => {
    const pairIMG = await Image.findOne ({where: {id: req.body.imageIndex} });
    res.json({
        status: "successfully received images",
        leftIMG: pairIMG.leftimg,
        rightIMG: pairIMG.rightimg
    })
})

router.post('/api/sendData', (req, res) => {
    const dataEntry = new Data({
        userid: req.body.userID,
        questionid: req.body.questionID,
        value: req.body.value
    });
    res.json({
        status: "successfully sent data",
        userID: req.body.userID,
        value: req.body.value
    })
    dataEntry.save()
        .then((res) => {
            console.log(res);
        })
        .catch((err) =>{
            console.log(err);
        });
})

export {router};

