import {useState, useEffect} from 'react';
import { throttle } from 'lodash';

const getDeviceConfig = (width) => {
  if(width <= 480) {
    return 'phone';
  } else if(width > 480 && width <= 770 ) {
    return 'tablet';
  } else if(width >= 770) {
    return 'desktop';
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200); 
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}
export default useBreakpoint;