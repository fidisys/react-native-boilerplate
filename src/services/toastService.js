import { Toast } from 'native-base';

export default showToast = (message, duration = 1000, type='success') => {
  console.log(message);
  Toast.show({
    text: message,
    duration: duration,
    type: type,
    position: 'top',
    textStyle: { textAlign: 'center' },
  });
};