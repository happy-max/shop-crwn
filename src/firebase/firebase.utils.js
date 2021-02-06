import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC13niZ97EsResvd2fJWtKw23UK32Gc_-8",
    authDomain: "shop-2d94a.firebaseapp.com",
    projectId: "shop-2d94a",
    storageBucket: "shop-2d94a.appspot.com",
    messagingSenderId: "571745187126",
    appId: "1:571745187126:web:1f04df4fb63b1707502f97",
    measurementId: "G-1CWVCNN1HF"
}

firebase.initializeApp(config)


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()


    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message)
        }
    }
    return userRef
}


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase










