import React from 'react';
import styled from 'styled-components';
import { Button, Input } from './components';

const App = () => {
  return (
    <Wrapper>
      <Button style={{ margin: '10px' }}>
        hello
      </Button>
      <Button inverted={false} style={{ margin: '10px' }}>
        hello
      </Button>
      <Input placeholder='Add an email'/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;