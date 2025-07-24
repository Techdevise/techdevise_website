const { Setting } = require("../../models");


module.exports={
      listingSetting: async (req, res) => {
            try {
                let setting = await Setting.findOne({
                    where: {
                        id: req.params.id,
                    },
                    raw: true,
                });
               
                res.render("pages/settings/listing", {
                    setting,
                    title: "Settings"
                });
            } catch (error) {
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                return res.redirect("/admin/dashboard");
            }
        },
        settingEditpost: async (req, res) => {
            try {
                let id = req.body.id;
                const {email,phone,facebook_link,instagram_link,linkedin_link,twitter_link,address} = req.body
                let updateContent = await Setting.update(
                    {
                        email,phone,facebook_link,instagram_link,linkedin_link,twitter_link,address
                    },
                    {
                        where: {
                            id: req.params.id,
    
                        },
                    }
                );
            
                req.flash("success",);
                res.redirect(`/admin/setting/${id}`);
            } catch (error) {
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                return res.redirect("/admin/dashboard");
            }
        },
}