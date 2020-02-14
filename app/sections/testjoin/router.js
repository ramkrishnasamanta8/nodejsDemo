require( "./model" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router( );

router.post( "/add", controller.add );
router.put( "/edit/:id", controller.edit );
router.delete( "/delete/:id", controller.delete );
router.get( "/all/:id", controller.all );
router.get( "/all", controller.all );

module.exports = router;
