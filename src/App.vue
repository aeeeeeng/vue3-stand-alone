<script setup>
  import Navbar from "./components/Navbar.vue";
  import LoadingComponent from "./components/LoadingComponent.vue";
  import router from "./routes";
import { ref } from "vue";

  const loading = ref(false);

  router.beforeEach(() => {
    loading.value = true;
  });

  router.afterEach(() => {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  });

</script>

<template>
  
      <v-app>
        <Navbar />
        <v-main>
          <v-container >
            <LoadingComponent v-if="loading"/>
            <RouterView v-else/>
          </v-container>
        </v-main>
      </v-app>
</template>


