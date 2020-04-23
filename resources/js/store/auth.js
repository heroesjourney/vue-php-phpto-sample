const state = {
  user: null
}

const getters = {}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  async register (context, data) {
    console.log("action-register");
    const response = await axios.post('/api/register', data)
    context.commit('setUser', response.data)
  },
  async login (context, data) {
    //context.commit('setApiStatus', null)
    console.log("action-login");
    const response = await axios.post('/api/login', data)
  },
  async logout (context){
    console.log("action-logout");
    const response = await axios.post('/api/logout');
    context.commit('setUser',null);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}