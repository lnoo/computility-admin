import { LineChart } from '@mui/x-charts/LineChart';
import {
    worldElectricityProduction,
    keyToLabel,
    colors,
} from './jobNum';
import { styled, SxProps } from '@mui/material';
import { grey } from '@mui/material/colors';
import { lineSlotProps } from './config';

const StyledLineChart = styled(LineChart)(() => ({
    '.MuiChartsAxis-line, .MuiChartsAxis-tick': {
        stroke: `${grey[800]} !important`
    }
}))

export default function LineDataset({ sx }: { sx: SxProps }) {
    return (
        <StyledLineChart
            sx={sx}
            slotProps={lineSlotProps}
            margin={{ top: 20, bottom: 75 }}
            xAxis={[{
                dataKey: 'year',
                valueFormatter: (value) => value.toString(),
                min: 1985,
                max: 2022,
            }]}
            series={
                Object.keys(keyToLabel).map((key) => ({
                    dataKey: key,
                    label: keyToLabel[key],
                    color: colors[key],
                    showMark: false,
                }))
            }
            dataset={worldElectricityProduction}
        />
    );
}
