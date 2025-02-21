import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './jobType';
import { SxProps } from '@mui/material';
import { slotProps } from './config';

export default function PieArcLabel({ sx }: { sx: SxProps }) {
    return (
        <PieChart
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            series={[
                {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 35,
                    ...data,
                    outerRadius: 80,
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
