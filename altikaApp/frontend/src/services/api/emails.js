import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

async function sendCallUs (props) {
    const {userName, email, phone} = props
    try {
      let response = await axios.post('/send/', {
        userName,
        email,
        phone
      });
      return response;
    } catch (error) {
      alert(`что-то пошло не так ${error}`); // TODO: сделать обработку ошибок
    }
}

const exportData = {
    sendCallUs,
};

export default exportData;