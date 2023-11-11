import * as fs from 'fs';
import directoryToTree from './DirectoryToTree';

const rootPath:string = process.argv[2] ?? 'dummy_dir';
const maxDepth:number = Number.isNaN(parseInt(process.argv[3])) ? 0 : parseInt(process.argv[3]);

try {
    fs.accessSync(rootPath, fs.constants.R_OK);
    if (maxDepth < 0) {
        throw new Error('Max depth must be a positive integer');
    }
    const tree = directoryToTree(rootPath, maxDepth);
    console.log(JSON.stringify(tree, null, 2));
} catch (err: any) {
    if(err.code === 'ENOENT') {
        console.error('The provided path does not exist');
    } else if(err.code === 'EACCES') {
        console.error('The provided path is not accessible');
    }else {
        console.error(err.message);
    }    
}
