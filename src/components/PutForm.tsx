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
        <div className="container-fluid">
        <div className="m-0 vh-100 row justify-content-center align-items-center">
            <div className="col-auto">
        <h1>Edit</h1>
            <label className="formLabel">Character:</label>
            <br />
            <select>
                <option>{character.name}</option>
            </select>
            <br/>
            <label className="formLabel">ID: </label>
            <br />
            <input className="formInput" type="text" id="idCamp"/>
            <br/>
            <label className="formLabel">Name: </label>
            <br />
            <input className="formInput" type="text" id="nameCamp"/>
            <br/>
            <label className="formLabel">Stand: </label>
            <br />
            <input className="formInput" type="text" id="standCamp"/>
            <br/>
            <label className="formLabel">Musical Reference: </label>
            <br />
            <input className="formInput" type="text" id="musicalRefCamp"/>
            <br/>
            <label className="formLabel">Age: </label>
            <br />
            <input className="formInput" type="text" id="ageCamp"/>
            <br/>
            <label className="formLabel">Nationality: </label>
            <br />
            <input className="formInput" type="text" id="nationalityCamp"/>
            <br/>
            <label className="formLabel">Debut: </label>
            <br />
            <input className="formInput" type="text" id="debutCamp"/>
            <br/>
            <button type="button" className="btn btn-dark">Edit</button>
            </div>
            </div>
            </div>
        </>
    )
}

export default PutForm