// LAB INSTRUCTIONS
// 1. Add event listeners to capture form data and override a form's default behavior
// 2. Fetch data based on what the user types into that form
// 3. Display that data on the page


const init = () => {
  const inputForm = document.querySelector('form')
  // #1 -- add event listener -- params: type of event + cb fn
    inputForm.addEventListener('submit', (e) => {
        //override submit
        e.preventDefault()
        // access input value
        const input = document.querySelector('input#searchByID')
// #2 -- basic fetch
        // use back quotes for path
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json() )
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p')
// #3 -- display value
                title.innerText = data.title;
                summary.innerText = data.summary;
            })
        })
}

document.addEventListener('DOMContentLoaded', init);