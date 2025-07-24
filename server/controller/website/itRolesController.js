const { ItRole, HireingRole } = require("../../models");
const { uploadImage } = require("../../utils/uploadPdf");


module.exports = {

    ListingRole: async (req, res) => {
        try {
            const role = await ItRole.findAll({
                where: { status: 0 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Roles  successfully",
                data: role,
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

    createRole: async (req, res) => {
        try {
            const {
                It_role_id,
                first_name,
                last_name,
                email,
                phone,
                just_confirm,
                company_name,
                job_title,
                type_of_hire,
                number_of_job,
                help,

                position,
            } = req.body;
            let imagePath = "";

            if (req.files && req.files.image) {
                const images = req.files.image;
                imagePath = await uploadImage(images);
            }
            const role = await HireingRole.create({
                It_role_id,
                first_name,
                last_name,
                email,
                phone,
                just_confirm,
                company_name,
                job_title,
                type_of_hire,
                number_of_job,
                help,
                image: imagePath,
                position,
            });
            return res.status(201).json({
                success: true,
                message: "Roles added successfully",
                data: role,
            });
        } catch (error) {
            console.error("Error adding role:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

}
