import Store from "../store/index";
import Router from "../router/index";
import isAfter from "date-fns/is_after";
import subtractMinutes from "date-fns/sub_minutes";
import addSeconds from "date-fns/add_seconds";
import differenceInMinutes from "date-fns/difference_in_minutes";
import differenceInMilliSeconds from "date-fns/difference_in_milliseconds";
import {WebAuth} from "auth0-js";

const auth0 = new WebAuth({
    responseType: "token id_token",
    domain: process.env.DEMO_AUTH0_DOMAIN,
    clientID: process.env.DEMO_AUTH0_CLIENT_ID,
    redirectUri: "http://localhost:8080/login-callback"
});

export {auth0};
export {initSession};
export {refreshTokens};

export default {
    initSession,
    refreshTokens,
    auth0,
};


function initSession() {
    return new Promise((resolve) => {
        let tokenExpiryDate = Store.getters["tokensExpiry"];
        if (!tokenExpiryDate) {
            console.log("No token expiry date. user probably never logged in");
            return Router.push("/login");
        }

        let tenMinutesBeforeExpiry = subtractMinutes(tokenExpiryDate, 10);//If the token has expired or will expire in the next 30 minutes
        const now = new Date();

        if (isAfter(now, tenMinutesBeforeExpiry)) { //If the token has expired or will expire in the next 10 minutes
            console.log("Token expired/will expire in the next 1 minutes");
            return Router.push("/login");
        }

        console.log("Token Ok. Expiring at " + tokenExpiryDate);
        setTimeout(refreshTokens, differenceInMilliSeconds(tenMinutesBeforeExpiry, now));
    });
}

function refreshTokens() {
    return new Promise((resolve) => {
        auth0.checkSession({}, function (err, authResult) {
            if (err) {
                Router.push("/login");
            }
            Store.commit("update_auth_tokens", authResult);
            const tokenExpiryDate = addSeconds(new Date(), authResult.expiresIn);
            const tenMinutesBeforeExpiry = subtractMinutes(tokenExpiryDate, 10);
            const now = new Date();
            setTimeout(refreshTokens, differenceInMilliSeconds(tenMinutesBeforeExpiry, now));
            resolve();
        });
    });
}
