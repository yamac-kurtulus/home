<template>
  <nav>
    <div class="fixed top-0 z-10 w-full bg-gray-900">
      <div class="flex mx-16 my-2 justify-items-start">
        <!-- <div v-cloak id="homelink" class="flex flex-initial w-1/2 m-4"> -->
        <div class="flex flex-initial w-1/2 mx-8 justify-self-start" id="homelink">
          <NavLink href="/" label="Home" :active="isActive('\/')" />
        </div>
        <!-- </div> -->
        <!--mobile menu button-->
        <div class="z-10 flex-row-reverse w-1/2 row-end-auto mx-12 md:hidden text-main-red">
          <button @click="showTopMenu = !showTopMenu">
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
        <div class="hidden md:flex-row-reverse md:w-1/2 md:row-end-auto md:flex">
          <ul id="pagelinks-desktop" class="flex flex-row mx-2">
            <li v-for="item in links" :key="item.href" class="flex mx-2 flex-end">
              <NavLink :href="item.href" :label="item.label" :active="isActive(item.href)" />
            </li>
          </ul>
        </div>
      </div>

      <!--Mobile Menu Items-->
      <transition name="fade">
        <div v-show="showTopMenu" key="wrapper" id="mobile-wrapper" class="fixed top-0 w-full h-screen">
          <ul
            id="pagelinks-mobile"
            class="flex flex-col h-screen rounded-b-lg shadow-md shadow-main-red bg-main-purple inset-x-4 md:hidden"
          >
            <li
              v-for="item in links"
              :key="item.href"
              class="justify-center flex-auto w-full m-auto text-center shadow-inner mobile-menu-item"
            >
              <NavLink :href="item.href" :label="item.label" :active="isActive(item.href)" />
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template> 


<style lang="scss">
[v-cloak] {
  display: none;
}
.fade-leave-to,
.fade-enter-from {
  @apply opacity-0 transform scale-y-0 origin-top;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-700 ease-in-out;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100 scale-y-100 origin-top;
}
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
