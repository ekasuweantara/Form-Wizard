<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserDataStore } from '@/stores/useUserDataStore'

  const router = useRouter();
  const userData = useUserDataStore()
  onMounted(() => {
    if (!userData.userData) {
      router.push({path: '/form-wizard'})
    }
  })

  const backToHome = () => {
    userData.reset();
    router.push({path: '/'})
  }

  const backToFormWizard = () => {
    router.push({path: '/form-wizard'})
  }
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-slate-50 rounded-md w-1/2 min-w-full md:min-w-0 px-2 pb-7 pt-3 min-h-[50%] flex items-center"
    >
      <div class="mx-auto">
        <div class="text-center text-[35px]">Summary</div>
        <div class="text-center font-normal mt-3">
          {{userData.userData?.name}}
        </div>
        <div class="text-center font-extralight mt-3">
          Age: {{userData.userData?.age}}
        </div>
        <div class="text-center font-extralight mt-3">
          Where do you live: {{userData.userData?.selectedCountry?.name}}
        </div>
        <div class="text-center font-extralight mt-3">
          Package: {{userData.userData?.selectedPackage?.name}}
        </div>
        <div class="text-center font-extralight mt-3">
          Premium: {{`${userData.userData?.totalPremium}${userData.userData?.selectedCountry?.code}`}}
        </div>
        <div class="flex items-center justify-center mb-3 mt-5">
          <div class="inline-flex" role="group">
            <button type="button" class="rounded-sm inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight focus:outline-none focus:ring-0 transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:shadow-lg" @click="backToFormWizard">Back</button>
            <button type="button" class="rounded-sm inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight focus:outline-none focus:ring-0 transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:shadow-lg ml-5" @click="backToHome">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
