import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Message from './Message';

const Messages = () => {
  const [view, setMessageView] = useState('message1');
  return (
    <>
      <Button color="primary" onClick={() => setMessageView('message1')}>
        Message 1
      </Button>
      <br />
      <Button color="primary" onClick={() => setMessageView('message2')}>
        Message 2
      </Button>
      <br />
      <Button color="primary" onClick={() => setMessageView('message3')}>
        Message 3
      </Button>
      <br />
      <Button color="primary" onClick={() => setMessageView('message4')}>
        Message 4
      </Button>
      <br />
      <Button color="primary" onClick={() => setMessageView('message5')}>
        Message 5
      </Button>
      <br />

      <Message view={view} />
    </>
  );
};

export default Messages;
