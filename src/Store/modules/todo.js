export default {
    state: {
        todoData: [{
            status: false,
            content: "Start making a presentation",
        },{
            status: false,
            content: "Start preparing for Interview",
        }],
        inputTodo: {
            status: false,
            content: "",
        }
    },
    getters: {

    },
    mutations: {
        firstCommit(state, payLoad){
            state.todoData.push(payLoad);
        },
        checkIfChecked(state, payLoad) {
            console.log(state, payLoad)
            state.todoData[payLoad.index].status = payLoad.status;
        }
    },
    actions: {
        addTask({ commit }, payLoad){
            console.log(payLoad);
            commit("firstCommit", payLoad)
        },
        updateStatus({commit}, payLoad) {
            console.log(payLoad);
            commit("checkIfChecked", payLoad)
        }
    }
}