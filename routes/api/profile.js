/*eslint-disable no-unused-vars */

// Delete  the eslint diable above when development starts..

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const SnowInfo = require('../../models/SnowInfo.js');
const Profile = require('../../models/Profile.js');
const City = require('../../models/City.js');

//@route Get api/posts/test
//@desc Test post route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
