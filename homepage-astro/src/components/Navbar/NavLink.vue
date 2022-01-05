<template>
  <button>
    <button class="transition-all hover:scale-150 transform-gpu">
      <a :href="href" :class="getActiveState()">{{ label }}</a>
    </button>
  </button>
</template>



<style lang="scss">
.active {
  @apply text-main-red font-bold text-lg;
}
.inactive {
  @apply text-main-light-blue text-lg;
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


