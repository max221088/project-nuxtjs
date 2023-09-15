<template>
	<div>
		<h2> User Name - {{user.name}}</h2>
		<h3> Email - {{user.email}}</h3>
		<h3> Address - {{user.address.city}}, {{user.address.street}},{{user.address.suite}} </h3>
		<h3> Tel - {{user.phone}}</h3>
		<h3> Web site - {{user.website}}</h3>
	</div>
</template>

<script>

export default {
	validate ({params}) {
		return /^\d+$/.test(params.user)
	},
	async asyncData({params, error, store}) {
		try {
			const user = await store.dispatch('users/fecthUserById', params.user)
			return {user}
		} catch (e) {
			error(e)
		}
		//try {
		//	const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.user}`)
		//	return {user}
		//} catch(e) {
		//	error(e)
		//}
	},
	data: () =>{
		return {
			
		}
	},
	methods: {
	}
}
</script>