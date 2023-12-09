// import testData from '../assets/testData.json';
import heartIcon from '../assets/img/heart-icon.png'
import { useState, useRef } from "react";

import '../style/conversation.css'
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, GET_ME } from '../utils/queries';
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


export const Conversation = () => {
  const { loading, data } = useQuery(GET_ME);
  const { loading: newLoading, data: newData } = useQuery(GET_USERS);
  const [sendMessageMutation] = useMutation(ADD_MESSAGE);
  // const { meLoading, meData } = useQuery(GET_ME);
  const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  // const [imageURL, setImageURL] = useState('');
  const [match, setMatch] = useState('');
  // Using test data while server connection is down
  // let data = require('../assets/testData.json');
  const valueRef = useRef('') //creating a refernce for TextField Component
  let mappedData;

  if (newLoading) {
    return <h2>Loading...</h2>
  } else {
    loadMatches();
  }


  function loadMatches() {
    // const { data } = await getUsersQuery;
    console.log(newData);
    mappedData = newData.users.map(person =>
      <Button
        key={person.email}
        className='button'
        style={{ textAlign: "center", margin: "auto" }}
        onClick={() => getMessages(person)}
      >
        <img className="heart-icon" src={heartIcon} alt="Heart Icon" />
        <img src={person.image} alt="" />
        <p className='names'>{person.firstName} {person.age}</p>
      </Button>
    )
  }



  function getMessages(match) {
    // this will bring back the conversation between the two
    setMatch(match);
    console.log("Your match is: " + match.firstName);
    // console.log(data);
    let newArr = data.me.inbox;
    // newArr.push(data.me.inbox);
    // console.log(newArr);
    // newArr.push(data.me.outbox);
    console.log(newArr);
    setMessages(newArr);
    console.log(messages);
  }

  async function sendMessage() {
    // console.log();
    const messageText = valueRef.current.value;
    try {
      const { data } = await sendMessageMutation({
        variables:
        {
          message: messageText,
          targetId: match._id.toString()
        }
      });

      if (data) {
        console.log('Message sent!');
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleKeyPress = (event) => {
    // look for the `Enter` keyCode
    // console.log('key clicked!!');
    console.log(match._id);
    if (event.keyCode === 13 || event.which === 13) {
      // console.log('ENTER KEY clicked!!');
      sendMessage()
    }
  }


  return (
    <div style={{ width: "80%", height: "100vh" }}>
      <div style={{
        margin: "auto",
        width: "50%",
        textAlign: "center",
        padding: "10px"
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
          padding: "10px 20px"
        }}>
          <ButtonGroup orientation='vertical' variant='none'>
            {mappedData}

          </ButtonGroup>



        </div>
        <div style={{
          width: "80%",
          margin: "10px 20px",
          padding: "10px 20px",
          backgroundColor: "lightblue"
        }}>
          <h3 style={{ textAlign: "center" }}>Your conversation with {match.firstName}</h3>
          {messages.length != 0
            ?
            messages.map(m => (
              <div key={m.text} style={{ display: "flex", flexDirection: "row" }}>
                <img src={match.image} alt="" />
                <p style={{ justifyContent: "center" }}>{m.text}</p>
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
                inputRef={valueRef}
                onKeyUp={handleKeyPress} />
              <Avatar alt="Remy Sharp" src={heartIcon} />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
};

