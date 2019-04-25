<template>
    <div>
        <div>
            Welcome home!
        </div>
        <div>
            <button @click="authenticate('google')">auth Google</button>
        </div>
    </div>
</template>

<script>
import { authMixin } from '../mixins/authMixin'

export default {
    mixins: [ authMixin ],
}
</script>

<style lang="scss">
</style>