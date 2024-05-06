document.addEventListener('DOMContentLoaded', function() {
    const inputTask = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText = inputTask.ariaValueMax.trim();
        if(taskText !== ''){
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            deleteButton.addEventListener('click', function(){
                listItem.remove();
            });
            listItem.appendChild(deleteButton);
            listItem.appendChild(listItem);

            inputTask.value = '';
        }else{
            alert('Por favor, introduce una tarea valida');

            inputTask.addEventListener('keypress', function(event){
                if(event.key === 'Enter'){
                    addTask();
                }
            });
        }
    }
});