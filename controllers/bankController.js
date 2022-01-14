const welcome = (req, res) => {
  res.status(200).send("Welcome to Bank API");
};

module.exports = {
  welcome,
};
