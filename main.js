const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postContainer = document.getElementById('container');

for (let index = 0; index < posts.length; index++) {
    generatePost(index); 
}

const likeButtons = document.querySelectorAll('.js-like-button');

for (let index = 0; index < likeButtons.length; index++) {
    likeButtons[index].addEventListener('click', likeButtonControl);   
}

function likeButtonControl(e) {
    e.preventDefault();
    const elementId = this.getAttribute('data-postid');
    const likeContainer = document.getElementById('like-counter-' + elementId);

    if (this.classList.contains('like-button--liked')) {
        this.classList.remove('like-button--liked');
        likesCounterControl(-1, likeContainer);
    } else {
        this.classList.add('like-button--liked');
        likesCounterControl(1, likeContainer);
    }
}

function likesCounterControl(number, domElement) {
    domElement.innerHTML = parseInt(domElement.innerHTML) + number;
}

function generatePost(index) {   
    const element = `    
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${generateProfilePic(index)}                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[index].author.name}</div>
                        <div class="post-meta__time">${itaDateFormat(posts[index].created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${posts[index].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${posts[index].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[index].id}" class="js-likes-counter">${posts[index].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    postContainer.insertAdjacentHTML('beforeend', element);
}

function generateProfilePic(index) {
    console.log(posts[index].author.image);
    if (posts[index].author.image) {
        return  `<img class="profile-pic" src="${posts[index].author.image}" alt="${posts[index].author.name}">`; 
    } else {
        const arrayName = posts[index].author.name.split(' ');
        let nameInitial = ''
        for (let j = 0; j < arrayName.length; j++) {
            nameInitial += arrayName[j][0];
        }
        return `<div class="profile-pic-default"><span>${nameInitial}</span></div> `;
    }
}

function itaDateFormat(dateString) {
    const tempArray =dateString.split('-');
    return tempArray[2] + '-' + tempArray[1] + '-' + tempArray[0];
}