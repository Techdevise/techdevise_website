const {  Quality } = require("../../models");
const path = require('path');
const fs = require('fs');

module.exports = {
  
    qualityLiting: async (req, res) => {
        try {
            let typeFilter = req.params.type;
    
                let whereClause = {
                };
    
                if (typeFilter === '1' || typeFilter === '2'  ) {
                    whereClause.type = typeFilter;
                }
    
            const quality = await Quality.findAll({
                  where: whereClause,
                order: [['id', 'DESC']]
            });


            res.render("pages/quality/qualitylisting", {
                quality: quality,
                title: "Quality"
            });

        } catch (error) {
            console.log(error);

            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },



    addqualityPage: async (req, res) => {
        try {
            res.render("pages/quality/addQuality", {
                title: "Quality"
            });
        } catch (error) {
            console.log(error);

            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },

    addQuality: async (req, res) => {
        try {
            const { name, message, type } = req.body;
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


            await Quality.create({
                name,
                message, type,
                image: imagePath,
                status:1,
            });

            req.flash("success", "Quality created successfully");
            res.redirect("/admin/quality");
        } catch (error) {
            console.error("Error while creating blog:", error);
            const errorMessage = error.message || "Something went wrong, please try again later.";
            req.flash("error", errorMessage);
            res.redirect("/admin/dashboard");
        }
    },

      updateStatus: async (req, res) => {
            try {
    
                const qualityId = req.params.id;
                const { status } = req.body;
    
                const quality = await Quality.findOne({
                    where: {
                        id: qualityId,
                    },
                });
                quality.status = status;
                await quality.save();
    
                res.json({
                    success: true,
                    message: 'Quality status updated successfully',
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
                const quality = await Quality.findOne({
                    where: {
                        id: id,
                    },
                })
                res.render("pages/quality/qualityView", {
                    quality: quality,
                    title: "Quality"
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
                const quality = await Quality.findOne({
                    where: {
                        id: id,
                    },
                })
                res.render("pages/quality/qualityEdit", {
                    quality: quality,
                    title: "Quality"
                })
    
            } catch (error) {
                console.log(error);
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                return res.redirect("/admin/dashboard");
            }
        },
        updateQuality: async (req, res) => {
            try {
                const {  name,message,type } = req.body;
                const qualityId = req.params.id;
    
                const quality = await Quality.findOne({where:{id:qualityId}});
                if (!quality) {
                    req.flash("error", "Quality  not found.");
                    return res.redirect("/admin/quality");
                }
                let imagePath = quality.image;
    
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
    
                    const oldImagePath = path.join(__dirname, '../../public', quality.image || '');
                    if (quality.image && fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath);
                    }
                }
                await quality.update({
                   name, message, type, image: imagePath
                });
    
                req.flash("success", "Quality updated successfully.");
                res.redirect("/admin/quality");
    
            } catch (error) {
                console.error(error);
                const errorMessage = error.message || 'Something went wrong, please try again later.';
                req.flash("error", errorMessage);
                res.redirect("/admin/quality");
            }
        },

          deleteQuality: async (req, res) => {
            try {
              const { id } = req.params;
        
              const quality = await Quality.findOne({ where: { id } });
              if (!quality) {
                req.flash("error", "Quality not found.");
                return res.redirect("/admin/quality");
              }
        
              await quality.destroy({ where: { id } });
        
              req.flash("success", "Quality deleted successfully.");
                res.json({ success: true, message: 'Quality deleted successfully' });

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Failed to delete role.';
            req.flash("error", errorMessage);
            res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
        }
          },

}