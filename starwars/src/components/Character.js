// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
    width: 30%;
    margin: 5% auto;
    border: 2px solid #000;
    border-radius: 7px;
    padding: 3%;
    font-size: 1.6rem;
    background: linear-gradient(to bottom right, #303030, #a9a9a9);
    color: #fff;

    h3{
        margin: 0 0 3% 0;
    }

    li{
        text-align: left;
        list-style: none;
        line-height: 1.5;
    }
`

const Character = props =>{
    const { name, height, mass, eye_color, hair_color, } = props.character

    return( 
        <Div>
            <h3>{name}</h3>
            <ul>
                <li>Height: {height / 100}m</li>
                <li>Mass: {mass}kg</li>
                <li>Eye Color: {eye_color}</li>
                <li>Hair Color: {hair_color}</li>
            </ul>
        </Div>
    )
}

export default Character
