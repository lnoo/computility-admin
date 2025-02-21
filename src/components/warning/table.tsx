import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import dayjs from 'dayjs';
import { StyledTableCell, StyledTableRow } from '../common'

function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    status: string
) {
    return { name, calories, fat, carbs, status };
}

const rows = new Array(20).fill('').map((_, i) => {
    return createData(
        dayjs().subtract(i, 'days').format('YYYY-MM-DD'),
        `А5.5.3.${Math.floor(Math.random() * 100)}`,
        'CPU利用率异常',
        `${Math.floor(Math.random() * 3 + 1)}级`,
        Math.random() > .5 ? '已修复' : '故障'
    )
})

export default function WarningTable({ className }: { className?: string }) {
    return (
        <>
            <TableContainer component={Paper} className={className} style={{ paddingBottom: '10px', backgroundColor: 'transparent' }}>
                <Table stickyHeader size='small' style={{ minWidth: '350px' }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>时间</StyledTableCell>
                            <StyledTableCell align="right">告警集群</StyledTableCell>
                            <StyledTableCell align="right">摘要</StyledTableCell>
                            <StyledTableCell align="right">级别</StyledTableCell>
                            <StyledTableCell align="right">状态</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.status}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
