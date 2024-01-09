import styled from "styled-components";

function DateOutput() {
  return (
    <Wrapper>
      <p>
        <Value>38 </Value>years
      </p>
      <p>
        <Value>3 </Value>months
      </p>
      <p>
        <Value>26 </Value>days
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 60px;

  & p {
    height: 4rem;
    margin-top: 4px;
    font-size: 4rem;
    font-weight: 800;
    font-style: italic;
    color: var(--off-black);
    word-spacing: -0.1ch;
  }

  @media (min-width: 375px) {
    padding-top: 40px;
  }
`;

const Value = styled.span`
  color: var(--purple);
`;

export default DateOutput;
