<script setup>
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserDataStore } from '@/stores/useUserDataStore'

  const router = useRouter();
  const userData = useUserDataStore()
  const name = ref("")
  const age = ref(50)
  const selectedPackage = ref({
    name: "Standard",
    label: "Standard",
    value: "standard"
  })
  const countryList = ref([
    {
      name: "Hong Kong",
      rate: 1,
      code: "HKD"
    },
    {
      name: "USA",
      rate: 2,
      code: "USD"
    },
    {
      name: "Australia",
      rate: 3,
      code: "AUD"
    }
  ])
  const packageList = ref([
    {
      name: "Standard",
      label: "Standard",
      value: "standard"
    },
    {
      name: "Safe",
      label: "Safe (+250HKD, 50%)",
      value: "safe"
    },
    {
      name: "Super Safe",
      label: "Super Safe (+375HKD, 75%)",
      value: "super-safe"
    }
  ])
  const selectedCountry = ref({
    name: "Hong Kong",
    rate: 1,
    code: "HKD"
  })
  const premium = ref(500)

  const submitFrom = () => {
    if (age.value > 100) {
      userData.reset();
      router.push({path: '/error'})
    } else {
      userData.set({
        name: name.value,
        age: age.value,
        selectedCountry: selectedCountry.value,
        selectedPackage: selectedPackage.value,
        totalPremium: premium.value
      })
      router.push({path: '/summary'})
    }
  }

  const changePackage = (data) => {
    selectedPackage.value = packageList.value.find(item => item.value === data);
    calculateTotalPremium()
  }

  watch([age], () => {
    calculateTotalPremium()
  });

  const calculateTotalPremium = () => {
    let total = 10 * age.value;
    switch(selectedCountry.value.name) {
      case "Hong Kong":
        total *= 1;
        break;
      case "USA":
        total *= 2;
        break;
      case "Australia":
        total *= 3;
        break;
    }
    switch(selectedPackage.value.value) {
      case "safe":
        total += total * 0.5;
        break;
      case "super-safe":
        total += total * 0.75;
        break;
    }
    premium.value = total
  }

  const onChangeCountry = (e) => {
    selectedCountry.value = countryList.value.find(item => item.name === e.target.value)
    calculateTotalPremium()
  }

  const backToHome = () => {
    router.push({path: '/'})
  }
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-1/2 min-w-full md:min-w-0 pt-3 min-h-[100%] flex items-stretch">
      <form @submit.prevent="submitFrom" class="w-full bg-slate-50">
        <div class="pb-2 bg-white pt-[10vh]">
          <div class="text-center mb-3">
            <div class="text-[35px]">
              Tell us about yourself
            </div>
          </div>
          <div class="max-w-[400px] mx-auto">
            <div class="form-group mb-3">
              <label for="name" class="form-label inline-block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 
                  focus:bg-white 
                  focus:border-blue-600 
                  focus:outline-none
                " 
                v-model="name"
                required
                id="name"
                placeholder="Add text"
              >
            </div>
            <div class="form-group mb-3">
              <label for="age" class="form-label inline-block mb-2 text-gray-700">Age</label>
              <input
                type="number"
                min="1"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 
                  focus:bg-white 
                  focus:border-blue-600 
                  focus:outline-none
                " 
                v-model="age"
                id="age"
                placeholder="Age"
              >
            </div>
            <div class="form-group mb-3">
              <label for="country" class="form-label inline-block mb-2 text-gray-700">Where do you live?</label>
              <select
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 
                  focus:bg-white 
                  focus:border-blue-600 
                  focus:outline-none
                " 
                :value="selectedCountry.name"
                @change="onChangeCountry"
                id="country"
              >
                <option v-for="(item, index) in countryList" :value="item.name" :key="index">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="rounded-md px-4 pb-6 pt-4"
        >
          <div class="max-w-[400px] mx-auto">
            <div class="form-group mb-3">
              <div>
                <div class="form-check" v-for="(item, index) in packageList" :key="index">
                  <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="standard" @change="changePackage(item.value)" :checked="selectedPackage.value === item.value">
                  <label class="form-check-label inline-block text-gray-800" for="standard">
                    {{item.label}}
                  </label>
                </div>
              </div>
            </div>
            <div class="text-center my-10 text-[20px] font-normal">
              Your premium is: {{`${premium}${selectedCountry.code}`}}
            </div>
            <div class="flex items-center justify-center mb-3">
              <div class="inline-flex" role="group">
                <button type="button" class="rounded-sm inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight focus:outline-none focus:ring-0 transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:shadow-lg" @click="backToHome()">Back</button>
                <button type="submit" class="rounded-sm inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight focus:outline-none focus:ring-0 transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:shadow-lg ml-5">Next</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
