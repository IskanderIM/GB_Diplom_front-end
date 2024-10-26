<template lang="pug">
  div.breadcrumbs
    router-link(
      v-for="link, i in breadcrumbsLinks"
      :key="i"
      :to="link"
    ).breadcrumps__level {{link.meta.title}}
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    computed: {
      breadcrumbsLinks () {
        let tmp = []
        if (this.$route.matched) {
          this.$route.matched.forEach(link => {
            tmp.push(Object.assign({meta: {title: 'Title not found in meta'}}, link))
          })
        }
        if (tmp.length === 0) {
          tmp.push({path: '/', meta: {title: 'Home'}})
        }
        return tmp
      }
    }
  }
</script>