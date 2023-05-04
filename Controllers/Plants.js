const { db } = require("../Firebase.js")
const { doc, updateDoc, arrayUnion } = require("firebase/firestore");
const { getAuth, onAuthStateChanged } = require("firebase/auth");

exports.newPlant = async (req, res) => {
    const { name, image, health, information, recomendation, uid } = req.body;
    try {
        const userRef = doc(db, 'users', `${uid}`);
        await updateDoc(userRef, {
            plants: arrayUnion({
                name: name,
                image: image,
                health: health,
                information: information,
                recomendation: recomendation
            })
        });
        res.send(`The plant ${name} was added to the Database!`)
    } catch (error) {
        res.send(error);
    }
}

exports.myPlants = async (req, res) => {
    const auth = getAuth();
    const plants = [];
    onAuthStateChanged(auth, (user) => {
        const uid = useruid;
        const userRef = doc(db, 'users', `${uid}`);

    });
    res.send({ plant: "plant!" })
}