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
  </div>

            <!-- date picker-->
            
          

            <!-- ------ save button -------------  -->
            <button
              class="ml-1 w-[45px] h-[45px] rounded-md flex justify-center items-center bg-gray-200 dark:bg-[#7789AB]"
            >
              <i class="fa-solid fa-floppy-disk"></i>
            </button>
            <!-- ---------------- list and eye button --------------  -->

            <div
              class="w-[100px] rounded-sm overflow-hidden flex justify-center items-center"
            >
              <button
                class="w-[45px] h-[45px] rounded-md mr-1.5 flex justify-center items-center bg-white dark:bg-[#7789AB]"
              >
                
                  <RouterLink to="/app/all-notes">
                    <i class="fa-solid fa-bars"></i>
                  </RouterLink>
                
              </button>
              <button
                class="w-[45px] h-[45px] rounded-md flex justify-center items-center bg-white dark:bg-[#7789AB]"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>

            <!-- ------- last info icon button ----------------  -->
            <button
              id="next-date"
              class="w-[45px] h-[45px] rounded-md flex justify-center items-center bg-gray-200 dark:bg-[#7789AB]"
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
   </div> 
        <!-- dropdown ends here -->
      
      <!-- -------------------- main body ----------------  -->


      <div
        class="w-full min-h-screen flex justify-center items-center flex-col"
        v-show="shownote"
      >
        <p
          class="text-xl font-bold text-center dark:text-white px-4 text-gray-600 mb-4 mt-10"
        >
          No note added on the selected date yet
        </p>
        <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="showtext">
          Add Note
        </button>
      </div>


      <div
        class="w-full min-h-screen flex justify-center items-center flex-col"
        v-show="!shownote"
      >
      
    <div v-if="editor" class="tiptap w-full focus:ring-green-500 p-4 mt-[60px] bg-[rgba(0,0,0,0)] border-0 noneScroll dark:bg-gray-800 outline-0 text-black dark:text-white min-h-[calc(100vh-65px)]">
      <div class="pt-10 pb-10">
        <div class="flex justify-center items-center ">
          <button class="hover:bg-gray-300  m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            <i class=" fa-solid p-1 fa-bold"></i>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
            <i class="fa-solid p-1 fa-italic"></i>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
            <i class="fa-solid p-1 fa-paragraph"></i>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            <b>H1</b>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            <b>H2</b>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
            <b>H3</b>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
            <i class="fa-solid p-1 fa-list"></i>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
            <i class="fa-solid p-1 fa-code"></i>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
            <i class="fa-solid p-1 fa-quote-left"></i>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }">
            <i class="fa-solid p-1 fa-highlighter"></i>
          </button>
          <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
            <i class="fa-solid p-1 fa-align-left"></i>
        </button>
        <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
          <i class="fa-solid p-1 fa-align-center"></i>
        </button>
        <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
          <i class="fa-solid p-1 fa-align-right"></i>
        </button>
         <button class="m-1 p-1 text-sm rounded-md bg-gray-200 dark:bg-[#7789AB]" @click="editor.chain().focus().setColor('#958DF1').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#958DF1' }) }">
          <b><small>Purple</small></b>
        </button>
        </div>
      </div>
    <editor-content :editor="editor"/>
  </div>

      </div>

      
    </section>
  </div>
</template>


<script>


import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import { initFlowbite } from 'flowbite'
import { Editor, EditorContent } from '@tiptap/vue-2'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import CodeBlock from '@tiptap/extension-code-block'
import Blockquote from '@tiptap/extension-blockquote'

import ListItem from '@tiptap/extension-list-item'
import TextAlign from '@tiptap/extension-text-align'

import BulletList from '@tiptap/extension-bullet-list'
import Heading from '@tiptap/extension-heading'

export default {
  name: 'NoteView',
  components: {
      EditorContent,
    },
  data(){
    return {
      isDropdownOpen: false,
      selectedDate: this.getFormattedDate(),
      shownote:false,
      editor: null,
    }
  },
  mounted() {
    initFlowbite();
    this.editor = new Editor({
      extensions: [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle.configure({ types: [ListItem.name] }),
        Heading.configure({
          levels: [1, 2, 3],
        }),
        StarterKit,
        Highlight,
        Bold,
        Italic,
        BulletList,
        CodeBlock,
        Blockquote,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content: `
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
      `,
    })

  },
  beforeUnmount() {
    this.editor.destroy()
  },
  methods:{

    showtext() {
      this.shownote = false;
    },


    // for dropdown
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

<style lang="scss">
/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;
    outline: none;
    text-align: left;
  }

  /* List styles */
  ul {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.2em;
      margin-bottom: 0.2em;
      margin-left: 0.2em;
      list-style-type: disc;
      display:list-item; 
    }

  }


  /* Heading styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin-top: 2.5rem;
    text-wrap: pretty;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  /* Code and preformatted text styles */
  code {
    background-color: var(--purple-light);
    border-radius: 0.4rem;
    color: var(--black);
    font-size: 0.85rem;
    padding: 0.25em 0.3em;
  }

  pre {
    background: #323f50;
    border-radius: 0.5rem;
    color: var(--white);
    font-family: 'JetBrainsMono', monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  mark {
    background-color: #FAF594;
    border-radius: 0.4rem;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem;
  }

  blockquote {
    border-left: 2px solid gray;
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid var(--gray-2);
    margin: 2rem 0;
  }
}
</style>
