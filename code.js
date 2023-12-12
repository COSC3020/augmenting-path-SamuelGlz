function augmentingPath(graph, start, end) {
    let path = [];
    let visited = [];

    if (!(Object.keys(graph[start] > 0))) {
        return [];
    }

    function innerAugPath(current) {
        if (visited.includes(current)) {
            return false;
        }

        visited.push(current);
        path.push(current);

        if (current == end) {
            return true;
        }

        for (const neighbor of Object.keys(graph[current])) {
            //console.log("Current path is " + path)

            if (innerAugPath(neighbor)) {
                return true;
            }
        }
        path.pop();

        return false;
    }

    innerAugPath(start);
    return path;
}

/*
var graph = {'a': {'b': 7, 'e': 4},
    'b': {'c': 3, 'd': 8},
    'c': {},
    'd': {},
    'e': {'f':9},
    'f':{}};
console.log(augmentingPath(graph, 'a', 'f'))*/

