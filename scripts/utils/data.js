

const getDatas = async function () {
    try {
        let response = await fetch("data/photographers.json")
        // TODO voir pourquoi cors multirequete ne fonctionne pas
        // c'est parce que c'est un fichier local, il faudrai créer son propre serveur avec node.js (voir avec Armel)
        if(response.ok) {
            let data = await response.json()
            return data;
        } else {
            console.error("Retour du serveur : ", response.status);
        }
    } catch (err) {
        console.log(err)
    } 
}

const getPhotographers = async function () {
    let data = await getDatas()
    return data.photographers
}

