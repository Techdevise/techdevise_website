const {  Team } = require("../../models");

const path = require('path');
const fs = require('fs');

module.exports = {


    teamListing: async (req, res) => {
        try {
            const team = await Team.findAll({
                order: [['id', 'DESC']]
            });


            res.render("pages/team/teamlisting", {
                team: team,
                title: "Team"
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
            res.render("pages/team/teamCreate", {
                title: "Team",
            })
        } catch (error) {
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },


    addTeam: async (req, res) => {
        try {
            const {  name, 	position,  } = req.body;
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


            await Team.create({
               name, 	position,
                image: imagePath,
                status:1
            });

            req.flash("success", "Team created successfully");
            res.redirect("/admin/team");
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

            const job = await Team.findOne({
                where: {
                    id: userId,
                },
            });
            job.status = status;
            await job.save();

            res.json({
                success: true,
                message: 'Team status updated successfully',
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
            const team = await Team.findOne({
                where: {
                    id: id,
                },
            })
            res.render("pages/Team/teamEdit", {
                team: team,
                title: "Team",
            })

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            return res.redirect("/admin/dashboard");
        }
    },
    updateTeam: async (req, res) => {
        try {
            const { name, 	position, } = req.body;
            const teamId = req.params.id;

            const team = await Team.findByPk(teamId);
            if (!team) {
                req.flash("error", "Team  not found.");
                return res.redirect("/admin/joboption");
            }
            let imagePath = team.image;

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

                const oldImagePath = path.join(__dirname, '../../public', team.image || '');
                if (team.image && fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            await team.update({
               name, 	position, image: imagePath
            });

            req.flash("success", "Team updated successfully.");
            res.redirect("/admin/team");

        } catch (error) {
            console.error(error);
            const errorMessage = error.message || 'Something went wrong, please try again later.';
            req.flash("error", errorMessage);
            res.redirect("/admin/team");
        }
    },

      deleteTeam: async (req, res) => {
                try {
                  const { id } = req.params;
            
                  const team = await Team.findOne({ where: { id } });
               
                  await team.destroy();
            
                  req.flash("success", "team deleted successfully.");
                   res.json({ success: true, message: 'team deleted successfully' });
    
            } catch (error) {
                console.log(error);
                const errorMessage = error.message || 'Failed to delete role.';
                req.flash("error", errorMessage);
                res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
            }
              },




}