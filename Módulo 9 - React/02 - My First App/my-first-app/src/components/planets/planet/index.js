import React, { Fragment } from 'react';
import './style.css';

const Planet = () => {
    return (
        <div>
            <h4> Mercúrio </h4>
            <p> 
                Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o 
                Sol a cada 87,969 dias terrestres. (Fonte: Wikipedia) 
            </p>
            <img class="gray-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="Imagem de Mercúrio" />
        </div>
    );
}

export default Planet;
