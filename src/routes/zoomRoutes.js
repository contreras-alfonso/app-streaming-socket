import express from 'express';

const router = express.Router();

router.get('/index',(req,res)=>{
    res.render('index');
})


router.get('/visualizar',(req,res)=>{
    res.render('visualizar');
})

export default router