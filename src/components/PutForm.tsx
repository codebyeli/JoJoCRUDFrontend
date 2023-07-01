function PutForm() {

    const character = {
        id: 1,
        name : "Johnny Joestar",
        stand : "Tusk",
        musicalRef : "?",
        age : 19,
        nationality : "American",
        debut : "Part 7"
    }

    return(
        <>
        <h1>Edit</h1>
            <label className="formLabel">Character:</label>
            <select>
                <option>{character.name}</option>
            </select>
            <br/>
            <label className="formLabel">ID: </label>
            <input className="formInput" type="text" id="idCamp"/>
            <br/>
            <label className="formLabel">Name: </label>
            <input className="formInput" type="text" id="nameCamp"/>
            <br/>
            <label className="formLabel">Stand: </label>
            <input className="formInput" type="text" id="standCamp"/>
            <br/>
            <label className="formLabel">Musical Reference: </label>
            <input className="formInput" type="text" id="musicalRefCamp"/>
            <br/>
            <label className="formLabel">Age: </label>
            <input className="formInput" type="text" id="ageCamp"/>
            <br/>
            <label className="formLabel">Nationality: </label>
            <input className="formInput" type="text" id="nationalityCamp"/>
            <br/>
            <label className="formLabel">Debut: </label>
            <input className="formInput" type="text" id="debutCamp"/>
            <br/>
            <button type="button" className="btn btn-dark">Edit</button>
        </>
    )
}

export default PutForm