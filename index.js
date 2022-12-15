function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
for (let elm of elements) {
    observer.observe(elm);
}

function closeMobileCollapse(entry) {
    let mobileCollapse = document.querySelector('#mobile-collapse');
    mobileCollapse.classList.remove('show');
}
let closeMobileCollapseButton = document.querySelector('#close-mobile-collapse');
closeMobileCollapseButton.onclick = closeMobileCollapse;