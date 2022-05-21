import { DEPLOYMENT_URL } from '../../helpers/constants';

export const hireDevOrgTemplateStyles = `
  <style>
    /* inter-400 - latin */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      src: local(''),
           url('${DEPLOYMENT_URL}/template-assets/hire-dev/fonts/inter-v8-latin-400.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
           url('${DEPLOYMENT_URL}/template-assets/hire-dev/fonts/inter-v8-latin-400.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* inter-500 - latin */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      src: local(''),
           url('${DEPLOYMENT_URL}/template-assets/hire-dev/fonts/inter-v8-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
           url('${DEPLOYMENT_URL}/template-assets/hire-dev/fonts/inter-v8-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    body {
      padding: 0;
      margin: 0;
      height: 100vh;
      font-family: 'Inter', sans-serif;
      background-color: #111827;
      color: #ffffff;
    }
    
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content;
      height: 100vh;
      box-sizing: border-box;
    }
    
    .topWrapper {
      display: flex;
      width: 100%;
      height: 480px;
      padding: 4rem;
      box-sizing: border-box;
      overflow: hidden;
      border-bottom: 1px solid #374151;
    }
    
    .avatar {
      display: inline-block;
      width: 148px;
      height: 148px;
      border-radius: 50%;
    }
    
    .infoWrapper {
      display: flex;
      flex-direction: column;
      padding-left: 3rem;
    }
    
     .highlight {
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      color: #60A5FA;
    }

    h1 {
      margin: 0 0 3rem;
      font-weight: 500;
      font-size: 56px;
      line-height: 68px;
      color: #FFFFFF;
    }
    
    .feature {
      display: flex;
      align-items: center;
    }
    
    .feature:not(:last-child) {
      margin-bottom: 2rem;
    }
    
    .featureIcon {
      flex-shrink: 0;
    }
    
    .featureValue {
      margin-left: 1rem;
      color: #ffffff;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
    }
    
    .bottomWrapper {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 170px;
      padding-left: 16.5rem;
      padding-right: 4rem;
      box-sizing: border-box;
    }
    
    .salary {
      font-weight: 500;
      font-size: 36px;
      line-height: 28px;
      
      text-align: right;

      color: #FFFFFF;
    }
    
    .salaryType {
      font-weight: 400;
      font-size: 20px;
      opacity: 0.6;
    }
    
    .applyNow {
      flex-shrink: 0;
      padding: 2rem 3rem;
      
      /* blue/600 */
      background: #2563EB;
      /* shadow/sm */
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      
      font-weight: 500;
      font-size: 28px;
      line-height: 24px;
    }
    
    .shape1 {
      position: absolute;
      left: 0.04%;
      right: 96.79%;
      top: 6.83%;
      bottom: 90.7%;
      
      /* indigo/400 */
      color: #6366F1;
      transform: rotate(12.92deg);
    }
    
    .shape2 {
      position: absolute;
      left: 57.58%;
      right: 41.17%;
      top: 5.56%;
      bottom: 92.06%;
      
      /* orange/400 */
      color: #F97316;
    }
    
    .shape3 {
      position: absolute;
      left: 10.58%;
      right: 88.08%;
      top: 82.7%;
      bottom: 14.92%;
      
      /* pink/400 */
      color: #EC4899;
    }
    
    .shape4 {
      position: absolute;
      left: 93.75%;
      right: 3.08%;
      top: 61.81%;
      bottom: 35.72%;
      
      /* teal/400 */
      color: #14B8A6;
      transform: rotate(-9.66deg);
    }
    
    .hireDevLogo {
      position: absolute;
      left: 84.75%;
      right: 3.33%;
      top: 5.08%;
      bottom: 90.48%;
      opacity: 0.6;
    }
  </style>
`;
