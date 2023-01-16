const express = require("express");
const appRouter = express.Router();
const dbService = require("../services/dbService");
const user_controller = require("../routes/userController");
/* GET programming languages. */

appRouter.get("/api/user/hello", user_controller.hello);

appRouter.get("/api/user/get", async function (req, res, next) {
  try {
    res.json(await dbService.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST programming language */
appRouter.post("/api/user/create", async function (req, res, next) {
  try {
    res.json(await dbService.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

/* PUT programming language */
appRouter.put("/:id", async function (req, res, next) {
  try {
    res.json(await dbService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

/* DELETE programming language */
appRouter.delete("/:id", async function (req, res, next) {
  try {
    res.json(await dbService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

module.exports = appRouter;
