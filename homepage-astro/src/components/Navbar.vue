<template>
  <nav>
    <div class="container flex m-auto mb-4 text-pink-600">
      <div id="homelink" class="w-1/2 m-8 flex-initialize">
        <a href="/" :class="isActive('/')">Home</a>
      </div>
      <div class="w-1/2 flex-initialize">
        <ul id="pagelinks" class="flex flex-row-reverse">
          <li
            v-for="item in links"
            :key="item.href"
            class="flex object-right m-8 text-right transition hover:transition-all hover:text-lg"
          >
            <div>
              <a :href="item.href" :class="isActive(item.href)">{{ item.label }} </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.currentPage {
  @apply bg-green-500 text-white;
}
</style>

<script>
export default {
  data() {
    return {
      links: [
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
      ],
    }
  },
  props: ['currentPage'],
  methods: {
    isActive(url) {
      section = url.split('/')[1]
      if (section === this.currentPage) {
        return 'currentPage'
      } else {
        return ''
      }
    },
  },
}
</script>
