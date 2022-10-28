import axios from "axios";
const baseURL =
  "https://zigzak-603f8-default-rtdb.europe-west1.firebasedatabase.app/users.json";

let APIresponse = null;
export const ValidateRegistration = (newUserDetails) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  axios
    .post(baseURL, newUserDetails, config)
    .then((response) => {
        APIresponse= Object.values(response.status);
      
    })
    .catch((err) => (APIresponse = Object.values(err.data)));
  return APIresponse;
};

