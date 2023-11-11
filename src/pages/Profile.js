import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import user from '../assets/user.jpeg'
import EmailIcon from '@mui/icons-material/Email';
import { red } from '@mui/material/colors';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BoyIcon from '@mui/icons-material/Boy';
import MapIcon from '@mui/icons-material/Map';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import { singleUserGet } from '../services/apiConfig';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {deleteUserProfile} from '../services/apiConfig'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const [userData, setUserData] = useState({})
  const navigate = useNavigate

  const { id } = useParams()

  const getSingleUser = async () => {
    try {
      const response = await singleUserGet(id)
      setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleUser()
  }, [id])

  console.log(userData)

  const deleteUser = async ()=>{
    try {
      await deleteUserProfile(id)
      console.log("User Delted")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='h-[39rem] w-screen flex justify-center items-center'>
      <Card sx={{ maxWidth: 800, maxHeight: 600 }}>
        <CardActionArea>
          <CardContent className="flex w-96">
            <div className='p-1'>
              <Typography gutterBottom variant="h5" component="div">
                {userData.fname + " " + userData.lname}
              </Typography>
              <div className='w-full p-2 h-fit flex justify-around flex-col space-y-7 rounded-xl' >
                <Typography variant="body2" color="text.secondary">
                  <EmailIcon /> {userData.email}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <PhoneAndroidIcon /> {userData.phone}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <BoyIcon /> {userData.gender}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <MapIcon /> {userData.location}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <AutorenewIcon /> {userData.status}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <CreateNewFolderIcon /> Created at : {userData.dateCreated}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <EditIcon /> Date Updated : {userData.dateUpdated}
                </Typography>


              </div>
              <Button variant="outlined" color="error" onClick={deleteUser}>
                Delete User
              </Button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Profile