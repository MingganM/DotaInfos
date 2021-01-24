const heroesContainer = document.querySelector('.heroes__container');
const closeBtn = document.querySelector('.singleHeroInfo__close');

import { showSingleHeroInfo,
         binarySearchForObj,
         closeHeroInfo
} from './HeroesHelper';

let rootURL = "https://api.opendota.com";
let returnedData;

function handleData(data){
   let resultHTML = '';

   data.forEach(dataObj => {
        const {id, img, attack_type, primary_attr, localized_name} = dataObj;
        resultHTML += `
            <div class="singleHero">
                <div class="singleHero__img">
                    <img src=${rootURL + img}>
                </div>

                <div class="singleHero__info">
                    <h3 class="singleHero__name">${localized_name}</h3>
                    <p class="singleHero__attr">Primary Attribute: ${primary_attr}</p>
                    <p class="singleHero__attackType">Attack Type: ${attack_type}</p>
                    <button data-id=${id} class="singleHero__learn">Learn More</button>
                </div>
            </div>
        `
   });

   returnedData = data;

   heroesContainer.innerHTML = resultHTML;

   addClickOnElems();
}

function addClickOnElems(){
    const elemList = document.getElementsByClassName('singleHero__learn');
    Array.from(elemList).forEach(elem => {
        elem.addEventListener('click', showSingleHero);
    });
}

function showSingleHero(e){
    let { target: { dataset: { id } } } = e;
    id = parseInt(id);

    const foundObj = binarySearchForObj(id, returnedData);
    showSingleHeroInfo(foundObj);
}

if(heroesContainer !== null){
   fetch('https://api.opendota.com/api/heroStats')
   .then(data => data.json())
   .then(data => {
      handleData(data);
   })
   
   closeBtn.addEventListener('click', closeHeroInfo);
}

