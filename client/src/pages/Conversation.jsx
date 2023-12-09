// // import testData from '../assets/testData.json';
// import heartIcon from '../assets/img/heart-icon.png'
// import { useState, useRef } from "react";

// import '../style/conversation.css'
// import { useQueries } from '@apollo/client';
// import { GET_USERS, GET_ME } from '../utils/queries';

// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Avatar from '@mui/material/Avatar';


// export const Conversation = () => {
//   const { results } = useQueries([
//     { queryKey: 'users', queryFn: GET_USERS },
//     { queryKey: 'me', queryFn: GET_ME },
//   ]);
//   const data1 = results[0].data;
//   const isLoading1 = results[0].isLoading;
//   const error1 = results[0].error;

//   const data2 = results[1].data;
//   const isLoading2 = results[1].isLoading;
//   const error2 = results[1].error;
//   // const { meLoading, meData } = useQuery(GET_ME);
//   const [messages, setMessages] = useState([]);
//   // const [imageURL, setImageURL] = useState('');
//   const [match, setMatch] = useState('');
//   // Using test data while server connection is down
//   // let data = require('../assets/testData.json');
//   const valueRef = useRef('') //creating a refernce for TextField Component



//   // console.log(meData);

//   const myData = useQuery(GET_ME);
//   let me;

//   if (isLoading1) {
//     return <h2>LOADING...</h2>;
//   }

//   const mappedData = data.users.map(person =>
//     <Button
//       key={person.email}
//       className='button'
//       style={{ textAlign: "center", margin: "auto" }}
//       onClick={() => getMessages(person)}
//     >
//       <img className="heart-icon" src={heartIcon} alt="Heart Icon" />
//       <img src={person.image} alt="" />
//       <p className='names'>{person.firstName} {person.age}</p>
//     </Button>
//   )

//   function getMessages(match) {
//     // this will bring back the conversation between the two
//     setMatch(match);
//     console.log(match);
//   }

//   function sendMessage() {
//     console.log(valueRef.current.value);
//   }

//   const handleKeyPress = (event) => {
//     // look for the `Enter` keyCode
//     console.log('key clicked!!');
//     if (event.keyCode === 13 || event.which === 13) {
//       console.log('ENTER KEY clicked!!');
//       sendMessage()
//     }
//   }


//   // console.log(testData);
//   // console.trace(data);

//   return (
//     <div style={{ width: "80%", height: "100vh" }}>
//       <div style={{
//         margin: "auto",
//         width: "50%",
//         textAlign: "center",
//         padding: "10px"
//       }}>
//         <h1 >{me.firstName}'s Conversations</h1>
//       </div>
//       <div style={{
//         display: "flex"
//       }}
//       >
//         <div style={{
//           width: "20%",
//           margin: "10px 20px",
//           padding: "10px 20px"
//         }}>
//           <ButtonGroup orientation='vertical' variant='none'>
//             {mappedData}

//           </ButtonGroup>



//         </div>
//         <div style={{
//           width: "80%",
//           margin: "10px 20px",
//           padding: "10px 20px",
//           backgroundColor: "lightblue"
//         }}>
//           <h3 style={{ textAlign: "center" }}>Your conversation with {match.firstName}</h3>
//           {messages.length!=0 
//             ? 
//             messages.map(m => (
//             <div key={m.text} style={{ display: "flex", flexDirection: "row" }}>
//               <img src={imageURL} alt="" />
//               <p style={{ justifyContent: "center" }}>{m.text}</p>
//             </div>)) 
//             : 
//             <p style={{ textAlign: "center" }}>No message history yet. Why don't you take the first step?</p>
//           }
//           <Box sx={{ '& > :not(style)': { m: 1 } }}>
//             <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//               <TextField 
//                 id="input-with-sx" 
//                 label="Say hello!" 
//                 variant="standard"
//                 inputRef={valueRef}
//                 onKeyUp={handleKeyPress}/>
//               <Avatar alt="Remy Sharp" src={heartIcon} />
//             </Box>
//           </Box>
//         </div>
//       </div>
//     </div>
//   )
// };

export const Conversation = () => {
  return (
    <>Conver</>
  );
}

