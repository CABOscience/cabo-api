const expressBearer = require("express-bearer-token")
const axios = require("axios")

const axiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:3001',
});

module.exports = (config) => {
    return [
        expressBearer(),
        (req, res, next) => {
            if(req.token) {
                axiosInstance.post("/auth/apiKey", {}, {
                    headers: {
                        Authorization: `Bearer ${req.token}`,
                    }
                })
                .then((response) => {
                    req.user = response.data;
                    next();
                })
                .catch((err) => {
                    //if(err.response.status == 401) {
                    console.error(err);
                    if(err.status == 401) {
                        res.status(401)
                        .json({
                            // TODO use uuid
                            message: "La clé d'api est invalide"
                        })
                        .end();
                    } else {
                        console.error(err);
                        res.status(500).end();
                    }
                });
                return;
            } else if(!req.session.passport || !req.session.passport.user) { // No passport session
                req.user = {
                    role: "unauth",
                }
            } else {
                req.user = req.session.passport.user;
            }

            next()
        },
    ]
}
