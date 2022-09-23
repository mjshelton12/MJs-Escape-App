const interactionList = document.querySelector('.interaction-list')

console.log(interactionList)

const processInteraction = async (btnData) => {

    console.log(btnData.attributes)
    
    const change = btnData.getAttribute('change')
    const changeClass = btnData.getAttribute('class')

    console.log("LOOK, A CLASS! " + change)

    if (changeClass === "location") {
        const response = await fetch('/api/characters/1', {
            method: 'PATCH',
            body: JSON.stringify({ "location_id" : change }),
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(response) 
          if (response.ok) {
            document.location.reload()
          } else {
            alert('Failed to change locations.');
          }
        }
    
    if (changeClass === "item") {
      const response = await fetch('/api/inventories', {
        method: 'POST',
        body: JSON.stringify({ change }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response) 
      if (response.ok) {
        document.location.reload()
      } else {
        alert('Failed to pick up item.');
      }
    }

    else {
      return;
    }
}

// when you click a button, it takes you to a patch route that, based on the interaction attached to the button, changes the character's location


interactionList.onclick = function(event) {
    let target = event.target;

    console.log("Hi!")
  
    if (target.id!= 'interactions-btn') return;

    console.log("Honor")

    processInteraction(target);
  };