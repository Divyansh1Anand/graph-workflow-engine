import fs from 'fs'
import path from 'path';

export function FilePath(dirPath , fileExtensions = ['.js' , '.ts' , '.jsx' , '.tsx']){
    let filePath = []

    const address = fs.readFileSync(dirPath);

    for(const item of address){
        const fullPath = path.join(dirPath , item);
        const stat = fs.statSync(fullPath);

        if(stat.isDirectory()){
            const subFiles = FilePath(fullPath , fileExtensions)
            filePath = filePath.concat(subFiles);
        }
        else if(stat.isFile()){
            filePath.push(fullPath);
        }
    }

    return filePath;
}