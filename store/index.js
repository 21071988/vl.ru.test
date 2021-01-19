import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import axios from 'axios'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      tasks:[]
    },
    mutations:{
      SET_TASKS(state, tasks) {
        state.tasks = tasks;
    }
    },
    actions:{
      getTasks (context) {
        axios
      .get('https://edu.slim.technology/gettasks.php')
      .then(response => {
        context.commit('SET_TASKS', response.data)
       });
      }
    },
    getters:{
      getSomeTask: state => id => {
          return state.tasks.find(task => task.id === id);
      }
    }
  });


export default store