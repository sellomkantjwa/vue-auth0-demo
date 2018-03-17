<template>
    <div>
    </div>
</template>

<script>
    import querystring from "querystring";

    export default {
        name: "LogInCallback",
        mounted() {
            let hashValue = this.$route.hash;
            //after valid login the #token
            // comes back as a hash value no token means user didnt just login
            if (!hashValue) {
                this.$router.push("/login");
            } else {
                try {
                    let tokensString = hashValue.substring(1, hashValue.length); //remove the # in the string
                    let parsedTokens = querystring.parse(tokensString);
                    console.log(JSON.stringify(parsedTokens));
                    this.$store.commit("update_auth_tokens", parsedTokens);
                    this.$router.push("/");
                } catch (e) {
                    this.$router.push("/login");
                }
            }
        }
    };
</script>


<style>
</style>
