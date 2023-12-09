import { useQuery } from '@apollo/client'
import { GET_ME, GET_USERS } from '../utils/queries'

export const Profile = () => {
  // const { loading, data } = useQuery(GET_USERS);
  const { loading, data } = useQuery(GET_ME);


  if (loading) {
    return <h2>LOADING...</h2>
  }

  console.log(data.me);

  return <>
          <h1>Welcome {data.me.firstName}!</h1>
        </>;
};
