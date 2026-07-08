export class chunk {
    constructor({
        id,
        text,
        filePath,
        name,
        type,
        scope,
        calls = [],
        startLine,
        endLine,
        className = null,
        isMethod = false,
    }){
        this.id = id;
        this.text = text;

        this.metadata = {
            filePath,
            name,
            type,
            scope,
            calls,
            startLine,
            endLine,
            className,
            isMethod
        };
    }
    toJSON() {
        return {
            id : this.id,
            text : this.text,
            metadata : this.metadata
        };
    }
}