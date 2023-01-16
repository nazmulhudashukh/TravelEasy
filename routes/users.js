const express = require("express");
const router = express.Router();
const dbService = require("../services/dbService");


/* GET users listing. */
// router.get("/", async (req, res, next) => {
//     try {
//         const apiResponse = {};
//         apiResponse.status = true;
//         apiResponse.message = "hello from express js!!";
//         apiResponse.data = await dbService.getByUsername(req.query.username);
//         res.json(apiResponse);
//       } catch (err) {
//         console.error(`Error while getting hell message `, err.message);
//         next(err);
//       }
// });

router.get("/validateUsername", async (req, res, next) => {
  try {

      var rowData = await dbService.isUsernameExists(req.query.registerUsername);

      res.set('Content-Type', 'text/html');
      res.send(rowData.IsNewUsername);
    } catch (err) {
      console.error(`Error while getting hell message `, err.message);
      next(err);
    }
});

router.post("/login", async (req, res, next) => {
  try {
      const apiResponse = {};
      const userData = await dbService.findUser(req.body);
      if (userData) {
        apiResponse.success = true;
        apiResponse.data = userData;
      } else {
        apiResponse.success = false;
      }
      
      res.json(apiResponse);
    } catch (err) {
      console.error(`Error while getting hell message `, err.message);
      next(err);
    }
});

/* POST programming language */
router.post("/create", async function (req, res, next) {
    try {
      var rowData = await dbService.isUsernameExists(req.body.username);

      if (rowData.IsNewUsername == 'false') {
        const apiResponse = {};
        apiResponse.success = false;
        apiResponse.message = "Username already exists in system";
        res.json(apiResponse);
      } else {
        res.json(await dbService.create(req.body));
      }

      
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
});

module.exports = router;