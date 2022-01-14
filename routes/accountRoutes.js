const express = require("express");
const userController = require("./../controllers/accountController");

const router = express.Router();

router
  .route("/accounts")
  .get(userController.getAllAccounts)
  .post(userController.addAccount);
// router.route("/:accountID").get(getAccount).put(handleAccountAction);

module.exports = router;
