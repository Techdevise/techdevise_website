const { SpeakExperts ,ContactUs} = require("../../models");





module.exports = {

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< contact Us add api >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    add_Contact: async (req, res) => {
        try {
            const {
                first_name,
                last_name,
                email,
                phone,
                job_title,
                message,
                launch_timeline,
                date,
                time
            } = req.body;

            const newContact = await ContactUs.create({
                first_name,
                last_name,
                email,
                phone,
                message,
                job_title,
                launch_timeline,
                date,
                time
            });
            return res.status(201).json({
                success: true,
                message: "Contac_us Create successfully",
                data: newContact,
            });
        } catch (error) {
            console.error("Error adding Contac_us position:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    },




    //  Speak with Expart api >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 add_Experts: async (req, res) => {
        try {
            const {
                fullname,
                email,
                phone,
                company_name,
                job_title,
                message,
                launch_timeline,
                budget
            } = req.body;

            const newExpert = await SpeakExperts.create({
                fullname,
                email,
                phone,
                message,
                job_title,
                launch_timeline,
                company_name,
                budget
            });
            return res.status(201).json({
                success: true,
                message: "Speak with Expart Create successfully",
                data: newExpert,
            });
        } catch (error) {
            console.error("Error adding Speak with Expart position:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

}