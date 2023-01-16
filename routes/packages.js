const express = require("express");
const packagesRouter = express.Router();
const packagesService = require("../services/packagesService");



packagesRouter.post("/create", async function (req, res, next) {
    try {
      var rowData = await packagesService.isPackageCodeExists(req.body.code);

      if (rowData.IsNewUsername == 'false') {
        const apiResponse = {};
        apiResponse.success = false;
        apiResponse.message = "Username already exists in system";
        res.json(apiResponse);
      } else {
        res.json(await packagesService.createPackage(req.body));
      }

      
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
});

packagesRouter.post("/search", async function (req, res) {
    const apiResponse = {};
    try {
        
        var sPackageList = await packagesService.getPackageList(req.body.searchText, req.body.pageIndex, req.body.limit);

      if (sPackageList) {
        
        apiResponse.success = true;
        apiResponse.message = "";
        apiResponse.data = sPackageList;
        res.json(apiResponse);
      } else {
        apiResponse.success = false;
        apiResponse.message = "No data found";
        apiResponse.data = null;
        res.json(apiResponse);
      }

      
    } catch (err) {
        console.error(`Error while creating programming language`, err.message);
        apiResponse.success = false;
        apiResponse.message = err.message;
        apiResponse.data = null;
        res.json(apiResponse);
    }
});



module.exports = packagesRouter;