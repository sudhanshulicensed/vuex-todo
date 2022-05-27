export default {
    state: {
        todoData: [],
    },
    getters: {
      getData(state) { return state.todoData}
    },
    mutations: {
        firstCommit(state, payLoad){
            // console.log(state.todoData, payLoad)
            let arr = JSON.parse(JSON.stringify(state.todoData))
            arr.push(payLoad.data)
            state.todoData = JSON.parse(JSON.stringify(arr))
            console.log('12 called at store ', state.todoData, this.todoData)
        },
        checkIfChecked(state, payLoad) {
            // console.log(state, payLoad)
            state.todoData[payLoad.index].status = payLoad.status;
        }
    },
    actions: {
        addTask({ commit }, payLoad){
            // console.log(payLoad);
            console.log('22 called ')
            commit("firstCommit", payLoad)
        },
        updateStatus({commit}, payLoad) {
            // console.log(payLoad);
            commit("checkIfChecked", payLoad)
        },
    }
}