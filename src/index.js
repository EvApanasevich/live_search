import insertMark from './insert-mark';

// get input element
let inputSearch = document.getElementById('input-search-id');
// add listener
inputSearch.addEventListener("input", textSearch)

// the function that is passed to the listener
function textSearch() {
   // get input value
   // "this" is an input because it is called on behalf of the input when will the listener work
   let val = this.value.trim().toLowerCase();
   // get all items "p" in which we will search
   let items = document.querySelectorAll('.content p');

   if (val != '') {
      // 
      items.forEach((el) => {
         let regExp = new RegExp(val, 'g');
         let arrSearchResult = Array.from(el.innerText.toLowerCase().matchAll(regExp));

         if (!arrSearchResult.length) {
            el.classList.add('hide');
            el.innerHTML = el.innerText;
         } else {
            el.classList.remove('hide');
            el.innerHTML = insertMark(arrSearchResult, val.length);
         };
      });
   } else {
      items.forEach((el) => {
         el.classList.remove('hide');
         el.innerHTML = el.innerText;
      });
   };
};

