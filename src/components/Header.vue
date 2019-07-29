<template>
  <header>
    <h1><span>Harvard Art</span>Musem Explorer</h1>
    <ul>
      <li>
        <router-link to="/">
            Home
        </router-link>
      </li>
      <li>
        <router-link to="/floor/1">
           Floor<span>1</span>
        </router-link>
      </li>
      <li>
        <router-link to="/floor/2">
          Floor<span>2</span>
        </router-link>
      </li>
      <li>
        <router-link to="/floor/3">
          Floor<span>3</span>
        </router-link>
      </li>
      <li>
        <router-link to="/floor/4">
          Floor<span>4</span>
        </router-link>
      </li>
      <li>
        <router-link to="/floor/5">
          Floor<span>5</span>
        </router-link>
      </li>
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
    font-size: 1.5rem;
    margin: 5px 10px;
  }

  ul {
    display: flex;
    margin: 0;

    li {
      list-style-type: none;
      font-size: 1.1rem;
      font-family: 'Scada', sans-serif;
      
      span {
        display: block;
      }

      a {
        color: #E3FDFD;
        text-decoration: none;
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        padding: 0 20px;

        &:hover {
          color: #252A34;
          cursor: pointer;
        }
      }

      .router-link-exact-active {
        background-color: #E3FDFD;
        color: #252A34;
      }

      &:hover {
        background-color: #E3FDFD;
        cursor: pointer;
      }
    }
  }
</style>
