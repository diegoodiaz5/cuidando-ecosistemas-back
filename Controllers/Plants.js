const { db } = require("../Firebase.js")
const { doc, updateDoc, arrayUnion } = require("firebase/firestore");

exports.newPlant = async (req, res) => {
    const { username, name, image, health, information, recomendation } = req.body;
    try {
        const userRef = doc(db, 'users', `${username}`);
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