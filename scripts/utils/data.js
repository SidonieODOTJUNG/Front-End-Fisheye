const getDatas = async function () {
    try {
        let response = await fetch("data/photographers.json")
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

const getPhotographersById = async function (id) {
    let data = await getPhotographers()
    let photographer = data.find(function(el) {
        return el.id == id
    })
    return photographer
}

const getMedias = async function (id) {
    let data = await getDatas()
    return data.medias.filter(function (el) {
        return el.photographerId == id
    })
}
