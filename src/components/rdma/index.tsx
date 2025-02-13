import { styled } from '@mui/material/styles';
import { Button, Paper, buttonClasses } from '@mui/material';
import { AutoAwesomeMosaic, AutoAwesomeMotion } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts';
import {dataset, valueFormatter} from './dataset'

const chartSetting = {
    xAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
};

const StyledButton = styled(Button)(({ theme }) => ({
    [`&.${buttonClasses.root}`]: {
        borderRadius: '1000px',
        backgroundColor: '#082f79',
        color: theme.palette.common.white,
        [`&.active`]: {
            boxShadow: '0px 2px 5px 1px rgb(1, 127, 255)',
        }
    }
}))

export default function Rdma({ className }: { className?: string }) {
    return (
            <Paper className={className} style={{ paddingBottom: '10px', backgroundColor: 'transparent' }}>
                <div style={{ margin: '10px 0', display: 'flex', alignItems: 'end', justifyContent: 'space-around' }}>
                        <StyledButton sx={{ mr: 5 }} className='active' startIcon={<AutoAwesomeMosaic />} size="small">参数面</StyledButton>
                        <StyledButton startIcon={<AutoAwesomeMotion />} size="small">样本面</StyledButton>
                </div>
                <BarChart
                    dataset={dataset}
                    yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                    series={[{ dataKey: 'seoul',  valueFormatter }]}
                    layout="horizontal"
                    {...chartSetting}
                />
            </Paper>
    );
}
