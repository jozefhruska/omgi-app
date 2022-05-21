import { truncate } from '../../helpers/text';
import { HireDevJobTemplateParams } from './index';

export const HireDevJobTemplate = ({
  employmentType,
  jobOpeningName,
  organizationAvatarUrl,
  organizationName,
  presence,
  salaryCurrency,
  salaryEnd,
  salaryStart,
  salaryPeriod,
}: HireDevJobTemplateParams) => (
  <div className="wrapper">
    <svg
      width="37"
      height="18"
      viewBox="0 0 37 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shape1"
    >
      <path
        d="M22.9597 2.15515L23.5089 2.54656L23.5112 2.53673L36.2154 11.2865L35.4267 14.7249L20.1756 17.0783L21.1137 12.9885L30.6788 12.1212L31.6956 12.0355L30.8333 11.5188L23.0613 6.89919L11.6005 15.5425L8.24997 13.2016L8.30666 13.1588L-1.62929 6.21896L-0.846708 2.80723L14.1939 0.399539L13.2548 4.49361L4.08499 5.359L2.94046 5.49549L3.91457 6.102L11.5811 10.6998L22.9597 2.15515Z"
        fill="#6366F1"
      />
    </svg>

    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shape2"
    >
      <path
        d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM7.60714 3.59155C5.41773 3.59155 3.64286 5.34142 3.64286 7.5C3.64286 9.65858 5.41773 11.4085 7.60714 11.4085C9.79656 11.4085 11.5714 9.65858 11.5714 7.5C11.5714 5.34142 9.79656 3.59155 7.60714 3.59155Z"
        fill="#F97316"
      />
    </svg>

    <svg
      width="39"
      height="18"
      viewBox="0 0 39 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shape3"
    >
      <path
        d="M21.7188 0.510487L22.3759 0.660887L22.3742 0.650951L37.4565 3.8493L38.0484 7.32517L24.8775 15.3507L24.1734 11.2164L32.6676 6.74466L33.573 6.27535L32.5789 6.1295L23.6335 4.84947L16.3746 17.2248L12.3841 16.3506L12.42 16.2893L0.587024 13.6986L-0.000297386 10.2498L12.9556 2.2549L13.6604 6.3935L5.53029 10.7117L4.52646 11.277L5.6582 11.4628L14.498 12.7632L21.7188 0.510487Z"
        fill="#14B8A6"
      />
    </svg>

    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shape4"
    >
      <path
        d="M8 0C12.4183 0 16 3.35786 16 7.5C16 11.6421 12.4183 15 8 15C3.58172 15 0 11.6421 0 7.5C0 3.35786 3.58172 0 8 0ZM8.11429 3.59155C5.77891 3.59155 3.88571 5.34142 3.88571 7.5C3.88571 9.65858 5.77891 11.4085 8.11429 11.4085C10.4497 11.4085 12.3429 9.65858 12.3429 7.5C12.3429 5.34142 10.4497 3.59155 8.11429 3.59155Z"
        fill="#EC4899"
      />
    </svg>

    <svg
      width="143"
      height="28"
      viewBox="0 0 143 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hireDevLogo"
    >
      <path
        d="M46.0129 22.3569V13.8367C46.1366 13.6839 46.2739 13.5458 46.4247 13.4221C46.5755 13.2985 46.7437 13.193 46.9293 13.1058C47.1304 13.0039 47.3546 12.9276 47.6021 12.8767C47.8496 12.8257 48.1164 12.8003 48.4025 12.8003C48.7737 12.8003 49.1062 12.8457 49.4001 12.9367C49.694 13.0276 49.9453 13.1676 50.1541 13.3567C50.3629 13.5458 50.5234 13.793 50.6355 14.0985C50.7476 14.404 50.8037 14.7676 50.8037 15.1894V22.3569H54.0285V15.2113C54.0285 14.3458 53.9183 13.6058 53.6979 12.9912C53.4775 12.3766 53.1701 11.873 52.7757 11.4803C52.3813 11.0875 51.9096 10.7984 51.3605 10.613C50.8114 10.4275 50.2082 10.3348 49.5509 10.3348C49.1024 10.3348 48.677 10.3966 48.2749 10.5202C47.8728 10.6439 47.5054 10.8184 47.1729 11.0439C46.9564 11.1893 46.7495 11.3584 46.5523 11.5512C46.3551 11.7439 46.1753 11.953 46.0129 12.1785V5.6001H42.7881V22.3569H46.0129ZM62.0815 9.14565C62.6538 9.14565 63.1081 8.99473 63.4445 8.69291C63.7809 8.39108 63.9491 8.0038 63.9491 7.53106C63.9491 7.05832 63.7809 6.67104 63.4445 6.36921C63.1081 6.06738 62.6538 5.91647 62.0815 5.91647C61.8031 5.91647 61.5499 5.95647 61.3217 6.03647C61.0936 6.11647 60.8983 6.22557 60.736 6.36375C60.5735 6.50921 60.4479 6.68194 60.3589 6.88195C60.27 7.08196 60.2255 7.29832 60.2255 7.53106C60.2255 7.76379 60.27 7.98016 60.3589 8.18017C60.4479 8.38017 60.5735 8.54927 60.736 8.68745C60.8983 8.83291 61.0936 8.94564 61.3217 9.02564C61.5499 9.10565 61.8031 9.14565 62.0815 9.14565ZM67.116 22.3569V19.8914H63.7171V10.553H56.8847V13.0294H60.4575V19.8914H56.8847V22.3569H67.116ZM73.5042 22.3569V15.2658C73.6512 14.9313 73.8368 14.6403 74.061 14.3931C74.2853 14.1458 74.556 13.9421 74.873 13.7821C75.136 13.6439 75.4356 13.5403 75.772 13.4712C76.1084 13.4021 76.4854 13.3676 76.903 13.3676C77.3052 13.3676 77.7286 13.3912 78.1732 13.4385C78.6179 13.4858 79.0529 13.5567 79.4782 13.6512L79.9538 10.6293C79.6986 10.5566 79.3642 10.4893 78.9504 10.4275C78.5367 10.3657 78.0862 10.3348 77.599 10.3348C76.7561 10.3348 75.9789 10.5257 75.2674 10.9075C74.556 11.2893 73.945 11.8148 73.4346 12.4839L73.4114 12.2221L73.2838 10.553H70.2794V22.3569H73.5042ZM88.2535 22.5751C89.4676 22.5751 90.5193 22.3533 91.4087 21.9096C92.298 21.466 92.9476 20.9714 93.3575 20.4259L91.7451 18.7895C91.3739 19.2405 90.8906 19.5786 90.2951 19.8041C89.6996 20.0296 89.0848 20.1423 88.4507 20.1423C88.0022 20.1423 87.5884 20.0768 87.2095 19.9459C86.8306 19.815 86.4942 19.6296 86.2003 19.3896C85.9142 19.1568 85.686 18.8968 85.5159 18.6095C85.3457 18.3223 85.2065 17.9422 85.0983 17.4695V17.4368H93.6127V16.1495C93.6127 15.284 93.4851 14.4931 93.2299 13.7767C92.9747 13.0603 92.6035 12.4476 92.1163 11.9384C91.6214 11.4293 91.0201 11.0348 90.3125 10.7548C89.6049 10.4748 88.7987 10.3348 87.8939 10.3348C87.02 10.3348 86.2119 10.4839 85.4695 10.7821C84.7271 11.0802 84.0852 11.4984 83.5439 12.0366C83.0025 12.5748 82.5811 13.2167 82.2795 13.9621C81.9779 14.7076 81.8271 15.5313 81.8271 16.4331V16.8695C81.8271 17.6622 81.9798 18.4059 82.2853 19.1005C82.5907 19.795 83.0257 20.3969 83.5903 20.906C84.1548 21.4223 84.8315 21.8296 85.6203 22.1278C86.4091 22.426 87.2868 22.5751 88.2535 22.5751ZM90.4459 15.3422H85.1563C85.2336 14.9567 85.3496 14.6076 85.5043 14.2949C85.6589 13.9821 85.8523 13.713 86.0843 13.4876C86.3085 13.2621 86.5715 13.0894 86.8731 12.9694C87.1747 12.8494 87.5072 12.7894 87.8707 12.7894C88.2806 12.7894 88.6421 12.8494 88.9553 12.9694C89.2685 13.0894 89.5333 13.2512 89.7499 13.4549C89.9664 13.6658 90.1366 13.913 90.2603 14.1967C90.384 14.4803 90.4459 14.7822 90.4459 15.1022V15.3422ZM99.0335 22.5751C99.7141 22.5751 100.257 22.3878 100.663 22.0133C101.069 21.6387 101.272 21.1678 101.272 20.6005C101.272 20.0332 101.073 19.5568 100.675 19.1714C100.277 18.7859 99.7295 18.5932 99.0335 18.5932C98.3298 18.5932 97.7807 18.7877 97.3863 19.1768C96.9919 19.5659 96.7947 20.0405 96.7947 20.6005C96.7947 21.1605 96.9958 21.6296 97.3979 22.0078C97.8001 22.386 98.3453 22.5751 99.0335 22.5751ZM108.459 22.5751C109.163 22.5751 109.781 22.4478 110.315 22.1933C110.849 21.9387 111.313 21.5823 111.707 21.1241L111.869 22.3569H114.781V5.6001H111.545V11.6112C111.158 11.2039 110.715 10.8893 110.216 10.6675C109.718 10.4457 109.14 10.3348 108.482 10.3348C107.701 10.3348 107.007 10.4802 106.4 10.7711C105.793 11.0621 105.277 11.473 104.851 12.0039C104.426 12.5348 104.103 13.1712 103.883 13.913C103.662 14.6549 103.552 15.4731 103.552 16.3677V16.5968C103.552 17.455 103.664 18.2495 103.889 18.9805C104.113 19.7114 104.438 20.3423 104.863 20.8732C105.281 21.4042 105.793 21.8205 106.4 22.1224C107.007 22.4242 107.693 22.5751 108.459 22.5751ZM109.283 20.1096C108.826 20.1096 108.44 20.0187 108.123 19.8368C107.806 19.655 107.547 19.4041 107.345 19.0841C107.144 18.7714 106.999 18.4023 106.91 17.9768C106.822 17.5513 106.777 17.0913 106.777 16.5968V16.3677C106.777 15.8731 106.823 15.4094 106.916 14.9767C107.009 14.544 107.156 14.164 107.357 13.8367C107.558 13.5167 107.819 13.2639 108.14 13.0785C108.461 12.893 108.85 12.8003 109.306 12.8003C109.855 12.8003 110.311 12.9112 110.675 13.133C111.038 13.3548 111.328 13.6658 111.545 14.0658V18.8441C111.328 19.2368 111.036 19.5459 110.669 19.7714C110.302 19.9968 109.839 20.1096 109.283 20.1096ZM123.896 22.5751C125.11 22.5751 126.162 22.3533 127.051 21.9096C127.94 21.466 128.59 20.9714 129 20.4259L127.387 18.7895C127.016 19.2405 126.533 19.5786 125.937 19.8041C125.342 20.0296 124.727 20.1423 124.093 20.1423C123.644 20.1423 123.231 20.0768 122.852 19.9459C122.473 19.815 122.136 19.6296 121.842 19.3896C121.556 19.1568 121.328 18.8968 121.158 18.6095C120.988 18.3223 120.849 17.9422 120.74 17.4695V17.4368H129.255V16.1495C129.255 15.284 129.127 14.4931 128.872 13.7767C128.617 13.0603 128.246 12.4476 127.758 11.9384C127.264 11.4293 126.662 11.0348 125.955 10.7548C125.247 10.4748 124.441 10.3348 123.536 10.3348C122.662 10.3348 121.854 10.4839 121.112 10.7821C120.369 11.0802 119.727 11.4984 119.186 12.0366C118.645 12.5748 118.223 13.2167 117.922 13.9621C117.62 14.7076 117.469 15.5313 117.469 16.4331V16.8695C117.469 17.6622 117.622 18.4059 117.927 19.1005C118.233 19.795 118.668 20.3969 119.232 20.906C119.797 21.4223 120.474 21.8296 121.262 22.1278C122.051 22.426 122.929 22.5751 123.896 22.5751ZM126.088 15.3422H120.798C120.876 14.9567 120.992 14.6076 121.146 14.2949C121.301 13.9821 121.494 13.713 121.726 13.4876C121.951 13.2621 122.214 13.0894 122.515 12.9694C122.817 12.8494 123.149 12.7894 123.513 12.7894C123.923 12.7894 124.284 12.8494 124.597 12.9694C124.911 13.0894 125.176 13.2512 125.392 13.4549C125.609 13.6658 125.779 13.913 125.902 14.1967C126.026 14.4803 126.088 14.7822 126.088 15.1022V15.3422ZM138.232 22.3569L142.999 10.553H139.635L136.886 18.8768L136.712 19.7059L136.538 18.8768L133.777 10.553H130.413L135.204 22.3569H138.232Z"
        fill="white"
      />
      <path
        d="M19.6594 15.0179L20.1904 15.2334V15.225L32.4158 19.962V22.9L20.1904 27.65V24.1555L27.9739 21.6705L28.8025 21.4116L27.9875 21.1528L20.6481 18.8499L12.7716 28L9.54095 26.7237L9.57989 26.6784L0 22.8951V19.9799L12.0402 15.225V18.7232L4.58478 21.133L3.65966 21.4569L4.58478 21.7679L11.8323 24.0726L19.6594 15.0179ZM16.1153 0C19.6958 0 22.5984 2.78143 22.5984 6.2125C22.5984 9.64357 19.6958 12.425 16.1153 12.425C12.5347 12.425 9.63212 9.64357 9.63212 6.2125C9.63212 2.78143 12.5347 0 16.1153 0ZM16.2079 2.975C14.3153 2.975 12.7811 4.42448 12.7811 6.2125C12.7811 8.00052 14.3153 9.45 16.2079 9.45C18.1005 9.45 19.6347 8.00052 19.6347 6.2125C19.6347 4.42448 18.1005 2.975 16.2079 2.975Z"
        fill="white"
      />
    </svg>

    <div className="topWrapper">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={organizationAvatarUrl}
          alt="organization avatar"
          className="avatar"
        />
      </div>
      <div className="infoWrapper">
        <div className="organizationName">
          {' '}
          {truncate({
            content: organizationName,
            length: 42,
          })}
        </div>
        <h1>
          {' '}
          {truncate({
            content: jobOpeningName,
            length: 46,
          })}
        </h1>

        <div>
          {!!employmentType && (
            <div className="feature">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="featureIcon"
              >
                <path
                  d="M20 13.3333V20L25 25M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="featureValue">
                {truncate({
                  content: employmentType,
                  length: 52,
                })}
              </div>
            </div>
          )}

          {!!presence && (
            <div className="feature">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="featureIcon"
              >
                <path
                  d="M35 22.0925C30.3679 23.9676 25.3045 25.0001 20 25.0001C14.6955 25.0001 9.63216 23.9676 5 22.0925M26.6667 10.0002V6.66683C26.6667 4.82588 25.1743 3.3335 23.3333 3.3335H16.6667C14.8257 3.3335 13.3333 4.82588 13.3333 6.66683V10.0002M20 20.0002H20.0167M8.33333 33.3335H31.6667C33.5076 33.3335 35 31.8411 35 30.0002V13.3335C35 11.4925 33.5076 10.0002 31.6667 10.0002H8.33333C6.49238 10.0002 5 11.4925 5 13.3335V30.0002C5 31.8411 6.49238 33.3335 8.33333 33.3335Z"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="featureValue">
                {truncate({
                  content: presence,
                  length: 52,
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="bottomWrapper">
      <div className="applyNow">Apply now</div>

      {!salaryCurrency ||
      !salaryStart ||
      !salaryEnd ||
      !salaryPeriod ? null : (
        <div className="salary">
          {truncate({
            content: salaryCurrency,
            length: 3,
            dots: false,
          })}{' '}
          {truncate({
            content: salaryStart,
            length: 6,
            dots: false,
          })}{' '}
          -{' '}
          {truncate({
            content: salaryCurrency,
            length: 3,
            dots: false,
          })}{' '}
          {truncate({
            content: salaryEnd,
            length: 6,
            dots: false,
          })}{' '}
          <span className="salaryType">/{salaryPeriod}</span>
        </div>
      )}
    </div>
  </div>
);
