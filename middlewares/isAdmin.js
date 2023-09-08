module.exports = function (req,res,next) {
    if (!req.user.isAdmin) {
        return res.status(400).send({errors : [{ msg : "You are not admin"}]})
    } 
    next()
}