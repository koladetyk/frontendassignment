//import statements
import React, {useState} from 'react';
import BlockDetails from './BlockDetails';
import Header from './Header';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Blocks = (props) => {

    //ethreum blocks and addresses

    const ethereumBlocks = [
        { 
          "address": "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e", 
          "balance": 542, 
          "gasUsed": 3051 
        },
        { 
          "address": "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa", 
          "balance": 690, 
          "gasUsed": 4665 
        },
        { 
          "address": "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba", 
          "balance": 654, 
          "gasUsed": 2232 
        },
        { 
            "address": "0xdd2fd4581271e230360230f9337d5c0430bf44c0", 
            "balance": 320, 
            "gasUsed": 2100 
        },
        { 
            "address": "0x09750ad360fdb7a2ee23669c4503c974d86d8694", 
            "balance": 419, 
            "gasUsed": 3890 
        },
        { 
            "address": "0xecb6ffaC05D8b4660b99B475B359FE454c77D153", 
            "balance": 280, 
            "gasUsed": 4222 
        }
    ];


    //setters for address balance and gasused
    const [address,setAddress] = useState(" ");

    const [block,setBlock] = useState(
        {
            balance: ethereumBlocks[0].balance,
            gasUsed: ethereumBlocks[0].gasUsed,
        }
    );

    //handling when user selects
    const handleOnChange = (event) => {

        //value for user selection then pass into setters
        const foundAddress = event.target.value
        setAddress(foundAddress);

        const foundBlock = ethereumBlocks.find((block) => block.address === foundAddress);
        setBlock({
            balance: foundBlock.balance,
            gasUsed: foundBlock.gasUsed,
        });
    };
    
    return (
        //styling from index.css
        <div class>
            {/* Header component */} 
            <Header title="Ethereum Block - Blocks" />
            <br>
            </br>
            <label>
                <br>
                </br>
                <Box sx={{ minWidth: 120}}>
                            {/* mui stylng */} 
                            <FormControl fullWidth>
                                <InputLabel id="select-label">Address</InputLabel>
                                {/* Block address and options */} 
                                <Select
                                    labelId="select-label"
                                    id="select"
                                    value={address}
                                    onChange={handleOnChange}
                                    label="Address"
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
            
            {/* checking address and using block to display props  */} 
            {address && (
                <BlockDetails
                    address={address}
                    balance={block.balance}
                    gasUsed={block.gasUsed}
                />
            )}
        </div>
        
    );

}

export default Blocks;