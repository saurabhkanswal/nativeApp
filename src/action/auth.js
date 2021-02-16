import auth from '@react-native-firebase/auth'
import SnackBar from 'react-native-snackbar'
import database from '@react-native-firebase/database'
// import Snackbar from 'react-native-snackbar';


export const signUp = (data) => async (dispatch) => {
    console.log(data);
    const {name, instaUserName, bio, email, password, country, image} = data;

    auth().createUserWithEmailAndPassword(email, password)
    .then((data)=>{
        console.log(data);
        console.log('User Creation was a success')
        database()
        .ref('/users/'+ data.user.uid)
        .set({
            name,
            insaUserName,
            country,
            image,
            bio,
            uid: data.user.uid
        })
        .then(()=> console.log('data set success'))
        SnackBar.show({
            text: 'account created',
            textColor: 'white',
            backgroundColor: 'green'
        })
    })
    .catch((error)=>{
        console.error(error);
        SnackBar.show({
            text: "Sign Up failed",
            textColor: 'white',
            backgroundColor: 'red'
        })
    })
}

export const signIn = (data) => async (dispatch) => {
    console.log(data);
    const {email, password} = data
    auth()
    .signInWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("signIn Success")
            Snackbar.show({
                text: "account signIn",
                textColor: 'white',
                backgroundColor: 'green'
            })
        })
        .catch((error)=>{
            console.error(error);
            SnackBar.show({
                text: 'signIn failed',
                textColor: 'white',
                backgroundColor: 'red'
            })
        })
}

export const signOut = ()=> async (dispatch) =>{
    auth()
    .signOut()
    .then(()=>{
        SnackBar.show({
            text: 'Sign out successfully',
            textColor: 'white',
            backgroundColor:'green'
        })
    })
    .catch((error)=>{
        console.log(error);
        SnackBar.show({
            text: 'Sign out Failed',
            textColor: 'white',
            backgroundColor: 'red'
        })
    })
}