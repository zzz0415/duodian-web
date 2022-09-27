export default {
  mounted () {
    if (this.$options.scrollBottom) {
      window.addEventListener('scroll', this.product, false)
    }
  },
  actived () {
    if (this.$options.scrollBottom) {
      window.removeEventListener('scroll', this.product, false)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.product, false)
  },
  methods: {
    product () {
      const windowHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const scrollTop = Math.ceil(document.querySelector('html').scrollTop)
      if (pageHeight - scrollTop < windowHeight + 10) {
        this.$options.scrollBottom.call(this)
      }
    }
  }
}
