import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#082f79',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.root}`]: {
        border: 'none'
    },
    [`&.${tableCellClasses.body}`]: {
        border: 'none',
        fontSize: 14,
        color: theme.palette.common.white,
    },
}));

export const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(even)': {
        backgroundColor: 'rgba(0, 94, 255, 0.3)',
    },
    '&:nth-of-type(odd)': {
        backgroundColor: 'transparent',
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));