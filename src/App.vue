<template>
    <div id="app">
        <h1>Vue/Auth0 Session and Token Management</h1>
        <router-view/>
    </div>
</template>

<script>

    import Router from "./router";
    import Store from "./store";
    import {initSession} from "./session-manager";

    export default {
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
        background-color: rgb(0, 105, 146);
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
        width: 200px;
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
