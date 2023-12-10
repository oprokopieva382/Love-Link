// import testData from '../assets/testData.json';
import heartIcon from '../assets/img/heart-icon.png'
import { useState, useRef, useEffect } from "react";

import '../style/conversation.css'
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, GET_ME, GET_USER } from '../utils/queries';
import { ADD_MESSAGE } from '../utils/mutations';


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

import { ProfileNavBar } from '../components/ProfileNavBar';
import { BoxContainer } from '../style/profile.style';


export const Conversation = () => {
  const { loading, data } = useQuery(GET_ME);

  const { loading: newLoading, data: newData } = useQuery(GET_USERS);
  const [sendMessageMutation] = useMutation(ADD_MESSAGE);
  // const  = useQuery(GET_USER);
  // const { meLoading, meData } = useQuery(GET_ME);
  const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  // const [imageURL, setImageURL] = useState('');
  const [match, setMatch] = useState('');
  // Using test data while server connection is down
  // let data = require('../assets/testData.json');
  const valueRef = useRef('') //creating a refernce for TextField Component
  const tempImgURL = "https://randomuser.me/api/portraits/men/1.jpg"

  let mappedData;

  // useEffect(() => {
  //   refetch();
  // }, [input])

  if (newLoading) {
    return <h2>Loading...</h2>
  } else {
    loadMatches();
  }


  function loadMatches() {
    mappedData = newData.users.map(person =>
      <Button
        key={person.email}
        className='button'
        centerRipple={true}
        style={{ textAlign: "center", margin: "auto"}}
        onClick={() => getMessages(person)}
      >
        <img className="heart-icon" src={heartIcon} alt="Heart Icon" />
        <img src={person.image} alt="" style={{borderRadius: "50px"}}/>
      </Button>
    );
    mappedData = mappedData.slice(0, 5);
  }



  function getMessages(match) {
    // this will bring back the conversation between the two
    setMessages([]);
    console.log(messages);
    setMatch(match);
    console.log("Your match is: " + match.firstName);
    // console.log(match);
    let newArr1 = match.outbox.filter(m => m.userId === match._id);
    let newArr2 = data.me.outbox.filter(m => m.userId === match._id);
    let newArr = newArr1.concat(newArr2);
    setMessages(newArr);
    console.log(messages);
  }

  function sendMessage(event) {
    // setInput(event.target.value);
    let text = event.target.value;
    console.log(text);
    // setInput(text);
    if (event.keyCode === 13 || event.which === 13) {
      console.log('ENTER KEY clicked!!');
      makeMessage(text)
    }    
  }

  async function makeMessage(text) {
    try {
      const { data } = await sendMessageMutation({
        variables:
        {
          message: text,
          targetId: match._id.toString()
        }
      });

      if (data) {
        console.log('Message sent!');
        setMessages(...messages, data);
        console.log(messages);
      }
    } catch (err) {
      console.error(err);
    }
    setInput('');
  }


  return (
    <BoxContainer>
      <ProfileNavBar />
      <div style={{ width: "100%", height: "100vh" }}>
      <div style={{
        margin: "auto",
        width: "100%",
        textAlign: "center",
        padding: "10px 10%",
      }}>
        <h1 >{data.me.firstName}'s Conversations</h1>
      </div>
      <div style={{
        display: "flex"
      }}
      >
        <div style={{
          width: "20%",
          margin: "10px 20px",
          padding: "10px 20px",
          border: "solid #8C5EEB 3px",
          borderRadius: "30px",
        }}>
          <ButtonGroup orientation='vertical' variant='none' fullWidth={true}>
            <h3 style={{textAlign: "center"}}>Your top 5 matches!</h3>
            {mappedData}

          </ButtonGroup>



        </div>
        <div style={{
          width: "70%",
          margin: "10px 20px",
          padding: "10px 20px",
        }}>
          <h3 style={{ textAlign: "center" }}>{match ? `Your conversation with ${match.firstName}` : "Click on a match to start a conversation!"}</h3>
          {messages.length
            ?
            messages.map(m => (
              <div 
                key={m.text} 
                style={{ 
                  display: "flex", 
                  flexDirection: "row",
                  border: "solid #8C5EEB 3px",
                  borderRadius: "10px",
                  margin: "10px",
                  justifyContent: "flex-end",
                  padding: "5px"
                }}>
                <p style={{ alignSelf: "center", textAlign: "center", marginRight: "30px" }}>{m.text}</p>
                <img 
                  src={m.userId !== match._id ? match.image : tempImgURL} 
                  alt=""
                  style={{borderRadius: "50px", width: "75px"}}/>
              </div>))
            :
            <div>
              <p style={{ textAlign: "center" }}>No message history yet. Why don't you take the first step?</p>
              <Skeleton animation="wave"/>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </div>

          }
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                id="input-with-sx"
                label="Say hello!"
                variant="standard"
                fullWidth={true}
                value={input}
                onChange={(event, value) => setInput(value)}
                onKeyUp={(event) => sendMessage(event)} />
              <Avatar alt="Remy Sharp" src={tempImgURL}/>
            </Box>
          </Box>
        </div>
      </div>
    </div>
    </BoxContainer>

  )
};

