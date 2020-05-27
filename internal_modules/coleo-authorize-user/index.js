module.exports = (roles, authorizations) => {

    /* TODO we could use this MW to add fine level authorization

        req.user.authorizations.canPost == authorizations.canPost

    */

    return (req, res, next) => {
        if(roles.indexOf(req.user.role) != -1) {
            next()
        } else {
            res.status(401).end();
        }
    }

}
