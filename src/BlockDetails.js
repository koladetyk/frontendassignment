import React, {Component} from "react";
import  "./index.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class BlockDetails extends Component {
    render() {
        //props
        const { address, balance, gasUsed } = this.props;

        //if address is empty then ask for selection
        if(address === " ") {
            return <div class>
                         <br>
                        </br>
                        Ethereum Address is Required!
                    </div>
        } //if user selects an address
        else {
            {/* mui stylng */} 
            return <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 900 }} aria-label="simple table">
                        <TableHead>
                             <TableRow>
                                     <TableCell align="center">Address</TableCell>
                                     <TableCell align="center">Balance</TableCell>
                                     <TableCell align="center">Gas Used</TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                                {/* showing values */} 
                                 <TableRow>
                                    <TableCell align="center">{address}</TableCell>
                                    <TableCell align="center">{balance}</TableCell>
                                    <TableCell align="center">{gasUsed}</TableCell>
                                 </TableRow>
                         </TableBody>
                     </Table>
                 </TableContainer>
        }
    }
}

export default BlockDetails;