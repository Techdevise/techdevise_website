const path = require('path');
const fs = require('fs');
const { Gallery } = require('../../models');

module.exports = {

    galleryLiting: async (req, res) => {
        try {
            let typeFilter = req.params.type;

            let whereClause = {
            };

            if (typeFilter === '1' || typeFilter === '2') {
                whereClause.type = typeFilter;
            }

            const gallery = await Gallery.findAll({
                where: whereClause,
                order: [['id', 'DESC']]
            });


            res.render("pages/gallery/gallerylisting", {
                gallery: gallery,
                title: "Gallery"
            });

        } catch (error) {
            console.log(error);

            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },



    addgalleryPage: async (req, res) => {
        try {
            res.render("pages/gallery/addGallery", {
                title: "Gallery"
            });
        } catch (error) {
            console.log(error);

            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },

    addGallery: async (req, res) => {
        try {
            const { type } = req.body;
            let uploadedFiles = req.files?.image;

            if (!uploadedFiles) {
                req.flash("error", "No images uploaded.");
                return res.redirect("/admin/gallery");
            }

            if (!Array.isArray(uploadedFiles)) {
                uploadedFiles = [uploadedFiles];
            }

            const galleryRecords = [];

            for (const file of uploadedFiles) {
                const ext = path.extname(file.name);
                const filename = `gallery-${Date.now()}-${Math.round(Math.random() * 1E6)}${ext}`;
                const uploadPath = path.join(__dirname, "../../public/images", filename);

                await file.mv(uploadPath);

                const newRecord = await Gallery.create({
                    type,
                    image: `/${filename}`,
                    status: 1,
                });

                galleryRecords.push(newRecord);
            }

            req.flash("success", "Gallery images uploaded successfully");
            res.redirect("/admin/gallery");

        } catch (error) {
            console.error("Error while uploading images:", error);
            req.flash("error", error.message || "Something went wrong. Try again.");
            res.redirect("/admin/dashboard");
        }
    },

    updateStatus: async (req, res) => {
        try {

            const galleryId = req.params.id;
            const { status } = req.body;

            const gallery = await Gallery.findOne({
                where: {
                    id: galleryId,
                },
            });
            gallery.status = status;
            await gallery.save();

            res.json({
                success: true,
                message: 'Gallery status updated successfully',
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

    //    viewPage: async (req, res) => {
    //             try {
    //                 const { id } = req.params;
    //                 const gallery = await Gallery.findOne({
    //                     where: {
    //                         id: id,
    //                     },
    //                 })
    //                 res.render("pages/quality/qualityView", {
    //                     gallery: gallery,
    //                     title: "Gallery"
    //                 })

    //             } catch (error) {
    //                 console.log(error);
    //                 const errorMessage = error.message || 'Something went wrong, please try again later.';
    //                 req.flash("error", errorMessage);
    //                 return res.redirect("/admin/dashboard");
    //             }
    //         },


    deleteGallery: async (req, res) => {
        try {
            const { id } = req.params;

            const gallery = await Gallery.findOne({ where: { id: id } });
            if (!gallery) {
                req.flash("error", "Gallery not found.");
                return res.redirect("/admin/gallery");
            }

            await gallery.destroy();

            req.flash("success", "Gallery deleted successfully.");
            res.json({ success: true, message: 'Gallery deleted successfully' });

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Failed to delete role.';
            req.flash("error", errorMessage);
            res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
        }
    },


}