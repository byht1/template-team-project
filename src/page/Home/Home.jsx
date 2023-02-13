import React from 'react';
// import { Box } from 'components/global/Box';

import { Text } from 'components/global/text';
import { Button, WhiteButton } from 'components/global/button';

const Home = () => {
  return (
    <div style={{display: 'flex', gap: 16}}>
      <Text>Home Component</Text>
      <Button>Registration</Button>
      <Button theme="dark">Login</Button>
      <WhiteButton>Learn more</WhiteButton>
    </div>
  );
};

export default Home;
