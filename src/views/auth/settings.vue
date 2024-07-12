<template>
  <div>
    <NavBar v-show="false">
    </NavBar>
    <div class="w-full min-h-screen pt-[100px] p-5 flex justify-center dark:bg-gray-900 bg-white">


      <div class="md:flex w-full">
        <div class="w-1/6 mb-4 dark:border-gray-700 border-r-2 mr-4">
            <ul class="flex-column space-y space-y-4 flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                      General
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                      Template
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
                      Account
                    </button>
                </li>
                <li role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">
                      Hotkeys
                    </button>
                </li>
            </ul>
        </div>


        <div id="default-tab-content" class="w-5/6 dark:text-white">
          <!-- first content here -->
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div
              class="rounded-lg bg-gray-50 dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="w-full">
                <div
                  class="w-full p-2 bg-gray-200 dark:bg-gray-700 flex justify-start gap-3 items-center"
                >
                  <i class="fa-solid fa-language"></i>
                  <span>Language</span>
                </div>
                <div class="w-full p-5">
                  <button
                    class="min-w-[180px] h-[50px] rounded-sm flex px-4 justify-start items-center bg-gray-200 dark:bg-[#596987] sm:w-[60px] relative"
                  >
                    Language
                    <input
                      type="button"
                      class="w-full h-full absolute callPopup2 top-0 cursor-pointer left-0"
                    />
                    <div
                      class="w-[0px] h-[0px] flex flex-col popupBox rounded-sm bg-white dark:bg-gray-900 shadow-md absolute top-[55px] right-0 overflow-hidden"
                    >
                      <span class="p-3 w-full hover:bg-[#b3cedb3d]"
                        >English</span
                      >
                      <span class="p-3 w-full hover:bg-[#b3cedb3d]"
                        >German</span
                      >
                    </div>
                  </button>
                </div>
                <div
                  class="w-full p-2 bg-gray-200 dark:bg-gray-700 flex justify-start gap-3 items-center"
                >
                  <i class="fa-solid fa-circle-half-stroke"></i>
                  <span>Theme</span>
                </div>
                <div class="w-full p-5">
                  <!-- -----theme button -------------  -->
                  <button
                    onclick="changeThem()"
                    class="p-1 flex justify-start bg-gray-200 items-center gap-2 p-3 w-[180px] px-4 rounded-sm hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700"
                  >
                    <i class="fa-solid fa-circle-half-stroke"></i>
                    <p>Change</p>
                  </button>
                </div>
              </div>
            </div>

            </div>
<!-- first content ends -->

<!-- second content here -->
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <div
              class="rounded-lg bg-gray-50 dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div
                class="w-full p-2 bg-gray-200 dark:bg-gray-700 flex justify-start gap-3 items-center"
              >
                <i class="fa-solid fa-language"></i>
                <span>Template</span>
              </div>
              <div class="w-full p-3">
                <form class="w-full">
                  <textarea
                    required
                    class="w-full h-[250px] rounded-sm dark:border-gray-700 border-gray-300 p-2 bg-[rgba(0,0,0,0)] outline-0 border"
                  >
                  # New Note  dfhls
              </textarea
                  >
                  <div class="w-full flex justify-between mt-2">
                    <span></span>
                    <input
                      type="submit"
                      value="Save"
                      class="bg-blue-500 cursor-pointer px-5 rounded-sm p-1"
                    />
                  </div>
                </form>
              </div>
            </div>
            </div>
<!-- second ends -->

