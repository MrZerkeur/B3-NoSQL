const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getProfiles);
router.get('/:id', controller.getProfileById);
router.put('/:id', controller.updateProfile);
router.put('/:id/information', controller.updateInformation);
router.delete('/:id', controller.deleteProfile);
router.post('/', controller.createProfile);
router.post('/:id/experience', controller.addExperience);
router.post('/:id/skills', controller.addSkill);
router.delete('/:id/experience/:exp', controller.deleteExperience);
router.delete('/:id/skills/:skill', controller.deleteSkill);

module.exports = router;