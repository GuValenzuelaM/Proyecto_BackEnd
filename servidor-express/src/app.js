//DUDA: ¿PORQUE PASA ESO?
//https://you.com/search?q=this+file+is+being+treated+as+an+es+module+because+it+has+a+%27.js%27+file+extension+and&tbm=youchat&cfr=chatb&cid=c2_4ad05055-7e24-4e15-98b4-9cac93590012

//const express = require('express');
//const ProductManager = require('../ProductManager.js');

import express from 'express';
//import ProductManager from '../ProductManager.js';
const app =express();
const port = 8080;

app.listen(port,()=>console.log(`Server listening on port${port}`));

app.get("/",(request,response)=>{
    response.send("Bienvenido al Desafio 3");
});

/*
app.get("/products",(request,response)=>{
    response.send("Bienvenido a productos");
});

app.get("/products",async(req,res) =>{
    const products = await manager.getProduct();
    resizeBy.send(products);
});

const manager = new ProductManager('../products.json');

app.get("/products",async(req,res) =>{
    const products = await manager.getProduct();
    resizeBy.send(products);
});

// http://localhost:8080/products/Encimera
// http://localhost:8080/products/Horno
// http://localhost:8080/products/Refrigerador
app.get("/products/:cualquierNombre",(req,res)=>{
    const nombre = req.params.cualquierNombre;
    const products = products.find(u=>u.title === nombre);
    res.send(products);
});
*/