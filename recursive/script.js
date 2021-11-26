var size = 25;
const currentMap = data[size]["ex-2"];
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
    // C'est pour DFS_itérative
    while (path.length !== 0) {
        let parentCell = document.getElementById(path.pop())
        parentCell.classList.add("path")
    }
}
let counter = 0;

function dfs_recursive(G, v) {
    var cell = document.getElementById(v.toString());
    if (!G[v].visited) {
        if (v === exit) {
            cell.classList.add("exit")
            console.log("Done !")
            return [v];
        }
        G[v].visited = true;
        cell.classList.add("visited")
        cell.classList.remove("not-visited")

        const t = v - size;
        const d = v + 1;
        const b = v + size;
        const g = v - 1;

        if (!G[v].walls[0] && !G[t].visited) {
            G[t].parent = v;
            let p = dfs_recursive(G, t)
            if (p){
                p.push(v);
                return p;
            }
        }

        if (!G[v].walls[1] && !G[d].visited) {
            G[d].parent = v;
            let p = dfs_recursive(G, d)
            if (p){
                p.push(v);
                return p;
            }
        }

        if (!G[v].walls[2] && !G[b].visited) {
            G[b].parent = v;
            let p = dfs_recursive(G, b)
            if (p){
                p.push(v);
                return p;
            }
        }

        if (!G[v].walls[3] && !G[g].visited) {
            G[g].parent = v;
            let p = dfs_recursive(G, g)
            if (p){
                p.push(v);
                return p;
            }
        }

        if (G[v] === entrance)
            cell.classList.add("entrance");
    }
}


createMaze();
//dfs_iterative(currentMap, entrance)
path = dfs_recursive(currentMap, entrance)
parcours(path);
//bfs(currentMap, entrance);

function bfs(G, e) {
    let stack = [];
    stack.push(e);
    console.log(e)

    while (stack.length !== 0) {
        let v = stack.shift();
        console.log(G[v]);
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
                    stack.push(t)
                }
                if (!G[v].walls[1] && !G[d].visited) {
                    G[d].parent = v
                    stack.push(d)
                }
                if (!G[v].walls[2] && !G[b].visited) {
                    G[b].parent = v
                    stack.push(b)
                }
                if (!G[v].walls[3] && !G[g].visited) {
                    G[g].parent = v
                    stack.push(g)
                }
            }
        }
    }
    return path;
}