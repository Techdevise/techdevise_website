const { ContactUs, SpeakExperts } = require("../../models");


module.exports = {

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<  contactUs 
  contactListing: async (req, res) => {
    try {
      const contacts = await ContactUs.findAll({
        order: [['id', 'DESC']]
      });


      res.render("pages/contactUs/listing", {
        contacts: contacts,
        title: "Contact_us"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  contactView: async (req, res) => {
    try {
      const { id } = req.params
      const contacts = await ContactUs.findOne({
        where: { id: id },
        order: [['id', 'DESC']]
      });


      res.render("pages/contactUs/view", {
        contacts: contacts,
        title: "Contact_us"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },


    deleteContect_us: async (req, res) => {
            try {
              const { id } = req.params;
        
              const con = await ContactUs.findOne({ where: { id } });
             
        
              await con.destroy();
        
              req.flash("success", "Contact Us deleted successfully.");
               res.json({ success: true, message: 'Contact Us deleted successfully' });

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Failed to delete role.';
            req.flash("error", errorMessage);
            res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
        }
          },


  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Speak with our Experts



  expertListing: async (req, res) => {
    try {
      const experts = await SpeakExperts.findAll({
        order: [['id', 'DESC']]
      });


      res.render("pages/experts/listing", {
        expert: experts,
        title: "Experts"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  expertView: async (req, res) => {
    try {
      const { id } = req.params
      const experts = await SpeakExperts.findOne({
        where: { id: id },
        order: [['id', 'DESC']]
      });


      res.render("pages/experts/view", {
        expert: experts,
        title: "Experts"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
    delete_SpeakExperts: async (req, res) => {
            try {
              const { id } = req.params;
        
              const con = await SpeakExperts.findOne({ where: { id } });
             
        
              await con.destroy();
        
              req.flash("success", "Speak Expert Us deleted successfully.");
               res.json({ success: true, message: 'Speak Expert deleted successfully' });

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Failed to delete role.';
            req.flash("error", errorMessage);
            res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
        }
          },
}
