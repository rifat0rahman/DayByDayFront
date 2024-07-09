<template>
  <div class="home">
    <section class="w-full min-h-screen relative dark:bg-gray-900 bg-white">
      <!-- ------------nav bar ---------------  -->
      <div
        class="w-full fixed top-0 z-[1000] px-1 sm:px-5 p-1 dark:bg-gray-800 bg-gray-50 flex justify-between items-center"
      >
        <div class="w-full overflow-x-auto noneScroll">
          <div class="flex justify-start items-center min-w-[530px] gap-1">

            <!-- --------------- date work is here ---------------  -->
            <div
              class="flex h-[50px] callDate justify-center items-center gap-[1px]"
            >
            <!--date picker -->



            <div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
 
  <input v-model="selectedDate" datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>


            <!-- date picker-->
            
            </div>

            <!-- ------ save button -------------  -->
            <button
              class="w-[50px] h-[50px] rounded-sm flex justify-center items-center bg-gray-200 dark:bg-[#596987]"
            >
              <i class="fa-solid fa-floppy-disk"></i>
            </button>
            <!-- ---------------- list and eye button --------------  -->

            <div
              class="w-[100px] rounded-sm overflow-hidden flex justify-center items-center"
            >
              <button
                class="w-[50px] h-[50px] flex justify-center items-center bg-gray-200 dark:bg-[#596987]"
              >
                <i class="fa-solid fa-bars"></i>
              </button>
              <button
                class="w-[50px] h-[50px] flex justify-center items-center bg-white dark:bg-[#969ca9]"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>

            <!-- ------- last info icon button ----------------  -->
            <button
              id="next-date"
              class="w-[50px] h-[50px] rounded-sm flex justify-center items-center bg-gray-200 dark:bg-[#596987]"
            >
              <i class="fa-solid fa-circle-info"></i>
            </button>
          </div>
        </div>



        <!-- ----------------- :drop down -----------------  -->

 
    <div class="p-4">
    <!-- Dropdown Button -->
    <div class="relative inline-block text-left">
      <button @click="toggleDropdown" class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
        <!-- Three Dots Icon -->
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>

      <!-- Dropdown Menu -->
      <div v-show="isDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div class="py-1" role="none">
          <RouterLink to="/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">settings</RouterLink>
          <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">Info</RouterLink>
          <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">Help</RouterLink>
          <form method="POST" action="#" role="none">
            <button type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">Sign out</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    
        <!-- dropdown ends here -->
      </div>
      <!-- -------------------- main body ----------------  -->
      <div
        class="w-full min-h-screen flex justify-center items-center flex-col"
      >
        <p
          class="text-xl font-bold text-center dark:text-white px-4 text-gray-600 mb-4 mt-10"
        >
          No note added on the selected date yet
        </p>
        <button class="px-4 py-2 bg-blue-500 text-white rounded">
          Add Note
        </button>
      </div>
    </section>

    <!-- -------------------- Text Area body ----------------  -->
    <hr />
  </div>
</template>


<script>

import { initFlowbite } from 'flowbite'

export default {
  name: 'NoteView',
  data(){
    return {
      isDropdownOpen: false,
      selectedDate: this.getFormattedDate()
    }
  },
  mounted() {
    initFlowbite();
  },
  methods:{
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    getFormattedDate() {
      const date = new Date();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;
      return formattedDate;
    },
}
}
</script>