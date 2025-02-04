import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(var i=0; i<localStorage.length; i++){
            // console.log(localStorage.key(i));
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch()
    },
    getters: {
        storedTodoItems(state){
            return state.todoItems;
        },
    },
    mutations: {
        addOneItem(state, todoItem){ 
            const obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
          },
          removeOneItem(state , payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index , 1);
          },
          toggleOneItem(state , payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item , JSON.stringify(payload.todoItem));
          },
          clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
          },
    },
    actions: {

    }
});