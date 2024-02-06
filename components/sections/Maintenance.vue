<template>
  <!--  -->
  <div class="h-screen bg-gray-100" v-if="$settings && checkCodeCookie">
    <!--  -->
    <div class="max-w-md mx-auto h-full flex items-center justify-center">
      <!--  -->
      <div class="flex flex-col items-center p-2">
        <!--  -->
        <nuxt-img class="w-full h-full object-cover" src="https://storeno.b-cdn.net/stores/2-2024/1707157555613.png" alt="maintenance" preload loading="lazy" />
        <!--  -->
        <div class="flex flex-col gap-3">
          <p class="text-lg text-gray-900 font-medium text-center">{{ $settings.store_maintenance_message }}</p>
          <!--  -->
          <form class="flex items-center justify-center gap-2" @submit.prevent="verifier">
            <!--  -->
            <div class="flex text-base border border-gray-300 rounded-md p-2 text-gray-400 bg-gray-100 hover:bg-gray-200 transition-all">
              <!--  -->
              <input class="bg-transparent outline-none" type="text" v-model="code" placeholder="••••••••" />
              <!--  -->
            </div>
            <!--  -->
            <button class="bg-blue-500 border border-blue-300 rounded-md p-2 opacity-60 hover:opacity-100" type="submit">
              <!--  -->
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <path d="M15,9.25H9c-.086,0-.165.021-.25.025V7A3.254,3.254,0,0,1,12,3.75a3.417,3.417,0,0,1,3.273,2.437.751.751,0,0,0,1.454-.374A4.893,4.893,0,0,0,12,2.25,4.756,4.756,0,0,0,7.25,7V9.594A4.749,4.749,0,0,0,4.25,14v3A4.756,4.756,0,0,0,9,21.75h6A4.756,4.756,0,0,0,19.75,17V14A4.756,4.756,0,0,0,15,9.25ZM18.25,17A3.254,3.254,0,0,1,15,20.25H9A3.254,3.254,0,0,1,5.75,17V14A3.254,3.254,0,0,1,9,10.75h6A3.254,3.254,0,0,1,18.25,14Zm-5.5-2v1a.75.75,0,0,1-1.5,0V15a.75.75,0,0,1,1.5,0Z" fill="currentColor"/>
              </svg>
              <!--  -->
            </button>
          </form>
        </div>
      </div>
      <!--  -->
    </div>
    <!--  -->
  </div>
  <!--  -->
</template>

<script>
export default {
  data() {
    return {
      code: null,
      codeMaintenance: null,
      checkCodeCookie: false,
    }
  },
  mounted() {
    this.getCookie("store_maintenance_code");
    if (this.codeMaintenance && this.codeMaintenance !== "undefined") {
      this.$settings.store_maintenance_unlocked = true;
      this.$settings.store_maintenance = false;
    } else {
      this.checkCodeCookie = true;
    }
  },
  methods: {
    verifier() {
      if (this.$settings.store_maintenance_code === this.code) {
        document.cookie = `store_maintenance_code=${this.code}`;
        this.$settings.store_maintenance_unlocked = true;
        this.$settings.store_maintenance = false;
        this.$emit("openStore", true);
      }
    },
    getCookie(cname) {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
          this.codeMaintenance = c.substring(name.length, c.length);
          break;
        }
      }
    }
  }
}
</script>