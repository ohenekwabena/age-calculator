import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

function NumberAnimate({ value }) {
  const [count, setCount] = useState(0);
  const [valueAnimate, setValueAnimate] = useState(false);

  useEffect(() => {
    if (value === undefined || isNaN(value)) {
      setCount("--");

      return;
    }

    const step = value > count ? 1 : -1;

    const interval = setInterval(() => {
      setValueAnimate(true);
      setCount((prevCount) => {
        const nextCount = prevCount + step;
        return (step > 0 && nextCount <= value) || (step < 0 && nextCount >= value) ? nextCount : value;
      });
    }, 40);
    setValueAnimate(false);
    return () => clearInterval(interval);
  }, [value, count]);

  return <Value animate={valueAnimate}>{count}</Value>;
}

const Bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

const Value = styled.span`
  color: var(--purple);
  display: inline-block;
  ${(props) =>
    props.animate &&
    css`
      animation: ${Bump} 1500ms ease-in 2;
    `}
`;

export default NumberAnimate;
