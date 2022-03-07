document.addEventListener('DOMContentLoaded', main)
let pictureContent = '';
let friendsContent = '';
let picsActive = false;

async function main(){
    let szotar = (await olvaso_fetch('https://randomuser.me/api/')).results[0];
    
    let aktdiv = document.querySelector('#pfpdiv');
    aktdiv.innerHTML = '<img src="' + szotar.picture.large + '" alt="pfp" id="pfp" />';
    
    aktdiv = document.querySelector('#name');
    aktdiv.innerHTML = szotar.name.title + " " + szotar.name.first + " " + szotar.name.last;
    
    aktdiv = document.querySelector('#age');
    aktdiv.innerHTML = "(" + szotar.dob.age + ")";
    
    aktdiv = document.querySelector('#dob');
    aktdiv.innerHTML = new Date(szotar.dob.date).toLocaleDateString();
    
    aktdiv = document.querySelector('#email');
    aktdiv.innerHTML='email: <a href="mailto:' + szotar.email + '" class="mail">' + szotar.email + '</a>';
    
    aktdiv = document.querySelector('#bio');
    aktdiv.innerHTML='I am ' + szotar.name.first + " " + szotar.name.last + ', a(n) ' + szotar.dob.age + ' years old ' + (szotar.gender == 'male' ? 'man' : 'lady') +
    ' from ' + szotar.location.city + ' in ' + szotar.location.state + ', ' + szotar.location.country + '.';
    
    aktdiv = document.querySelector('#mobile');
    aktdiv.innerHTML="mobile: " + szotar.cell;
    
    aktdiv = document.querySelector('#nat');
    aktdiv.innerHTML='<img src="https://flagcdn.com/h24/' + szotar.nat.toLowerCase() + '.png" alt="Flag"></img>';
    
    await generatePics();

    aktdiv = document.querySelector('#photos');
    aktdiv.innerHTML = '<a href="#">photos</a>';
    
    aktdiv = document.querySelector('#friends');
    aktdiv.innerHTML = '<a href="#">friends</a>';
    
    document.querySelector('#friends>a').addEventListener('click', generateFriends);
    document.querySelector('#photos>a').addEventListener('click', generatePics);
}

async function generateFriends(){
    picsActive = false;
    let content = document.querySelector('#content');
    if (friendsContent == '') {
        content.innerHTML = '<div class="flex-wrapped-all-center flex-row"> <img src="https://i.stack.imgur.com/MnyxU.gif" alt="Loading"></div>';

        let friends = '<div id="friendlist" class="flex-row flex-wrapped-all-center">';
        let friendNum = getRndInteger(4,35);

        for (let i = 0; i < friendNum; i++) {
            
            let candidate = (await olvaso_fetch('https://randomuser.me/api/')).results[0];
        
            friends += '<div class="friend flex-row">';
            
                friends += '<div>';
                friends += '<img src="' + candidate.picture.thumbnail + '" alt="Thumbnail"></img>';
                friends += '</div>';
    
                friends += '<div>';
                friends += candidate.name.first + " " + candidate.name.last;
                friends += '</div>';
    
                friends += '<div>';
                friends += '<a href="mailto:' + candidate.email + '" class="mail">' + candidate.email + '</a>';
                friends += '</div>';
            
            friends += '</div>';
        }
        friends += '</div>';
        friendsContent = friends;
    }
    if (!picsActive) {
        content.innerHTML = friendsContent;
    }
}

async function generatePics(){
    picsActive = true;
    let content = document.querySelector('#content');
    if (pictureContent == '') {
        content.innerHTML = '<div class="flex-wrapped-all-center flex-row"> <img src="https://i.stack.imgur.com/MnyxU.gif" alt="Loading"></div>';
        
        let pictures = '<div id="picturelist" class="flex-row flex-wrapped-all-center">';
        let picNum = getRndInteger(4,35);

        for (let i = 0; i < picNum; i++) {
            pictures +='<img src="' + (await fetch('https://picsum.photos/200')).url + '" alt="Picture"></img>';
        }

        pictures += '</div>';
        pictureContent = pictures;
    }
    content.innerHTML = pictureContent;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}