import React, { useEffect, useState } from 'react'; // Import 'useState' from 'react'
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { singleUserGet } from '../services/apiConfig';

import axios from 'axios'

const Edit = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');

    const formData = {
        fname,
        lname,
        email,
        gender,
        status,
        location,
        phone,
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/user/edit/${id}`, formData);
            console.log("User Update ho gya")
        } catch (error) {
            console.log(error);
        }
    };

    const getSingleUser = async () => {
        try {
            const response = await singleUserGet(id);
            setUserData(response.data);

            setFname(response.data.fname);
            setLname(response.data.lname);
            setEmail(response.data.email);
            setGender(response.data.gender);
            setStatus(response.data.status);
            setLocation(response.data.location);
            setPhone(response.data.phone);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUser();
    }, [id]);


    return (
        <div className="flex justify-center items-center h-[39rem] bg-gray-700">
            <div className="h-3/4 w-2/3 bg-white rounded-xl">
                <div className="w-full">
                    <div className="text-lg font-bold text-center">Edit User Details</div>

                    <div className="flex h-fit flex-col p-5">
                        <div className="flex w-full">
                            <div className="w-1/2 h-full p-1">
                                <div className="flex flex-col space-y-10">
                                    <TextField
                                        name="fname"
                                        id="outlined-basic"
                                        value={fname}
                                        placeholder='First Name'
                                        onChange={(e) => setFname(e.target.value)}
                                        variant="outlined"
                                    />
                                    <TextField
                                        name="email"
                                        id="outlined-basic"
                                        value={email}
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        variant="outlined"
                                    />
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            name="gender"
                                            placeholder='Gender'
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
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
                                        placeholder='Last Name'
                                        id="outlined-basic"
                                        variant="outlined"
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        value={userData.phone}
                                        name="phone"
                                        variant="outlined"
                                        placeholder='Phone Number'
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Activity status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            name="activity"
                                            placeholder='Status'
                                            value={userData.status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <MenuItem value="Active">Active</MenuItem>
                                            <MenuItem value="Unactive">Unactive</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        id="outlined-basic"
                                        value={userData.location}
                                        name="location"
                                        placeholder='Location'
                                        onChange={(e) => setLocation(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-1 w-full">
                            <Button variant="contained" onClick={handleUpdate} disableElevation className="w-full">
                                Update
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit