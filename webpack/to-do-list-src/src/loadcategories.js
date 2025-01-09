export function loadCategories() {

  const DEFAULT_CATEGORY = "General"
  const categories = []
  const localData = JSON.parse(localStorage.getItem("todo")) || []
  var i = 0

  if (localData.length <= 0) {
    categories[i] = DEFAULT_CATEGORY
  } else {
    localData.forEach((data) => {
      if (categories.indexOf(data.category) === -1) {
        categories[i] = data.category
        i++
      }
    })
  }    

  return categories
  
}