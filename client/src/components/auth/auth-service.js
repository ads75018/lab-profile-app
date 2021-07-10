// auth/auth-service.js

import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true
});
export default service;


//methods - signup

// auth/auth-service.js


function signup(username, password, campus, course) {
  return service.post('/signup', {username, password, campus, course}).then(response => response.data)
}
export {signup}



//login
function login(username, password) {
  return service.post('/login', {username, password}).then(response => response.data)
}
export {login}


//logout
 
function logout() {
  return service.post('/logout', {}).then(response => response.data)
}
export {logout}


//edit

function edit (username, campus, course) {
  return service.post ('/edit', {username, campus, course}).then(response=> response.data)
}
export {edit}

//loggedin

function loggedin() {
  return service.get('/loggedin').then(response => response.data)
}
export {loggedin}