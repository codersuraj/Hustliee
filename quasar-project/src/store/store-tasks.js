// import Vue from 'vue'
import {uid} from 'quasar'

const state = {
    tasks: {
        id: "",
        email: "",
        isAdmin: false
    }
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks, payload.updates)
    },
    // deleteTask(state, id) {
    //     Vue.delete(state.tasks, id)
    // },
    // addTask(state, payload) {
    //     Vue.set(state.tasks, payload.id, payload.task)
    // }
}

const actions = {
    updateTask({
        commit
    }, payload) {
        console.log("hi");
        commit('updateTask', payload)
    },
    deleteTask({
        commit
    }, id) {
        commit('deleteTask', id)
    },
    addTask({
        commit
    }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
            let task = state.tasks[key]
            if (! task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
            let task = state.tasks[key]
            if (task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
