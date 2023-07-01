function PostForm() {

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
        <h1>Create</h1>
        <form>
            <label className="formLabel">ID: </label>
            <input type="text" id="idCamp"/>
            <br/>
            <label className="formLabel">Name: </label>
            <input type="text" id="nameCamp"/>
            <br/>
            <label className="formLabel">Stand: </label>
            <input type="text" id="standCamp"/>
            <br/>
            <label className="formLabel">Musical Reference: </label>
            <input type="text" id="musicalRefCamp"/>
            <br/>
            <label className="formLabel">Age: </label>
            <input type="text" id="ageCamp"/>
            <br/>
            <label className="formLabel">Nationality: </label>
            <input type="text" id="nationalityCamp"/>
            <br/>
            <label className="formLabel">Debut: </label>
            <input type="text" id="debutCamp"/>
            <br/>
            <button type="button" className="btn btn-dark">Create</button>
        </form>
        </>
    )
}

export default PostForm