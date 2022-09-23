const interactionList = document.querySelector('.interaction-list')

console.log(interactionList)

const processInteraction = async (btnData) => {

    console.log(btnData.attributes)
    
    const location = btnData.getAttribute('location_patch')
    const itemPost = btnData.getAttribute('item_post')

    if (location) {
        const response = await fetch('/api/characters/1', {
            method: 'PATCH',
            body: JSON.stringify({ "location_id" : location }),
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(response) 
          if (response.ok) {
            document.location.reload()
          } else {
            alert('Failed to change locations.');
          }
        }
    
    if (itemPost) {

    }

}

// when you click a button, it takes you to a patch route that, based on the interaction attached to the button, changes the character's location


interactionList.onclick = function(event) {
    let target = event.target;
  
    if (target.className!= 'interactions-btn') return;

    processInteraction(target);
  };