const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://maxkram.herokuapp.com/"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://maxkram.herokuapp.com/",
  "process.env.CLIENT_ID": "3ShmnWBfPk9MI8tV6SQmnOdkY7tlgoKF"
};
