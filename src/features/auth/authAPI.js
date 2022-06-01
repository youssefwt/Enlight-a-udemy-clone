import AuthService from "../../services/AuthService";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function login(email,password) {
  console.log(email,password);
  return AuthService.login(email,password) ;
}
