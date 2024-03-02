<script setup>
import Navbar from "./components/Navbar.vue";
import LoadingComponent from "./components/LoadingComponent.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import { useUtilsStore } from "@/stores/utils";

const utilsStore = useUtilsStore()

</script>

<template>
      <SnackbarComponent/>
      <v-app>
        <Navbar />
        <v-main>
          <v-progress-linear v-if="utilsStore.isLoadingPage" :indeterminate="true" color="primary"></v-progress-linear>
          <!-- <LoadingComponent/> -->
          <v-container >
            <RouterView/>
          </v-container>
        </v-main>
      </v-app>
</template>


