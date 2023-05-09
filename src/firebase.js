// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNr3xxXz6iuObEdM-s5MfS73pM8SczSAo',
  authDomain: 'chrome-extension-demo-b4816.firebaseapp.com',
  projectId: 'chrome-extension-demo-b4816',
  storageBucket: 'chrome-extension-demo-b4816.appspot.com',
  messagingSenderId: '1058378714361',
  appId: '1:1058378714361:web:7082e5e2110a117fd7a628',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == 'fetch') {
    var domain = msg.data.domain
    console.log(domain)
  }
})
