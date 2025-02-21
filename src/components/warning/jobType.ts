export const desktopOS = [
    {
        label: '掉卡',
        value: 12,
        color: '#53b2b4'
    },
    {
        label: 'ECC',
        value: 5,
        color: '#1a43c3'
    },
    {
        label: '其他',
        value: 3,
        color: '#4780da',
    },
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
