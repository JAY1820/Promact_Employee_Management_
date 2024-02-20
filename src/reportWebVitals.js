/*
It uses the web-vitals library to measure and report crucial performance metrics such as Cumulative Layout Shift (CLS),
First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Time to First Byte (TTFB). 
*/

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
