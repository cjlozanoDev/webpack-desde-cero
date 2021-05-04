<template>
  <div :style="backgroundImage" />  
</template>

<script>
export default {
  name: 'CatImage',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundImage() {
      return {
        "background-image": `url(${this.url})`,
        "background-size": "cover",
        "background-position": "center"
      };
    }
  }
}
</script>