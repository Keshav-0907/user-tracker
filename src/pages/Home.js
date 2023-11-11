import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

import { userGetfunc } from '../services/apiConfig';
import { Link } from 'react-router-dom';

const Home = () => {

  const [userData, setUserData] = useState([])
  const [search, setSearch] = useState('')
  const[gender, setGender] = useState('All')

  // const handleRotation = () => {
  //   setIsRotated(!isRotated);
  // };

  const userGets = async () => {
    const response = await userGetfunc(search, gender)
    if (response.status === 200) {
      setUserData(response.data)
    } else {
      console.log("ERROR")
    }
  }

  useEffect(() => {
    userGets()
  }, [search, gender])

  console.log(search)


  return (
    <div className='px-10 flex flex-col bg-slate-300 h-screen'>
      <div className='h-1/6 flex justify-between w-[85rem] items-center'>
        <div className=''>
          <div class="flex items-center">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <input onChange={(e)=>setSearch(e.target.value)} type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
            </div>
            <button class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>Search
            </button>
          </div>
        </div>

        <div>
          <Button variant="contained" startIcon={<AddIcon />} href='/register'>
            Add user
          </Button>
        </div>
      </div>

      <div className='h-1/6 flex justify-between'>
        <div>
          <Button variant="contained" startIcon={<BackupTableIcon />}>
            Export to CSV
          </Button>
        </div>

        <div>
          <div className='font-semibold text-2xl'>
            Filter by gender
          </div>

          <div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="All" onChange={(e)=>setGender(e.target.value)} control={<Radio />} label="All" />
                <FormControlLabel value="Female" onChange={(e)=>setGender(e.target.value)} control={<Radio />} label="Female" />
                <FormControlLabel value="Male" onChange={(e)=>setGender(e.target.value)} control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        {/* <div>
          <div className='font-semibold text-2xl '>
            Sort by Value
          </div>

          <div
            className={`transform ${isRotated ? 'rotate-180' : 'rotate-0'} text-blue-700 font-extrabold text-center cursor-pointer transition-transform duration-500 ease-in-out`}
            onClick={handleRotation}
          >
            <ImportExportIcon />
          </div>
        </div> */}

        {/* <div>
          <div className='font-semibold text-2xl'>
            Filter by Activity
          </div>

          <div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel onClick={(e)=>setStatus(e.target.value)} value="All" control={<Radio />} label="All" />
                <FormControlLabel onClick={(e)=>setStatus(e.target.value)} value="Active" control={<Radio />} label="Active" />
                <FormControlLabel onClick={(e)=>setStatus(e.target.value)} value="Unactive" control={<Radio />} label="UnActive" />
              </RadioGroup>
            </FormControl>
          </div>
        </div> */}
      </div>

      <div className='h-4/6'>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Id
                </th>
                <th scope="col" class="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
                <th scope="col" class="px-6 py-3">
                  Update
                </th>

              </tr>
            </thead>

            {
              userData.length > 0 && (
                <tbody>
                  {userData.map((element, index) => (
                    <tr
                      key={index} // Make sure to include a unique key for each row
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-600"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {element.fname + " " + element.lname}
                      </th>
                      <td className="px-6 py-4">{element.email}</td>
                      <td className="px-6 py-4"> {element.gender} </td>
                      <td className="px-6 py-4">{element.status}</td>
                      <td className="px-6 py-4">
                        {element.location}
                      </td>
                      <td className="px-6 py-4 text-blue-500 hover:text-white hover:cursor-pointer">
                        <Link to={`/profile/${element._id}`}>More Info</Link>
                      </td>
                      <td className="px-6 py-4 text-blue-500 hover:text-white hover:cursor-pointer">
                        <Link to={`/edit/${element._id}`}>Update User</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )
            }



          </table>
        </div>

      </div>
    </div>
  )
}

export default Home