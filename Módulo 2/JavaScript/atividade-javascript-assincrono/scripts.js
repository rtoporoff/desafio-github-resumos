const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById ('change-cat');

const getCats = async () => {
    try {
        const data = await fetch (BASE_URL);
        const json = await data.json ();
    
        return json.webpurl
    }
    catch(e) {  //se der algum erro no try, o catch dará a mensagem do erro
        console.log (e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById ('cat');
   catImg.src = await getCats();
}

catBtn.addEventListener ('click', loadImg);

loadImg();