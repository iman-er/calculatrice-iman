function initialiser_calc(id) {
    const champ = document.getElementById(id + '_resultat');
    champ.value = '';
}

function add_calc(id, valeur) {
    const champ = document.getElementById(id + '_resultat');
    champ.value += valeur;
}


function f_calc(id, action) {
    const champ = document.getElementById(id + '_resultat');
    let val = champ.value;

    switch(action) {
        case 'ce': 
            champ.value = '';
            break;

        case 'nbs': 
            champ.value = val.slice(0, -1);
            break;

        case '+-': 
            if (val.charAt(0) === '-') {
                champ.value = val.slice(1);
            } else if (val !== '') {
                champ.value = '-' + val;
            }
            break;

        case '=': 
            try {
                champ.value = eval(val.replace(',', '.'));
            } catch (e) {
                champ.value = "Erreur";
            }
            break;

        default: 
            champ.value += action;
            break;
    }
}


function key_detect_calc(id, event) {
    const key = event.key;

    if (!isNaN(key)) {
        add_calc(id, key);
    } else if (['+', '-', '*', '/', '%', '.'].includes(key)) {
        f_calc(id, key);
    } else if (key === 'Enter') {
        f_calc(id, '=');
    } else if (key === 'Backspace') {
        f_calc(id, 'nbs');
    } else if (key === 'Escape') {
        f_calc(id, 'ce');
    }
}
window.onload = function() {
    initialiser_calc('calc');

    changerCouleurCalculatrice('orchid');

    const couleurBox = document.createElement('div');
    couleurBox.style.marginTop = '10px';
    couleurBox.style.textAlign = 'center';

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.id = 'colorPicker';
    colorPicker.value = '#da70d6'; 

    const btnChangerCouleur = document.createElement('button');
    btnChangerCouleur.textContent = 'change colour';
    btnChangerCouleur.style.marginLeft = '10px';
    btnChangerCouleur.onclick = function() {
        const couleur = document.getElementById('colorPicker').value;
        changerCouleurCalculatrice(couleur);
    };

    couleurBox.appendChild(colorPicker);
    couleurBox.appendChild(btnChangerCouleur);
    
    const calc = document.getElementById('calc');
    calc.insertAdjacentElement('afterend', couleurBox);
};


function changerCouleurCalculatrice(couleur) {
    const calcElement = document.getElementById('calc');
    if (calcElement) {
        calcElement.style.backgroundColor = couleur;
    }
    document.body.style.backgroundImage = "url('iman.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = '100vh';

}


