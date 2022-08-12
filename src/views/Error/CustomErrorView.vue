<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const backToHome = () => {
    router.push({path: '/'})
  }
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-slate-50 rounded-md w-1/2 min-w-full md:min-w-0 px-2 pb-7 pt-3 min-h-[50%] flex items-center"
    >
      <div class="mx-auto">
        <div class="text-center text-[35px]">Ooops</div>
        <div class="text-center font-extralight mt-3">
          Your age is over our accepted limit.
          We are sorry but we cannot insure you now
        </div>
        <div class="text-center">
          <button
            @click="backToHome"
            class="bg-black text-white text-center px-20 py-3 mt-6 rounded-md"
          >
            Ok :(
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
