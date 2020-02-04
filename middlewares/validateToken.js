const jwt = require("jsonwebtoken");

const logger = require("../utilities/logger");
const config = require("../config");

module.exports = function (req, res, next) {
	let tokenB = req.body.token || req.query.token || req.headers["authorization"];

	if (tokenB) {
		const token = tokenB.replace('Bearer ','');
		return jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				logger.error(err);
				return res.json({success: false, message: "Failed to authenticate token.",});
			}
			req.user = decoded;
			return next();
		});
	}
	return res.unauthorized();
};
