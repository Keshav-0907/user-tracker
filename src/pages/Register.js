import React, { useState } from 'react'; // Import 'useState' from 'react'
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {userReg} from '../services/apiConfig'

const Register = () => {

    const navigate = useNavigate()           


    const[fname, setFname] = useState('')
    const[lname, setLname] = useState('')
    const[email, setEmail] = useState('')
    const[gender, setGender] = useState('')
    const[status, setStatus] = useState('')
    const[location, setLocation] = useState('')
    const[phone, setPhone] = useState('')


    const handleSubmit = async () => {
        const formData = {
            fname: fname,
            lname: lname,
            email: email,
            gender: gender,
            status: status,
            location: location,
            phone: phone
        };

       

       

        try {
            await userReg(formData).then(
                navigate('/'),
                alert('User Saevd')
            )

            
        } catch (error) {
            console.log(error)
        }
    };
    


    return (
        <div className="flex justify-center items-center h-[39rem] bg-gray-700">
            <div className="h-3/4 w-2/3 bg-white rounded-xl">
                <div className="w-full">
                    <div className="text-lg font-bold text-center">Enter your Details</div>

                    <div className="flex h-fit flex-col p-5">
                        <div className="flex w-full">
                            <div className="w-1/2 h-full p-1">
                                <div className="flex flex-col space-y-10">
                                    <TextField
                                        name="fname"
                                        id="outlined-basic"
                                        label="First Name"
                                        value={fname}
                                        onChange={(e)=>setFname(e.target.value)}
                                        variant="outlined"
                                    />
                                    <TextField
                                        name="email"
                                        id="outlined-basic"
                                        label="Email ID"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        variant="outlined"
                                    />
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            name="gender" 
                                            value={gender}
                                            onChange={(e)=>setGender(e.target.value)}
                                            label="Gender"
                                        >
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                        </Select>
                                    </FormControl>

                                    {/* <input
                                        type='file'
                                        placeholder="Upload Profile Photo"
                                        onChange={(e) => setProfile(e.target.value)}
                                        name='profile'
                                        value={profile}
                                    /> */}
                                </div>
                            </div>
                            <div className="w-1/2 h-full p-1">
                                <div className="flex flex-col space-y-10">
                                    <TextField
                                        name="lname"
                                        value={lname}
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone Number"
                                        value={phone}
                                        name="phone"
                                        variant="outlined"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Activity status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            name="activity"
                                            label="Activity status"
                                            value={status}
                                            onChange={(e)=>setStatus(e.target.value)}
                                        >
                                            <MenuItem value="Active">Active</MenuItem>
                                            <MenuItem value="Not - Active">Unactive</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Your Location"
                                        value={location}
                                        name="location"
                                        onChange={(e)=>setLocation(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-1 w-full">
                            <Button variant="contained" onClick={handleSubmit} disableElevation className="w-full">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
