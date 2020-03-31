// Imagens 
const $allImages = document.querySelectorAll('.filtro__img')
const $vegetablesClass = document.querySelectorAll('.verduras-box');
const $fruitClass = document.querySelectorAll('.frutas-box');
const $legumesClass = document.querySelectorAll('.legumes-box');
// Buttons
const $btnAllItems = document.querySelector('[data-btn="todos"]');
const $btnFruit = document.querySelector('[data-btn="frutas"]');
const $btnVegetables = document.querySelector('[data-btn="verduras"]');
const $btnLegumes = document.querySelector('[data-btn="legumes"]');
const $allButtons = document.querySelectorAll('[data-js="btn"]');

function applyClassToImages(allItemsRemove){
    allItemsRemove.forEach((item) => {
        if(item.classList.contains('filtro-show')){
            item.classList.remove('filtro-show');
            item.classList.add('filtro-hide');
        } else {
            item.classList.add('filtro-hide');
        }
    });
}

function removeClassToImages(itemsImages){
    itemsImages.forEach((item) => {
        if(item.classList.contains('filtro-hide')){
            item.classList.remove('filtro-hide');
            item.classList.add('filtro-show');
        }
    });
}

function applyClassToImagesAll(itemsImages){
    itemsImages.forEach((item) => {
        if(item.classList.contains('filtro-hide')){
            item.classList.remove('filtro-hide');
            item.classList.add('filtro-show');
        }
    });
}

function applyClassToButtons(itemsButtons, buttonAble){
    itemsButtons.forEach((button) => {
        if(button.classList.contains('btn-able')){
            button.classList.remove('btn-able');
            button.classList.add('btn-disabled');
            buttonAble.classList.add('btn-able');
        }
    });
}

function applyEventToButtons(buttonActual, itemsAdd, itemsRemoveOne, itemsRemoveTwo){
    const allItemsRemove = [...itemsRemoveOne, ...itemsRemoveTwo];
    buttonActual.addEventListener('click', function(){ 
        applyClassToImages(allItemsRemove);
        removeClassToImages(itemsAdd);
        applyClassToButtons($allButtons, buttonActual);
    }, false);
}

applyEventToButtons($btnFruit, $fruitClass, $vegetablesClass, $legumesClass);
applyEventToButtons($btnVegetables, $vegetablesClass, $fruitClass, $legumesClass);
applyEventToButtons($btnLegumes, $legumesClass, $fruitClass, $vegetablesClass);

$btnAllItems.addEventListener('click', function(){
    applyClassToButtons($allButtons, $btnAllItems);
    applyClassToImagesAll($allImages);
});
