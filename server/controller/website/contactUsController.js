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
    },

//         add_Contact: async (req, res) => {
//         try {
//             const {
//                 first_name,
//                 last_name,
//                 email,
//                 phone,
//                 job_title,
//                 message,
//                 launch_timeline,
//                 date,
//                 time
//             } = req.body;

//             // Mapping for job titles
//             const jobTitles = {
//                 1: "Entrepreneur",
//                 2: "Manager",
//                 3: "Director",
//                 4: "C-Level",
//                 5: "Student",
//                 6: "Others"
//             };

//             // Mapping for launch timelines
//             const launchTimelines = {
//                 1: "Immediately",
//                 2: "2-3 Months",
//                 3: "4-6 Months",
//                 4: "After 6 Months"
//             };

//             const datetimeString = `${date}T${time}`;
//             const datetime = moment(datetimeString).toISOString();

//             const newContact = await ContactUs.create({
//                 first_name,
//                 last_name,
//                 email,
//                 phone,
//                 message,
//                 job_title,
//                 launch_timeline,
//                 time,
//                 date: datetime,
//             });

//             // Respond to client FIRST
//             res.status(201).json({
//                 success: true,
//                 message: "Contact created and confirmation email will be sent",
//                 data: newContact
//             });

//             // Proceed to send emails in background
//             setImmediate(async () => {
//                 try {
//                     const jobTitleText = jobTitles[job_title] || "Not specified";
//                     const timelineText = launchTimelines[launch_timeline] || "Not specified";

//                     // Send confirmation email to user
//                     await sendEmail({
//                         email: email,
//                         subject: `Thank you for contacting us, ${first_name}!`,
//                         message: `
//             <h1>Hello ${first_name} ${last_name},</h1>
//             <p>We've received your message and will contact you soon.</p>
//             <p><strong>Summary:</strong></p>
//             <p>Job Title: ${jobTitleText}</p>
//             <p>Launch Timeline: ${timelineText}</p>
//             <p>Phone: ${phone}</p>
//             <p>Message: ${message}</p>
//           `
//                     });

//                     // Send notification to admin
//                     if (process.env.ADMIN_EMAIL) {
//                         await sendEmail({
//                             email: process.env.ADMIN_EMAIL,
//                             subject: `New Contact: ${first_name} ${last_name}`,
//                             message: `
//               <h1>New Contact Submission</h1>
//               <p>Name: ${first_name} ${last_name}</p>
//               <p>Email: ${email}</p>
//               <p>Phone: ${phone}</p>
//               <p>Job Title: ${jobTitleText}</p>
//               <p>Launch Timeline: ${timelineText}</p>
//               <p>Message: ${message}</p>
//               <p>Preferred Contact Time: ${time} on ${date}</p>
//             `
//                         });
//                     }
//                 } catch (emailError) {
//                     console.error("Email sending failed:", emailError);
//                 }
//             });

//         } catch (error) {
//             console.error("Error:", error);
//             return res.status(500).json({
//                 success: false,
//                 message: "Error processing request",
//                 error: error.message
//             });
//         }
//     },
//       add_Experts: async (req, res) => {
//     try {
//         const {
//             fullname,
//             email,
//             phone,
//             company_name,
//             job_title,
//             message,
//             launch_timeline,
//             budget,
//         } = req.body;

//         // Split full name into first and last name if available
//         const nameParts = fullname.trim().split(" ");
//         const first_name = nameParts[0] || "";
//         const last_name = nameParts.slice(1).join(" ") || "";

//         // Create expert record
//         const newExpert = await SpeakExperts.create({
//             fullname,
//             email,
//             phone,
//             message,
//             job_title,
//             launch_timeline,
//             company_name,
//             budget
//         });

//         res.status(201).json({
//             success: true,
//             message: "Speak with Expert created successfully",
//             data: newExpert,
//         });

//         // Mappings
//         const jobTitles = {
//             1: "Entrepreneur",
//             2: "Manager",
//             3: "Director",
//             4: "C-Level",
//             5: "Student",
//             6: "Others"
//         };

//         const launchTimelines = {
//             1: "Immediately",
//             2: "2-3 Months",
//             3: "4-6 Months",
//             4: "After 6 Months"
//         };

//         // Send emails asynchronously
//         setImmediate(async () => {
//             try {
//                 const jobTitleText = jobTitles[job_title] || "Not specified";
//                 const timelineText = launchTimelines[launch_timeline] || "Not specified";

//                 // Email to user
//                 await sendEmail({
//                     email,
//                     subject: `Thank you for contacting us, ${first_name}!`,
//                     message: `
//                         <h1>Hello ${first_name} ${last_name},</h1>
//                         <p>We've received your message and will contact you soon.</p>
//                         <p><strong>Summary:</strong></p>
//                         <ul>
//                             <li>Job Title: ${jobTitleText}</li>
//                             <li>Launch Timeline: ${timelineText}</li>
//                             <li>Phone: ${phone}</li>
//                             <li>Message: ${message}</li>
//                         </ul>
//                     `
//                 });

//                 // Email to admin
//                 if (process.env.ADMIN_EMAIL) {
//                     await sendEmail({
//                         email: process.env.ADMIN_EMAIL,
//                         subject: `New Contact: ${first_name} ${last_name}`,
//                         message: `
//                             <h1>New Contact Submission</h1>
//                             <ul>
//                                 <li>Name: ${first_name} ${last_name}</li>
//                                 <li>Email: ${email}</li>
//                                 <li>Phone: ${phone}</li>
//                                 <li>Company Name: ${company_name}</li>
//                                 <li>Job Title: ${jobTitleText}</li>
//                                 <li>Launch Timeline: ${timelineText}</li>
//                                 <li>Budget: ${budget}</li>
//                                 <li>Message: ${message}</li>
//                             </ul>
//                         `
//                     });
//                 }
//             } catch (emailError) {
//                 console.error("Email sending failed:", emailError);
//             }
//         });

//     } catch (error) {
//         console.error("Error adding Speak with Expert position:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Something went wrong",
//             error: error.message,
//         });
//     }
// }

}