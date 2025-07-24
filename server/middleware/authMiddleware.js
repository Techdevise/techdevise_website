module.exports = {
    isAuthenticated: async (req, res, next) => {
        try {
            if (!req.session.admin) {
                return res.redirect('/admin/login');
            } else {
                res.locals.admin = req.session.admin
                next();
            }

        } catch (error) {
            return res.redirect('/admin/login');
        }
    },



}