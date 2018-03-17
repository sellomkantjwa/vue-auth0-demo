"use strict";
import Vue from "vue";
import Router from "vue-router";

import Login from "../components/Login";
import LoginCallback from "../components/Login-callback";
import Home from "../components/Home";

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/login-callback",
            name: "login-callback",
            component: LoginCallback
        },
        {
            path: "/",
            name: "home",
            component: Home
        }
    ]
});