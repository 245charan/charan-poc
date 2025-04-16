// CSS Selector Specificity Section
const selectorButtons = document.querySelectorAll('.specificity-controls button');
const targetElement = document.querySelector('#id-selector p');
const currentStylesDisplay = document.getElementById('current-styles');
const idSelector = document.getElementById('id-selector');


// Display: Content Section
document.getElementById('display-toggle').addEventListener('click', function() {
    const contentChild = document.querySelector('.content-child');
    contentChild.classList.toggle('active');
    this.textContent = contentChild.classList.contains('active') ? 
        'Disable display: contents' : 'Enable display: contents';
});

// Will-Change Property Section
document.getElementById('animation-toggle').addEventListener('click', function() {
    const animationBoxes = document.querySelectorAll('.animation-box');
    animationBoxes.forEach(box => {
        box.classList.toggle('animation-active');
    });
    
    this.textContent = animationBoxes[0].classList.contains('animation-active') ? 
        'Stop Animation' : 'Start Animation';
});

// Initial styles display
updateStylesDisplay();

selectorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const selector = this.getAttribute('data-selector');
        
        // Reset all styles first
        if (selector === 'reset') {
            targetElement.className = 'highlight';
            targetElement.style.color = '';
            document.getElementById('id-selector').style.backgroundColor = '#f0f0f0';
            updateStylesDisplay();
            return;
        }
        
        // Switch styles based on selector
        switch(selector) {
            case 'p':
                targetElement.style.color = 'black';
                break;
            case '.highlight':
                targetElement.style.color = 'purple';
                break;
            case '#id-selector':
                document.getElementById('id-selector').style.backgroundColor = 'lightblue';
                break;
            case '#id-selector p':
                targetElement.style.color = 'blue';
                break;
            case 'p-important':
                targetElement.classList.add('p-important');
                break;
            case 'color-on':
                targetElement.style.color = 'green';
                break;
        }
        
        updateStylesDisplay();
    });
});


function updateStylesDisplay() {
    const computedStyle = window.getComputedStyle(targetElement);
    const parentComputedStyle = window.getComputedStyle(idSelector);
    
    let stylesText = `p: color: ${computedStyle.color}
.highlight: background-color: ${computedStyle.backgroundColor}
#id-selector: background-color: ${parentComputedStyle.backgroundColor}
#id-selector p: font-weight: ${computedStyle.fontWeight}
!important: ${targetElement.classList.contains('p-important') ? 'applied (color: red !important)' : 'not applied'}`;
    
    currentStylesDisplay.textContent = stylesText;
}

// Transform Section
document.getElementById('transform-toggle').addEventListener('click', function() {
    const boxes = document.querySelectorAll('#transform .box:not(.original)');
    boxes.forEach(box => {
        box.classList.toggle('active');
    });
});

// Masonry Layout Section
document.getElementById('masonry-toggle').addEventListener('click', function() {
    const masonryContainer = document.querySelector('.masonry-container');
    masonryContainer.classList.toggle('disabled');
    this.textContent = masonryContainer.classList.contains('disabled') ? 
        'Enable Masonry Layout' : 'Disable Masonry Layout';
});


