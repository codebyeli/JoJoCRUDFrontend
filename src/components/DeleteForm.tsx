function DeleteForm() {

    // Might change this for a combobox with a button to delete some registeries

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
        <h1>Delete</h1>
        <form>
            <label className="formLabel">Character:</label>
            <select>
                <option>{character.name}</option>
            </select>
            <br/>
            <button className="groupButton">Delete</button>
        </form>
        </>
    )
}

export default DeleteForm