<template>
    <div id="app">
        <navbar/>
        <h1>Vue/Auth0 Session and Token Management</h1>
        <div class="project-description-wrapper">
            <div class="project-description">This demo is a supporting resource for the article <a
                    target="_blank"
                    href="https://medium.com/@giza182/managing-user-session-and-refreshing-auth0-tokens-in-a-vuejs-application-65eb29c309bc">Managing
                User Session And Refreshing Auth0 Tokens In a Vuejs Application.</a>
                It demonstrates how to store and
                refresh user tokens unobtrusively and without using a refresh token. The token refreshes automatically
                10 minutes before expiry, but you don't need to wait till the token actually expires to observe the
                refresh process, you can simulate an expiring
                token by clicking the big blue button below. <a
                        href="https://github.com/sellomkantjwa/vue-auth0-demo" target="_blank">Source</a>
                <br/>

            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>

    import Router from "./router";
    import Store from "./store";
    import {initSession} from "./session-manager";
    import Navbar from "./components/Navbar";

    export default {
        components: {Navbar},
        name: 'app',
        data() {
            return {};
        },
        mounted() {
            initSession();
        },
        router: Router,
        store: Store
    };


</script>

<style>

    .project-description-wrapper {
        display: flex;
        text-align: center;
        justify-content: center;
        width: 100%;

    }

    .project-description {
        max-width: 991px;
        opacity: 0.8;
        font-size: 14px;
    }

    .project-description a {
        color: #fff;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;
        height: calc(100vh - 80px);
        margin-top: 80px;
    }

    body {
        margin: 0;
        background-color: #006992;
    }

    h1, h2 {
        font-weight: bold;
        Opacity: 0.8;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    button, .button {
        padding: 10px;
        min-height: 75px;
        border-radius: 2px;
        border: 1px solid #052F3F;
        cursor: pointer;
        color: #fff;
        background-color: #052F3F;
        transition: all 0.3s ease-in-out;
        opacity: 0.8;
        width: 350px;
        font-size: 20px;
    }

    button:hover, .button:hover {
        transform: scale(1.1);
    }

    button:active {
        /*transform: scale(0.9);*/

    }

    button:disabled {
        opacity: 0.4;
        cursor: default;
    }

</style>
