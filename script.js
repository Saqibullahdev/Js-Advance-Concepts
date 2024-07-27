/**
 * 
 * @param {*} fn  function to be debounced
 * @param {*} delay  delay in ms
 * @returns  debounced function,which will be called after delay,if no new call is made in between the delay time the
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
    const data = await resp.json()
    console.log(data)
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
    performSearch(event.target.value);
})