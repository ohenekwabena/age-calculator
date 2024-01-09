import styled from "styled-components";
import arrow from "../assets/images/icon-arrow.svg";
import GenericButton from "./UnstyledButton";

function InputForm() {
  return (
    <Wrapper>
      <InputWrapper>
        <Label htmlFor="day">Day</Label>
        <Input type="number" id="day" name="day" min="1" max="31" />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="month">Month</Label>
        <Input type="number" id="month" name="month" min="1" max="12" />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="year">Year</Label>
        <Input type="number" id="year" name="year" min="1900" max="9999" />
      </InputWrapper>
      <GenericButton>
        <ArrowImg src={arrow} />
      </GenericButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: relative;
  display: flex;
  gap: 16px;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--light-grey);

  @media (min-width: 375px) {
    margin-right: 64px;
    padding-right: 64px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: var(--smokey-grey);
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.2ch;
`;

const Input = styled.input`
  border: 1px solid var(--light-grey);
  width: 100px;
  height: 50px;
  margin-top: 4px;
  padding: 30px 16px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--off-black);
`;

const ArrowImg = styled.img`
  background-color: var(--purple);
  position: absolute;
  bottom: -32px;
  left: 40%;
  border-radius: 50%;
  padding: 20px;

  @media (min-width: 375px) {
    right: 0;
    left: 100%;
  }
`;
export default InputForm;
