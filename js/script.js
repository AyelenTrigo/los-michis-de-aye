let numberOfImages= 10

let imagesDisplay
let imagesDisplayInnerHtml

let buttonDisplay
let buttonDisplayInnerHtml

let sliderButtons
let sliderImages

let autoPlay= true
let counter = 0

window.onload = function(){
    startSlider()

    for(let i = 1; i <= numberOfImages; i++) {
        console.log(i)
        
        imagesDisplayInnerHtml += `<li>
                                        <a href="*" class="hidden slider-img"><img src="../assets/img/carrousel/${i}.png"/></a>
                                  </li>`

        buttonDisplayInnerHtml += `<input type="radio" class="slider-btn" name="slider">`
    }

    imagesDisplay.innerHTML = imagesDisplayInnerHtml
    buttonDisplay.innerHTML = buttonDisplayInnerHtml

    sliderButtons = document.querySelectorAll('.slider-btn')
    sliderImages = document.querySelectorAll('.slider-img')
    sliderImages[counter].classList.remove("invisible")
    sliderButtons[counter].checked = true

    autoSlider()

    sliderButtons.forEach((button, index) => {
        button.addEventListener("click", displayImgListener)
        button.setAttribute("id", index.toString())
    })


}
function startSlider(){
    imagesDisplay = document.querySelector(".images-display")
    imagesDisplayInnerHtml = imagesDisplay.innerHTML

    buttonDisplay = document.querySelector(".carrousel-dots")
    buttonDisplayInnerHtml = buttonDisplay.innerHTML
}

function displayImg(index) {
    sliderImages.forEach(img => {
        img.classList.add("hidden")
    })
    sliderImages[index].classList.remove("hidden")
    sliderButtons[index].checked = true
}

function autoSlider() {
    setInterval(function() {
        if(autoPlay) {
            counter = (counter + 1) % numberOfImages
            displayImg(counter)
        }
    }, 4000)
}

function displayImgListener(e) {
    autoPlay = false
    let clickedButton = e.target
    displayImg(Number(clickedButton.id))
}