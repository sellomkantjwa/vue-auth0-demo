<template>
    <div class="wrapper">
        <section>
            Your access token will expire at
            <br/>
            <div class="token-expiry">
                {{tokensExpiry}}
            </div>

        </section>
        <div>
            <button @click="refresh" :disabled="isRefreshingToken">{{isRefreshingToken? "Refreshing... ":"Refresh now"}}
            </button>
        </div>
        <div class="token">access token = {{accessToken}}</div>
    </div>
</template>

<script>
    import formatDate from "date-fns/format";
    import {refreshTokens} from "../session-manager";

    export default {
        name: "home",
        data() {
            return {
                isRefreshingToken: false
            };
        },
        computed: {
            tokensExpiry() {
                return formatDate(this.$store.getters.tokensExpiry, "hh:mm:ss");
            },
            accessToken() {
                return this.$store.getters.accessToken;
            }
        },
        methods: {
            refresh() {
                this.isRefreshingToken = true;
                refreshTokens().then(() => {
                    this.isRefreshingToken = false;
                });
            }
        },
    };
</script>

<style scoped>

    .token {
        font-size: 12px;
        bottom: 50px;
        position: absolute;
        text-align: center;
        width: 100%;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .token-expiry {
        font-size: 150px;
        Opacity: 0.8;
    }

    section {
        padding: 50px;
        font-size: 24px;
        opacity: 0.8;

    }

</style>