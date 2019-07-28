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
    background: #252A34;
    color: #E3FDFD;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-family: 'Rufina', serif;
    margin: 0 10px;
  }

  ul {
    display: flex;
    margin: 0;
    li {
      list-style-type: none;
      font-size: 1.2rem;
      padding: 0 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-family: 'Scada', sans-serif;
      
      span {
        display: block;
      }
    }
  }
</style>
