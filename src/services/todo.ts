import request from "umi-request";

export const getTodoList = async () => {
  return request('/api/todolists');
};
