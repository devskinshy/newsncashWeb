const RNListener = ({children}) => {
  /** react native 환경에서만 가능 */
  const listener = event => {
    const { data, type } = typeof event.data ==='string' 
      ? JSON.parse(event.data) 
      : event.data;

    if(type === 'TEST') {
      console.log(data);
    }
  };

  if (window.ReactNativeWebView) {
    /** android */
    document.addEventListener("message", listener);
    /** ios */
    window.addEventListener("message", listener);
  } else {
    /** web */
    console.log('not mobile');
  }

  return children;
};

export default RNListener;