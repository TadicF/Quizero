// Main UI

const mainElements = {
    selectorContainer: document.querySelector('.selectorContainer'),
    customBtn: document.querySelector('.customQuestions'),
    defaultBtn: document.querySelector('.defaultQuestions'),
    customContainer: document.querySelector('.customContainer'),
    savedBtn: document.querySelector('.savedQuizzes'),
    newBtn: document.querySelector('.newQuiz'),
    defaultContainer: document.querySelector('.defaultContainer'),
    savedContainer: document.querySelector('.savedContainer'),
    newContainer: document.querySelector('.newContainer'),
    goBackBtn: document.querySelector('.backContainer'),
}

function initMainNav() {
    let path = [];
    let currPage = 0;
    let currentContainer = mainElements.selectorContainer;
    path.push(currentContainer)

    mainElements.customBtn.addEventListener('click', () => {
        currentContainer.style.display = 'none';
        mainElements.customContainer.style.display = 'grid';
        currentContainer = mainElements.customContainer;
        mainElements.goBackBtn.style.display = 'flex';
        path.push(currentContainer);
        currPage++;
    })

    mainElements.defaultBtn.addEventListener('click', () => {
        currentContainer.style.display = 'none';
        mainElements.defaultContainer.style.display = 'grid';
        currentContainer = mainElements.defaultContainer;
        mainElements.goBackBtn.style.display = 'flex';
        path.push(currentContainer);
        currPage++;
    })

    mainElements.savedBtn.addEventListener('click', () => {
        currentContainer.style.display = 'none';
        mainElements.savedContainer.style.display = 'grid';
        currentContainer = mainElements.savedContainer;
        path.push(currentContainer);
        currPage++;
    })

    mainElements.newBtn.addEventListener('click', () => {
        currentContainer.style.display = 'none';
        mainElements.newContainer.style.display = 'grid';
        currentContainer = mainElements.newContainer;
        path.push(currentContainer);
        currPage++;
    })

    mainElements.goBackBtn.addEventListener('click', () => {
        let curr = path[currPage];
        let prev = path[currPage - 1];
        currentContainer = prev;
        path.pop();
        curr.style.display = 'none'
        if(currPage === 1) {
            prev.style.display = 'flex'
            mainElements.goBackBtn.style.display = 'none';
        } else {
            prev.style.display = 'grid';
        }
        currPage--;
        console.log(path);
        console.log(currPage);
    })
}

export { initMainNav }