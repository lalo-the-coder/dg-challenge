import * as fs from 'fs';
import * as path from 'path';
import directoryToTree from './DirectoryToTree';


describe('directoryToTree', () => {
  const testDir = './test-dir';
  const testFile = './test-file.txt';

  beforeAll(() => {
    fs.mkdirSync(testDir);
    fs.writeFileSync(testFile, 'test');
  });

  afterAll(() => {
    fs.unlinkSync(testFile);
    fs.rm(testDir, { recursive: true, force: true }, (err) => { if (err) throw err; });
  });

  it('should return null for invalid path', () => {
    const tree = directoryToTree('./invalid-path', 0);
    expect(tree).toBeNull();
  });

  it('should return null for max depth < 0', () => {
    const tree = directoryToTree('./', -1);
    expect(tree).toBeNull();
  });

  it('should return correct tree for directory', () => {
    const tree = directoryToTree(testDir, 0);
    const expected: FsNode = {
      path: testDir,
      name: 'test-dir',
      type: FileType.dir,
      size: 4096,
      children: [],
    };
    expect(tree).toEqual(expected);
  });

  it('should return correct tree for file', () => {
    const tree = directoryToTree(testFile, 0);
    const expected: FsNode = {
      path: testFile,
      name: 'test-file.txt',
      type: FileType.file,
      size: 4,
    };
    expect(tree).toEqual(expected);
  });

  it('should return correct tree for nested directory', () => {
    const nestedDir = path.join(testDir, 'nested-dir');
    fs.mkdirSync(nestedDir);
    const tree = directoryToTree(testDir, 1);
    const expected: FsNode = {
      path: testDir,
      name: 'test-dir',
      type: FileType.dir,
      size: 4096,
      children: [
        {
          path: nestedDir,
          name: 'nested-dir',
          type: FileType.dir,
          size: 4096,
          children: [],
        },
      ],
    };
    expect(tree).toEqual(expected);
    fs.rmdirSync(nestedDir);
  });
});