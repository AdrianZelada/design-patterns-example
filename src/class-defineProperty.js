class Archiver{
    constructor(){
        this.archive= [];
        this._temp = 0;
    }

    get temperature(){
        return this._temp;
    }

    set temperature(value) {
        this._temp = value;
        this.archive.push(value);
    }

    getArchive() {
        return this.archive;
    }
}

const arcTemp = new Archiver();
arcTemp.temperature=2;
arcTemp.temperature=4;
const values = arcTemp.getArchive();
console.log(values)

