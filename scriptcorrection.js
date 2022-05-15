var clubImages = [];
var selectedImages = [];

const allImages = document.querySelectorAll("img");

const empty = selectedImages => selectedImages.length = 0; // libérer la place dans le tableau selectedImages


function fillImages(){

    clubImages.push("https://cdn.resfu.com/scripts/tmp_images/goal_raheem-sterling-manchester-city-2021-22_raheem_sterling_manchester_city_2021_22_6hetpwiq7vsr1svxka37vxe37.jpg?size=1000x&ext=jpeg")
    clubImages.push("https://static.onzemondial.com/8/2022/02/photo_article/759436/298517/1200-L-algrie-manchester-united-grande-nouvelle-annonce-pour-riyad-mahrez.jpg")
    clubImages.push("https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1339x387:1341x385)/origin-imgresizer.eurosport.com/2017/05/13/2082060-43636410-2560-1440.jpg")
    clubImages.push("https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1393x380:1395x378)/origin-imgresizer.eurosport.com/2021/11/23/3258841-66694088-2560-1440.jpg")
    clubImages.push("https://assets-fr.imgfoot.com/media/cache/642x382/ederson.jpg")
    clubImages.push("https://assets-fr.imgfoot.com/kevin-de-bruyne-manchester-city.jpg")

    clubImages = clubImages.concat(clubImages);

    clubImages.push("")
}



function displayImages(){

    //Pour chaque image
    const divcontainer = document.querySelector("#mainContainer");

    clubImages.forEach(i => {
        
        const newDiv = document.createElement("div");

        const newImage = document.createElement("img");
        newImage.src = i;
        
        //attacher l'image au div

        newDiv.appendChild(newImage);

        //attacher le div au container

        divcontainer.appendChild(newDiv)
    });

}

// permet de cacher tout les objets image
function hideImages(){

    const allImages = document.querySelectorAll("img");

    allImages.forEach(i => {

        i.className = "back";
        
    });


}
// méthode qui cache seulement les cartes mauvaises lors de la vérification
function hideWrongImages(){

    selectedImages[0].className = "back";
    selectedImages[1].className = "back";

}
//retirer la classe back donc retourner la carte
function toggle(){

    this.classList.toggle("back");
}

//ajouter un evenement toggle aux images
function addEvent(){


    const allImages = document.querySelectorAll("img");

    allImages.forEach(i => {

        i.addEventListener('click', toggle)
       
    });



}
//mettre les images cliqués dans un tableau pour pouvoir les comparés 
function imagePush(){

        const ig = document.querySelectorAll("img");
        console.log(ig)
        ig.forEach(i =>  {

            i.addEventListener("click" , function() {
                selectedImages.push(i)
                console.log(selectedImages)
                if(selectedImages.length == 2 ){

                    verification();
                }
            }) 
        });
    
}
// on vérifie si les cartes possède le meme url 

function verification(){

    

    if(selectedImages[0].src == selectedImages[1].src){

        empty(selectedImages);

    }
    else
    {

        hideWrongImages();
        empty(selectedImages);
        console.log(selectedImages)
    }

}


fillImages();

displayImages();

addEvent();

setTimeout(hideImages,5000);

imagePush();


