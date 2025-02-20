import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './jobStatus';
import { SxProps } from '@mui/material';
import { slotProps } from './config';

export default function PieArcLabel({ sx }: { sx: SxProps }) {
    return (
        <PieChart
            margin={{ top: 0, right: 0, left: 0 }}
            series={[
                {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 35,
                    outerRadius: 80,
                    ...data,
                },
            ]}
            sx={{
                ...sx,
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white'
                },
            }}
            slotProps={slotProps}
        />
    );
}

const data = {
    data: desktopOS,
    valueFormatter,
};
