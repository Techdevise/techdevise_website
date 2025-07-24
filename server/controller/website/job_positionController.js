const { JobPosition, JobTitle, JobOption, JobSubTitle } = require('../../models');

const { validationResult } = require("express-validator");
const { uploadPdf } = require('../../utils/uploadPdf');
module.exports = {

  //  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   JOB TITLE     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></JOB>

  job_listing: async (req, res) => {
    try {
      const getJobs = await JobTitle.findAll({

        where: { status: 1 }
      })

      return res.status(200).json({
        success: true,
        message: "Get all job  successfully",
        data: getJobs,
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
  jobSub_listing: async (req, res) => {
    try {
      const { job_id } = req.params
      const jobtitle = await JobTitle.findOne({
        where: { id: job_id, status: 1 }
      })
      const getJobs = await JobSubTitle.findAll({
        where: { job_id: jobtitle.id, status: 1 },
        order: [['id', 'DESC']]
      })

      return res.status(200).json({
        success: true,
        message: "Get all  sub job  successfully",
        data: getJobs,
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



  job_Option_Listing: async (req, res) => {
    try {

      const { job_id } = req.params;
      const jobt = await JobSubTitle.findOne({
        where: { id: job_id, }
      })
      const getJobs = await JobOption.findOne({
        where: { sub_job_id: job_id, },
        include: [
          {
            model: JobSubTitle,
            as: 'jobSub_title'
          }
        ],
      })

      return res.status(200).json({
        success: true,
        message: "Get all JobOption  successfully",
        data: getJobs,
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

  addJobPosition: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const {
        first_name,
        last_name,
        email,
        phone,
        country_code,
        message,
        type,
        linkedin_profile,
        about_us,
        jobOption_id,
      } = req.body;

      let pdfFilePath = "";

      if (req.files && req.files.pdf_file) {
        const pdfFile = req.files.pdf_file;
        pdfFilePath = await uploadPdf(pdfFile);
      }

      const jobOption = await JobOption.findOne({ where: { id: jobOption_id } });
      if (!jobOption) {
        return res.status(404).json({
          success: false,
          message: "Invalid Job Option ID",
        });
      }

      const newJob = await JobPosition.create({
        jobOption_id,
        first_name,
        last_name,
        email,
        phone,
        country_code,
        message,
        type: 1,
        linkedin_profile,
        about_us,
        pdf_file: pdfFilePath,
      });

      return res.status(201).json({
        success: true,
        message: "Job position added successfully",
        data: {
          job_position: newJob,
          job_option: jobOption,
        }
      });
    } catch (error) {
      console.error("Error adding job position:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  },



  Carreer_listing: async (req, res) => {
    try {
      const getJobs = await JobTitle.findAll({

        where: { status: 1, type: 1 }
      })

      return res.status(200).json({
        success: true,
        message: "Get all Careers  successfully",
        data: getJobs,
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

  addCareer: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      let {
        first_name,
        last_name,
        email,
        phone,
        country_code,
        message,
        located,
        questions_employe,
        linkedin_profile,
        about_us,
        jobOption_id,
      } = req.body;

      if (typeof questions_employe === 'string') {
        questions_employe = [questions_employe];
      }

      if (Array.isArray(questions_employe)) {
        questions_employe = JSON.stringify(
          questions_employe.map((q) => q.trim())
        );
      } else {
        questions_employe = JSON.stringify([]);
      }

      let pdfFilePath = '';
      if (req.files && req.files.pdf_file) {
        const pdfFile = req.files.pdf_file;
        pdfFilePath = await uploadPdf(pdfFile);
      }

      const jobOption = await JobOption.findOne({
        where: { id: jobOption_id },
      });

      if (!jobOption) {
        return res.status(404).json({
          success: false,
          message: 'Invalid Job Option ID',
        });
      }

      const newJob = await JobPosition.create({
        jobOption_id,
        first_name,
        last_name,
        email,
        phone,
        country_code,
        message,
        type: 2,
        located,
        questions_employe,
        linkedin_profile,
        about_us,
        pdf_file: pdfFilePath,
      });

      return res.status(201).json({
        success: true,
        message: 'Career added successfully',
        data: {
          job_position: newJob,
          job_option: jobOption,
        },
      });
    } catch (error) {
      console.error('Error adding Career:', error);
      return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.message,
      });
    }
  }



};
