export const mutations = {
  SET_AISLES(state, payload) {
    state.aisles = payload
  },
  SET_SINGLE_AISLE(state, payload) {
    state.aisle = payload
  },
  SET_LOADING(state, loadingState) {
    state.isLoading = loadingState
  },
}