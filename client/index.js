const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
let postForm = document.getElementById("post-form");
let putForm = document.getElementById("put-form");
let deleteForm = document.getElementById("delete-form");
let getButton = document.getElementById("get-button");
let postNameInput = document.getElementById("post-name");
let postPriorityInput = document.getElementById("post-priority");
let putNameInput = document.getElementById("put-name");
let deleteNameInput = document.getElementById("delete-name");

const getCompliment = () => {
  axios.get("http://localhost:5507/api/compliment/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};
const getFortune = () => {
  axios.get("http://localhost:5507/api/fortune/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    name: postNameInput.value,
    priority: +postPriorityInput.value
  }

  axios
    .post('http://localhost:5507/goal', data)
    .then((result) => {
      alert('Goal added')
      console.log(result.data)
    })
    .catch(() => {
      console.log('Sorry, we are experiencing a problem.')
    })
})

function getClickHandler() {
  axios.get("http://localhost:5507/goals").then((result) => {
    console.log(result.data);
  });
}

getButton.addEventListener("click", getClickHandler);

putForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = putNameInput.value;

    axios.put('http://localhost:5507/goal?name=' + name)
    .then((result) => {
        alert(name + ' is now number one priority')
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

    axios.delete('http://localhost:5507/goal/'+ name)
    .then((result) => {
        alert('Goal with name ' + name + ' is no longer in database')
        console.log(result.data)
    })
})

