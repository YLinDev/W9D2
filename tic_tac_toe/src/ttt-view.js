

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard(el);
  }

  setupBoard(el) {
  
    // const board = this.board;
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.display = "block";
    // ul.style.marginBlockStart = "1em";
    // ul.style.marginBlockEnd = "1em";
    // ul.style.inlineStart = "0px";
    // ul.style.inlineEnd = "0px";
    // ul.style.paddingInlineStart = "40px";
    ul.style.margin = "30px auto";
    ul.style.width = "300px";
    // ul.style.border = "5px solid black";

    
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const li = document.createElement("li");
        li.dataset.pos = [colIdx, rowIdx];
        // li.dataset.y = rowIdx;
        ul.appendChild(li);
      }
    }
    el.appendChild(ul);
    const li = document.querySelectorAll("li");
    li.forEach(el =>{
      el.style.display = "list-item";
      el.style.width = "90px";
      el.style.height = "90px";
      el.style.background = "#69f420";
      el.style.float = "left";
      el.style.border = "2px solid black";
      el.style.cursor = "pointer";
      // el.style.hover = "background-color yellow";
      // document.styleSheets[0].insertRule("#li:hover {color:yellow}")
    })
    ul.addEventListener("mouseover", (e) => {
      if (e.target.tagName == "LI"){
        e.target.style.backgroundColor = "yellow"
      } else {
        e.target.style.backgroundColor = "#69f420"
      }
    })
    ul.addEventListener("mouseout", (e) => {
      if (e.target.tagName == "LI"){
        e.target.style.backgroundColor = "#69f420"
      } 
    })
  }
  
  bindEvents() {

  }

  handleClick(e) {
    const block = e.target
    const pos = parseInt([block.dataset.row, block.dataset.col]);
    // const col = parseInt(block.dataset.col);
    this.playMove(pos);
  }

  makeMove(square) {}

}

module.exports = View;
