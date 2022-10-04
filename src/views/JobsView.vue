<template>
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" v-bind:key="job.data" class="post">
        <div class="point">
          {{job.points || 0}}
        </div>
          <div>
            <p class="news-title">
              <a :href="job.url">{{job.title}}</a>
            </p>
          <small class="link-text">{{job.time_ago}} by 
            <a :href="job.url">{{job.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>


  <!-- <div>
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.data">
      <a v-bind:href="job.url">{{job.title}}</a>
      <small>{{job.time_ago}} {{ job.domain}}</small>
    </p>
  </div> -->
</template>

<script>
export default {
  created() {
  this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
  
}
.post {
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.point {
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>