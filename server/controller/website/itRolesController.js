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
    },
//     createRole: async (req, res) => {
//     try {
//         const {
//             It_role_id,
//             first_name,
//             last_name,
//             email,
//             phone,
//             just_confirm,
//             company_name,
//             job_title,
//             type_of_hire,
//             number_of_job,
//             help,
//             position,
//         } = req.body;
//         let imagePath = "";

//         if (req.files && req.files.image) {
//             const images = req.files.image;
//             imagePath = await uploadImage(images);
//         }

//         // Mapping for type of hire
//         const typeOfHireMapping = {
//             1: "Contractors",
//             2: "Permanent Hires",
//             3: "Project-Based / Bulk Staffing",
//             4: "I'm Not Sure"
//         };

//         // You would need to fetch the IT role name from database based on It_role_id
//         // For example:
//         const itRole = await ItRole.findByPk(It_role_id);
//         const itRoleName = itRole ? itRole.name : "Not specified";

//         const role = await HireingRole.create({
//             It_role_id,
//             first_name,
//             last_name,
//             email,
//             phone,
//             just_confirm,
//             company_name,
//             job_title,
//             type_of_hire,
//             number_of_job,
//             help,
//             image: imagePath,
//             position,
//         });

//         // Respond to client first
//         res.status(201).json({
//             success: true,
//             message: "Role added successfully",
//             data: role
//         });

//         // Proceed to send emails in background
//         setImmediate(async () => {
//             try {
//                 const hireTypeText = typeOfHireMapping[type_of_hire] || "Not specified";

//                 // Send confirmation email to user
//                 await sendEmail({
//                     email: email,
//                     subject: `Thank you for your hiring request, ${first_name}!`,
//                     message: `
//                         <h1>Hello ${first_name} ${last_name},</h1>
//                         <p>We've received your hiring request and will contact you soon.</p>
//                         <p><strong>Summary:</strong></p>
//                         <p>IT Role: ${itRoleName}</p>
//                         <p>Company: ${company_name}</p>
//                         <p>Job Title: ${job_title}</p>
//                         <p>Type of Hire: ${hireTypeText}</p>
//                         <p>Number of Jobs: ${number_of_job}</p>
//                         <p>Phone: ${phone}</p>
//                         <p>Additional Help Needed: ${help || 'None'}</p>
//                     `
//                 });

//                 // Send notification to admin
//                 if (process.env.ADMIN_EMAIL) {
//                     await sendEmail({
//                         email: process.env.ADMIN_EMAIL,
//                         subject: `New Hiring Request: ${first_name} ${last_name}`,
//                         message: `
//                             <h1>New Hiring Request</h1>
//                             <p>Name: ${first_name} ${last_name}</p>
//                             <p>Email: ${email}</p>
//                             <p>Phone: ${phone}</p>
//                             <p>Company: ${company_name}</p>
//                             <p>IT Role Needed: ${itRoleName}</p>
//                             <p>Job Title: ${job_title}</p>
//                             <p>Type of Hire: ${hireTypeText}</p>
//                             <p>Number of Jobs: ${number_of_job}</p>
//                             <p>Position: ${position}</p>
//                             <p>Additional Help Needed: ${help || 'None'}</p>
//                             <p>Just Confirm: ${just_confirm ? 'Yes' : 'No'}</p>
//                         `
//                     });
//                 }
//             } catch (emailError) {
//                 console.error("Email sending failed:", emailError);
//             }
//         });

//     } catch (error) {
//         console.error("Error adding role:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Something went wrong",
//             error: error.message,
//         });
//     }
// }

}
