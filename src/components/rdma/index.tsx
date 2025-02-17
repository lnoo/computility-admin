import { styled } from '@mui/material/styles';
import { Button, buttonClasses } from '@mui/material';
import { AutoAwesomeMosaic, AutoAwesomeMotion } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts';
import { dataset, valueFormatter } from './dataset'
import { grey } from '@mui/material/colors';

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

const StyledBarChart = styled(BarChart)(() => ({
    '.MuiChartsAxis-line, .MuiChartsAxis-tick': {
        stroke: `${grey[800]} !important`
    }
}))

export default function Rdma({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <StyledButton sx={{ mr: 5 }} className='active' startIcon={<AutoAwesomeMosaic />} size="small">参数面</StyledButton>
                <StyledButton startIcon={<AutoAwesomeMotion />} size="small">样本面</StyledButton>
            </div>
            <div style={{ height: 'calc(100% - 50px)' }}>
                <StyledBarChart
                    margin={{ left: 100, right: 50, top: 10, bottom: 20 }}
                    dataset={dataset}
                    bottomAxis={null}
                    yAxis={[{
                        scaleType: 'band',
                        dataKey: 'month',
                        // eslint-disable-next-line
                        // @ts-expect-error
                        categoryGapRatio: .5,
                        tickLabelStyle: { width: '1px' }
                    }]}
                    series={[{ dataKey: 'seoul', valueFormatter, color: '#082f79' }]}
                    layout="horizontal"
                    barLabel={(item) => item.value + '%'}
                />
            </div>
        </div>
    );
}
