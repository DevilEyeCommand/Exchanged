<!-- @format -->

<template>
	<div id="editor"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "quill/dist/quill.snow.css";

const editor = ref(null);

// watch(editor.getContents(), (val) => {
//     console.log(val);
    
// })
onMounted(async () => {
	const Quill = (await import("quill")).default;
	const editorInstance = new Quill("#editor", {
		theme: "snow",
		modules: {
			toolbar: {
				container: [["image"], ["link", "video"], [{ header: [1, 2, 3, 4, 5, 6, false] }]],
			},
		},
	});
	editor.value = editorInstance;
});
</script>
