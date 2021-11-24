var size = 3;
const currentMap = data[size]["ex-0"];
var entrance;
var exit;
let s = []
var i = 0;


function createMaze() {

    for (const currentCell of currentMap) {
        var cell = document.createElement("div");
        cell.setAttribute("id", i);
        cell.style.width = "200px";
        cell.style.height = "200px";
        cell.style.position = "absolute";
        cell.style.left = currentCell.posY * 200 + 'px';
        cell.style.top = currentCell.posX * 200 + 'px';
        cell.innerText = i;


        if (currentCell.walls[0]) {
            cell.style.borderTop = "solid";
        }
        if (currentCell.walls[1]) {
            cell.style.borderRight = "solid";
        }
        if (currentCell.walls[2]) {
            cell.style.borderBottom = "solid";
        }
        if (currentCell.walls[3]) {
            cell.style.borderLeft = "solid";
        }
        if (currentCell.entrance) {
            cell.style.backgroundColor = "rgba(2,255,2,0.55)";
            entrance = i;
            console.log(entrance);
        } else if (currentCell.exit) {
            cell.style.backgroundColor = "rgba(252,14,14,0.8)";
            exit = i;
            console.log(exit);
        } else {
            cell.style.backgroundColor = "rgba(255,187,1,0.58)";
        }
        cell.style.borderColor = "#000000";
        document.body.appendChild(cell);
        i++
    }
    dfs_iterative(currentMap, entrance);
}

function dfs_iterative(G, e) {
    s.push(e);


    while (s.length !== 0) {
        let v = s.pop();
        console.log(v);
        if (!G[v].visited) {
            G[v].visited = true;
            t = v - size;
            d = v + 1;
            b = v + size;
            g = v - 1;
            if (!G[v].walls[0] && !G[t].visited) {
                var cell = document.getElementById(v.toString());
                cell.style.backgroundColor = "rgba(89,89,89,0.58)";
                s.push(t)

            }
            if (!G[v].walls[1] && !G[d].visited) {
                var cell = document.getElementById(v.toString());
                cell.style.backgroundColor = "rgba(89,89,89,0.58)";
                s.push(d)
            }
            if (!G[v].walls[2] && !G[b].visited) {
                var cell = document.getElementById(v.toString());
                cell.style.backgroundColor = "rgba(89,89,89,0.58)";
                s.push(b)
            }
            if (!G[v].walls[3] && !G[g].visited) {
                var cell = document.getElementById(v.toString());
                cell.style.backgroundColor = "rgba(89,89,89,0.58)";
                s.push(g)
            }
            if (G[v] === exit){
                console.log("DONE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                break;
            }
        }
    }
}

createMaze();


