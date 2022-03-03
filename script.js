document.addEventListener('DOMContentLoaded', main)

async function main(){
    
    let url = "https://randomuser.me/api/";
    let szotar = (await olvaso_fetch(url)).results[0];
    
    let aktdiv = document.querySelector('#pfp');
    aktdiv.src = szotar.picture.large;
    
    aktdiv = document.querySelector('#name');
    aktdiv.innerHTML=szotar.name.title + " " + szotar.name.first + " " + szotar.name.last;
    
    aktdiv = document.querySelector('#age');
    aktdiv.innerHTML="(" + szotar.dob.age + ")";

    aktdiv = document.querySelector('#dob');
    aktdiv.innerHTML=szotar.dob.date;
    
    aktdiv = document.querySelector('#email');
    aktdiv.innerHTML=szotar.email;
    
    aktdiv = document.querySelector('#bio');
    //aktdiv.innerHTML=szotar;
    
    aktdiv = document.querySelector('#mobile');
    aktdiv.innerHTML=szotar.cell;
    
    aktdiv = document.querySelector('#nat');
    aktdiv.innerHTML='<img src="https://flagcdn.com/h24/' + szotar.nat.toLowerCase() + '.png" alt="Flag"></img>';
    


}

async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}


/*
{
    "results":
    [
        {
            "gender":"male",
            "name":
            {
                "title":"Mr",
                "first":"Idelso",
                "last":"Porto"
            },
            "location":
            {
                "street":
                {
                    "number":379,
                    "name":"Rua São Jorge "
                },
                "city":"Maracanaú",
                "state":"Rio Grande do Norte",
                "country":"Brazil",
                "postcode":21308,
                "coordinates":
                {
                    "latitude":"-71.9609",
                    "longitude":"-78.9211"
                },
                "timezone":
                {
                    "offset":"+1:00",
                    "description":"Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email":"idelso.porto@example.com",
            "login":
            {
                "uuid":"7c70b8b2-863f-43f8-8f93-fd5eea2741a4",
                "username":"organicelephant984",
                "password":"washington",
                "salt":"IBn9n8HH",
                "md5":"0161db6bad9026e4e3fa687df583b7f9",
                "sha1":"4de7e7ddb28ac1406f4a4a00e1a061d050d66a6f",
                "sha256":"4cbbf06ab146b7f6a168c11073953fb5df94335fd7e99c68b66d9e588c3a1bda"
            },
            "dob":
            {
                "date":"1991-09-17T02:32:21.423Z",
                "age":31
            },
            "registered":
            {
                "date":"2008-03-20T01:31:20.294Z",
                "age":14
            },
            "phone":"(86) 1421-6393",
            "cell":"(53) 2356-2743",
            "id":
            {
                "name":"",
                "value":null
            },
            "picture":
            {
                "large":"https://randomuser.me/api/portraits/men/88.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/88.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/88.jpg"
            },
            "nat":"BR"
        }
    ],
    "info":
    {
        "seed":"4ba5b322ddeef4ac",
        "results":1,
        "page":1,
        "version":"1.3"
    }
}
*/