import Vue from "vue";
import Vuex from "vuex";
import addSeconds from "date-fns/add_seconds";

Vue.use(Vuex);
const Store = new Vuex.Store({
    state() {
        return {
            idToken: localStorage.getItem("idToken"),
            accessToken: localStorage.getItem("accessToken"),
            tokensExpiry: localStorage.getItem("tokensExpiry"),
        };
    },
    modules: {},
    mutations: {
        update_auth_tokens(state, tokenData) {
            localStorage.setItem("accessToken", tokenData.access_token || tokenData.accessToken); //sometimes tokens are in snake case and other times they are in camelcase :/
            localStorage.setItem("access_token", tokenData.access_token || tokenData.accessToken);
            state.accessToken = localStorage.getItem("accessToken");

            localStorage.setItem("idToken", tokenData.id_token || tokenData.idToken);
            localStorage.setItem("id_token", tokenData.id_token || tokenData.idToken);
            state.idToken = localStorage.getItem("idToken");

            const tokensExpiry = addSeconds(new Date(), tokenData.expires_in || tokenData.expiresIn);
            state.tokensExpiry = tokensExpiry;
            localStorage.setItem("tokensExpiry", tokensExpiry);
            localStorage.setItem("expires_in", tokensExpiry);
        }
    },
    actions: {},

    getters: {
        tokensExpiry: state => state.tokensExpiry,
        accessToken: state => state.accessToken,
        idToken: state => state.idToken
    }
});

export default Store;
