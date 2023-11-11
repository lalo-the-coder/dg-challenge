const fs = require('fs');
const path = require('path');

const directoryToTree = (rootPath, maxDepth) => {
    const exploreDirectory = (currentPath, depth) => { 
        if (depth > maxDepth) return null;

        const stats = fs.statSync(currentPath);
        const node = {
            path: currentPath,
            name: path.basename(currentPath),
            type: stats.isDirectory() ? 'dir' : 'file',
            size: stats.size
        };

        if (node.type === 'dir') {
            node.children = fs.readdirSync(currentPath)
                .map(child => exploreDirectory(path.join(currentPath, child), depth + 1))
                .filter(child => child !== null);
        }

        return node;
    }

    return exploreDirectory(rootPath, 0);
}

const tree = directoryToTree('dummy_dir/a_dir', 5);
console.log(JSON.stringify(tree, null, 2));