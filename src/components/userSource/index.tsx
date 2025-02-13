import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableCell, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#082f79',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        border: 'none',
        fontSize: 14,
        color: theme.palette.common.white,
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(even)': {
        backgroundColor: '#082f79',
    },
    '&:nth-of-type(odd)': {
        backgroundColor: 'transparent',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    rate: number,
) {
    return { name, calories, fat, carbs, rate };
}

const rows = new Array(20).fill('').map((_, i) => {
    return createData('SD0' + (i + 1), Math.floor(Math.random() * 20), Math.floor(Math.random() * 5), Math.floor(Math.random() * 100), Math.floor(Math.random() * 10))
})

export default function Env({ className }: { className?: string }) {
    return (
        <>
        <TableContainer sx={{ backgroundColor: 'transparent'}} component={Paper} className={className}>
            <Table sx={{mt: 1, mb: 1 }} stickyHeader size='small' style={{ minWidth: '350px' }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>租户名称</StyledTableCell>
                        <StyledTableCell align="right">节点数</StyledTableCell>
                        <StyledTableCell align="right">节点环比</StyledTableCell>
                        <StyledTableCell align="right">GPU利用率</StyledTableCell>
                        <StyledTableCell align="right">利用率环比</StyledTableCell>
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
                            <StyledTableCell align="right">{row.rate}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>

    );
}
