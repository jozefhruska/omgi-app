import { DEPLOYMENT_URL } from '../../helpers/constants';

export const basicTemplateStyles = `
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
    
    .badge {
      width: 100%;
      margin: 0 0 1rem;
      font-size: 24pt;
      color: #6366f1;
      text-transform: uppercase;
      text-align: center;
    }

    h1 {
      width: 100%;
      margin: 0 0 2rem;
      font-size: 52pt;
      font-weight: 900;
      color: #1e293b;
      text-align: center;
    }

    p {
      margin: 0 0 2rem;
      font-size: 28pt;
      color: #475569;
      line-height: 1.6;
      text-align: center;
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
