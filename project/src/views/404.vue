<template>
  <div class="not-found">
    <p class="text">404</p>
    <router-link to="/">
      <span> back to main page </span>
    </router-link>
  </div>
</template>

<style lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: -50px;
  font-weight: bold;
  background-color: $very-dark-blue-text;
  height: calc(100vh - 80px);
  .text {
    font-size: 150px;
    margin-top: 0;
    margin-bottom: 5px;
    color: $White;
  }
  a {
    font-size: 32px;
    text-transform: capitalize;
    color: $dark-gray;
  }
}
</style>