interface FsNode {
    path: string;
    name: string;
    type: FileType;
    size: number;
    children?: FsNode[];
}