require( "./model" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router( );
const FileUploder = require("../../utilities/multer");

router.post( "/add", FileUploder.single('avatar'), controller.add );
router.put( "/edit/:id", controller.edit );
router.delete( "/delete/:id", controller.delete );
router.get( "/all/:id", controller.all );
router.get( "/all", controller.all );

module.exports = router;