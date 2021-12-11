<template>
  <nav>
    <div class="container flex mb-4 text-4xl text-pink-600">
      <div id="homelink" class="m-8 text-right mflex-none items-left"><a href="/">Home</a></div>
      <div class="flex-none">
        <ul id="pagelinks" class="flex">
          <li v-for="item in links" :key="item.href" class="m-8 mflex items-right">
            <a v-bind:href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>


<script>
export default {
  data() {
    return {
      links: [
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'About' },
      ],
    }
  },
}
</script>
