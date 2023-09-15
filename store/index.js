export const actions = {
	login ({commit}) {
		commit('setToken', 'true')
	},
	logOut ({commit}) {
		commit('clearToken')
	}
}

export const state = () => ({
	 token: false
})

export const mutations = {
	setToken (state, token) {
		state.token = token
	},
	clearToken (state) {
		state.token = false
	}
}

export const getters = {
	isAuth: state => !!state.token 
}