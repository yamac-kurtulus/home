<template>
  <div
    class="relative h-64 overflow-hidden transition-transform rounded-lg shadow-lg  shadow-main-purple hover:-translate-y-1"
  >
    <!-- Notice alt="" because hero images are merely for decoration -->

    <img class="relative justify-center object-cover w-full h-full aspect-video" :src="item.heroImg" alt="" />
    <a :href="item.url" class="">
      <span class="absolute top-0 block w-full h-full px-6 py-4 bg-gray-900 bg-opacity-80">
        <p class="pt-2 pb-6 text-2xl strong">{{ item.title }}</p>
        <p class="pt-2 text-base text-main-light-blue">{{ item.metaDescription }}</p>
        <p class="pt-2 text-base italic text-right text-main-light-blue">
          {{ format(new Date(item.date), 'dd/MM/YYY') }}
        </p>
      </span>
    </a>
  </div>
</template>
<script>
import { format } from 'date-fns'
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  beforeCreate() {
    this.format = format
  },
}
</script>