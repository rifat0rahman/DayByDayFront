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
          <button
            class="p-1 sm:w-[60px] relative rounded text-center hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <i class="fa-solid fa-language"></i>
            <input
              type="button"
              class="w-full h-full absolute callPopup top-0 cursor-pointer left-0"
            />
            <div
              class="w-[0px] h-[0px] flex flex-col popupBox rounded-md bg-white dark:bg-gray-900 shadow-md absolute top-9 right-1 overflow-hidden"
            >
              <span class="p-3 w-full hover:bg-[#b3cedb3d]">English</span>
              <span class="p-3 w-full hover:bg-[#b3cedb3d]">German</span>
            </div>
          </button>
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
  name: 'HelloWorld',
}
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
