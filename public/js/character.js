const createCharacter = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#character-name').value.trim();
    const id= document.querySelector('.character-form').getAttribute("user_id");

    console.group("LOOK HERE, A NAME! " + name)
    console.log(id)
  
    if (name) {
      const response = await fetch(`/api/characters/${id}`, {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response) 
      if (response.ok) {
        const responseTwo = await fetch(`/char/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (responseTwo.ok) {
          document.location.replace(`/char/${id}`)
      } else {
        alert('Failed to sign up.');
      }
    }
  }};
  
  document
    .querySelector('.character-form')
    .addEventListener('submit', createCharacter);