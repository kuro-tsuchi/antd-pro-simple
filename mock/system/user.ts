import Mock from 'mockjs';
export default {
  'GET /system/user/userList': Mock.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
