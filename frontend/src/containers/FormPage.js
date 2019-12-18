import React from 'react';
import {Link} from 'react-router';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';

import ChatRoom from '../components/ChatRoom';

const FormPage = () => {

  return (
    <PageBase title="My Chat"
              navigation="Application / My Chat">

	  <div className="chatroom">
          <ChatRoom/>
      </div>
    </PageBase>
  );
};

export default FormPage;
