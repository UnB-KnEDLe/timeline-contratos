import React from 'react';
import { Container } from './styles';

const IconsAnimation: React.FC = () => {
  return (
    <Container>
      <svg
        // search
        className="svg"
        viewBox="0 0 24 24"
        height="30rem"
        width="30rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        // text
        className="svg"
        viewBox="0 0 24 24"
        height="35rem"
        width="35rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M2,12 L7,12 M4.5,12 L4.5,19 M16,12 L21,12 M18.5,12 L18.5,19 M14.5,11.5 L8.5,18.5 M8.5,11.5 L14.5,18.5"
          fill="none"
          strokeWidth="2"
        />
      </svg>

      <svg
        className="svg"
        viewBox="0 0 24 24"
        height="20rem"
        width="20rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // gov
          d="M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3V8zM6 5v1h12V5H6z"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <svg
        className="svg"
        viewBox="0 0 24 24"
        height="17rem"
        width="17rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // caneta
          d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>

      <svg
        className="svg"
        viewBox="0 0 24 24"
        height="5rem"
        width="5rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // lupin
          d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </Container>
  );
};
export default IconsAnimation;
