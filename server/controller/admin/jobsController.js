const { JobPosition, JobTitle, JobOption, JobSubTitle } = require("../../models");



module.exports = {


 jobListing: async (req, res) => {
  try {
    const jobs = await JobPosition.findAll({
      include: [
        {
          model: JobOption,
          as: 'joboption',
          include: [
            {
              model: JobTitle,
              as: 'jobtitle',
             
            }
          ],
        }
      ],
      order: [['id', 'DESC']],
      where:{type:1}
 
    });

     
    res.render("pages/jobs/joblist", {
      jobs,
      title: "Job"
    });

  } catch (error) {
    console.log(error);
    const errorMessage = error.message || 'Something went wrong, please try again later.';
    req.flash("error", errorMessage);
    return res.redirect("/admin/dashboard");
  }
},

viewPage: async (req, res) => {
  try {
    const { id } = req.params;
    const job = await JobPosition.findOne({
      where: { id },
      include: [
        {
          model: JobOption,
          as: 'joboption',
          include: [
            {
              model: JobTitle,
              as: 'jobtitle',
              include: [
                {
                  model: JobSubTitle,
                  as: 'jobsubtitle'
                }
              ]
            }
          ]
        }
      ]
    });

    res.render("pages/jobs/jobview", {
      jobs: job,
      title: "Job"
    });

  } catch (error) {
    const errorMessage = error.message || 'Something went wrong, please try again later.';
    req.flash("error", errorMessage);
    return res.redirect("/admin/dashboard");
  }
},






  delete_JobPosition: async (req, res) => {
            try {
              const { id } = req.params;
        
              const con = await JobPosition.findOne({ where: { id } });
             
        
              await con.destroy();
        
              req.flash("success", "Job Position Us deleted successfully.");
               res.json({ success: true, message: 'Job Position deleted successfully' });

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Failed to delete role.';
            req.flash("error", errorMessage);
            res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
        }
          },



  //  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JobOption  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></JobOption>

  jobOptionList: async (req, res) => {
    try {
      const jobs = await JobOption.findAll({
        include: [
          {
            model: JobTitle,
            as: 'jobtitle'
          }
        ],
        order: [['id', 'DESC']]
      });


      res.render("pages/jobs/jobOptionlisting", {
        jobs: jobs,
        title: "JobOption"
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
    const jobs = await JobTitle.findAll();
    const subjobs = await JobSubTitle.findAll();

    res.render("pages/jobs/jobOptionCreate", {
      title: "JobOption",
      jobs,
      subjobs,
    });

  } catch (error) {
    const errorMessage = error.message || 'Something went wrong, please try again later.';
    req.flash("error", errorMessage);
    return res.redirect("/admin/dashboard");
  }
},




  addJobOption: async (req, res) => {
    try {
      const { job_id,sub_job_id, location, responsibilities, requirements, experience } = req.body;
      await JobOption.create({
        job_id,
        sub_job_id,
        location,
        responsibilities,
        requirements,
        experience
      });

      req.flash("success", "Job option created successfully");
      res.redirect("/admin/joboption");
    } catch (error) {
      console.log(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },


  updateStatus: async (req, res) => {
    try {

      const userId = req.params.id;
      const { status } = req.body;

      const job = await JobOption.findOne({
        where: {
          id: userId,
        },
      });
      job.status = status;
      await job.save();

      res.json({
        success: true,
        message: 'Job option status updated successfully',
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
      const job = await JobOption.findOne({
        where: {
          id: id,
        },
      })
      const jobtitle = await JobTitle.findAll();
      res.render("pages/jobs/jobOptionEdit", {
        job: job,
        title: "JobOption",
        jobtitle: jobtitle
      })

    } catch (error) {
      console.log(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  updateJobOption: async (req, res) => {
    try {
      const { job_id, location, responsibilities, requirements, experience } = req.body;
      const jobOptionId = req.params.id;

      const jobOption = await JobOption.findByPk(jobOptionId);
      if (!jobOption) {
        req.flash("error", "Job option not found.");
        return res.redirect("/admin/joboption");
      }

      await jobOption.update({
        job_id,
        location,
        responsibilities,
        requirements,
        experience
      });

      req.flash("success", "Job option updated successfully.");
      res.redirect("/admin/joboption");

    } catch (error) {
      console.error(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      res.redirect("/admin/joboption");
    }
  },






  //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>subjobTitle listing  with add 

  jobTitleListing: async (req, res) => {
    try {
      const jobs = await JobTitle.findAll({

        order: [['id', 'DESC']]
      });
      res.render("pages/jobs/jobtilte", {
        jobs: jobs,
        title: "Job_Sub"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },


  updateStatusJob: async (req, res) => {
    try {

      const userId = req.params.id;
      const { status } = req.body;

      const job = await JobTitle.findOne({
        where: {
          id: userId,
        },
      });
      job.status = status;
      await job.save();

      res.json({
        success: true,
        message: 'jOB title status updated successfully',
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

  jobSubTitleListing: async (req, res) => {
    try {
      const { job_id } = req.params
      const jobtitle = await JobTitle.findOne({
        where: { id: job_id }
      })
      const jobs = await JobSubTitle.findAll({
        where: { job_id: job_id },
        order: [['id', 'DESC']]
      });


      res.render("pages/jobs/jobSub_tilte", {
        jobtitle:jobtitle,
        jobs: jobs,
        title: "Job_Sub"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },


createPageSub: async (req, res) => {
  try {
    const { job_id } = req.params;

    const jobtitle = await JobTitle.findOne({ where: { id: job_id } });

    res.render("pages/jobs/addSubJob", {
      title: "JobOption",
      job_id, // Pass this to the form
      job: jobtitle
    });
  } catch (error) {
    const errorMessage = error.message || 'Something went wrong, please try again later.';
    req.flash("error", errorMessage);
    return res.redirect("/admin/dashboard");
  }
},
  addSubJob: async (req, res) => {
    try {
      const { job_id, location, name } = req.body;
      await JobSubTitle.create({
        job_id,
        name,
        location,
        status:1
      });

      req.flash("success", "Job option created successfully");
      res.redirect(`/admin/jobsubliting/${job_id}`);
    } catch (error) {
      console.log(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
    updateStatusSub: async (req, res) => {
    try {

      const userId = req.params.id;
      const { status } = req.body;

      const job = await JobSubTitle.findOne({
        where: {
          id: userId,
        },
      });
      job.status = status;
      await job.save();

      res.json({
        success: true,
        message: 'jOB title status updated successfully',
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



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Career>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></Career>

  careerListing: async (req, res) => {
  try {
    const career = await JobPosition.findAll({
      include: [
        {
          model: JobOption,
          as: 'joboption',
          include: [
            {
              model: JobTitle,
              as: 'jobtitle',
             
            }
          ],
        }
      ],
      order: [['id', 'DESC']],
      where:{type:2}
 
    });

     
    res.render("pages/Careers/careerlist", {
      career,
      title: "Careers"
    });

  } catch (error) {
    console.log(error);
    const errorMessage = error.message || 'Something went wrong, please try again later.';
    req.flash("error", errorMessage);
    return res.redirect("/admin/dashboard");
  }
},

viewPageCareer: async (req, res) => {
  try {
    const { id } = req.params;
    const career = await JobPosition.findOne({
      where: { id },
      include: [
        {
          model: JobOption,
          as: 'joboption',
          include: [
            {
              model: JobTitle,
              as: 'jobtitle',
              include: [
                {
                  model: JobSubTitle,
                  as: 'jobsubtitle'
                }
              ]
            }
          ]
        }
      ]
    });

    res.render("pages/Careers/careerview", {
      career: career,
      title: "Careers"
    });

  } catch (error) {
    const errorMessage = error.message || 'Something went wrong, please try again later.';
    req.flash("error", errorMessage);
    return res.redirect("/admin/dashboard");
  }
},
}






