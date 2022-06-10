
import axiosInstance from "axios";

export function funcLogin(username, password){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "Username": username,
    "Password": password
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://203.162.123.67:8083/api/Auth/Login", requestOptions)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("resCode", JSON.stringify(result.resCode))
      localStorage.setItem("UserName", JSON.stringify(result.userName))
      localStorage.setItem("UserID", JSON.stringify(result.userID))
      localStorage.setItem("Token", JSON.stringify(result.token))
    })
    .catch(error => console.log('error', error));
}

