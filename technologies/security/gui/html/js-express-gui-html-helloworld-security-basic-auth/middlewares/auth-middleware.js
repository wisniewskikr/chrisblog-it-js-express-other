const db = '[{"username": "user", "password": "user123", "roles": ["USER"]}, {"username": "admin", "password": "admin123", "roles": ["USER", "ADMIN"]}]'

const authPage = (permissions) => {

    return (req, res, next) => {
        
        if(!req.get('Authorization')){

            var err = new Error('Not Authenticated!')
            res.status(401).set('WWW-Authenticate', 'Basic')
            next(err)

        } else {

            var credentials = Buffer.from(req.get('Authorization').split(' ')[1], 'base64')
            .toString()
            .split(':')

            var username = credentials[0]
            var password = credentials[1]

            const roles = getRolesByUsernameAndPassword(username, password)
            const found = ( roles == null) ? false : permissions.some(r=> roles.includes(r))

            if ( !found ) {
                res.redirect('/401')
                // next()
            } else {
                next()
            } 

        }               

    }

}

function getRolesByUsernameAndPassword(username, password) {

    var user = JSON.parse(db).find(function(e) {
        return e.username == username && e.password == password
    })

    return (user != null) ? user.roles : null;

}

module.exports = { authPage };