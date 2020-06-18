console.log('Client side js')

// fetch('https://puzzle.mead.io/puzzle').then( (response) => {
//     response.json().then( (data) => {
//         console.log(data)
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



//whenever the form is submitted, this function will get called
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()   //avoid browser refresh, when form is submitted
    //instead of 'event' we can also use 'e'

    const location  = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''


    //fetch function takes the data from the url. we dont see the url getting open. It do so in background.
    // .then function means when we reach the url then we have to apply this function
    // response.json returns the json data on that site and then the data is passed to the function in 'then' part
    
    fetch('http://localhost:3000/weather?address='+ location).then( (response) => {

        response.json().then( (data) => {

            if(data.error)
            {
                messageOne.textContent = data.error
            } 
            else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
            
        })  
    })
    
})
