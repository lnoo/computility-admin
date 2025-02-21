import { PieChartSlotProps, LineChartSlotProps } from "@mui/x-charts";

export const slotProps: PieChartSlotProps = {
    legend: {
        labelStyle: {
            fontSize: '.8rem'
        },
        direction: 'row',
        position: { vertical: 'bottom', horizontal: 'middle' },
        padding: 0,
        itemMarkWidth: 10,
        itemMarkHeight: 10,
    },
}

export const lineSlotProps: LineChartSlotProps = {
    legend: {
        labelStyle: {
            fontSize: '.8rem'
        },
        direction: 'row',
        position: { vertical: 'bottom', horizontal: 'middle' },
        padding: 0,
        itemMarkWidth: 10,
        itemMarkHeight: 4,
    },
}