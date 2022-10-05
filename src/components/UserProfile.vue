<template>    
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 내용 -->
        </slot>
      <div class="time">
        <!-- time : {{info.created}} -->
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 내용 -->
        </slot>
         <slot name="karma"></slot>
      </div>
    </div>
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