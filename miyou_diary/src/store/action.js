import Axios from "axios";

export default {
  httpRequest() {
    Axios({
      method: 'get',
      url: 'http://localhost:3000/diary/getAll'
    })
  }
}
