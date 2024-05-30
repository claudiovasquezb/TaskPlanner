const jwt = require('jsonwebtoken');
const validateJWT = ( req, res, next ) => {
    // x-token headers (personalized token)
    const token = req.header('x-token');

    if( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No token on request'
        });
    }

    try {
        console.log('Token: ',req.header('x-token'));
        // Get uid and name from payload in headers token
        const { uid, name} = jwt.verify( token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.name = name;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }
    next();
}

module.exports = {
    validateJWT
}