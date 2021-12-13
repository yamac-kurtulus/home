<template>
  <button>
    <button class="hover:scale-125 transform-gpu transition-all">
      <a :href="href" :class="getActiveState()">{{ label }}</a>
    </button>
  </button>
</template>

<style scoped>
.active {
  @apply text-green-500 font-bold text-lg hover:scale-125;
}
.inactive {
  @apply text-pink-600 text-lg hover:scale-125;
}
</style>

<script>
export default {
  name: 'NavLink',
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    href: {
      type: String,
      default: '#',
      required: false,
    },
    label: {
      type: String,
      default: '#',
      required: false,
    },
  },
  setup(props) {
    function getActiveState() {
      return props.active ? 'active' : 'inactive'
    }

    return { getActiveState }
  },
}
</script>


