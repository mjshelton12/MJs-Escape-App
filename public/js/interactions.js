const interactionList = document.querySelector(".interaction-list");

const processInteraction = async (btnData) => {

  const change = btnData.getAttribute("change");
  const charID = interactionList.getAttribute("charID")
  const changeClass = btnData.getAttribute("class");

  if (changeClass === "location") {
    const response = await fetch(`/api/characters/${charID}`, {
      method: "PATCH",
      body: JSON.stringify({ location_id: change }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to change locations.");
    }
  }

  if (changeClass === "item") {
    const response = await fetch(`/api/inventories/${charID}`, {
      method: "POST",
      body: JSON.stringify({ change }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to pick up item.");
    }
  }

  if (changeClass === "win?") {
    const response = await fetch(`/api/inventories/${charID}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/end");
    } else {
      alert("Nice try, but you can't leave.");
    }
  } else {
    return;
  }
};


// console.log("hello")
if(interactionList) {
  interactionList.addEventListener("click", function (event) {
    let target = event.target;
    if (target.id != "interactions-btn") return;
  
    processInteraction(target);
  })
}




