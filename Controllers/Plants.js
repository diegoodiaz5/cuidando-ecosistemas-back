const { db } = require("../Firebase.js")
const { setDoc, getDoc, doc, updateDoc, arrayUnion } = require("firebase/firestore");

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
        const postsRef = doc(db, 'posts', 'plants');
        await updateDoc(postsRef, {
            plants: arrayUnion({
                name: name,
                image: image,
                health: health,
                information: information,
                recomendation: recomendation,
                author: uid,
            })
        })
        res.send(`The plant ${name} was added to the Database!`)
    } catch (error) {
        res.send(error);
    }
}

exports.myPlants = async (req, res) => {
    const { uid } = req.body;
    const plants = [];
    const userRef = doc(db, 'users', `${uid}`);
    const userSnap = await getDoc(userRef);
    const data = userSnap.data().plants;
    data.forEach(element => {
        plants.push(element);
    });
    res.send(plants);
}