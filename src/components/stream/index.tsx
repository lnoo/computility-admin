import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { LineChart } from '@mui/x-charts';
import { dataset } from './dataset'
import dayjs from 'dayjs';

const StyledLineChart = styled(LineChart)(() => ({
    '.MuiChartsAxis-line, .MuiChartsAxis-tick': {
        stroke: `${grey[800]} !important`
    },
    '& .MuiAreaElement-series-France': {
        fill: "url('#France')",
    },
    '& .MuiAreaElement-series-Germany': {
        fill: "url('#Germany')",
    },
    '& .MuiAreaElement-series-UK': {
        fill: "url('#UK')",
    },
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
                        color: 'rgba(53, 255, 244, 0.3)',
                        area: true,
                        showMark: false,
                    },
                    {
                        id: 'Germany',
                        label: 'GWx81',
                        dataKey: 'dl',
                        stack: 'total',
                        color: 'rgba(8, 139, 255, 0.3)',
                        area: true,
                        showMark: false,
                    },
                    {
                        id: 'UK',
                        label: 'GWtn1',
                        dataKey: 'gb',
                        stack: 'total',
                        color: 'rgba(236, 168, 80, 0.3)',
                        area: true,
                        showMark: false,
                    },
                ]}
            >
                <defs>
                    <linearGradient id="France" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="rgba(53, 255, 244, 0.3)" />
                        <stop offset="100%" stopColor="rgba(53, 255, 244, 0.0001)" />
                    </linearGradient>
                    <linearGradient id="Germany" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="rgba(8, 139, 255, 0.3)" />
                        <stop offset="100%" stopColor="rgba(8, 139, 255, 0.0001)" />
                    </linearGradient>
                    <linearGradient id="UK" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="rgba(236, 168, 80, 0.3)" />
                        <stop offset="100%" stopColor="rgba(236, 168, 80, 0.0001)" />
                    </linearGradient>
                </defs>
            </StyledLineChart>
        </div>
    );
}
