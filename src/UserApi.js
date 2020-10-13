import Axios from "axios";

export let message = "Hello this is the message";

// these functions should contact the react-store-node-api and verify user credentials.

// create user
export const createUser = async (
  usernameInput,
  passwordInput,
  firstNameInput,
  lastNameInput,
  emailInput,
  phoneInput
) => {
  const newUser = await new FormData();
  newUser.append("username", usernameInput);
  newUser.append("password", passwordInput);
  newUser.append("firstName", firstNameInput);
  newUser.append("lastName", lastNameInput);
  newUser.append("email", emailInput);
  newUser.append("phone", phoneInput);
  newUser.append("userId", Date.now());

  try {
    Axios.post("http://localhost:3001/users", await newUser)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    return console.log("UserApi error");
  }
};

// login user
export const loginUser = async (usernameInput, passwordInput) => {
  let final;
  await Axios.get(`http://localhost:3001/users/login/${usernameInput}`).then(
    async (response) => {
      //   console.log(response);
      final = await response.data;
    }
  );
  try {
    return final;
  } catch (error) {
    console.log("loginUserApi error");
  }
};

// update user

// delete user

// user model below
// username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   firstName: {
//     type: String,
//     required: false,
//   },
//   lastName: {
//     type: String,
//     required: false,
//   },
//   email: {
//     type: String,
//     required: false,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true,
//   },
//   createdOn: {
//     type: Date,
//     required: true,
//     default: Date.now(),
//   },