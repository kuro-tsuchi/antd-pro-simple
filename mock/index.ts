import Mock from 'mockjs';
export default {
  '/api/index': {
    id: 1,
    name: 'Tom',
    age: 12,
  },
};

    Mock.mock("/api/todoList", {
    'code': 0,
    'data': {
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'title': '前端人人@id',
            'status': 1
        }]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});