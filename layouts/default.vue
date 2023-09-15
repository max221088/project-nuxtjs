<template>
	<div>
		<Navbar />
		<div class="wropper">
			<nuxt />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'

export default {
	components: {
		Navbar
	}
}
</script>

<style>
.wropper{
	width: 1200px;
	margin: 0 auto;
}
</style>