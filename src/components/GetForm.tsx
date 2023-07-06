
function GetForm() {


    const character =
        {
            id: 1,
            name : "Jonathan Joestar",
            stand : "Hermit Purple",
            musicalRef : "?",
            age : 19,
            nationality : "British",
            debut : "Part 1"
        }

    return(
        <div className="container">
            <div className="m-0 vh-100 row justify-content-center align-items-center">
                <div className="col-auto bg-dark text-white">
                    <div className="separator">
        <h1>Show</h1>
        <form>
            <label className="formLabel">Character:</label>
            <br />
            <select>
                <option>{character.name}</option>
            </select>
            <br/>
            <label className="formLabel">Name: </label>
            <label className="formLabel">{character.name}</label>
            <br/>
            <label className="formLabel">Stand: </label>
            <label className="formLabel">{character.stand}</label>
            <br/>
            <label className="formLabel">Musical Reference: </label>
            <label className="formLabel">{character.musicalRef}</label>
            <br/>
            <label className="formLabel">Age: </label>
            <label className="formLabel">{character.age}</label>
            <br/>
            <label className="formLabel">Nationality: </label>
            <label className="formLabel">{character.nationality}</label>
            <br/>
            <label className="formLabel">Debut: </label>
            <label className="formLabel">{character.debut}</label>
            <br/>
            <div className="col d-flex justify-content-end align-items-end">
            <button type="button" className="btn btn-dark mt-3">Show</button>
            </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default GetForm