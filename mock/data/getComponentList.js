/**
 * @description 生产组件列表
 */

const Mock = require('mockjs')
const Random = Mock.Random
function getComponentList() {
    return [
        // Info
        {
            fe_id: 'c1', // 注意：由于统计页，左侧和中间需要数据完全一致，所以要写死fe_id，不能用Random.id()
            type: 'questionInfo', // 组件类型，不能重复，前后端需统一
            title: '问卷信息',
            isHidden: false,
            isLocked: false,
            props: { title: '问卷标题', desc: '问卷描述...' },
        },
        // Title
        {
            fe_id: 'c2',
            type: 'questionTitle', // 组件类型，不能重复，前后端需统一
            title: '标题',
            isHidden: false,
            isLocked: false,
            props: { text: '个人信息调研', level: 1, isCenter: false },
        },
        // Input
        {
            fe_id: 'c3',
            type: 'questionInput',
            title: '输入框1',
            isHidden: false,
            isLocked: false,
            props: { title: '你的姓名', placeholder: '请输入姓名...' }
        },
        // TextArea
        {
            fe_id: 'c4',
            type: 'questionTextarea',
            title: '输入框2',
            isHidden: false,
            isLocked: false,
            props: { title: '你的电话', placeholder: '请输入电话...' }
        },
        // Paragraphy
        {
            fe_id: 'c5',
            type: 'questionParagraph',
            title: '段落',
            isHidden: false,
            isLocked: false,
            props: { text: '一行段落\n一行段落2', isCenter: false }
        },
        // Radio
        {
            fe_id: 'c6',
            type: 'questionRadio',
            title: '单选',
            isHidden: false,
            isLocked: false,
            props: { 
                title: '单选标题',
                isVertical: false,
                options: [
                    { value: 'item1', text: '选项1'},
                    { value: 'item2', text: '选项2'},
                    { value: 'item3', text: '选项3'},
                ],
                value: ''
            }
        },
        // Checkbox
        {
            fe_id: 'c7',
            type: 'questionCheckbox',
            title: '多选',
            isHidden: false,
            isLocked: false,
            props: { 
                title: '多选标题',
                isVertical: false,
                list: [
                    { value: 'item1', text: '选项1', checked: true },
                    { value: 'item2', text: '选项2', checked: false },
                    { value: 'item3', text: '选项3', checked: false },
                ],
            }
        }
    ]
}

module.exports = getComponentList