<template>
    <div class="home">
        <div
        class="w-full min-h-screen pt-[55px] p-5 flex justify-center items-center dark:bg-gray-900 bg-white"
      >
        <form
          class="flex flex-col justify-center items-center gap-4 p-5 w-full sm:w-[320px] border rounded-md shadow-md dark:border-gray-700"
        >
          <div class="w-full">
            <h3 class="text-xl font-medium dark:text-white">Login</h3>
            <p class="my-1 text-gray-500 font-normal dark:text-gray-400">
              Please login to use DayByDayByDay
            </p>
          </div>
          <div class="w-full relative">
            <input
              type="text"
              class="w-full p-4 border dark:border-white dark:outline-white inputBox bg-[rgba(0,0,0,0)] rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-600"
              required
              placeholder="Email Address*"
            />
            <label
              class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
            >
              Email Address*
            </label>
          </div>
          <div class="w-full mt-2 relative">
            <input
              type="password"
              class="w-full p-4 border inputBox bg-[rgba(0,0,0,0)] dark:border-white dark:outline-white rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-600"
              required
              placeholder="Password*"
            />
            <label
              class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
              >Password*</label
            >
          </div>
          <input
            type="submit"
            value="Login"
            class="w-full text-gray-500 mt-2 cursor-pointer text-[14px] bg-gray-200 dark:bg-gray-800 dark:text-white p-2 rounded-md"
          />
          <div class="w-full border-t dark:border-gray-700">
            <p href="#" class="text-sm text-center my-3 dark:text-gray-400">
              No account yet?
            </p>
            <RouterLink to="/registration" class="w-full p-2 rounded-md cursor-pointer bg-slate-400 font-bold text-[14px] text-white">Go back to login</RouterLink>
          </div>
        </form>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeView',
    components: {
    },
    method:{

    }
}
</script>


<style>

</style>