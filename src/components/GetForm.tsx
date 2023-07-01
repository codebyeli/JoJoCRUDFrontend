function GetForm() {

    // This might be changed to just labels instead of inputs with the only camp being ID to select a specific character

    const character = {
        id: 1,
        name : "Jonathan Joestar",
        stand : "Hermit Purple",
        musicalRef : "?",
        age : 19,
        nationality : "British",
        debut : "Part 1"
    }

    return(
        <>
        <h1>Show</h1>
        <form>
            <label className="formLabel">Character:</label>
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
            <button type="button" className="btn btn-dark">Show</button>
        </form>
        </>
    )
}

export default GetForm