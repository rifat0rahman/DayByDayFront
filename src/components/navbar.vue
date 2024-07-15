<template>
  <div class="navbar">
    <div
        class="w-full fixed top-0 z-[1000] px-5 p-4 dark:bg-gray-800 bg-gray-50 flex justify-between items-center"
      >
        <h1 class="text-2xl font-madium dark:text-white font-cursive">daybydaybyday</h1>
          
        <div class="flex justify-center dark:text-white items-center gap-2">
          <button
            onclick="changeThem()"
            class="p-1 sm:w-[60px] rounded text-center hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <i class="fa-solid fa-circle-half-stroke"></i>
          </button>
         

            <!-- lang -->

            <div class="relative inline-block text-left">
    <div>
      <button
        @click="toggleDropdown"
        type="button"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Language
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="dropdownOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a
          @click="changeLanguage('en')"
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          English
        </a>
        <a
          @click="changeLanguage('de')"
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          German
        </a>
      </div>
    </div>
  </div>

            <!-- lang -->
          <button
            class="p-1 sm:w-[60px] relative rounded text-center hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <input
              type="button"
              class="w-full h-full absolute callPopup top-0 cursor-pointer left-0"
            />
            <div
              class="w-[0px] h-[0px] flex flex-col popupBox rounded-md bg-white dark:bg-gray-900 shadow-md absolute top-9 right-1 overflow-hidden"
            >
              <span
                class="p-3 w-full hover:bg-[#b3cedb3d] flex justify-center items-center gap-3"
                ><i class="fa-solid fa-circle-info"></i>Info</span
              >
              <span
                class="p-3 w-full hover:bg-[#b3cedb3d] flex justify-center items-center gap-3"
                ><i class="fa-solid fa-circle-question"></i>Help</span
              >
            </div>
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    changeLanguage(language) {
      // Implement the logic to change the website's language here.
      console.log(`Language changed to: ${language}`);
      this.$i18n.locale = language;
      this.dropdownOpen = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
