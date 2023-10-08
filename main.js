const tabItems=document.querySelectorAll('.tab');
// console.log(tabItems);
const tabContentItems=document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();

    //Adding border to current tab
    this.classList.add('tab-border');
    
    // Adding the item on DOM
    console.log(this.id);
    const str = document.querySelector(`#${this.id}-content`);
    str.classList.add('show');

}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));
