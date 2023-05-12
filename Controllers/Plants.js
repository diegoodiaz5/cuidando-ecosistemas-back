const { db } = require("../Firebase.js")
const { setDoc, getDoc, doc, updateDoc, arrayUnion } = require("firebase/firestore");

exports.newPlant = async (req, res) => {
    const { name, image, health, information, recommendation, uid, authorUsername, authorPhoto } = req.body;
    try {
        const userRef = doc(db, 'users', `${uid}`);
        await updateDoc(userRef, {
            plants: arrayUnion({
                name: name,
                image: image,
                health: health,
                information: information,
                recommendation: recommendation
            })
        });
        const postsRef = doc(db, 'posts', 'plants');
        await updateDoc(postsRef, {
            plants: arrayUnion({
                name: name,
                image: image,
                health: health,
                information: information,
                recommendation: recommendation,
                author: uid,
                authorUsername: authorUsername,
                authorPhoto: authorPhoto
            })
        })
        res.send(`The plant ${name} was added to the Database!`)
    } catch (error) {
        res.send(error);
    }
}

exports.myPlants = async (req, res) => {
    const { uid } = req.body;
    const userRef = doc(db, 'users', `${uid}`);
    const userSnap = await getDoc(userRef);
    const data = userSnap.data();
    res.send(data);
}

exports.allPlants = async (req, res) => {
    const plants = [];
    const plantsRef = doc(db, 'posts', 'plants');
    const plantsSnap = await getDoc(plantsRef);
    const data = plantsSnap.data().plants;
    data.forEach(element => {
        plants.push(element);
    })
    plants.reverse();
    res.send(plants);
}