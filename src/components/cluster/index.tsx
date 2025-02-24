import * as React from 'react';
import { Tabs, Tab, Box, Stack, Typography } from '@mui/material';
import Pie from './pie'
import PieStatus from './pieStatus'
import Line from './line'
import TextDigital from '../visual-ui/textDigital';

export default function Cluster({ className }: { className: string }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={className}>
            <Box
                sx={{ display: 'flex', height: '100%' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="集群监控内容"
                >
                    {
                        Array.from({ length: 10 }).map(() => Math.floor(Math.random() * 100)).map((item, i) => <Tab key={i} label={`А5.5.3.${item}`} />)
                    }
                </Tabs>
                <Stack direction="row" width="100%" textAlign="center" spacing={3}>
                    <Box width='20%' display='flex' fontFamily='digital' alignItems='center' justifyContent='center' flexDirection='column' padding='1vw' lineHeight='1'>
                        <p><small>当前警告</small> <TextDigital color='#9ac342'>0</TextDigital></p>
                        <p><small>当前运行时间</small> <TextDigital color='#9ac342'>38</TextDigital> 天</p>
                        <p><small>历史最长运行时间</small> <TextDigital color='#9ac342'>38</TextDigital> 天</p>
                    </Box>
                    <Box width='20%'>
                        <Typography sx={{ mt: 2 }}>任务类型分布</Typography>
                        <Pie sx={{ mt: -2 }} />
                    </Box>
                    <Box width='20%'>
                        <Typography sx={{ mt: 2 }}>任务状态分布</Typography>
                        <PieStatus sx={{ mt: -2 }} />
                    </Box>
                    <Box width='40%'>
                        <Typography sx={{ mt: 2 }}>任务数量趋势图</Typography>
                        <Line sx={{ mt: -2 }} />
                    </Box>
                </Stack>
            </Box>
        </div>
    );
}
