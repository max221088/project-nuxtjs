<template>
	<header>
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Brand</a>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<nuxt-link exact class="nav-link" active-class="active" to="/">Home</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link class="nav-link" active-class="active" to="/about">About</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link no-prefetch class="nav-link" active-class="active" to="/users">Users</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link no-prefetch class="nav-link" active-class="active" to="/login">Login</nuxt-link>
						</li>
						<li class="nav-item" v-if="isAuth">
							<span class="nav-link" @click.prevent="logOut()">Exit</span>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'NavBar',
	methods: {
		logOut () {
			this.$store.dispatch('logOut')
		}
	},
	computed: {
		isAuth () {
			return this.$store.getters['isAuth']
		}
	}
}
</script>