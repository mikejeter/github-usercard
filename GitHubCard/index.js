/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

followersArray.push('https://api.github.com/users/' + 'mikejeter');
followersArray.push('https://api.github.com/users/' + 'tetondan');
followersArray.push('https://api.github.com/users/' + 'dustinmyers');
followersArray.push('https://api.github.com/users/' + 'justsml');
followersArray.push('https://api.github.com/users/' + 'luishrd');
followersArray.push('https://api.github.com/users/' + 'bigknell');
followersArray.push('https://api.github.com/users/' + 'Shadowborn');

followersArray.forEach((element) => {

  axios.get(element)
  .then(result => {
    const cards = document.querySelector('.cards');
    const card = githubCard(result);

    cards.appendChild(card);
  })

  .catch ((err) => {
    console.log(err);
  });
});


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function githubCard(users) {
  const newCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardUser = document.createElement('div');
  const uName = document.createElement('h3');
  const usersName = document.createElement('p');
  const uLocation = document.createElement('p');
  const uProfile = document.createElement('p');
  const gitAddress = document.createElement('a');
  const uFollowers = document.createElement('p');
  const uFollowing = document.createElement('p');
  const uBio = document.createElement('p');


  
  newCard.appendChild(userImg);
  newCard.appendChild(cardUser);
  newCard.appendChild(uName);
  newCard.appendChild(usersName);
  newCard.appendChild(uLocation);
  newCard.appendChild(uProfile);
  newCard.appendChild(gitAddress);
  newCard.appendChild(uFollowers);
  newCard.appendChild(uFollowing);
  newCard.appendChild(uBio);

  newCard.classList.add('card');
  userImg.classList.add('img');
  cardUser.classList.add('card-info');
  uName.classList.add('name');
  usersName.classList.add('username');
  uLocation.classList.add('p');
  uProfile.classList.add('p');
  uFollowers.classList.add('p');
  uFollowing.classList.add('p');
  uBio.classList.add('p');

  userImg.src = users.data.avatar_url;
  uName.textContent = users.data.name;
  usersName.textContent = users.data.login;
  uLocation.textContent = users.data.location;
  uProfile.textContent = 'GitHub Link';
  gitAddress.href = users.data.html_url;
  uFollowers.textContent = users.data.followers;
  uFollowing.textContent = users.data.following;
  uBio.textContent = users.data.bio;

  return newCard;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/