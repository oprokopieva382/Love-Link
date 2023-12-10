// import testData from '../assets/testData.json';
import heartIcon from "../assets/img/heart-icon.png";
import { useState } from "react";
import "../style/conversation.css";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, GET_ME } from "../utils/queries";
import { ADD_MESSAGE } from "../utils/mutations";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import { ProfileNavBar } from "../components/ProfileNavBar";
import { BoxContainer } from "../style/profile.style";
import Auth from "../utils/auth";

export const Conversation = () => {
  const { loading, data } = useQuery(GET_ME);
  const { loading: newLoading, data: newData } = useQuery(GET_USERS);
  const [sendMessageMutation] = useMutation(ADD_MESSAGE);
  // const [matches, setMatches] = useState([]);
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const [input, setInput] = useState("");
  console.log(input);
  const [match, setMatch] = useState({});
  console.log(match);
  const tempImgURL = "https://randomuser.me/api/portraits/men/1.jpg";
  let mappedData;

  const loadMatches = () => {
    mappedData = newData.users.map((person) => (
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
    mappedData = mappedData.slice(0, 5);
  };

  if (newLoading) {
    return <h2>Loading...</h2>;
  } else {
    loadMatches();
  }

  const getMessages = (person) => {
    console.log(person);
    console.log(messages);
    setMatch(person);
    console.log("Your match is: " + person.firstName);
    console.log(person);

    let newArr1 = person.outbox.filter((m) => m.userId === person._id);
    let newArr2 = data.me.outbox.filter((m) => m.userId === person._id);
    let newArr = newArr1.concat(newArr2);
    setMessages([...newArr]);
    console.log(messages);
  };

  const onEnterClick = async (event) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    if (event.key === "Enter") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, userId: match._id.toString() },
      ]);
    }

    try {
      await sendMessageMutation({
        variables: {
          message: input,
          targetID: match._id,
        },
      });
    } catch (err) {
      console.error("Mutation Error:", err);
    }
  };

  async function makeMessage(text) {
    console.log(text);
    if (!text) return;
    // try {
    //   const { data } = await sendMessageMutation({
    //     variables:
    //     {
    //       message: text,
    //       targetId: match._id
    //     }
    //   });

    //   if (data) {
    //     console.log('Message sent!');
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
    setInput("");
  }

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
              messages.map((m, i) => (
                <div
                  key={i}
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
                    {m.text}
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
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  onKeyUp={onEnterClick}
                />
                <Avatar alt="Remy Sharp" src={tempImgURL} />
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </BoxContainer>
  );
};
