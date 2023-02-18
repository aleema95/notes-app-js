import axios from 'axios'

export function registerUser(user_data) {
  axios.post('/users/create', user_data)
}