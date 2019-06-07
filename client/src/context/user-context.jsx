import React from 'react';
import useFetch from '../lib/useFetch';
import { useMedia } from './media-context';

const UserContext = React.createContext();


// // const ids = useMedia()[1];
// console.log('id is ', ids);
// IDs.forEach((uId) => {
//   url += `uIds[]=${uId}&`;
// });
// url.substring(0, url.length - 1);
const UserProvider = (props) => {
  const result = useMedia();
  console.log('result is:', result);
  const url = '/users/';
  let params;
  if (result.length === 2) {
    // console.log(result[1]);
    // result[1].forEach((uId) => {
    //   params.uIds.push(uId);
    // });
    console.log('param : ', result[1]);
    params = result[1];
  }
  const data = useFetch(url, params);
  let value;
  if (data.state) {
    console.log('user here:', data.state);
    value = data.state;
    // value = imgUrl;
  }

  return <UserContext.Provider value={value} {...props} />;
};
const useUser = () => {
  const context = React.useContext(UserContext);
  console.log('user context is ', context);
  if (context === undefined) {
    return [
      {
        username: 'hibow',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
      {
        username: 'Nick',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
      {
        username: 'John',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
    ];
  }
  return context;
};

export { UserProvider, useUser };
