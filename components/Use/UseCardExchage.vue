<template>
  <div class="flex justify-center items-center gap-4 py-4">
    <div class="card bg-neutral text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <select class="select w-full max-w-xs select-error bg-neutral">
          <option disabled selected>เลือกประเทศ</option>
        </select>
        <label class="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs bg-neutral"
          />
          <div class="label">
            <span class="label-text-alt text-base-300">1 USD = 34.220 THB</span>
          </div>
        </label>
      </div>
    </div>
    <button class="btn">
      <Icon name="system-uicons:reverse" size="50" />
    </button>
    <div class="card bg-neutral text-neutral-content w-96">
      <div class="card-body items-center text-center">
        <select class="select w-full max-w-xs select-error bg-neutral">
          <option disabled selected>เลือกประเทศ</option>
        </select>
        <label class="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs bg-neutral"
          />
          <div class="label">
            <span class="label-text-alt text-base-300">1 USD = 34.220 THB</span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup></script>
