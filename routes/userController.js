const express = require("express");
const dbService = require("../services/dbService");


exports.hello = async (req, res) => {
    
    try {
        res.json({status: true, message: "hello from express js!!"});
      } catch (err) {
        console.error(`Error while getting hell message `, err.message);
        next(err);
      }
  };