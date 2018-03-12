const express = require('express');
const router = express.Router();

const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const homeController = require('../controllers/homeController');

router.get('/', homeController.home)
router.get('/home', homeController.home)
router.get('/about', aboutController.about)
router.get('/contact', contactController.contact)

module.exports = router;





















// router.get('/magasins/add', authenticationController.isLoggedIn, magasinController.addMagasin);
// router.get('/magasins/:id/edit', authenticationController.isLoggedIn, magasinController.editMagasin);
// router.get('/about', pagesController.about);
// router.get('/contact', pagesController.contact);
// router.post('/magasins/add',
//     magasinController.upload,
//     magasinController.resize,
//     magasinController.createMagasin);
// router.post('/magasins/add/:id',
//     magasinController.upload,
//     magasinController.resize,
//     magasinController.updateMagasin);