let items = document.querySelectorAll('.item'); 
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let target = null;


items.forEach(item => {
    item.addEventListener('dragstart', function(e) {
        target = e.target;
    });
});


right.addEventListener('dragover', function(e) {
    e.preventDefault(); 
});

right.addEventListener('drop', function(e) {
    e.preventDefault(); 
    if (target) {
        right.appendChild(target); 
        target = null;
    }
});
left.addEventListener('dragover', function(e) {
    e.preventDefault();  
});


left.addEventListener('drop', function(e) {
    e.preventDefault(); 
    if (target) {
        left.appendChild(target); 
        target = null; 
    }
});
