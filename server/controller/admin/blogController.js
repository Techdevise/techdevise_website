const { Blogs } = require("../../models");

const path = require('path');
const fs = require('fs');

module.exports = {


    blogListing: async (req, res) => {
        try {
            const blog = await Blogs.findAll({
                order: [['id', 'DESC']]
            });


            res.render("pages/blogs/blogslisting", {
                blog: blog,
                title: "Blogs"
            });

        } catch (error) {
            console.log(error);

            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },



    createPage: async (req, res) => {
        try {
            res.render("pages/blogs/blogsCreate", {
                title: "Blogs",
            })
        } catch (error) {
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },


    addBlogOption: async (req, res) => {
        try {
            const { job_title, title, sub_title, date, is_read } = req.body;
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


            await Blogs.create({
                job_title,
                title,
                sub_title,
                date,
                is_read,
                image: imagePath,
                status:1
            });

            req.flash("success", "Blog created successfully");
            res.redirect("/admin/blogs");
        } catch (error) {
            console.error("Error while creating blog:", error);
            const errorMessage = error.message || "Something went wrong, please try again later.";
            req.flash("error", errorMessage);
            res.redirect("/admin/dashboard");
        }
    },



    updateStatus: async (req, res) => {
        try {

            const userId = req.params.id;
            const { status } = req.body;

            const job = await Blogs.findOne({
                where: {
                    id: userId,
                },
            });
            job.status = status;
            await job.save();

            res.json({
                success: true,
                message: 'Blogs status updated successfully',
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


    editPage: async (req, res) => {
        try {
            const { id } = req.params;
            const blog = await Blogs.findOne({
                where: {
                    id: id,
                },
            })
            res.render("pages/blogs/blogsEdit", {
                blog: blog,
                title: "Blogs",
            })

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },
    updateBlogOption: async (req, res) => {
        try {
            const { job_title, title, sub_title, date, is_read, } = req.body;
            const blogId = req.params.id;

            const blog = await Blogs.findByPk(blogId);
            if (!blog) {
                req.flash("error", "Blogs  not found.");
                return res.redirect("/admin/joboption");
            }
            let imagePath = blog.image;

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

                const oldImagePath = path.join(__dirname, '../../public', blog.image || '');
                if (blog.image && fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            await blog.update({
                job_title, title, sub_title, date, is_read, image: imagePath
            });

            req.flash("success", "Blogs updated successfully.");
            res.redirect("/admin/blogs");

        } catch (error) {
            console.error(error);
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            res.redirect("/admin/blogs");
        }
    },

      deleteBlog: async (req, res) => {
                try {
                  const { id } = req.params;
            
                  const blog = await Blogs.findOne({ where: { id } });
                  if (!blog) {
                    req.flash("error", "Blog not found.");
                    return res.redirect("/admin/slider");
                  }
            
                  await blog.destroy();
            
                  req.flash("success", "Blog deleted successfully.");
                   res.json({ success: true, message: 'Slider deleted successfully' });
    
            } catch (error) {
                console.log(error);
                const errorMessage = error.message || 'Failed to delete role.';
                req.flash("error", errorMessage);
                res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
            }
              },




}