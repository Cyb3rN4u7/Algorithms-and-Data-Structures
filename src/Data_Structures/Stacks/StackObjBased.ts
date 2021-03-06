//  complexity O(1)  toString is not included
class StackObjBased{
    count: number;
    items: {[k: string]: any};

    constructor(){
        this.count = 0;
        this.items = {};
    }

    push(element:any){
        this.items[this.count] = element;
        this.count++;
    }

    pop(){
        if (this.isEmpty()){
            return undefined;
        }
        const top = this.items[this.count -1];
        delete this.items[this.count -1];
        this.count--;
        return top;
    }

    peek(){
      if (this.isEmpty()){
          return undefined;
      }
      return this.items[this.count -1];
    }

    isEmpty(){
       return this.count === 0;
    }

    clear(){
        this.items = {};
        this.count = 0;
    }

    size(){
        return this.count;
    }

    toString(){
        if (this.isEmpty()) {
            return '';
        }
        let itemString = `${this.items[0]}`;
        for (let i=1; i<this.count;i++){
            itemString = `${itemString},${this.items[i]}`;
        }

        return itemString;
    }
}


export default StackObjBased;