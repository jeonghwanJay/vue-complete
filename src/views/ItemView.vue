<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${itemInfo.user}`">{{ itemInfo.user}}</router-link>
          <div class="time">{{ itemInfo.time_ago}}</div>
        </div>
      </div>
      <h2>{{itemInfo.title}}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content">{{itemInfo.content}}</div>
    </section>
    
  </div>
</template>

<script>
export default {
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