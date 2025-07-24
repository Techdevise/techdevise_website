const { Sliders } = require("../../models");
const path = require('path');
const fs = require('fs');

module.exports = {
  
    sliderLiting: async (req, res) => {
        try {
            let typeFilter = req.params.type;
    
                let whereClause = {
                };
    
                if (typeFilter === '1' || typeFilter === '2' || typeFilter === '3'|| typeFilter === '4'|| typeFilter === '5' || typeFilter === '6' ) {
                    whereClause.type = typeFilter;
                }
    
            const slider = await Sliders.findAll({
                  where: whereClause,
                order: [['id', 'DESC']]
            });


            res.render("pages/sliders/sliderlisting", {
                slider: slider,
                title: "Slider"
            });

        } catch (error) {
            console.log(error);

            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },



    addsliderPage: async (req, res) => {
        try {
            res.render("pages/sliders/addSlider", {
                title: "Slider"
            });
        } catch (error) {
            console.log(error);

            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },

    addSlider: async (req, res) => {
        try {
            const { title, message, type } = req.body;
            let imagePath = "";

            if (req.files && req.files.image) {
                const image = req.files.image;
                const uploadDir = path.join(__dirname, '../../public/images');

                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                const fileName = `${Date.now()}_${image.name}`;
                const uploadPath = path.join(uploadDir, fileName);

                await image.mv(uploadPath);
                imagePath = `/${fileName}`;
            }


            await Sliders.create({
                title,
                message, type,
                image: imagePath,
                status:1,
            });

            req.flash("success", "Slider created successfully");
            res.redirect("/admin/slider");
        } catch (error) {
            console.error("Error while creating blog:", error);
            const errorMessage = error.message || "Something went wrong, please try again later.";
            req.flash("error", errorMessage);
            res.redirect("/admin/dashboard");
        }
    },

      updateStatus: async (req, res) => {
            try {
    
                const sliderId = req.params.id;
                const { status } = req.body;
    
                const slider = await Sliders.findOne({
                    where: {
                        id: sliderId,
                    },
                });
                slider.status = status;
                await slider.save();
    
                res.json({
                    success: true,
                    message: 'Slider status updated successfully',
                });
    
            } catch (error) {
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                res.status(500).json({
                    success: false,
                    message: 'Something went wrong. Please try again.',
                });
            }
        },

   viewPage: async (req, res) => {
            try {
                const { id } = req.params;
                const slider = await Sliders.findOne({
                    where: {
                        id: id,
                    },
                })
                res.render("pages/sliders/sliderView", {
                    slider: slider,
                    title: "Slider"
                })
    
            } catch (error) {
                console.log(error);
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                return res.redirect("/admin/dashboard");
            }
        },
      editPage: async (req, res) => {
            try {
                const { id } = req.params;
                const slider = await Sliders.findOne({
                    where: {
                        id: id,
                    },
                })
                res.render("pages/sliders/sliderEdit", {
                    slider: slider,
                    title: "Slider"
                })
    
            } catch (error) {
                console.log(error);
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                return res.redirect("/admin/dashboard");
            }
        },
        updateSlider: async (req, res) => {
            try {
                const {  title,message,type } = req.body;
                const sliderId = req.params.id;
    
                const slider = await Sliders.findOne({where:{id:sliderId}});
                if (!slider) {
                    req.flash("error", "Sliders  not found.");
                    return res.redirect("/admin/slider");
                }
                let imagePath = slider.image;
    
                if (req.files && req.files.image) {
                    const image = req.files.image;
                    const uploadDir = path.join(__dirname, '../../public/images');
    
                    if (!fs.existsSync(uploadDir)) {
                        fs.mkdirSync(uploadDir, { recursive: true });
                    }
    
                    const fileName = `${Date.now()}_${image.name}`;
                    const uploadPath = path.join(uploadDir, fileName);
    
                    await image.mv(uploadPath);
                    imagePath = `/${fileName}`;
    
                    const oldImagePath = path.join(__dirname, '../../public', slider.image || '');
                    if (slider.image && fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath);
                    }
                }
                await slider.update({
                   title, message, type, image: imagePath
                });
    
                req.flash("success", "SLider updated successfully.");
                res.redirect("/admin/slider");
    
            } catch (error) {
                console.error(error);
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                res.redirect("/admin/blogs");
            }
        },

          deleteSlider: async (req, res) => {
            try {
              const { id } = req.params;
        
              const role = await Sliders.findOne({ where: { id } });
              if (!role) {
                req.flash("error", "slider not found.");
                return res.redirect("/admin/slider");
              }
        
              await role.destroy();
        
              req.flash("success", "Slider deleted successfully.");
               res.json({ success: true, message: 'Slider deleted successfully' });

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Failed to delete role.';
            req.flash("error", errorMessage);
            res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
        }
          },

}