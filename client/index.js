let postForm = document.getElementById("post-form");
let putForm = document.getElementById("put-form");
let deleteForm = document.getElementById("delete-form");
let getButton = document.getElementById("get-button");
let postNameInput = document.getElementById("post-name");
let postPowerInput = document.getElementById("post-power");
let putNameInput = document.getElementById("put-name");
let deleteNameInput = document.getElementById("delete-name");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const maBod = {
    name: postNameInput.value,
    power: +postPowerInput.value
  }

  axios
    .post('http://localhost:5502/person', maBod)
    .then((result) => {
      alert('user added')
      console.log(result.data)
    })
    .catch(() => {
      console.log('backend did not work I guess')
    })
})

function getClickHandler() {
  axios.get("http://localhost:5502/people").then((result) => {
    console.log(result.data);
  });
}

getButton.addEventListener("click", getClickHandler);

putForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = putNameInput.value;

    axios.put('http://localhost:5502/person?name=' + name)
    .then((result) => {
        alert(name + '\'s power increased by 100')
        console.log(result.data)
    })
    .catch((err) => {
        console.log('catch fired')
        alert('something went wrong')
    })
});
deleteForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let name = deleteNameInput.value

    axios.delete('http://localhost:5502/person/jimmy'+ name)
    .then((result) => {
        alert('User with name' + name + 'is no longer in database')
        console.log(result.data)
    })
})

