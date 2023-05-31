import db from '../db/firestore'
import firebase from "firebase/app"
import 'firebase/auth'

const createUserProfile = userProfile => {
  db.collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)
}

export async function register({email, password, username, avatar}){
  try {
   const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password)
   await createUserProfile({uid: user.uid, username, email, avatar, joinedChats: []}) 
  }catch(err){
    return Promise.reject(err.message)
  }
}

export const onAuthStateChange = onAuth => {
  firebase.auth().onAuthStateChanged(onAuth)
}