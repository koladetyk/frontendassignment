//import statements
//import React, {useState} from 'react';
import Header from "./Header";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Transactions = () => {

    //hard coded data for transaction table
    const mockTransactions = [
        {
          "source": "0xdd2fd4581271e230360230f9337d5c0430bf44c0",
          "destination": "0x8626f6940e2eb2930efb4cef49b2d1f2c9c1199",
          "amount": "250",
          "status": "SUCCESS",
          "gasUsed": "21000",
          "receiptHash": "0x39ae9270a0f2edac19f51d1e9b42380d73440f142d1d1709fb3806c9758f5c9e"
        },
        {
            "source": "0x09750ad360fdb7a2ee23669c4503c974d86d8694",
            "destination": "0xc915eC7f4CFD1C0A8Aba090F03BfaAb588aEF9B4",
            "amount": "18",
            "status": "SUCCESS",
            "gasUsed": "21000",
            "receiptHash": "0x8ab85b05ee9246f26ba192436ccb72ea86388bb5b44e1d7bf15db13213b0c26e"
        },
        {
            "source": "0xecb6ffaC05D8b4660b99B475B359FE454c77D153",
            "destination": "0x7F85A82a2da50540412F6E526F1D00A0690a77B8",
            "amount": "500",
            "status": "PENDING",
            "gasUsed": "21000",
            "receiptHash": "0xb85df3360f9375c8b2a915bebfec978b8d1b8909f8c80bc5c87072b76da1b942"
        },
        {
            "source": "0xBc8b85b1515E45Fb2d74333310A1d37B879732c0",
            "destination": "0xBBF84F9b823c42896c9723C0BE4D5f5eDe257b52",
            "amount": "80",
            "status": "SUCCESS",
            "gasUsed": "21000",
            "receiptHash": "0xc3b7a39474a86ffa50ad3fe52ff8267b8016cf3685cd8afb3e769e7640bcd5ee"
        }
    ];

    return (
        <div>
            {/* Header component */} 
            <Header title="Ethereum Block - Transactions" />
            {/* mui styling */} 
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                                <TableCell align="center">From</TableCell>
                                <TableCell align="center">To</TableCell>
                                <TableCell align="center">Amount</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Gas Used</TableCell>
                                <TableCell align="center">Receipt Hash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* showing mock data with map function */} 
                        {mockTransactions.map((mockTransaction, index) => (
                            <TableRow key={index}>
                            <TableCell align="center">{mockTransaction.source}</TableCell>
                            <TableCell align="center">{mockTransaction.destination}</TableCell>
                            <TableCell align="center">{mockTransaction.amount}</TableCell>
                            <TableCell align="center">{mockTransaction.status}</TableCell>
                            <TableCell align="center">{mockTransaction.gasUsed}</TableCell>
                            <TableCell align="center">{mockTransaction.receiptHash}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                 </Table>
            </TableContainer>
        </div>
    );
};

export default Transactions;