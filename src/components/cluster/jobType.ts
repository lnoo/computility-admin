export const desktopOS = [
    {
        label: '调研',
        value: 12,
        color: '#9ac342'
    },
    {
        label: '受理',
        value: 5,
        color: '#1a43c3'
    },
    {
        label: '测试',
        value: 3,
        color: '#4780da',
    },
    {
        label: '开发',
        value: 2,
        color: '#53b2b4'
    },
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
