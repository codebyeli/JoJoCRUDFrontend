function DeleteForm() {

    // Might change this for a combobox with a button to delete some registeries

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
        <h1>Delete</h1>
        <form>
            <label className="formLabel">Character:</label>
            <select>
                <option>{character.name}</option>
            </select>
            <br/>
            <button type="button" className="btn btn-dark">Delete</button>
        </form>
        </>
    )
}

export default DeleteForm