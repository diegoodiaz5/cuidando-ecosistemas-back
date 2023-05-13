const { auth, db } = require("../Firebase.js")
const { doc, setDoc, getDoc, getDocs, collection } = require("firebase/firestore");

exports.newUser = async (req, res) => {
    const { username, uid, photo } = req.body;
    try {
        await setDoc(doc(db, "users", `${uid}`), {
            information: {
                username: username,
                description: '',
                photo: photo,
                posts: 0,
                comments: 0,
                followers: 0,
                following: 0
            },
            plants: []
        });
        res.sendStatus(statusCode)
    }
    catch (error) {
        res.send(error)
    };
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