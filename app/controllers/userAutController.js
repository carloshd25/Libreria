const userAutService = require("../services/userAutServices");

exports.login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

      const token = await userAutService.authenticate(username, password);
  
      const response = { token: token };
      res.send(response);

  };

  exports.autenticar = async (req, res) => {
    const token = req.body.token;
  
    try {
      const decodedToken = userAutService.validateToken(token);
      res.status(200).send(decodedToken);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  exports.singUp = async (req, res) => {

      const user = await userAutService.signUp(req.body);
      if (!user) {
        return res
          .status(500)
          .send({ error: "The user could not be created" });
      }
      return res.status(201).send(user);

  };