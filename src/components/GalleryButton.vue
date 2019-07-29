<template>
  <li>
    <p>{{ theme || name }}</p>
  </li>
</template>

<script>
export default {
  name: 'GalleryButton',
  props: ['theme', 'id', 'name']
}
</script>
