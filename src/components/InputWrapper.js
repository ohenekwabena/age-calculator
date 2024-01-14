import { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/images/icon-arrow.svg";
import UnstyledButton from "./UnstyledButton";

function InputForm({ onSend }) {
  const [values, setValues] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [touched, setTouched] = useState({
    day: false,
    month: false,
    year: false,
  });

  const [error, setError] = useState({
    dayError: "",
    monthError: "",
    yearError: "",
  });

  function handleInputChange(identifier, value) {
    setValues((preValues) => ({
      ...preValues,
      [identifier]: value,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [identifier]: false,
    }));
  }

  const isLeapYear = (values.year % 4 === 0 && values.year % 100 !== 0) || values.year % 400 === 0;

  function handleInputBlur(identifier) {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [identifier]: true,
    }));

    if (identifier === "year") {
      if (!yearIsValid) {
        setError((prevError) => ({
          ...prevError,
          yearError: <p>Must be a valid year</p>,
        }));
      }

      if (values.year > 2018) {
        setError((prevError) => ({
          ...prevError,
          yearError: <p>Must be farther in the past</p>,
        }));
      }
    }

    if (identifier === "month") {
      if (!monthIsValid) {
        setError((prevError) => ({
          ...prevError,
          monthError: <p>Must be a valid month</p>,
        }));
      }
    }

    if (identifier === "day") {
      if (!dayIsValid) {
        setError((prevError) => ({
          ...prevError,
          dayError: <p>Must be a valid day</p>,
        }));
      }
    }
  }

  const dayIsValid = touched.day && values.day > 0 && values.day <= 31;
  const monthIsValid = touched.month && values.month > 0 && values.month <= 12;
  const yearIsValid = touched.year && values.year >= 1900 && values.year <= 2018;
  const wrongDate =
    ((values.month === "4" || values.month === "6" || values.month === "9" || values.month === "11") &&
      values.day > 30) ||
    (values.month === "2" && isLeapYear && values.day > 29) ||
    (values.month === "2" && !isLeapYear && values.day > 28);

  const hasError = !dayIsValid || !monthIsValid || !yearIsValid || wrongDate;

  function formHandler(event) {
    event.preventDefault();

    if (values.year === "") {
      setError((prevError) => ({
        ...prevError,
        yearError: <p>This field is required</p>,
      }));
    }

    if (values.month === "") {
      setError((prevError) => ({
        ...prevError,
        monthError: <p>This field is required</p>,
      }));
    }

    if (wrongDate) {
      setError((prevError) => ({
        ...prevError,
        dayError: <p>Must be a valid date</p>,
      }));
    }

    if (values.day === "") {
      setError((prevError) => ({
        ...prevError,
        dayError: <p>This field is required</p>,
      }));
    }

    setTouched({
      day: true,
      month: true,
      year: true,
    });

    if (hasError) {
      onSend({
        day: "",
        month: "",
        year: "",
      });
    } else {
      onSend(values);
    }
  }

  return (
    <Wrapper onSubmit={formHandler}>
      <Inputs>
        <InputWrapper>
          <Label htmlFor="day" hasNoError={(dayIsValid && !wrongDate) || !touched.day}>
            Day
          </Label>
          <Input
            type="number"
            id="day"
            name="day"
            placeholder="DD"
            onBlur={() => handleInputBlur("day")}
            onChange={(event) => handleInputChange("day", event.target.value)}
            value={values.day}
            hasNoError={(dayIsValid && !wrongDate) || !touched.day}
          />
          {touched.day && !dayIsValid && error.dayError}
          {wrongDate && error.dayError}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="month" hasNoError={monthIsValid || !touched.month}>
            Month
          </Label>
          <Input
            type="number"
            id="month"
            name="month"
            placeholder="MM"
            onBlur={() => handleInputBlur("month")}
            onChange={(event) => handleInputChange("month", event.target.value)}
            value={values.month}
            hasNoError={monthIsValid || !touched.month}
          />
          {touched.month && !monthIsValid && error.monthError}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="year" hasNoError={yearIsValid || !touched.year}>
            Year
          </Label>
          <Input
            type="number"
            id="year"
            name="year"
            placeholder="YYYY"
            onBlur={() => handleInputBlur("year")}
            onChange={(event) => handleInputChange("year", event.target.value)}
            value={values.year}
            hasNoError={yearIsValid || !touched.year}
          />
          {touched.year && !yearIsValid && error.yearError}
        </InputWrapper>
      </Inputs>
      <GenericButton type="submit">
        <ArrowImg src={arrow} hasError={hasError} />
      </GenericButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: relative;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--light-grey);

  @media (min-width: 480px) {
    margin-right: 64px;
    padding-right: 32px;
  }
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
`;

const Label = styled.label`
  color: ${(props) => (props.hasNoError ? "var(--smokey-grey )" : "var(--light-red)")};
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.3ch;
`;

const Input = styled.input`
  border: 1px solid ${(props) => (props.hasNoError ? "var(--smokey-grey )" : "var(--light-red )")};
  /* width: 80px; */
  margin-top: 4px;
  padding: 12px 12px;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: bold;
  color: var(--off-black);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  &::placeholder {
    color: var(--smokey-grey);
  }

  &:active,
  &:hover,
  &:focus {
    border: 1px solid ${(props) => (props.hasNoError ? "var(--purple )" : "var(--light-red )")};
    outline: none;
  }

  @media (min-width: 480px) {
    /* width: 100px; */
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-size: 0.65rem;
    font-style: italic;
    color: var(--light-red);
    margin-top: 5px;
  }
`;

const ArrowImg = styled.img`
  background-color: ${(props) => (props.hasError ? "var(--light-red)" : "var(--purple)")};
  position: absolute;
  bottom: -32px;
  left: 40%;
  border-radius: 50%;
  padding: 18px;

  &:hover {
    background-color: var(--off-black);
  }

  @media (min-width: 480px) {
    right: 0;
    left: 100%;
  }
`;

const GenericButton = styled(UnstyledButton)``;

export default InputForm;
