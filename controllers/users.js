const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  addFavorite,
  refreshUser,
};

/*Used to update user data in state after adding recipe to favorites*/
async function refreshUser(req, res) {
  const user = req.body;
  try {
    const update = await User.findById(user._id);
    res.json(update);
  } catch (err) {
    
  }
}

async function addFavorite(req, res) {
  const newFavorite = req.body.newFavorite;
  const user = req.body.user;
  console.log(newFavorite);
  const p = await User.findById(user._id)
  p.favorites.push(req.body.newFavorite);

  try {
    console.log(p.favorites);
    await User.findByIdAndUpdate(user._id, { favorites: p.favorites }).then(refreshUser(user));
/*    const newUser = await User.findById(user._id);
*/    // console.log(res.json(newUser))
    res.json('success');
  } catch (err) {
    res.status(400).json(err);
  }
}

async function signup(req, res) {
  const user = new User(req.body);
  user.vegetarian = req.body.vegetarian ? true : false;
  user.vegan = req.body.vegan ? true : false;
  user.dairyFree = req.body.dairyFree ? true : false;
  user.glutenFree = req.body.glutenFree ? true : false;
  user.ketogenic = req.body.ketogenic ? true : false;
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user);
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
