import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { LineChart } from '@mui/x-charts';
import { dataset } from './dataset'
import dayjs from 'dayjs';

const StyledLineChart = styled(LineChart)(() => ({
    '.MuiChartsAxis-line, .MuiChartsAxis-tick': {
        stroke: `${grey[800]} !important`
    }
}))

export default function Stream({ className }: { className?: string }) {
    return (
        <div className={className}>
            <StyledLineChart
                margin={{ left: 100, right: 50, bottom: 20 }}
                dataset={dataset}
                xAxis={[
                    {
                        id: 'Years',
                        dataKey: 'date',
                        scaleType: 'time',
                        valueFormatter(value) {
                            return dayjs(value).format('YYYY')
                        },
                    },
                ]}
                series={[
                    {
                        id: 'France',
                        label: 'GWx83',
                        dataKey: 'fr',
                        stack: 'total',
                        color: '#083079',
                        area: true,
                        showMark: false,
                    },
                    {
                        id: 'Germany',
                        label: 'GWx81',
                        dataKey: 'dl',
                        stack: 'total',
                        color: '#2859b8',
                        area: true,
                        showMark: false,
                    },
                    {
                        id: 'United Kingdom',
                        label: 'GWtn1',
                        dataKey: 'gb',
                        stack: 'total',
                        color: '#53c4d8',
                        area: true,
                        showMark: false,
                    },
                ]}
            />
        </div>
    );
}
