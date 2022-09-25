const charButtonList = document.querySelector(".interaction-list");

const processClick = async (btnData) => {

}

if (charButtonList) {
    charButtonList.onclick = function (event) {
      let target = event.target;
  
      if (target.id != "character-btn") return;
  
      processClick(target);
    };
  }