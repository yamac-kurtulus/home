<template>
  <nav v-cloak>
    <div class="container m-auto">
      <div class="flex">
        <div id="homelink" class="container flex flex-initial w-1/2 m-4 mb-2">
          <NavLink href="/" label="Home" :active="isActive('\/')" />
        </div>
        <!--mobile menu button-->
        <div class="md:hidden flex-row-reverse w-1/2 row-end-auto m-4 mb-2 text-pink-600">
          <button class="md:hidden flex flex-row-reverse" @click="showTopMenu = !showTopMenu">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!--Desktop Menu-->
        <div class="md:flex-row-reverse md:w-1/2 md:row-end-auto md:flex hidden">
          <ul id="pagelinks-desktop" class="flex flex-row">
            <li v-for="item in links" :key="item.href" class="md:m-8 flex">
              <div class="x">
                <NavLink :href="item.href" :label="item.label" :active="isActive(item.href)" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--Mobile Menu Items-->
      <div v-show="showTopMenu">
        <ul id="pagelinks-mobile" class="flex flex-row">
          <li v-for="item in links" :key="item.href" class="md:object-right flex-auto text-center">
            <div class="">
              <NavLink :href="item.href" :label="item.label" :active="isActive(item.href)" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
</style>

<script>
import NavLink from './NavLink.vue'
export default {
  data() {
    return {
      links: [
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
      ],
      showTopMenu: false,
    }
  },
  props: ['currentPage'],
  methods: {
    isActive(url) {
      const section = url.split('/')[1]
      if (section === this.currentPage) {
        return true
      } else {
        return false
      }
    },
  },
  components: {
    NavLink,
  },
}
</script>
