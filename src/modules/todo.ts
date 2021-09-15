import { getTodoList } from '@/services/todo';

export default {
  namespace: 'todo',
  state: {
    todoList: [],
  },

  effects: {
    *getTodoList(_, { call, put }) {
      const resData = call(getTodoList);
      yield put({
        type: 'setTodoList',
        payload: resData,
      });
    },
  },
  reducers: {
    setTodoList(state, action) {
      return {
        ...state,
        todoList: action.payload
      };
    },
  },
};
