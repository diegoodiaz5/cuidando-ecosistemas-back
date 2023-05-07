const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const { auth, db } = require("../Firebase.js")
const { doc, setDoc, getDoc, getDocs, collection } = require("firebase/firestore");

exports.newUser = async (req, res) => {
    const { username, email, password } = req.body;
    await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await setDoc(doc(db, "users", `${user.uid}`), {
                information: {
                    username: username,
                    description: '',
                    photo: '',
                    posts: 0,
                    comments: 0,
                    followers: 0,
                    following: 0
                },
                plants: []
            });
            res.status(201).send({ user })
        })
        .catch((error) => {
            res.send(error)
        });
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            res.send(`User logged! : ${user.email}`)
        })
        .catch((error) => {
            res.send(error);
        });
}

exports.userlist = async (req, res) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userlist = [];
    querySnapshot.forEach((doc) => {
        userlist.push(doc.data());
    });
    res.send(userlist);
}

exports.userById = async (req, res) => {
    const { uid } = req.params;
    try {
        const userRef = doc(db, "users", `${uid}`)
        const userById = await getDoc(userRef);
        res.send(userById.data());
    }
    catch (error) {
        res.send("Error!");
    }
}