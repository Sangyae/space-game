// base gameobject class
class GameObject {
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
    }
}

// Add movement capability through inheritance

class Movable extends GameObject{
    constructor(x, y, type){
        super(x, y, type);          // call parent constructor
    }
}

// add ability to move to a new position
moveTo(x, y){
    this.x = x;
    this.y = y;
}
// creating specific  game object type

class Hero extends Movable{
    constructor(x, y){
        super(x, y, 'Hero');  // Set type automatically

    }
}

class Tree extends GameObject{
    constructor(x, y){
        super(x, y, 'Tree');  //Trees don't movement
    }
}

//using game object 

const hero = new hero(0, 0);
hero.moveTo(5,5);     // hero can move

const Tree = new Tree(10, 15);  
// tree.moveTo() would cause an error - trees can't move

