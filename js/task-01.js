const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:' , itemEl.length);
itemEl.forEach(element => {
    const titleEl = element.firstElementChild;
    console.log('Category:' , titleEl.textContent);
    const innerLiEl = element.lastElementChild.children;
    console.log('Elements:' , innerLiEl.length);
});