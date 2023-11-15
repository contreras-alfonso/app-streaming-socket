import express from 'express';

const router = express.Router();

router.get('/95f0b445-3e03-4faf-99f5-53007cda377132f8ed93-7ac0-41b5-94b1-373ceb8a5a45ec04070d-d52b-46ce-98d0-eab5666cbf99',(req,res)=>{
    res.render('index');
})


router.get('/b1b1c67f-c6b3-40ba-a652-ae0e5c25ce2e7e4633ea-46e5-4f45-8c4f-52e243b79e52',(req,res)=>{
    res.render('visualizar');
})

export default router