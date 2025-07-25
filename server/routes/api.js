var express = require('express');
const { jobValidationRules } = require("../validators/jobValidator");
const job_positionController = require('../controller/website/job_positionController');
const contactUsController = require('../controller/website/contactUsController');
const itRolesController = require('../controller/website/itRolesController');
const blogController = require('../controller/website/blogController');
const cmsController = require('../controller/website/cmsController');
const sliderController = require('../controller/website/sliderController');
var apiRouter = express.Router();

apiRouter.post('/job_position', jobValidationRules, job_positionController.addJobPosition)
apiRouter.get('/jobs', job_positionController.job_listing)
apiRouter.get('/careers', job_positionController.Carreer_listing)
apiRouter.post('/jobs_Options', job_positionController.addCareer)
apiRouter.get('/sub_jobs/:job_id', job_positionController.jobSub_listing)
apiRouter.get('/jobs_Options/:job_id', job_positionController.job_Option_Listing)
apiRouter.post('/contact_us', contactUsController.add_Contact)
apiRouter.post('/experts', contactUsController.add_Experts)

apiRouter.get('/roles', itRolesController.ListingRole)
apiRouter.post('/roles/create', itRolesController.createRole)

apiRouter.get('/blogs', blogController.listing_blogs)
apiRouter.get('/blogs/:id', blogController.view_blogs)
apiRouter.get('/teams', blogController.listing_Team)
apiRouter.get('/techTeam', blogController.listing_TechTeam)
apiRouter.get('/officeActivity', blogController.listing_Office_Activity)
apiRouter.get('/cms', cmsController.listingCms)



apiRouter.get('/react_native', sliderController.listing_React)
apiRouter.get('/ai', sliderController.listing_Ai_Integrated)
apiRouter.get('/blockchain', sliderController.listing_Blockchain)
apiRouter.get('/seamless', sliderController.listing_Seamless)
apiRouter.get('/blockchain_con', sliderController.listing_Blockchain_Consulting)
apiRouter.get('/ai_service', sliderController.listing_Ai_Service)



apiRouter.get('/digital_As', sliderController.listing_Assurance)
apiRouter.get('/digital_Eng', sliderController.listing_Engineering)
module.exports = apiRouter;
