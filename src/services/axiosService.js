// Import axios's config (get a configurated axios object)
import APIRequest from '../utils/config/axios.config';

export async function getAllOffers() {
  try {
    return APIRequest.get('/offers');
  } catch (err) {
      // Handle Error Here
      return console.error(err);
  }
}

/**
 * Register method
 * @params { string } username
 * @params { string } email
 * @params { string } password
 * @returns promise
 *
 */
export const registerUser = (username, email, password) => {
  const body = {
    username,
    email,
    password,
  };

  // Return the response with a promise
  return APIRequest.post('/auth/register', body);
};

export const getOfferByID = (id) => {
  return APIRequest.get(`/offers/${id}`);
};

export const loginUser = (username, password) => {
  const body = {
      username,
      password,
  };

  // Returns the response with a Promise
  return APIRequest.post('/auth/login', body);
};
