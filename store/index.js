export const state = () => ({
  user: {
    loggedIn: false,
  },
  connectKey: 43,
  darkMode: false,
  selectedNetwork: null,
});

export const mutations = {
  set(state, data) {
    for (let key of Object.keys(data)) state[key] = data[key];
  },
};

export const getters = {
  isAuthenticated: state => state.user.loggedIn,
};
