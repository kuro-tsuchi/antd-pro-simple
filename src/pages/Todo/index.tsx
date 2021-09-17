import { getTodoList } from '@/services/todo';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Alert, Button } from 'antd';
import request from 'umi-request'



const getData = () => {
    request.get('/api/todoList').then(res => {
        console.log(res);
        console.log(res.id);

    })
}




    const status = [
        <Alert message="待办" type="info" showIcon />,
        <Alert message="完成" type="success" showIcon />,
        <Alert message="取消" type="error" showIcon />
    ]


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (_, record) => status[record.status]
        },
        {
            title: '修改状态',
            render: () => [
                <a>代办 </a>,
                <a>完成 </a>,
                <a>取消 </a>
            ]
        },
    ];

    const data = [
        { id: 1, title: 'TodoList列表', status: 0 },
        { id: 2, title: 'TodoList添加', status: 1 },
        { id: 3, title: 'TodoList编辑', status: 2 },
        { id: 4, title: 'TodoList修改状态', status: 0 },
    ];

    const todo = () => {
        return (
            <PageContainer>
                <button onClick={getData}>
                    点击获取数据
                </button>
                <ProTable
                    columns={columns}
                    rowKey="key"
                    search={false}
                    pagination={{
                        showQuickJumper: true,
                    }}
                    dateFormatter="string"
                    headerTitle="代办事项列表"
                    // dataSource={data}
                    request={async () => ({ data: await getTodoList() })}
                    toolBarRender={() => [
                        <Button type="primary" key="primary">
                            <PlusOutlined /> 创建应用
                        </Button>,
                    ]}
                />
            </PageContainer>
        );
    };

    export default todo;
