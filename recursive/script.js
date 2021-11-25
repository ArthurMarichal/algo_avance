var size = 4;
const currentMap = data[size]["ex-0"];
var entrance;
var exit;
let s = []
var i = 0;
var path = [];


function createMaze() {

    for (const currentCell of currentMap) {
        var cell = document.createElement("div");
        cell.setAttribute("id", i);
        cell.style.width = "35px";
        cell.style.height = "35px";
        cell.style.position = "absolute";
        cell.style.left = currentCell.posY * 35 + 'px';
        cell.style.top = currentCell.posX * 35 + 'px';
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
            entrance = i;
            cell.classList.add("entrance")
        } else if (currentCell.exit) {
            exit = i;
            cell.classList.add("exit")
            console.log("la sortie : " + exit)
        } else {
            cell.classList.add("not-visited")
        }
        cell.style.borderColor = "#000000";
        document.body.appendChild(cell);
        i++
    }
    return currentMap, entrance, exit;
}

function dfs_iterative(G, e) {
    s.push(e);
    console.log(e)

    while (s.length !== 0) {
        let v = s.pop();
        console.log(G[v])
        if (!G[v].visited) {
            G[v].visited = true;
            var cell = document.getElementById(v.toString());
            cell.classList.add("visited")
            t = v - size;
            d = v + 1;
            b = v + size;
            g = v - 1;
            if (v === exit) {

                console.log("DONE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                let w = v;
                while (G[w].parent) {
                    let p = G[w].parent;
                    path.push(p)
                    w = p;
                    console.log(p)
                }
                console.log("DONE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                console.log(path)
            } else {
                if (!G[v].walls[0] && !G[t].visited) {
                    G[t].parent = v
                    s.push(t)
                }
                if (!G[v].walls[1] && !G[d].visited) {
                    G[d].parent = v
                    s.push(d)
                }
                if (!G[v].walls[2] && !G[b].visited) {
                    G[b].parent = v
                    s.push(b)
                }
                if (!G[v].walls[3] && !G[g].visited) {
                    G[g].parent = v
                    s.push(g)
                }
            }
        }
    }
    return path;
}

function parcours(path) {
    while (path.length !== 0) {
        console.log(path)
        let parentCell = document.getElementById(path.pop())
        parentCell.classList.add("path")
    }
}


function dfs_recursive(G, v){
    if (!G[v].visited){
        if (v === exit){
            console.log("Done !")
            return v;
        }
        G[v].visited = true;
        var cell = document.getElementById(v.toString());
        cell.classList.add("visited")
        t = v - size;
        d = v + 1;
        b = v + size;
        g = v - 1;
        for (w in G[v]){
            console.log(w)
            if (!G[w].walls[0] && !G[t].visited) {
                G[t].parent = v
                s.push(t)
            }
            if (!G[w].walls[1] && !G[d].visited) {
                G[d].parent = v
                s.push(d)
            }
            if (!G[w].walls[2] && !G[b].visited) {
                G[b].parent = v
                s.push(b)
            }
            if (!G[v].walls[3] && !G[g].visited) {
                G[w].parent = v
                s.push(g)
            }
        }
    }
}


createMaze();
dfs_iterative(currentMap, entrance)
//dfs_recursive(currentMap, entrance)
parcours(path);


