const createCharacter = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#character-name').value.trim();

    console.group("LOOK HERE, A NAME! " + name)
  
    if (name) {
      const response = await fetch('/api/characters', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response) 
      if (response.ok) {
        document.location.replace('/game');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.character-form')
    .addEventListener('submit', createCharacter);