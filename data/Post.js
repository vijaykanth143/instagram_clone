import {USERS} from './users';

import vijaypost1 from '../assets/vijaypost2.jpg';
import vijaypost2 from '../assets/sam.jpg';
export const POSTS = [
  {
    imageUrl: 'https://i.ibb.co/WsPsPqq/vijaypost2.jpg',
    user: USERS[0].user,
    likes: 784,
    caption: 'Stay happy 😊',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'jahesh_555',
        comment: 'Ahaaa 😏',
      },
    ],
  },
  {
    imageUrl: 'https://i.ibb.co/GFxymkh/sam.jpg',
    user: USERS[4].user,
    likes: 800,
    caption: 'Happy Birthday ra bava🤩',
    profile_picture: USERS[4].image,
    comments: [
      {
        user: USERS[0].user,
        comment: 'Happy Birthday sam 😍',
      },
      {
        user: USERS[3].user,
        comment: 'Happy Birthday Ra ❤',
      },
    ],
  },
];
