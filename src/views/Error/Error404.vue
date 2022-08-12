<script setup>
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-slate-200 rounded-md w-1/2 min-w-full md:min-w-0 px-2 pb-7 pt-3 min-h-[50%] flex items-center"
    >
      <div class="mx-auto">
        <div class="text-center text-[35px]">Eror 404</div>
        <div class="text-center text-[18px]">Page Not Found</div>
        <div class="text-center mt-7">
          <router-link to="/" class="bg-black text-white text-center px-20 py-3 mt-6 rounded-md">
            Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
