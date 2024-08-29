<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div
    className="hero bg-base-200 py-12 mb-8 bg-gradient-to-br from-indigo-950 to-teal-950 rounded-3xl"
  >
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1
          className="text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"
        >
          Hello there
        </h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
