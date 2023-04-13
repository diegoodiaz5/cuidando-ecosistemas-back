const { createUserWithEmailAndPassword } = require("firebase/auth");
const { auth, db } = require("../Firebase.js")
const { doc, getDoc, setDoc, getDocs, collection } = require("firebase/firestore");

exports.userlist = async (req, res) => {


    const querySnapshot = await getDocs(collection(db, "users"));

    const userlist = [];

    querySnapshot.forEach((doc) => {
        userlist.push(doc.data());
    });
    res.send(userlist);
}

exports.newUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const docRef = doc(db, "users", `${username}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res.send('The username is already registered!');
        } else {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(async () => {
                    await setDoc(doc(db, "users", `${username}`), {
                        information: {
                            username: username,
                            description: '',
                            photo: '',
                            posts: 0,
                            comments: 0,
                            followers: 0,
                            following: 0
                        }
                    });
                    res.send(`New user registered! Username: ${username}`)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    res.send(error)
                });
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}