export const singleHeroInfo = document.querySelector('.singleHeroInfo');

export function showSingleHeroInfo(obj){
    singleHeroInfo.classList.remove('hidden');

    const { localized_name,
            primary_attr,
            attack_type,
            base_health,
            base_mana,
            base_attack_min,
            base_attack_max,
            base_health_regen,
            base_mana_regen,
            base_int,
            base_str,
            base_agi,
            base_armor,
            attack_range,
            attack_rate,
            projectile_speed,
            roles
        } = obj;

    let resultString = `
        <h2 class="hero__name">${localized_name}</h2>
                    
        <div class="singleHeroInfo__container">
            <p class="hero__basicInfo">Primary Attribute: ${primary_attr}</p>
            <p class="hero__basicInfo">Attack Type: ${attack_type}</p>
            <p class="hero__basicInfo">Health: ${base_health}</p>
            <p class="hero__basicInfo">Mana: ${base_mana}</p>
            <p class="hero__basicInfo">Min Attack: ${base_attack_min}</p>
            <p class="hero__basicInfo">Max Attack: ${base_attack_max}</p>
            <p class="hero__basicInfo">HP Regen: ${base_health_regen}</p>
            <p class="hero__basicInfo">Mana Regen: ${base_mana_regen}</p>
            <p class="hero__basicInfo">Base Int: ${base_int}</p>
            <p class="hero__basicInfo">Base Str: ${base_str}</p>
            <p class="hero__basicInfo">Base Agi: ${base_agi}</p>
            <p class="hero__basicInfo">Base Armor: ${base_armor}</p>
            <p class="hero__basicInfo">Attack Range: ${attack_range}</p>
            <p class="hero__basicInfo">Attack Rate: ${attack_rate}</p>
            <p class="hero__basicInfo">Projectile Speed: ${projectile_speed}</p>
        </div>

        <ul class="hero__roles">
            <h3 class="hero__rolesTitle">Roles:</h3>
            ${
                roles.map(role => `
                    <li class="hero__role">
                        ${role}
                    </li>    
                `).join('')
            }
        </ul>
    `;

    document.querySelector('.singleHeroInfo__about').innerHTML = resultString;
}

export function binarySearchForObj(id, returnedData){
    let resultData = returnedData;

    for(let i = 0; resultData.length !== 2; i++){
        if (id === 1){
            resultData = resultData[id - 1];
            break;
        }

        if(id > resultData[Math.floor(resultData.length / 2)].id) resultData = resultData.slice(Math.floor(resultData.length / 2));
        else resultData = resultData.slice(0, Math.floor(resultData.length / 2) + 1);
    }
    
    if(resultData.length > 1) return resultData[resultData.length - 1]
    else return resultData;
}

export function closeHeroInfo(e){
    singleHeroInfo.classList.add('hidden');
}