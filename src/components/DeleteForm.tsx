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
        <div className="container">
            <div className="m-0 vh-100 row justify-content-center align-items-center">
                <div className="col-auto bg-dark text-white">
                    <div className="separator">
        <h1>Delete</h1>
        <form>
            <label className="formLabel">Character:</label>
            <br />
            <select>
                <option>{character.name}</option>
            </select>
            <br/>
            <div className="col d-flex justify-content-end align-items-end">
            <button type="button" className="btn btn-dark mt-3">Delete</button>
            </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default DeleteForm