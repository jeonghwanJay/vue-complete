<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
         <div>
            {{info.id}}
         </div>
          <div class="time">
            {{ info.created}}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    props: {
        info: Object,
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