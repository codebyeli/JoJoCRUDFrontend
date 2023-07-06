import React from 'react'

function HelpPage() {
  return (
        <div className="container">
            <div className="m-0 vh-100 row justify-content-center align-items-center">
                <div className="col-auto bg-dark text-white">
                    <div className="separator">
                    <h1><img className="me-2" src="https://i.ibb.co/jWY439f/Giorno-Icon.png" alt="GiornoIcon" width={50} />JoJoCRUD</h1>
                    <br />
                    <p>Hi! This frontend app was done with the purpose of Creating, Reading, Updating and Deleting JoJo characters.
                    You can use the top menu to do each of the aformentioned actions. If you want to go back home you can click 
                    the logo and it will take you back to this help page!</p>
                    <h3>Show:</h3>
                    <p>In this screen you will just select a character from the dropdown menu and click the button "Show" 
                    to display the data of the selected character.</p>
                    <h3>Create:</h3>
                    <p>This screen is used to create new characters! Just fill up the form and click "Create" to add a new
                     character to the database.</p>
                    <h3>Edit:</h3>
                    <p>In this screen you will just select a character from the dropdown menu and their data will be displayed 
                    in the textboxes. After this you can change the data in the textboxes and click the button "Edit" save your
                     changes.</p>
                    <h3>Delete:</h3>
                    <p>This one is used to delete existing characters. Use the dropdown menu to select a character and click "Delete".</p>
        </div>
            </div>
                </div>
                    </div>
  )
}

export default HelpPage