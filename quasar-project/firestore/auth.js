import { db, auth } from "../../firestore/firestore";


auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("logg");
  }
})

