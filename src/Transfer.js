//import statements
import React, {useState} from 'react';
import Header from "./Header";
import Receipt from './Receipt';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Transfer = (props) => {

    //setters for address, amount and reciept 
    const [address1,setAddress1] = useState("");
    const [address2,setAddress2] = useState("");
    const [amount,setAmount] = useState("");
    const [receipt,setShowReceipt] = useState(false);
    const [sampleReceipt,setReceipt] = useState(
        {
            transactionHash : "",
            blockHash : "",
            blockNumber : "",
            from : "",
            to : "",
            amount : "",
            gasUsed: "",
        }
    );


    //handling when user selects 1st address
    const handleOnChange1 = (event) => {

        // pass into setters
        setAddress1(event.target.value);

    };

    //handling when user selects 2nd address
    const handleOnChange2 = (event) => {

        // pass into setters
        setAddress2(event.target.value);

    };

    //handling when user enters amount
    const handleInputChange = (e) => {

        // pass into setters
        setAmount(e.target.value);
    };

    //handling when user submits
    const handleSubmit = (e) => {
        e.preventDefault();

        // pass into setters
        setReceipt({
            transactionHash : "0x39ae9270a0f2edac19f51d1e9b42380d73440f142d1d1709fb3806c9758f5c9e",
            blockHash : "0x8ab85b05ee9246f26ba192436ccb72ea86388bb5b44e1d7bf15db13213b0c26e",
            blockNumber : "51",
            from : address1,
            to : address2,
            amount : amount,
            gasUsed: "350",
        });

        //show reciept 
        setShowReceipt(true);

    };

     //handling when user cancels
     const handleCancel = () => {

        // pass into setters and set back to default
        setAddress1("");
        setAddress2("");
        setAmount("");
        setReceipt({
            transactionHash: "",
            blockHash: "",
            blockNumber: "",
            from: "",
            to: "",
            amount: "",
            gasUsed: "",
        });

        //hide reciept 
        setShowReceipt(false);

     };
    
    


    return (
        <div>
            {/* Header component */} 
            <Header title="Ethereum Block - Transfers" />
            <form onSubmit={handleSubmit}>
                <label>
                    <label>
                        <br>
                        </br>
                        {/* mui stylng */} 
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="select-label">From</InputLabel>
                                {/* source address and options */} 
                                <Select
                                labelId="select-label"
                                id="select"
                                value={address1}
                                label="address1"
                                onChange={handleOnChange1}
                                >
                                    <MenuItem value="0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e">0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e</MenuItem>
                                    <MenuItem value="0xffaa6990069ecba8570dab82cba2caf6ff77b8fa">0xffaa6990069ecba8570dab82cba2caf6ff77b8fa</MenuItem>
                                    <MenuItem value="0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba">0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba</MenuItem>
                                    <MenuItem value="0xdd2fd4581271e230360230f9337d5c0430bf44c0">0xdd2fd4581271e230360230f9337d5c0430bf44c0</MenuItem>
                                    <MenuItem value="0x09750ad360fdb7a2ee23669c4503c974d86d8694">0x09750ad360fdb7a2ee23669c4503c974d86d8694</MenuItem>
                                    <MenuItem value="0xecb6ffaC05D8b4660b99B475B359FE454c77D153">0xecb6ffaC05D8b4660b99B475B359FE454c77D153</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </label>
                    
                    <label>
                        <br>
                        </br>
                        {/* mui stylng */} 
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="select-label">To</InputLabel>
                                {/* destination address and options */} 
                                <Select
                                labelId="select-label"
                                id="select"
                                value={address2}
                                label="address2"
                                onChange={handleOnChange2}
                                >
                                    <MenuItem value="0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e">0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e</MenuItem>
                                    <MenuItem value="0xffaa6990069ecba8570dab82cba2caf6ff77b8fa">0xffaa6990069ecba8570dab82cba2caf6ff77b8fa</MenuItem>
                                    <MenuItem value="0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba">0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba</MenuItem>
                                    <MenuItem value="0xdd2fd4581271e230360230f9337d5c0430bf44c0">0xdd2fd4581271e230360230f9337d5c0430bf44c0</MenuItem>
                                    <MenuItem value="0x09750ad360fdb7a2ee23669c4503c974d86d8694">0x09750ad360fdb7a2ee23669c4503c974d86d8694</MenuItem>
                                    <MenuItem value="0xecb6ffaC05D8b4660b99B475B359FE454c77D153">0xecb6ffaC05D8b4660b99B475B359FE454c77D153</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </label>
                    <br>
                    </br>
                    <label>
                        {/* mui stylng */} 
                        <TextField 
                            onChange={handleInputChange} 
                            type='text'
                            amount = "amount"
                            value={amount}
                            id="outlined-basic" 
                            label="Amount" 
                            variant="outlined"
                        />
                        <br>
                        </br>
                    </label>
                    <br>
                    </br>
                    {/* mui stylng */} 
                    <Button variant="contained" color="success" size="large" type="submit">
                        Submit
                    </Button>
                    {/* mui stylng */} 
                    <Button variant="contained" color="error" size="large" onClick={handleCancel}>
                         Cancel
                    </Button>
                </label>
            </form>

            {/* checking reciept and using sampleReceipt to display props  */} 
            {receipt && <Receipt 
                transactionHash={sampleReceipt.transactionHash}
                blockHash={sampleReceipt.blockHash}
                blockNumber={sampleReceipt.blockNumber}
                from={sampleReceipt.from}
                to={sampleReceipt.to}
                amount={sampleReceipt.amount}
                gasUsed={sampleReceipt.gasUsed}
            />}
        </div>
    );
};

export default Transfer;