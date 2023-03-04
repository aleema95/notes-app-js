import axios from 'axios'

export function login(login_data){
  axios.post('/userAuth/login', login_data)
    .then(data => console.log(data))
    .catch(e => console.error(e))
}