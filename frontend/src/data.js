import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'Public Channles', icon: <GridOn/>, link: '/table' },
    { text: 'My Channle', icon: <Web/>, link: '/form' },
    { text: 'Subscribed Channles', icon: <GridOn/>, link: '/table' },
    { text: 'Friend Requests', icon: <GridOn/>, link: '/table' },
  ],
  tablePage: {
    items: [
      {id: 1, lovebirds: 'Alice & Bob'},
      {id: 2, lovebirds: 'Alice & Bob'},
      {id: 3, lovebirds: 'Alice & Bob'},
      {id: 4, lovebirds: 'Alice & Bob'},
      {id: 5, lovebirds: 'Alice & Bob'},
    ]
  },
};

export default data;
