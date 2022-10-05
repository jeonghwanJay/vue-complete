<template>
  <div>
    <section>
      <!-- <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <slot name="username">{{itemInfo.user}}</slot> -->
          <!-- <router-link v-bind:to="`/user/${itemInfo.user}`">{{ itemInfo.user}}</router-link> -->
          <!-- <div class="time">
            <slot name="time">{{itemInfo.time_ago}}</slot>
          </div>
        </div>
      </div> -->
      <user-profile :info="itemInfo">
        <div slot="username">{{itemInfo.user}}</div>
        <template slot="time">{{itemInfo.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{itemInfo.title}}</h2>
      </section>
    <section>
      <div v-html="itemInfo.content">{{itemInfo.content}}</div>
    </section>
    
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
export default {
  components: {
    UserProfile,
  },
  computed: {
    itemInfo() {
      return this.$store.state.item
    }
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  padding: 0.5rem;
  align-items: center;
}
.fa-solid {
  font-size: 2rem;
}
.user-description {
  margin-left: 8px;
}
.time {
  font-size: 0.8rem;
}
</style>