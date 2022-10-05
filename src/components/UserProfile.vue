<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
         <div>
            <slot name="username">{{info.id}}</slot>
         </div>
          <div class="time">
            <slot name="time">{{info.created}}</slot>
          </div>
          <div>
            <slot name="karma"></slot>
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