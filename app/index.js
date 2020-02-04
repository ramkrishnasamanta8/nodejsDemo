const usersRouter = require( "./users/router" );
const config = require( "./config/router" );
const likes = require( "./likes/router" );
const comments = require( "./comments/router" );
const feeditems = require("./FeedItems/router");
const sections = require("./sections/router");
const transactions = require("./transactions/router");
const transactionInfo = require("./transactionInfo/router");
const features = require("./features/router");
const test = require("./test/router");


//const articlesRouter = require( "./articles/router" );
const sessionRouter = require( "./session/router" );
const validateToken = require( "../middlewares/validateToken" );

module.exports = ( app ) => {
    app.use( "/session", sessionRouter );
    app.use( "/users", usersRouter );
    app.use( "/config", config );
    app.use( "/likes", likes );
    app.use( "/comments", comments );
    app.use( "/feeditems", feeditems );
    app.use( "/sections", sections );
    app.use( "/transactions", transactions );
    app.use( "/transactionInfo", transactionInfo );
    app.use( "/features", features );
    app.use( "/test", test );
    //app.use( "/articles", validateToken, articlesRouter );
};
