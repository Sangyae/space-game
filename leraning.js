const parent = {
    value : 2,

    method(){
        return this.method + 1;
    },
};

console.log(parent.method());