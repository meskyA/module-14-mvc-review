const router = require('express').Router();
const {User} = require('../models');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const userData = await User.findAll({
      order: [['name', 'ASC']]
   });
    const users = userData.map((user) => user.get({ plain: true }));

    res.render('homepage', {userData, users});
    
      // loggedIn: req.session.loggedIn,
   
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
 

module.exports = router;



