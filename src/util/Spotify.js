const accessToken = "";
const clientID = "f4c663c11b4349378a1a0675811fc150";
const redirectURI = "http://localhost:3000/";
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      const expires_in = Number(urlExpiresIn[1]);
      window.setTimeout(() => (accessToken = ""), expires_in * 1000);
      window.history.pushState("Access Token", null, "/");
    } else {
        
    }
  },
};

export default Spotify;
