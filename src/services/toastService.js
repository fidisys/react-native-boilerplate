import { Toast } from 'native-base';
import { platform } from '../styles/base';

export default showToast = (message, duration = 1000, type='success') => {
  console.log(message);
  Toast.show({
    text: message,
    duration: duration,
    type: type,
    position: 'top',
    textStyle: { textAlign: 'center' },
    style: {
      marginHorizontal: platform.isAndroid? 15 : null,
      borderRadius: platform.isAndroid? 3 : null,
      marginTop: platform.isAndroid ? 3 : null
    }
  });
};