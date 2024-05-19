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
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );
        await user.save();

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
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect password'
            });
        }

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
    const { uid, name } = req;
    const token = await generateJWT( uid, name );
    res.json({
        ok: true,
        token
    });
}


module.exports = {
    createUser,
    loginUser,
    renewToken
}