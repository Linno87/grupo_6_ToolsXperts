
module.exports = (req, res) => {
/*     res.send(req.session.userLogin.favorites) */
    return res.render("favoritos", {
      favorites : req.session.userLogin.favorites
    }
    );
  };
  