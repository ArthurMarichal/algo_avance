
const currentMap = data["3"]["ex-0"];
var i = 0;
for (const currentCell of currentMap) {
    var cell = document.createElement("div");
    cell.setAttribute("id",i = i+1);
    cell.style.width = "200px";
    cell.style.height = "200px";
    cell.style.position = "absolute";
    cell.style.left = currentCell.posY*200+'px';
    cell.style.top = currentCell.posX*200+'px';

    if (currentCell.walls[0]) {
        cell.style.borderTop = "solid";
    }
    if (currentCell.walls[1]){
        cell.style.borderRight = "solid";
    }
    if (currentCell.walls[2]){
        cell.style.borderBottom = "solid";
    }
    if (currentCell.walls[3]){
        cell.style.borderLeft = "solid";
    }
    if (currentCell.entrance){
        cell.style.backgroundColor = "rgba(2,255,2,0.55)";
    } else if (currentCell.exit){
        cell.style.backgroundColor = "rgba(252,14,14,0.8)";
    }else {
        cell.style.backgroundColor = "#FFF000";
    }
    cell.style.borderColor = "#000000";
    document.body.appendChild(cell);
}

