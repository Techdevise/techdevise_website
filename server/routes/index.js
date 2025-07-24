var express = require('express');
const authController = require('../controller/admin/authController');
const jobsController = require('../controller/admin/jobsController');
const contactUsController = require('../controller/admin/contactUsController');
const itRolesController = require('../controller/admin/itRolesController');
const blogController = require('../controller/admin/blogController');
const settingController = require('../controller/admin/settingController');
const sliderController = require('../controller/admin/sliderController');
const qualityController = require('../controller/admin/qualityController');
const galleryController = require('../controller/admin/galleryController');
const teamController = require('../controller/admin/teamController');
var router = express.Router();
const authMiddleware = require("../middleware/authMiddleware").isAuthenticated;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',authController.loginPage)
router.post('/login',authController.login_post)
router.get('/logout', authController.logout)
router.use(authMiddleware)
router.get('/dashboard',authController.dashboard)

router.get('/jobsliting',jobsController.jobTitleListing)
router.put('/jobsliting/:id/status', jobsController.updateStatusJob)
router.get('/jobsubliting/:job_id',jobsController.jobSubTitleListing)
router.get('/jobsub_Create/:job_id', jobsController.createPageSub);
router.post('/jobsub_Create/create', jobsController.addSubJob);
router.put('/jobsubliting/:id/status', jobsController.updateStatusSub)

router.get('/slider',sliderController.sliderLiting)
router.get('/slider/:type', sliderController.sliderLiting)
router.get('/slider_add',sliderController.addsliderPage)
router.post('/slider/add',sliderController.addSlider)
router.get('/slider_Edit/:id',sliderController.editPage)
router.get('/slider_View/:id',sliderController.viewPage)
router.post('/slider/:id/update',sliderController.updateSlider)
router.put('/slider/:id/status', sliderController.updateStatus)
router.delete('/slider/:id/delete', sliderController.deleteSlider)

router.get('/quality',qualityController.qualityLiting)
router.get('/quality/:type', qualityController.qualityLiting)
router.get('/quality_add',qualityController.addqualityPage)
router.post('/quality/add',qualityController.addQuality)
router.get('/quality_Edit/:id',qualityController.editPage)
router.get('/quality_View/:id',qualityController.viewPage)
router.post('/quality/:id/update',qualityController.updateQuality)
router.put('/quality/:id/status', qualityController.updateStatus)
router.delete('/quality/:id/delete', qualityController.deleteQuality)

router.get('/jobs',jobsController.jobListing)
router.get('/jobs/:id',jobsController.viewPage)
router.delete('/jobs/:id/delete',jobsController.delete_JobPosition)


router.get('/joboption',jobsController.jobOptionList)
router.get('/joboptionCreate',jobsController.createPage)
router.post('/joboption/create',jobsController.addJobOption)
router.put('/joboption/:id/status', jobsController.updateStatus)
router.get('/joboption/:id', jobsController.editPage)
router.post('/joboption/:id/update', jobsController.updateJobOption);

router.get('/careers',jobsController.careerListing)
router.get('/careers/:id',jobsController.viewPageCareer)

router.get('/cms/:id', authController.listingCms);
router.post('/cms/:id', authController.cmsEditpost);

router.get('/setting/:id', settingController.listingSetting);
router.post('/setting/:id', settingController.settingEditpost);

router.get('/contact_us', contactUsController.contactListing);
router.get('/contact_us/:id', contactUsController.contactView);
router.delete('/contact_us/:id/delete', contactUsController.deleteContect_us);
router.get('/experts', contactUsController.expertListing);
router.get('/experts/:id', contactUsController.expertView);
router.delete('/experts/:id/delete', contactUsController.delete_SpeakExperts);

router.get('/roles', itRolesController.itroleListing);
router.get('/roles/:id', itRolesController.viewRoles);
router.delete('/roles/:id/delete', itRolesController.deleteRole);


router.get('/blogs',blogController.blogListing)
router.get('/blog_Create',blogController.createPage)
router.post('/blogs/create',blogController.addBlogOption)
router.put('/blogs/:id/status', blogController.updateStatus)
router.get('/blogs/:id', blogController.editPage)
router.post('/blogs/:id/update', blogController.updateBlogOption);
router.delete('/blogs/:id/delete', blogController.deleteBlog);

router.get('/team',teamController.teamListing)
router.get('/team_Create',teamController.createPage)
router.post('/team/create',teamController.addTeam)
router.put('/team/:id/status', teamController.updateStatus)
router.get('/team/:id', teamController.editPage)
router.post('/team/:id/update', teamController.updateTeam);
router.delete('/team/:id/delete', teamController.deleteTeam);

router.get('/gallery',galleryController.galleryLiting)
router.get('/gallery/:type',galleryController.galleryLiting)
router.get('/gallery_create',galleryController.addgalleryPage)
router.post('/gallery/create',galleryController.addGallery)
router.put('/gallery/:id/status',galleryController.updateStatus)
router.delete('/gallery/:id/delete',galleryController.deleteGallery)

module.exports = router;
