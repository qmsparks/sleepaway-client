const URL = 'http://localhost:3001/api/v1/auth';

class AuthModel {
  static register = data => {
    return fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  };

  static login = data => {
    return fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  }

  // TODO method for requesting jwt extension 
}

export default AuthModel;