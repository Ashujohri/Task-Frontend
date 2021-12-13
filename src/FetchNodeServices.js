var axios = require('axios');
var ServerURL = "https://reqres.in/api";

const getData = async (url) => {
  try {
    const response = await fetch(`${ServerURL}/${url}`);
    const result = await response.json();
    if (result == "Session has Expired Please Login Again") {
      alert("Session has Expired Please Login Again");
      return [];
    } else {
      console.log(result);
      return result;
    }
  } catch (e) {
    return null;
  }
};

//To send data in node
const postData = async (url, body) => {
// console.log("POSTDATAT", `${ServerURL}/${url}`);
  try {
    const response = await fetch(`${ServerURL}/${url}`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        // Authorization: `Bearer ${tokenFinal.token}`,
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    if (result == "Session has Expired Please Login Again") {
      alert("Session has Expired Please Login Again");
      return false;
    } else {
      console.log(result);
      return result;
    }
  } catch (e) {
    return null;
  }
};


//To send data with image in node
const postDataAndImage = async (url, formData, config) => {
  try {
    console.log(formData);
    var response = await axios.post(`${ServerURL}/${url}`, formData, config);
    if (response.data == "Session has Expired Please Login Again") {
      alert("Session has Expired Please Login Again");
      return false;
    } else {
      console.log(result);
      var result = response.data.RESULT;
      return result;
    }
  } catch (e) {
    return null;
  }
};

export {
  postData,
  postDataAndImage,
  getData,
  ServerURL,
};
