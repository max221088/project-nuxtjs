<template>
	<section>
		<h2>{{PageTitle}}</h2>
		<ul>
			<li v-for="user in users" :key="user.id">
				<a href="#" @click.prevent="goTo(user)">{{ user.name }}</a>
			</li>
		</ul>
	</section>
</template>

<script>

export default {
	//async asyncData({store, error}) {
	//	try {
	//		await store.dispatch('users/fetchUsers')
	//		return {}
	//	} catch (e) {
	//		error(e)
	//	}
		//return $axios.$get('https://jsonplaceholder.typicode.com/users')
		//.then((users) => {
		//	return {
		//		users
		//	}
		//})
		//.catch(err =>{
		//	error(err)
		//}) 
	//},
	async fetch ({store, error}) {
		try {
			if (!store.getters['users/getUsers'].length) {
				await store.dispatch('users/fetchUsers')
			}
		} catch (e) {
			error(e)
		}
	},
	data: () =>{
		return {
			PageTitle: 'Users Page',
		}
	},
	computed: {
		users() {
			return this.$store.getters['users/getUsers']
		}
	},
	methods: {
		goTo (user) {
			this.$router.push('/users/'+ user.id)
		}
	}
}
</script>
