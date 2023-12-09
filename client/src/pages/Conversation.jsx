import testData from '../assets/testData.json';

import { useQuery } from '@apollo/client';
import { GET_USERS } from '../utils/queries';


export const Conversation = () => {
  // const { loading, data } = useQuery(GET_USERS);
  // Using test data while server connection is down
  // let data = require('../assets/testData.json');

  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }

  console.log(testData);
  // console.trace(data);

  return <>
    <div style={{
      margin: "auto",
      width: "50%",
      textAlign: "center",
      padding: "10px"
    }}>
      <h1 >Dialogues</h1>
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
        Text2
      </div>
      <div style={{
        width: "80%",
        margin: "10px 20px",
        padding: "10px 20px"
      }}>
        text
      </div>
    </div>
  </>;
};

