// // import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
// //   import { getAuth,
// //     signOut,
// //     onAuthStateChanged,
// //     signInWithPopup,
// //     GoogleAuthProvider,
// //     deleteUser,
// //     sendSignInLinkToEmail } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';


// //   const firebaseConfig = {
// //     apiKey: "AIzaSyBEOXFc7bTDi8RXpC7g2FjPcYb2iH5j3iw",
// //     authDomain: "test-project-e00dd.firebaseapp.com",
// //     projectId: "test-project-e00dd",
// //     storageBucket: "test-project-e00dd.appspot.com",
// //     messagingSenderId: "64437722657",
// //     appId: "1:64437722657:web:f54588663212d7eb6a8d60",
// //     measurementId: "G-51LVG6W5K3"
// //   };

// //   // Initialize Firebase
// //   const app = initializeApp(firebaseConfig);
// //   const auth = getAuth(app);
// //   //const db = getFirestore(app);
//   const actionCodeSettings = {url: 'https://router.vuejs.org/guide/advanced/navigation-guards.html',handleCodeInApp: true};


// //   function signup(){
// //     var email = document.getElementById("email").value;
// //     var password = document.getElementById("password").value;

// //     createUserWithEmailAndPassword(auth,email,password)
// //         .then((user) =>{
// //             console.log(auth.currentUser);

// //         })
// //         .catch((e) =>{
// //             console.log(e);
// //         })
// //         // document.getElementById("send").onclick = ;



// //   }

// //   function login(){
// //     var email = document.getElementById("email").value;
// //     var password = document.getElementById("password").value;

// //     signInWithEmailAndPassword(auth,email,password)
// //         .then((user) =>{
// //             console.log(auth.currentUser);
// //             // console.log(user);
// //         })

// //         .catch((e) => {
// //             console.log(e);
// //         })
// //   }

// //   function signout(){
// //     signOut(auth)
// //     console.log("user logged out");
// //   }

// //   function google(){
// //     const provider = new GoogleAuthProvider();

// //     signInWithPopup(auth,provider)
// //       .then((result) =>{
// //         const email_id=result.user.email;
// //         const check=email_id.includes("kpriet.ac.in");
// //         if(check){
// //           console.log(result.user);
// //         }else{
// //           deleteUser(auth.currentUser);
// //           alert("Only Institution id accepted");
// //         // console.log(result.user);
// //         }
// //         // console.log(result.user.email);
// //       })
// //     }

//     function status(){
//       var email = document.getElementById("email").value;
//       sendSignInLinkToEmail(auth, email, actionCodeSettings)
//         .then(() => {

//           console.log("The link was successfully sent");
//           window.localStorage.setItem('emailForSignIn', email);

//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.log("Not working");

//         });
//     }

// //   document.getElementById("Signup").onclick = signup;
// //   document.getElementById("Login").onclick = login;
// //   document.getElementById("Logout").onclick = signout;
// //   document.getElementById("Google").onclick = google;
// //   document.getElementById("Status").onclick = status;
