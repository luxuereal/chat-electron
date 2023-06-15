import db from '../db/firestore'
import firebase from "firebase/app"
import 'firebase/auth'

const createUserProfile = userProfile => {
  db.collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)
}

export const getUserProfile = uid => 
db.collection('profiles').doc(uid).get().then(snapshot => snapshot.data())


export async function register({email, password, username, avatar}){
   const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password)
   const userProfile = {uid: user.uid, username, email, avatar, joinedChats: []} 
   await createUserProfile(userProfile) 
   return userProfile
  }


export const login = async ({email, password}) => { 
  const {user} = await firebase.auth().signInWithEmailAndPassword(email, password)
  const userProfile = await getUserProfile(user.uid)
  return userProfile
}

export const logout = () => firebase.auth().signOut()

export const onAuthStateChange = onAuth => {
  firebase.auth().onAuthStateChanged(onAuth)
}