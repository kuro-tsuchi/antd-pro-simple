import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import ProTable from "@ant-design/pro-table";
import { Avatar, Button, Switch } from "antd";
import { useState } from "react";
import request from 'umi-request';

const Intex = () => {
  const [user, setUser] = useState();

  const getData = async () => {
    const data = await request.get('/system/user/userList').then((res): any => res.list);
    setUser(data)
  }


  const columns: any = [
    {
      title: '头像',
      dataIndex: 'avatar_url',
      hideInSearch: true,
      render: (_: any, record: any) => {
        return <Avatar src={record.avatar_url} size={32} icon={<UserOutlined />} />;
      }
    },
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '是否禁用',
      dataIndex: 'is_locked',
      hideInSearch: true,
      render: (_, record) => <Switch
        checkedChildren="启用"
        unCheckedChildren='禁用'
        defaultChecked={record.is_locked === 0}
        onChange={() => { }} />
    },
    {
      title: '创建试卷',
      dataIndex: 'created_at',
      hideInSearch: true,
    },
    {
      title: '操作',
      render: (_, record) => <a onChange={() => { }}>编辑</a>
    },
  ]
  // const actionRef: any = useRef()

  return (
    <PageContainer>
      <button onClick={getData}>
        点击获取数据
      </button>
      <ProTable
        rowKey="id"
        dataSource={user}
        columns={columns}
        // actionRef={actionRef}
        // request={async (params = {}) => getStaff()}
        search={{
          labelWidth: 'auto',
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
        }}
        dateFormatter="string"
        headerTitle="用户列表"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建
          </Button>,
        ]}
      />
    </PageContainer>
  )



};
export default Intex;

