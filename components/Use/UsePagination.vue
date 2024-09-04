<template>
    <div class="flex justify-center py-5 px-5 items-center space-x-2">
      <!-- First Button -->
      <button
        v-if="currentPage > 1"
        @click="goToPage(1)"
        class="p-2 rounded-full border border-primary flex items-center justify-center bg-base-950 hover:bg-primary group"
        aria-label="Go to first page"
      >
        <Icon
          name="material-symbols:keyboard-double-arrow-left-rounded"
          size="20"
          class="text-primary group-hover:text-white"
        />
        <span class="text-primary group-hover:text-white">หน้าแรก</span>
      </button>
  
      <!-- Previous Button -->
      <button
        v-if="currentPage > 1"
        @click="goToPage(currentPage - 1)"
        class="p-2 rounded-full border border-primary flex items-center justify-center bg-base-950 hover:bg-primary group"
        aria-label="Previous page"
      >
        <Icon
          name="material-symbols:arrow-back-ios-rounded"
          size="20"
          class="text-primary group-hover:text-white"
        />
      </button>
  
      <!-- Page Numbers -->
      <div class="flex items-center">
        <button
          v-for="page in showPageNumbers"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'w-8 h-8 mx-1 flex items-center justify-center border rounded-full group',
            {
              'bg-primary border-primary text-white': currentPage === page,
              ' text-primary border-primary': currentPage !== page && page !== '...',
              'cursor-default border-primary' : page === '...',
              'hover:bg-primary': page !== '...',
            },
          ]"
          :aria-current="currentPage === page ? 'page' : undefined"
        >
          <span v-if="page !== '...'" class="group-hover:text-white">
            {{ page }}
          </span>
          <span v-if="page === '...'" class="text-primary "> ... </span>
        </button>
      </div>
  
      <!-- Next Button -->
      <button
        v-if="currentPage < totalPages"
        @click="goToPage(currentPage + 1)"
        class="p-2 rounded-full border border-primary flex items-center justify-center bg-base-950 hover:bg-primary group"
        aria-label="Next page"
      >
        <Icon
          name="material-symbols:arrow-forward-ios-rounded"
          size="20"
          class="text-primary group-hover:text-white"
        />
      </button>
  
      <!-- Last Button -->
      <button
        v-if="currentPage < totalPages"
        @click="goToPage(totalPages)"
        class="p-2 rounded-full border border-primary flex items-center justify-center bg-base-950 hover:bg-primary group"
        aria-label="Go to last page"
      >
        <span class="text-primary group-hover:text-white">หน้าสุดท้าย</span>
        <Icon
          name="material-symbols:keyboard-double-arrow-right"
          size="20"
          class="text-primary group-hover:text-white"
        />
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const props = defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  });
  
  const emit = defineEmits(["update:currentPage"]);
  
  const pageRange = computed(() => {
    const maxPagesToShow = 5; // Number of pages to show in the pagination
    let start = Math.max(props.currentPage - Math.floor(maxPagesToShow / 2), 1);
    let end = Math.min(start + maxPagesToShow - 1, props.totalPages);
  
    if (end - start < maxPagesToShow - 1) {
      start = Math.max(end - maxPagesToShow + 1, 1);
    }
  
    return {
      start,
      end,
      range: Array.from({ length: end - start + 1 }, (_, i) => start + i),
    };
  });
  
  const showPageNumbers = computed(() => {
    const { start, end, range } = pageRange.value;
    const pages = [];
  
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }
  
    pages.push(...range);
  
    if (end < props.totalPages) {
      if (end < props.totalPages - 1) pages.push("...");
      pages.push(props.totalPages);
    }
  
    return pages;
  });
  
  const goToPage = (page) => {
    if (page === "...") return;
    emit("update:currentPage", page);
  };
  </script>
  
  <style scoped>
  /* Custom styles for pagination */
  </style>
  