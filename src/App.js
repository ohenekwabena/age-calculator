import styled from "styled-components";
import InputForm from "./components/InputWrapper";
import DateOutput from "./components/DateOutput";

function App() {
  return (
    <Wrapper>
      <InputForm />
      <DateOutput />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 60px 24px;
  border-radius: 32px 32px 128px 16px;

  @media (min-width: 375px) {
    padding: 64px 32px;
  }
`;

export default App;
