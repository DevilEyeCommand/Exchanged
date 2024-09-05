<template>
  <div class="flex justify-center items-center gap-4 py-4">
    <div class="card bg-neutral text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <select v-model="selectOne" @change="calculated(0)" class="select w-full max-w-xs select-error bg-neutral">
          <template v-for="(item, index) in Object.entries(data.conversions.USD)" :key="index">
            <option v-if="item[0] != selectTwo" :value="item[0]">{{ item[0] }}</option>
          </template>
        </select>
        <label class="form-control w-full max-w-xs">
          <input v-model="cashOne" @blur="calculated(0)"
            type="number"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs bg-neutral"
          />
          <div class="label">
            <span class="label-text-alt text-base-300">{{ selectOne != '' && selectTwo != ''?cashOne+' '+selectOne+' = '+cashTwo+' '+selectTwo:'' }}</span>
          </div>
        </label>
      </div>
    </div>
    <button class="btn" @click="swapCurrency(selectOne,selectTwo)">
      <Icon name="system-uicons:reverse" size="50" />
    </button>
    <div class="card bg-neutral text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <select v-model="selectTwo" @change="calculated(1)" class="select w-full max-w-xs select-error bg-neutral">
          <template v-for="(item, index) in Object.entries(data.conversions.USD)" :key="index">
            <option v-if="item[0] != selectOne" :value="item[0]">{{ item[0] }}</option>
          </template>
        </select>
        <label class="form-control w-full max-w-xs">
          <input v-model="cashTwo" @blur="calculated(1)"
            type="number"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs bg-neutral"
          />
          <div class="label">
            <span class="label-text-alt text-base-300">{{ selectOne != '' && selectTwo != ''?cashTwo+' '+selectTwo+' = '+cashOne+' '+selectOne:'' }}</span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch('https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date')
let selectOne = ref('USD')
let selectTwo = ref('THB')
let cashOne = ref(1)
let cashTwo = ref(1)
onMounted(() => {
calculated(0)
})
const swapCurrency = async (left,right) =>{
  selectOne.value = right
  selectTwo.value = left
  calculated(0)
}
const calculated = async (select) => {
  const response = await fetch('https://api.currencybeacon.com/v1/convert?api_key=XxQAzbUQ0jCGjlWqTy100dtOkSVmuSgj&from='+selectOne.value+'&to='+selectTwo.value+'&amount='+cashOne.value+'')
  const currencydata = await response.json()
  if (select == 0) {
    cashOne.value = currencydata.amount.toFixed(2)
    cashTwo.value = currencydata.value.toFixed(2)
  }else{
    cashTwo.value = currencydata.amount.toFixed(2)
    cashOne.value = currencydata.value.toFixed(2)
  }
  // const { data, pending, error } = await useFetch()
  // console.log(data);
};

// console.log(data);

</script>
