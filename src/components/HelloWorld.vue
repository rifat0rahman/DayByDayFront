<template>
  <div class="hello">
    <nav>
      <div
        class="w-full fixed top-0 z-[1000] px-5 p-4 dark:bg-gray-800 bg-gray-50 flex justify-between items-center"
      >
        <h1 class="text-2xl font-medium dark:text-white">Application Name</h1>
        <div class="flex justify-center dark:text-white items-center gap-2">
          <button
            class="p-1 sm:w-[60px] relative rounded text-center hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <input
              type="button"
              value=""
              class="w-full h-full absolute top-0 left-0 cursor-pointer"
            />
            <!-- <div class="w-[100px] h-[100px]"></div> -->
            <i class="fa-solid fa-circle-half-stroke"></i>
          </button>
          <button
            class="p-1 sm:w-[60px] relative rounded text-center hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <i class="fa-solid fa-language"></i>
          </button>
          <button
            class="p-1 sm:w-[60px] relative rounded text-center hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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
