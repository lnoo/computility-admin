import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, TableHead, TableRow, Button, Paper, TableCell, tableCellClasses, buttonClasses, Badge } from '@mui/material';
import { WarningAmber, WaterDropOutlined, WindPowerOutlined } from '@mui/icons-material';

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

function createData(
    name: string,
    calories: string,
    fat: number,
    carbs: number,
) {
    return { name, calories, fat, carbs };
}

const rows = new Array(20).fill('').map((_, i) => {
    return createData('未来网络A' + (i + 1), '010' + i, Math.floor(Math.random() * 20), Math.floor(Math.random() * 50))
})

export default function Env({ className }: { className?: string }) {
    return (
        <>
            <div style={{ margin: '10px 0', display: 'flex', alignItems: 'end', justifyContent: 'space-around' }}>
                <div>
                    <StyledButton sx={{ mr: 5 }} className='active' startIcon={<WindPowerOutlined />} size="small">风冷</StyledButton>
                    <StyledButton startIcon={<WaterDropOutlined />} size="small">液冷</StyledButton>
                </div>
                <Badge badgeContent={4} color="warning">
                    <WarningAmber color="action" />
                </Badge>
            </div>
            <TableContainer component={Paper} className={className} style={{ paddingBottom: '10px', backgroundColor: 'transparent' }}>
                <Table stickyHeader size='small' style={{ minWidth: '350px' }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>机楼</StyledTableCell>
                            <StyledTableCell align="right">机房</StyledTableCell>
                            <StyledTableCell align="right">温度</StyledTableCell>
                            <StyledTableCell align="right">湿度</StyledTableCell>
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
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
