module.exports = {
    host: "127.0.0.1",
    port: process.env.PORT, // change with production port
    mongoUrl: "mongodb+srv://ram:ram123@cluster0-eywvt.mongodb.net/test?retryWrites=true&w=majority",
    logLevel: process.env.LOG_LEVEL,
    secret: process.env.SECRET,
};
