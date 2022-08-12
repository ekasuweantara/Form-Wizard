<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-slate-50 rounded-md w-1/2 min-w-full md:min-w-0 px-2 pb-7 pt-3 min-h-[50%] flex items-center"
    >
      <div class="mx-auto">
        <div class="text-center text-[35px]">Hello There!</div>
        <div class="text-center font-extralight mt-3 mb-7">
          Let's buy some insurance. It is going to take only a few steps
        </div>
        <div class="text-center">
          <router-link to="/form-wizard" class="bg-black text-white text-center px-20 py-3 rounded-md">
            Start
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
