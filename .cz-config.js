module.exports = {
    types: [
        { value: 'feat', name: '新功能' },
        { value: 'fix', name: '修复bug' },
        { value: 'docs', name: '文档变更' },
        { value: 'perf', name: '性能优化' },
    ],
    scopes: [
        {name: '初始化'},
        {name: '根组件App.vue'},
        {name: '路由'},
        {name: 'README'},
        {name: '路由组件'},
        {name: '非路由组件'},
        {name: '接口数据'},
    ],
    messages:{
        type: '请选择提交类型：',
        scope: '输入变更的文件 (可选):',
        subject: '填写一个简短精炼的描述语句(必填):',
        body: '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)：',
        footer: '列举出所有变更的 ISSUES CLOSED  (可选)，例如: #31, #34:',
        confirmCommit: '确认使用以上信息提交？(y/n)'
    },
    subjectLimit:72
}