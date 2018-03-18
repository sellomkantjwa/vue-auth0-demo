<template>
    <div class="topnav">
        <div class="nav-item" @click="logout">logout</div>
    </div>

</template>

<script>
    import {logout} from "../session-manager";

    export default {
        name: "Navbar",
        methods: {
            logout
        }
    };
</script>

<style scoped>
    .topnav {
        overflow: hidden;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #052F3F;
        min-height: 35px;
        opacity: 0.8;

    }

    .topnav .nav-item {
        cursor: pointer;
        float: right;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        font-size: 17px;

    }

    .topnav .nav-item:hover {
        background-color: #ddd;
        color: black;
    }

    .topnav .nav-item.active {
        background-color: #4CAF50;
        color: white;
    }
</style>