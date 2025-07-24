const { User, Cms } = require("../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
 module.exports={

 dashboard:async(req,res)=>{
try {
      res.render('layouts/dashboard.ejs',{title: "Dashboard",}); 
} catch (error) {
         console.log( error);
        req.flash("error", 'Something went wrong, please try again later.');
      return res.redirect('/admin/login');
}
 },

 loginPage: async (req, res) => {
        res.render('auth/login',{
                title: "Login"
            }); 
    },
     login_post:async(req,res)=>{
          try {
            const { email, password } = req.body;

            const findemail = await User.findOne({
                where: {
                    email: email,
                },
            });
            if (!findemail) {
                req.flash("error", "Please enter a valid email");
                return res.redirect("/admin/login");
            }
            const isMatch = await bcrypt.compare(password, findemail.password);
            if (isMatch) {
                req.flash("success", "Login Successful");
                 console.log(req.body);
                 
                req.session.admin = findemail;
                return res.redirect("/admin/dashboard");
            } else {
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                return res.redirect("/admin/login");
            }

        } catch (error) {
            console.log(error);
            req.flash("error", 'Something went wrong, please try again later.');
            return res.redirect("/admin/login");
        }
     },

       logout: (req, res) => {
        delete req.session.admin
        res.redirect("/admin/login");
    },







    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CMS     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></CMS>

   listingCms: async (req, res) => {
        try {
            let cmss = await Cms.findOne({
                where: {
                    id: req.params.id,

                },
                raw: true,
            });
            let title = "";
            if (req.params.id === "1") {
                title = "About Us";
            }
            if (req.params.id === "2") {
                title = "Privacy Policy";
            }
            if (req.params.id === "3") {
                title = "Terms & Conditions";
            }
            res.render("pages/cms/cmsListing", {
                cmss,
                title: "cms"
            });
        } catch (error) {
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },
    cmsEditpost: async (req, res) => {
        try {
            let id = req.body.id;
            let updateContent = await Cms.update(
                {
                    content: req.body.content,
                },
                {
                    where: {
                        id: req.params.id,

                    },
                }
            );
            let message = "";

            if (req.body.id == 1) {
                message = "About Us updated successfully";
            }
            if (req.body.id == 2) {
                message = "Privacy Policy updated successfully";
            }
            if (req.body.id == 3) {
                message = "Terms & conditions updated successfully";
            }

            req.flash("success", message);
            res.redirect(`/admin/cms/${id}`);
        } catch (error) {
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },




 }