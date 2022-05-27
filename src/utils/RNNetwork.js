export const RNListener = (networking) => {
  /** react native 환경에서만 가능 */
  const listener = event => {
    const { data, type } = typeof event.data === 'string' || event.data instanceof String
      ? JSON.parse(event.data)
      : event.data;

    console.log(data)

    networking[type] && networking[type](data);
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
};

export const RNSender = (type, data) => {
  if (window.ReactNativeWebView) {
    /** android */
    /** ios */
    window.ReactNativeWebView.postMessage(JSON.stringify({type, data}));
  }  else {
    /** web */
    console.log('not mobile');
  }
}

const RNNetwork = ({networking, children}) => {
  RNListener(networking);
  return children
}

export default RNNetwork;
