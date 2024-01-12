import styled from "styled-components";
import InputForm from "./components/InputWrapper";
import DateOutput from "./components/DateOutput";
import { useState } from "react";

function App() {
  const [dateInfo, setDateInfo] = useState({});

  function handleDateInfo(data) {
    setDateInfo(data);
  }

  return (
    <Wrapper>
      <InputForm onSend={handleDateInfo} />
      <DateOutput values={dateInfo} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: min(550px, 90%);
  background-color: var(--white);
  padding: 40px 16px;
  margin: 16px;
  border-radius: 32px 32px 128px 16px;

  @media (min-width: 480px) {
    padding: 60px 24px;
  }
`;

export default App;
