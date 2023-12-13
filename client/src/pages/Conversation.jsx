// import testData from '../assets/testData.json';
import heartIcon from "../assets/img/heart-icon.png";
import { useState, useRef, useEffect } from "react";

import "../style/conversation.css";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, GET_ME } from "../utils/queries";
import { ADD_MESSAGE, SET_TOXIC } from "../utils/mutations";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

import { ProfileNavBar } from "../components/ProfileNavBar";
import { BoxContainer } from "../style/profile.style";

import * as toxicity from '@tensorflow-models/toxicity';
import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Working on dialog; import here
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export const Conversation = () => {
  const { loading, data, myError, refetch: myRefetch } = useQuery(GET_ME);

  const { loading: newLoading, data: newData, error, refetch } = useQuery(GET_USERS);
  const [sendMessageMutation, { err }] = useMutation(ADD_MESSAGE,
    // invalidate cache of use query data
    {
      onCompleted: () => {
        refetch()
        myRefetch()
      }
    });

  const [setToxic, { loading: toxicLoading, error: toxicError }] = useMutation(SET_TOXIC);
  // const  = useQuery(GET_USER);
  // const { meLoading, meData } = useQuery(GET_ME);
  const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  // const [imageURL, setImageURL] = useState('');
  const [match, setMatch] = useState("");

  const [mapMessages, setMapMessages] = useState([]);

  // For dialog modal
  const [open, setOpen] = useState(false);

  // For loading spinner
  const [spinner, setSpinner] = useState(false);


  // Using test data while server connection is down
  // let data = require('../assets/testData.json');
  const valueRef = useRef(""); //creating a refernce for TextField Component
  const tempImgURL = "https://randomuser.me/api/portraits/men/1.jpg";
  let mappedData;
  let newMessages;


  useEffect(() => {
    (async () => {
      try {
        await refetch();
        await myRefetch();
        getMessages(match);
      } catch (err) {
        console.log('Error occured when refetching');
      }
    })();
  }, [newData])

  if (newLoading) {
    return <h2>Loading...</h2>;
  } else {
    loadMatches();
    // newMessages = printMessages();
  }

  function loadMatches() {
    // const { data } = await getUsersQuery;
    // console.log(newData);
    mappedData = newData.users.filter(
      (user) => data.me.matches.includes(user._id)
    )
    mappedData = mappedData.slice(0, 5);
    mappedData = mappedData.map((person) => (
      <Button
        key={person.email}
        className="button"
        centerRipple={true}
        style={{ textAlign: "center", margin: "auto" }}
        onClick={() => getMessages(person)}
      >
        <img className="heart-icon" src={heartIcon} alt="Heart Icon" />
        <img src={person.image} alt="" style={{ borderRadius: "50px" }} />
      </Button>
    ));
  }

  function getMessages(match) {
    // this will bring back the conversation between the two
    setMessages([]);
    // console.log("empty out messages state variable: ");
    // console.log(messages);
    setMatch(match);
    // console.log("Your match is: " + match.firstName);
    // console.log(match);
    let newArr1 = match.outbox.filter((m) => m.userId === match._id);
    let newArr2 = data.me.outbox.filter((m) => m.userId === match._id);
    let newArr = newArr1.concat(newArr2);
    setMessages(newArr);
    // console.log("added newArr to messages state variable: " + messages);
    // console.log(messages);

    newMessages = printMessages();
  }

  function sendMessage() {
    // setInput(event.target.value);
    let text = input;

    // console.log(text);
    // setInput(text);

      // console.log("ENTER KEY clicked!!");
      makeMessage(text);

  }

  function printMessages() {
    // console.log(newMessages);
  }

  async function makeMessage(text) {
    // let newMessage = {
    //   text: text,
    //   read: false,
    //   createdAt: new Date().toString(),
    //   userId: data.me._id
    // }
    // // console.log(data.me._id);
    // setMessages([...messages, newMessage]);
    try {
      const { data } = await sendMessageMutation({
        variables: {
          message: text,
          targetId: match._id.toString(),
        },
      });

      if (data) {
        // console.log("Message sent!");
        loadMatches();
        // console.log("Message sent!");
        getMessages(match);
        // console.log("Message sent!");
      }
    } catch (err) {
      console.error(err);
    }
    setInput("");
    loadMatches();
  }

  const threshold = 0.9;
  function classify(event) {
    const sentence = event.target.value;
    setInput(event.target.value);
    if (event.keyCode === 13 || event.which === 13) {
      setSpinner(true);
      toxicity.load(threshold).then(model => {
        console.log(sentence);
        // Activate spinner
        model.classify(sentence).then(predictions => {
          // console.log(predictions);
          // Deactivate spinner
          setSpinner(false);
          for (let i = 0; i < predictions.length; i++) {
            // console.log(predictions[i].label);

            // console.log(predictions[i].results[0].match);

            if (predictions[i].results[0].match === true) {
              handleClickOpen();
            } else if (i === predictions.length-1) {
              sendMessage();
            }
          }
        })
      })
    }
  };


  const flagAccountToxic = async () => {
    const retData = await setToxic();
    console.log(retData);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAndContinue = () => {
    setOpen(false);
    // add in here call to function to flag user account for toxicity
    sendMessage();
    flagAccountToxic();
  };

  return (
    <BoxContainer>
      <ProfileNavBar />
      <div style={{ width: "100%", height: "100vh" }}>
        <div
          style={{
            margin: "auto",
            width: "100%",
            textAlign: "center",
            padding: "10px 10%",
          }}
        >
          <h1>{data.me.firstName}'s Conversations</h1>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              width: "20%",
              margin: "10px 20px",
              padding: "10px 20px",
              border: "solid #8C5EEB 3px",
              borderRadius: "30px",
            }}
          >
            <ButtonGroup orientation="vertical" variant="none" fullWidth={true}>
              <h3 style={{ textAlign: "center" }}>Your top 5 matches!</h3>
              {mappedData}
            </ButtonGroup>
          </div>
          <div
            style={{
              width: "70%",
              margin: "10px 20px",
              padding: "10px 20px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              {match
                ? `Your conversation with ${match.firstName}`
                : "Click on a match to start a conversation!"}
            </h3>
            {messages.length ? (
              messages.map((m) => (
                <div
                  key={m.createdAt}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "solid #8C5EEB 3px",
                    borderRadius: "10px",
                    margin: "10px",
                    justifyContent: "flex-end",
                    padding: "5px",
                  }}
                >
                  <p
                    style={{
                      alignSelf: "center",
                      textAlign: "center",
                      marginRight: "30px",
                    }}
                  >
                    {m.text} @ {m.createdAt}
                  </p>
                  <img
                    src={m.userId !== match._id ? match.image : tempImgURL}
                    alt=""
                    style={{ borderRadius: "50px", width: "75px" }}
                  />
                </div>
              ))
            ) : (
              <div>
                <p style={{ textAlign: "center" }}>
                  No message history yet. Why don't you take the first step?
                </p>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
              </div>
            )}
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  id="input-with-sx"
                  label="Say hello!"
                  variant="standard"
                  fullWidth={true}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyUp={classify}
                />
                <Avatar alt="Remy Sharp" src={tempImgURL} />
              </Box>
            </Box>
          </div>
        </div>
      </div>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Send a toxic message?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We have determined that the message you wish to send is potentially toxic.
              Sending toxic messages may flag your account and make you less visible to potential matches.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>Cancel</Button>
            <Button onClick={handleCloseAndContinue}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={spinner}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </BoxContainer>
  );
};


// onKeyUp={(event) => sendMessage(event)}
{/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
<Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
  Warning: your text is potentially toxic.
</Alert>
</Snackbar> */}