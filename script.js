/**
 * 
 * @param {*} fn  function to be debounced
 * @param {*} delay  delay in ms
 * @returns  debounced function,which will be called after delay,
 * if no new call is made in between the delay time the
 *  setTimout will be cleared and the function will be called
 */
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


/**
 * This is actuall function which is debounced
 * performSearch function will be called after 300ms of no new input
 * @param {*} input  input from the user
 * 
 */

async function performSearch(input) {
 try {
    const resp= await fetch('https://dummyjson.com/products/search?q='+input)
    const {products} = await resp.json()
    console.log(products)
    const div=document.createElement('div')
    products.map((item)=>{
        const p=document.createElement('p')
        p.innerHTML=item.title
        div.appendChild(p)
    })
    document.getElementById('searchResults').innerHTML=div.innerHTML;
    console.log(products)
 } catch (error) {
        console.log(error)
    
 }

}


// for non debounced search

async function performSearchForNDB(input) {
  try {
     const resp= await fetch('https://dummyjson.com/products/search?q='+input)
     const {products} = await resp.json()
     console.log(products)
     const div=document.createElement('div')
     products.map((item)=>{
         const p=document.createElement('p')
         p.innerHTML=item.title
         div.appendChild(p)
     })
     document.getElementById('searchResultsforNDB').innerHTML=div.innerHTML;
     console.log(products)
  } catch (error) {
         console.log(error)
     
  }
 
 }

const debouncedSearch = debounce(performSearch, 300);

document.getElementById("searchInput").addEventListener("input", (event) => {
  debouncedSearch(event.target.value);
});


// searchWithoutDebounce 
document.getElementById("searchInputWithoutdb").addEventListener("input", (event) => {
    performSearchForNDB(event.target.value);
})