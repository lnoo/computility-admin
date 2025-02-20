export const desktopOS = [
    {
        label: '运行中',
        value: 72,
        color: '#9ac342'
    },
    {
        label: '已完成',
        value: 16,
        color: '#1a43c3'
    },
    {
        label: '等待中',
        value: 3,
        color: '#4780da'
    },
    {
        label: '错误',
        value: 2,
        color: '#53b2b4'
    },
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
