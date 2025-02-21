import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './jobType';

export default function PieArcLabel() {
    return (
        <PieChart
            margin={{ top: 0, right: 0, left: 0 }}
            series={[
                {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 35,
                    ...data,
                    outerRadius: 70,
                    innerRadius: 45,
                    paddingAngle: 1,
                    cornerRadius: 50,
                },
            ]}
        />
    );
}

const data = {
    data: desktopOS,
    valueFormatter,
};
