import { createRequestClient } from "./request-client";


export const state = () => ({
  tweets:[],
  tweet: {},
  comments: [],
  comment: {},
  token: '',
  email: '',
  favorites: [],
})

export const actions = {
  // async fetchTweets({commit}, payload){
  //   const client = createRequestClient(this.$axios, this.$cookies, this)
  //   const res = await client.get(payload.uri, payload.params)
  //   console.log(res)
  //   commit('mutateTweets', res)
  // },
  async loginGoogle({commit}, payload){
    console.log("login google in store");
    const client = createRequestClient(this.$axios, this.$cookies, this);
    client.get("/auth/login");
  },

}
