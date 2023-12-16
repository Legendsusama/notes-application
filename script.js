


const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('button');


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();



createBtn.addEventListener('click', ()=>{

    const createDiv = document.createElement('div');
    createDiv.className = 'notes';
    createDiv.innerHTML = `

        <p contenteditable="true"></p>
        <div class="delete-icon">
            <img id='delete-img' src="images/delete.png">
        </div>

    `;

    notesContainer.appendChild(createDiv);

})

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


notesContainer.addEventListener('click', (event)=>{


    if(event.target.classList.contains('delete-icon')){
        event.target.parentElement.remove();
        updateStorage();

    }else if(event.target.id === 'delete-img'){
        event.target.parentElement.parentElement.remove();
        updateStorage();


    }else if(event.target.tagName === 'P'){
        console.log('p is clicked')
        const notes = document.querySelectorAll('.notes');
        notes.forEach(note =>{

            // As you know update Storage is a function
            note.onkeyup = updateStorage;


        })

    }
    

})


