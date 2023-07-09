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
        <div className="container">
            <div className="m-0 vh-100 row justify-content-center align-items-center">
                <div className="col-auto rounded bg-dark text-white">
                    <div className="separator">
        <h1>Edit</h1>
            <label className="formLabel">Character:</label>
            <br />
            <select>
                <option>{character.name}</option>
            </select>
            <br/>
            <label className="formLabel">ID: </label>
            <br />
            <input className="formInput" type="text" id="idCamp" value={character.id}/>
            <br/>
            <label className="formLabel">Name: </label>
            <br />
            <input className="formInput" type="text" value={character.name} id="nameCamp"/>
            <br/>
            <label className="formLabel">Stand: </label>
            <br />
            <input className="formInput" type="text" value={character.stand} id="standCamp"/>
            <br/>
            <label className="formLabel">Musical Reference: </label>
            <br />
            <input className="formInput" type="text" value={character.musicalRef} id="musicalRefCamp"/>
            <br/>
            <label className="formLabel">Age: </label>
            <br />
            <input className="formInput" type="text" value={character.age} id="ageCamp"/>
            <br/>
            <label className="formLabel">Nationality: </label>
            <br />
            <input className="formInput" type="text" value={character.nationality} id="nationalityCamp"/>
            <br/>
            <label className="formLabel">Debut: </label>
            <br />
            <input className="formInput" type="text" value={character.debut} id="debutCamp"/>
            <br/>
            <div className="col d-flex justify-content-end align-items-end">
            <button type="button" className="btn btn-dark mt-3">Edit</button>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default PutForm