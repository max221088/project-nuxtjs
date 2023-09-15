<template>
	<div class="container login" @submit.prevent="onSubmit()">
		<form>
			<h2>Log in</h2>
			<div>
				<input class="form-controle" type="text" placeholder="User name">
			</div>
			<div>
				<input class="form-controle" type="password" placeholder="password">
			</div>
			<nuxt-link exact class="nav-link" to="/">Home</nuxt-link>
			<button type="submit" class="btn btn-primary">Enter</button>
		</form>
	</div>
</template>

<script>
export default {
	layout: 'empty',
	methods: {
		onSubmit () {
			this.$store.dispatch('login')
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>
.login{
	width: 250px;
	margin: 50px auto;
	padding: 10px 20px;
	border: 1px solid #444;
	border-radius: 5px;
	background-color: #deadf0;
}

form{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.form-controle{
	margin-bottom: 10px;
}
</style>