<template>
    <div class="wrapper" v-show="tokensExpiry!== 'Invalid Date'">
        <section>
            Your access token will expire at
            <br/>
            <div class="token-expiry">
                {{tokensExpiry}}
            </div>

        </section>
        <div class="button-wrapper">
            <button @click="refresh" :disabled="isRefreshingToken">
                {{isRefreshingToken? "Refreshing tokens... ":'Simulate imminent token expiry'}}
            </button>
            <div class="simulate-explanation">"Simulate imminent token expiry" simulates what happens when we are 10
                minutes from an expiring token - Which is essentially refreshing our tokens and
                resetting the time to expiry. Note that the token below also changes.
            </div>
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
                return this.$store.getters.tokensExpiry ? formatDate(this.$store.getters.tokensExpiry, "hh:mm:ss") : "";
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

    .button-wrapper {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    .simulate-explanation {
        opacity: 0.8;
        font-size: 11px;
        padding: 10px 0;
        max-width: 500px;
    }

    .token {
        font-size: 12px;
        bottom: 20px;
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