<!-- third start -->
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">

              <div
              class="rounded-lg bg-gray-50 dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <!-- changing email  -->
              <div class="w-full">
                <div
                  class="w-full p-2 bg-gray-200 dark:bg-gray-700 flex justify-start gap-3 items-center"
                >
                  <i class="fa-solid fa-envelope"></i>
                  <span>Change email</span>
                </div>
                <div class="w-full p-6">
                  <!-- ---- change start form here ---------  -->
                  <form
                    class="flex flex-col justify-start items-start gap-4 w-full sm:w-[300px] dark:border-gray-700"
                  >
                    <div class="w-full relative">
                      <input
                        type="text"
                        class="w-full p-4 border dark:border-white dark:outline-white inputBox bg-[rgba(0,0,0,0)] rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-400"
                        required
                        placeholder="Email Address*"
                      />
                      <label
                        class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
                        >Email Address*</label
                      >
                    </div>
                    <div class="w-full mt-2 relative">
                      <input
                        type="password"
                        class="w-full p-4 border inputBox bg-[rgba(0,0,0,0)] dark:border-white dark:outline-white rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-400"
                        required
                        placeholder="Password*"
                      />
                      <label
                        class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
                        >Password</label
                      >
                    </div>

                    <input
                      type="submit"
                      value="Change email"
                      class="bg-blue-500 w-full cursor-pointer p-2 px-4 rounded-sm mt-2 text-white"
                    />
                  </form>
                </div>
              </div>
              <!--  change password  -->
              <div class="w-full">
                <div
                  class="w-full p-2 bg-gray-200 dark:bg-gray-700 flex justify-start gap-3 items-center"
                >
                  <i class="fa-solid fa-key"></i>
                  <span>Change Password</span>
                </div>
                <div class="w-full p-6">
                  <!-- ---- change start form here ---------  -->
                  <form
                    class="flex flex-col justify-start items-start gap-4 w-full sm:w-[300px] dark:border-gray-700"
                  >
                    <div class="w-full relative">
                      <input
                        type="password"
                        class="w-full p-4 border dark:border-white dark:outline-white inputBox bg-[rgba(0,0,0,0)] rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-400"
                        required
                        placeholder="Current password*"
                      />
                      <label
                        class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
                        >Current password</label
                      >
                    </div>
                    <div class="w-full mt-2 relative">
                      <input
                        type="password"
                        class="w-full p-4 border inputBox bg-[rgba(0,0,0,0)] dark:border-white dark:outline-white rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-400"
                        required
                        placeholder="New Password*"
                      />
                      <label
                        class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
                        >New password</label
                      >
                    </div>
                    <div class="w-full mt-2 relative">
                      <input
                        type="password"
                        class="w-full p-4 border inputBox bg-[rgba(0,0,0,0)] dark:border-white dark:outline-white rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-400"
                        required
                        placeholder="Confirm Password*"
                      />
                      <label
                        class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
                        >Confirm password</label
                      >
                    </div>
                    <input
                      type="submit"
                      value="Change password"
                      class="bg-blue-500 w-full cursor-pointer p-2 px-4 rounded-sm mt-2 text-white"
                    />
                  </form>
                </div>
              </div>
              <!-- delete account  -->
              <div class="w-full">
                <div
                  class="w-full p-2 bg-gray-200 dark:bg-gray-700 flex justify-start gap-3 items-center"
                >
                  <i class="fa-solid fa-user-xmark"></i>
                  <span>Delete account</span>
                </div>
                <div class="w-full p-6">
                  <!-- ---- change start form here ---------  -->
                  <form
                    class="flex flex-col justify-start items-start gap-4 w-full sm:w-[300px] dark:border-gray-700"
                  >
                    <div class="w-full relative">
                      <input
                        type="password"
                        class="w-full p-4 border inputBox bg-[rgba(0,0,0,0)] dark:border-white dark:outline-white rounded-md dark:bg-[rgb(17 24 39)] dark:text-white dark:border-gray-400"
                        required
                        placeholder="Password*"
                      />
                      <label
                        class="absolute top-4 left-4 bg-white dark:bg-gray-800 dark:!border-white px-2 dark:!bg-[rgb(17 24 39)] py-0 -z-10 label dark:text-white"
                        >Password</label
                      >
                    </div>

                    <input
                      type="submit"
                      value="Delete account"
                      class="bg-blue-500 w-full cursor-pointer p-2 px-4 rounded-sm mt-2 text-white"
                    />
                  </form>
                </div>
              </div>
            </div>



              
            </div>
<!-- third ends here -->
 <!-- fourth started -->
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">

              <div
              class="rounded-lg bg-gray-50 dark:bg-gray-800"
              id="contract"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <div
                class="w-full p-2 bg-gray-200 dark:bg-gray-700 flex justify-start gap-3 items-center"
              >
                <i class="fa-solid fa-keyboard"></i>
                <span>Hotkeys</span>
              </div>
              <div class="w-full p-3">
                <div class="w-full grid grid-cols-2">
                  <!-- ---------- title --------------  -->
                  <p
                    class="bg-gray-200 dark:bg-gray-700 text-center w-full p-1 font-bold border border-gray-200 dark:border-gray-600"
                  >
                    Action
                  </p>
                  <p
                    class="bg-gray-200 dark:bg-gray-700 text-center w-full p-1 font-bold border border-gray-200 dark:border-gray-600"
                  >
                    Hotkey
                  </p>

                  <!-- --------------- key words -----------------  -->
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    Save current note
                  </p>
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    command + s
                  </p>
                  <!-- -------- col 2 --------------  -->
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    Save current note
                  </p>
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    command + s
                  </p>
                  <!-- -------- col 3 --------------  -->
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    Save current note
                  </p>
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    command + s
                  </p>
                  <!-- -------- col 4 --------------  -->
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    Save current note
                  </p>
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    command + s
                  </p>
                  <!-- -------- col 5 --------------  -->
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    Save current note
                  </p>
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    command + s
                  </p>
                  <!-- -------- col 6 --------------  -->
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    Save current note
                  </p>
                  <p
                    class="border border-gray-200 dark:border-gray-600 p-1 w-full"
                  >
                    command + s
                  </p>
                </div>
              </div>
            </div>
            </div>
            <!-- ends fourth -->
        </div>
<!--  -->
    </div>


    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue';
import { initFlowbite } from 'flowbite'

export default {
  components:{
    NavBar
  },
  mounted() {
    initFlowbite();
  },
}
</script>

<style scoped>
      * {
        margin: 0;
        padding: 0;
        transition: 0.3s;
      }
      .callPopup:focus ~ .popupBox {
        width: 120px;
        height: auto;
      }
      .callPopup2:focus ~ .popupBox {
        width: 180px;
        height: auto;
      }
      .noneScroll::-webkit-scrollbar {
        display: none !important;
      }
      .inputBox:valid {
        border: 1px solid rgb(70, 70, 70);
      }
      .inputBox:focus {
        outline: 1px;
      }
      .inputBox:focus ~ .label,
      .inputBox:valid ~ .label {
        transform: translate(0, -25px);
        font-size: 0.8rem;
        z-index: 10;
        border-left: 1px solid rgb(70, 70, 70);
        border-right: 1px solid rgb(70, 70, 70);
      }
</style>