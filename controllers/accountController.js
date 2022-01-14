const fs = require("fs");

const loadAccounts = () => {
  try {
    const dataBuffer = fs.readFileSync(`${__dirname}/../data/accounts.json`);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (err) {
    return [];
  }
};

const saveAccounts = (accounts) => {
  const dataJson = JSON.stringify(accounts);
  fs.writeFileSync(`${__dirname}/../data/accounts.json`, dataJson);
};

const getAllAccounts = (req, res) => {
  const accounts = loadAccounts();
  res.status(200).json({
    status: "success",
    results: accounts.length,
    data: {
      accounts,
    },
  });
};

const addAccount = (req, res) => {
  const { passportID, cash, credit } = req.body;
  const accounts = loadAccounts();
  const account = accounts.find((account) => (account.passportid = passportID));
  if (account) throw Error("Account is already exist!");

  cash = cash === "" ? 0 : cash;
  credit = credit === "" ? 0 : credit;

  const newAccount = { passportid: passportID, cash, credit };
  accounts.push(newAccount);
  saveAccounts(users);

  res.status(200).json({
    status: "success",
    results: "new account created",
    data: {
      newAccount,
    },
  });
};

module.exports = {
  getAllAccounts,
  addAccount,
};
