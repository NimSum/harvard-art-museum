<template>
  <header>
    <h1><span>Harvard Art</span>Musem Explorer</h1>
    <ul>
      <li>Home</li>
      <li>Floor<span>1</span></li>
      <li>Floor<span>2</span></li>
      <li>Floor<span>3</span></li>
      <li>Floor<span>4</span></li>
      <li>Floor<span>5</span></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
  }
  ul {
    display: flex;
    li {
      list-style-type: none;
      font-size: 1.5rem;
      padding: 0 10px;
    }
  }
</style>
