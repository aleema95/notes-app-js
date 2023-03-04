import axios from 'axios'
import { setUser, setAccessToken } from '../slices/userSlice'


// export const logina = (login_data) => async (dispatch) => {
// 	try {
//     const response = await axios.post('/userAuth/login', login_data)
//     const data = response.data
//     dispatch(setUser(data.user))
//     dispatch(setAccessToken(data.access_token))
//   } catch (error) {
//     console.error(error);
//   }
// };

export function login(login_data) {
   return async function (dispatch) {
    try {
      const response = await axios.post('/userAuth/login', login_data)
      const data = response.data
      dispatch(setUser(data.user))
      dispatch(setAccessToken(data.access_token))
    } catch (error) {
      console.error(error);
    }
  }
}