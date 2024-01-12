import { useEffect, useState } from "react";
import styled from "styled-components";
import NumberAnimate from "./NumberAnimate";

function DateOutput({ values }) {
  const [calculatedAge, setCalculatedAge] = useState({
    days: "",
    months: "",
    years: "",
  });

  const dateOfBirth = `${values.year}-${values.month}-${values.day}`;

  useEffect(() => {
    if (values) {
      const birthDate = new Date(dateOfBirth);
      const currentDate = new Date();

      let years = currentDate.getFullYear() - birthDate.getFullYear();
      let remainingMonths = currentDate.getMonth() - birthDate.getMonth();
      let remainingDays = currentDate.getDate() - birthDate.getDate();

      if (remainingDays < 0) {
        remainingMonths -= 1;
        const lastMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        remainingDays += lastMonthDays;
      }

      if (remainingMonths < 0) {
        remainingMonths += 12;
        years -= 1;
      }

      setCalculatedAge({
        years,
        remainingMonths,
        remainingDays,
      });
    }
  }, [dateOfBirth, values]);

  return (
    <Wrapper>
      <p>
        <NumberAnimate value={calculatedAge.years} /> years
      </p>
      <p>
        <NumberAnimate value={calculatedAge.remainingMonths} /> months
      </p>
      <p>
        <NumberAnimate value={calculatedAge.remainingDays} /> days
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 40px;

  & p {
    height: clamp(3rem, 2.6vw + 2.4rem, 4rem);
    width: fit-content;
    margin-top: 4px;
    font-size: clamp(3rem, 2.6vw + 2.4rem, 4rem);
    font-weight: 800;
    font-style: italic;
    color: var(--off-black);
  }

  @media (min-width: 480px) {
    padding-top: 30px;
  }
`;

export default DateOutput;
