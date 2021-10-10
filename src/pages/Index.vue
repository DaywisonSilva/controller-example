<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { getPosts } from "../controller/posts";

export default defineComponent({
  name: "PageIndex",
  async setup() {
    const { data } = await getPosts();
    console.log(data);
  },
});
</script>
