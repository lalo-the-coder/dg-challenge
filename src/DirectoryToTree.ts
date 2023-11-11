import * as fs from 'fs';
import * as path from 'path';

const directoryToTree = (rootPath: string, maxDepth: number): FsNode | null => {
    const exploreDirectory = (currentPath: string, depth: number): FsNode | null => {
        if (depth > maxDepth) return null;

        try {
            fs.accessSync(currentPath, fs.constants.R_OK);
        } catch (err) {
            return null;
        }

        const stats = fs.statSync(currentPath);
        const node: FsNode = {
            path: currentPath,
            name: path.basename(currentPath),
            type: stats.isDirectory() ? FileType.dir : FileType.file,
            size: stats.size,
        };

        if (node.type === FileType.dir) {
            node.children = fs.readdirSync(currentPath)
                .map((child) => exploreDirectory(path.join(currentPath, child), depth + 1))
                .filter((child) => child !== null) as FsNode[];
        }

        return node;
    };

    return exploreDirectory(rootPath, 0);
};

export default directoryToTree;