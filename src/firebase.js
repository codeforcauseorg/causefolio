import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyDkgoFd60ceKUbq80AhN31VYsOmck2_lBg',
  authDomain: 'causefolio-26928.firebaseapp.com',
  databaseURL: 'https://causefolio-26928-default-rtdb.firebaseio.com',
  projectId: 'causefolio-26928',
  storageBucket: 'causefolio-26928.appspot.com',
  messagingSenderId: '587228140489',
  appId: '1:587228140489:web:69813c2fe53cfba8324e18'
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('started');
}else {
  // firebase.app(); // if already initialized, use that one
  firebase.app('[DEFAULT]').delete().then(() => {
    firebase.initializeApp(firebaseConfig);
    console.log('deleted')
  })
}

export default firebase;