export const state = ()=> ({
	users: []
})

export const mutations = {
	setUsers (state, users) {
		state.users = users
	}
}

export const getters = {
	getUsers: state => state.users
}

export const actions = {
	async fetchUsers ({commit}) {
		try {
			const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
			commit('setUsers', users)
		} catch (e) { 
			throw e
		}
 	},
	async fecthUserById ({}, id) {
		try {
			return await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${id}`)
		} catch (e) {
			throw e
		} 
	}
}