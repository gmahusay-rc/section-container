import React from 'react';
import './css/font.css';
import './css/SectionContainer.css';
import './css/override.css';

function SectionContainer(props) {
  console.log(props.children);
  return (
    <section>
      <div className="max-w-[1108px] px-[24px] mx-auto">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="115" height="13" viewBox="0 0 115 13" fill="none">
            <path d="M89.2418 12.9999C85.7447 12.9999 82.4792 11.565 80.0178 8.96503C78.2388 7.07636 75.8871 6.03392 73.3892 6.03392C70.8913 6.03392 68.5396 7.07636 66.7606 8.96503C64.3114 11.565 61.0336 12.9999 57.5366 12.9999C54.0395 12.9999 50.7739 11.565 48.3125 8.96503C46.5335 7.07636 44.1818 6.03392 41.6839 6.03392C39.186 6.03392 36.8343 7.07636 35.0553 8.96503C32.6061 11.565 29.3284 12.9999 25.8313 12.9999C22.3342 12.9999 19.0686 11.565 16.6073 8.96503C14.8283 7.07636 12.4766 6.03392 9.97865 6.03392C8.48077 6.03392 7.03547 6.40876 5.73471 7.11614C4.26772 7.91391 2.36673 8.02524 1.15954 6.87147C-0.0355695 5.72926 -0.0998732 3.80598 1.23955 2.83702C3.79141 0.99097 6.81066 0 9.97865 0C14.1337 0 18.0329 1.7047 20.9573 4.80751C22.2733 6.19335 23.9914 6.96598 25.8191 6.96598C27.6468 6.96598 29.3771 6.20561 30.6809 4.80751C33.6053 1.7047 37.5045 0 41.6596 0C45.8146 0 49.7138 1.7047 52.6382 4.80751C53.942 6.19335 55.6723 6.96598 57.5 6.96598C59.3278 6.96598 61.058 6.20561 62.3618 4.80751C65.2862 1.7047 69.1854 0 73.3405 0C77.4955 0 81.3947 1.7047 84.3191 4.80751C85.6229 6.19335 87.3531 6.96598 89.1809 6.96598C91.0086 6.96598 92.7389 6.20561 94.0427 4.80751C96.9671 1.7047 100.866 0 105.021 0C108.186 0 111.203 0.98917 113.753 2.83199C115.097 3.80259 115.031 5.73102 113.831 6.87438C112.622 8.02702 110.721 7.91415 109.253 7.11602C107.952 6.40872 106.507 6.03392 105.009 6.03392C102.511 6.03392 100.16 7.07636 98.3805 8.96503C95.9314 11.565 92.6536 12.9999 89.1565 12.9999" fill="#D9AE4C"/>
          </svg>
        </span>
        <h2 className="font-sofiaProBlack text-1xl text-start max-w-[680px] leading-[120%] tracking-[-1.2px]">
          {props.title}
        </h2>
      </div>
      { props.children }
    </section>
  );
}
  
export default SectionContainer;