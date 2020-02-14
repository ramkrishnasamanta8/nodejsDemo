module.exports = {
    host: "127.0.0.1",
    port: 1234, // change with development port
    //mongoUrl: "mongodb://root:public@192.168.7.74:27017/gikkle", // replace "projectDbName" with a proper db name
    mongoUrl: "mongodb+srv://ram:ram123@cluster0-eywvt.mongodb.net/test?retryWrites=true&w=majority", // replace "projectDbName" with a proper db name
    logLevel: "debug", // can be chenged to error, warning, info, verbose or silly
    secret: "superSuperSecret",
};
