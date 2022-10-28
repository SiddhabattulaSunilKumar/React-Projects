import axios from "axios";
const baseURL =
  "https://zigzak-603f8-default-rtdb.europe-west1.firebasedatabase.app/users.json";
  var succesRes = {
    usrName : "",
    Status: "Fail"
}
var APIresponse = null;
export const ValidateLogin = async (userDetails) => {
        await axios
    .get(baseURL)
    .then((response) => {
        const responseValue =response.data;
        for(const key in responseValue){
            if((responseValue[key].emailId===userDetails.emailId) && (responseValue[key].password===userDetails.password)){
                 succesRes = {
                    usrName : responseValue[key].name,
                    Status: "Successs"
                }
            }
        }
      APIresponse = {
        ...succesRes
      };
      return APIresponse;
    })
    .catch((err) => (APIresponse = Object.values(err.data)));
    console.log(APIresponse);

console.log(APIresponse);
return APIresponse;
};

