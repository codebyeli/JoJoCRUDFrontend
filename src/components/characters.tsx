import React from 'react'


function GetCharacters() {

    type Character ={
        id : number,
        name : String,
        stand : String,
        musicalRef : String,
        age : number,
        nationality : String,
        debut : String
    }
    
    const characters : Character[]=  [
        {
            id: 1,
            name : "Jonathan Joestar",
            stand : "Hermit Purple",
            musicalRef : "?",
            age : 19,
            nationality : "British",
            debut : "Part 1"
        },
        {
            id: 2,
            name : "Giorno Giovanna",
            stand : "Golden Experience",
            musicalRef : "?",
            age : 15,
            nationality : "Italian",
            debut : "Part 5"
        },
        {
            id: 3,
            name : "Josuke Higashikata 4",
            stand : "Crazy Diamond",
            musicalRef : "?",
            age : 16,
            nationality : "Japanese",
            debut : "Part 4"
        }
    ]
    characters.map((characters, i) => characters)
}

export default GetCharacters