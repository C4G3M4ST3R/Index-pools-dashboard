import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    key: '__u2922',
    storage: localStorage,
  }).plugin(store);
};
