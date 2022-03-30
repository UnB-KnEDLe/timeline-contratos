import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2980B9;


    --background: #F8F8F8;
  }

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #AEE3FF;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #004E81;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #2980B9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px){
      font-size:93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size:87.5%; // 14px
    }
  }

  // REM - 1rem = 16px

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .loading{
    display: flex;
    margin: 0 auto;
  }

  .rotate{
    will-change: transform, opacity;
  }

  .information-act {
  flex: 1 1 auto;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/ 200%;
  color: white;
 /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
 }

 .svg{
  stroke:#004E81;
  position:absolute;
  bottom: -100vh;
  transform-style: preserve-3d;
}


.svg:nth-child(1) {
	 left: 66%;
	 animation: raise1 10s linear infinite;
	 transform: scale(1.3) rotate(138deg);
	 z-index: -6;
}
 @keyframes raise1 {
	 to {
		 bottom: 72vh;
		 transform: scale(0) rotate(318deg);
	}
}
 .svg:nth-child(2) {
	 left: 74%;
	 animation: raise2 25s linear infinite;
	 transform: scale(0.7) rotate(219deg);
	 z-index: -5;
}
 @keyframes raise2 {
	 to {
		 bottom: 100vh;
		 transform: scale(0) rotate(41deg);
	}
}
 .svg:nth-child(3) {
	 left: 34%;
	 animation: raise3 9s linear infinite;
	 transform: scale(2.5) rotate(182deg);
	 z-index: -4;
}
 @keyframes raise3 {
	 to {
		 bottom: 80vh;
		 transform: scale(0) rotate(219deg);
	}
}
 .svg:nth-child(4) {
	 left: 45%;
	 animation: raise4 10s linear infinite;
	 transform: scale(3.3) rotate(253deg);
	 z-index: -3;
}
 @keyframes raise4 {
	 to {
		 bottom: 50vh;
		 transform: scale(0.5) rotate(293deg);
	}
}
 .svg:nth-child(5) {
	 left: 27%;
	 animation: raise5 15s linear infinite;
	 transform: scale(8.3) rotate(329deg);
	 z-index: -2;
}
 @keyframes raise5 {
	 to {
		 bottom: 72vh;
		 transform: scale(0) rotate(310deg);
	}
}

.extra{
  margin-top: 0rem;
}

.load{
  margin-left: 1rem;
}

.checkbox {
	 display: grid;
	 grid-template-columns: min-content auto;
	 grid-gap: 1em;
   font-size: 1.125rem;

	 color: var(--primary);
}
 .checkbox--disabled {
  color: var(--primary);
}
 .checkbox__control {
	 display: inline-grid;
	 width: 1em;
	 height: 1em;
	 border-radius: 0.25em;
	 border: 0.1em solid currentColor;
}
 .checkbox__control svg {
	 transition: transform 0.1s ease-in 25ms;
	 transform: scale(0);
	 transform-origin: bottom left;
}
 .checkbox__input {
	 display: grid;
	 grid-template-areas: "checkbox";
}
 .checkbox__input > * {
	 grid-area: checkbox;
}
 .checkbox__input input {
	 opacity: 0;
	 width: 1em;
	 height: 1em;
}
 .checkbox__input input:focus + .checkbox__control {
	 box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
}
 .checkbox__input input:checked + .checkbox__control svg {
	 transform: scale(1);
}
 .checkbox__input input:disabled + .checkbox__control {
	 color: var(--primary);


}

.loadingTimeline {
  margin-left: 56rem;
  margin-bottom: 2.5rem;
}

`;
