const { SpeakExperts, ContactUs } = require("../../models");

const moment = require("moment");


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

            // Validate date format (YYYY-MM-DD)
            // if (!moment(date, "YYYY-MM-DD", true).isValid()) {
            //     return res.status(400).json({
            //         success: false,
            //         message: "Invalid date format. Please use YYYY-MM-DD format."
            //     });
            // }

            // Validate time format (HH:mm or HH:mm:ss)
            // if (!moment(time, "HH:mm:ss", true).isValid() &&
            //     !moment(time, "HH:mm", true).isValid()) {
            //     return res.status(400).json({
            //         success: false,
            //         message: "Invalid time format. Please use HH:mm or HH:mm:ss format."
            //     });
            // }

            // Create a proper datetime string in ISO format
            const datetimeString = `${date}T${time}`;
            const datetime = moment(datetimeString).toISOString();

            const newContact = await ContactUs.create({
                first_name,
                last_name,
                email,
                phone,
                message,
                job_title,
                launch_timeline,
                time,
                date: datetime, // Store as proper ISO datetime
            });

            return res.status(201).json({
                success: true,
                message: "Contact created successfully",
                data: newContact,
            });
        } catch (error) {
            console.error("Error adding contact:", error);
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