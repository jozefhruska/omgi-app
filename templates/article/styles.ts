import { DEPLOYMENT_URL } from '../../helpers/constants';

export const articleTemplateStyles = `
  <style>
    /* lato-regular - latin */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      src: local(''), url('${DEPLOYMENT_URL}/fonts/lato-v22-latin-regular.woff2') format('woff2'),
        /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${DEPLOYMENT_URL}/fonts/lato-v22-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* lato-900 - latin */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 900;
      src: local(''), url('${DEPLOYMENT_URL}/fonts/lato-v22-latin-900.woff2') format('woff2'),
        /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('${DEPLOYMENT_URL}/fonts/lato-v22-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    body {
      padding: 0;
      margin: 0;
      height: 100vh;
      font-family: 'Lato', sans-serif;
    }
    
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      height: 100vh;
      padding: 4rem 4rem 5rem;
      box-sizing: border-box;
    }

    h1 {
      margin: 0 0 2rem;
      font-size: 52pt;
      font-weight: 900;
      color: #1e293b;
    }

    p {
      margin: 0 0 2rem;
      font-size: 24pt;
      color: #475569;
      line-height: 1.6;
    }

    .metaWrapper {
      display: flex;
      align-items: center;
      justify-content: left;
    }

    .authorWrapper {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 2rem;
      background-color: #1e293b;
    }

    .authorName {
      color: #ffffff;
      font-size: 20pt;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .authorImage {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
    }

    .meta {
      font-size: 20pt;
      color: #475569;
      margin-left: 1.4rem;
    }

    .line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1rem;
      width: 100%;
      background: rgb(14, 165, 233);
      background: linear-gradient(
        90deg,
        rgba(14, 165, 233, 1) 0%,
        rgba(99, 102, 241, 1) 50%,
        rgba(139, 92, 246, 1) 100%
      );
    }
  </style>
`;
