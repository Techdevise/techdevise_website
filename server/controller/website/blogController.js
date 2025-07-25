
const { Blogs, Gallery, Team } = require("../../models");


module.exports = {
    listing_blogs: async (req, res) => {

        try {
            const blog = await Blogs.findAll({
                where: { status: 1 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all blogs  successfully",
                data: blog,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    },
    
       view_blogs: async (req, res) => {

        try {
             const { id } = req.params;
            const blog = await Blogs.findOne({
                where: {
                    id: id,
                },
            })

            return res.status(200).json({
                success: true,
                message: "Get all blogs  successfully",
                data: blog,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    },






    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Gallery>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




       listing_Team: async (req, res) => {
    
            try {
                const team = await Gallery.findAll({
                    where: { status: 1, type: 1 }
                })
    
                return res.status(200).json({
                    success: true,
                    message: "Get all Team Work  successfully",
                    data: team,
                });
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                    error: error.message,
                });
            }
        },
        listing_Office_Activity: async (req, res) => {
    
            try {
                const Office_Activity = await Gallery.findAll({
                    where: { status: 1, type: 2 }
                })
    
                return res.status(200).json({
                    success: true,
                    message: "Get all Office Activity  successfully",
                    data: Office_Activity,
                });
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                    error: error.message,
                });
            }
        },


           listing_TechTeam: async (req, res) => {
    
            try {
                const team = await Team.findAll({
                    where: { status: 1, }
                })
    
                return res.status(200).json({
                    success: true,
                    message: "Get all Team  successfully",
                    data: team,
                });
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                    error: error.message,
                });
            }
        },
}
