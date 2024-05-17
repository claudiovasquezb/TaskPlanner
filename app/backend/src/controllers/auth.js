const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');



const createUser = async(req, res) => {

    const { email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'A user exists with that email'
            });
        }
        user = new User(req.body);

        // Encrypt password
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, async(err, hash) => {
                user.password = hash;
                await user.save();
            });
        });

        // generate JWT
        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Talk to administrator'
        });
    }
}
const loginUser = async(req, res) => {

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'user does not exist'
            });
        }
        // Compare password with user's encrypted password
        bcrypt.compare(password, user.password, function(err, result) {
            if(!result) {
                return res.status(400). json({
                    ok: false,
                    msg: 'Incorrect password'
                });
            }
        });

        // Generate JWT
        const token = await generateJWT(user.id, user.name);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Talk to administrator'
        });
    }


}
const renewToken = async(req, res) => {

}


module.exports = {
    createUser,
    loginUser,
    renewToken
}