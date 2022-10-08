import bus from '../utils/bus'

export default {
    mounted() {
        bus.$emit('end:spinner')
    }
    // created() {
    //     bus.$emit('start:spinner')
    //         this.$store.dispatch('FETCH_LIST', this.$route.name)
    //             .then(() => bus.$emit('end:spinner'))
    //             .catch((error) => console.log(error))
    // },
}