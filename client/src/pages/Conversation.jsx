// import testData from '../assets/testData.json';
import heartIcon from '../assets/img/heart-icon.png'
import { useState } from "react";

import '../style/conversation.css'
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../utils/queries';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export const Conversation = () => {
  const { loading, data } = useQuery(GET_USERS);
  const [messages, setMessages] = useState([]);
  const [imageURL, setImageURL] = useState('');
  // Using test data while server connection is down
  // let data = require('../assets/testData.json');

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log(data.users);

  const mappedData = data.users.map(person =>
    <Button 
      key={person.email} 
      className='button' 
      style={{ textAlign: "center", margin: "auto" }} 
      onClick={() => getMessages(person._id, person.image, person.outbox)}
    >
      <img className="heart-icon" src={heartIcon} alt="Heart Icon" />
      <img src={person.image} alt="" />
      <p className='names'>{person.firstName} {person.age}</p>
    </Button>
  )

  function getMessages(id, image, outbox) {
    // this will bring back the conversation between the two
    console.log('click');
    let newArr = outbox;
    // console.log(newArr[0].text);
    console.log(image);
    setMessages(newArr);
    setImageURL(image)
  }


  // console.log(testData);
  // console.trace(data);

  return <>
    <div style={{
      margin: "auto",
      width: "50%",
      textAlign: "center",
      padding: "10px"
    }}>
      <h1 >Conversations</h1>
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
        {messages.map(m =>
          <div key={m.text} style={{ display: "flex", flexDirection: "row" }}>
            <img src={imageURL} alt="" />
            <p style={{ justifyContent: "center" }}>{m.text}</p>
          </div>)
        }
      </div>
    </div>
  </>;
};

