//base class
class Animal {
    

    constructor(){
        if (this.constructor === Animal){
            throw new Error('Animal cannot be called or instantiated')
        }
    }

    eat(){
        console.log('Animal Eating')
    }

    isAlive() {
        return true;
    }
}


/** 
 * OOPS Concept: Encapsulation
 * Closure is an example of encapsulation.
 * It encapsulates the body of code together within the lexical scope.
 
*/


class Arthropoda extends Animal{
    
    sethasBackbones(hasBackbones){
        this.hasBackbones = hasBackbones;
    }

    setblood(blood){
        this.blood = blood;
    }

    gethasBackbones(){
        return this.hasBackbones;
    }

    getblood(){
        return this.blood;
    }
}

class Fish extends Animal{
   
    sethasBackbones(hasBackbones){
        this.hasBackbones = hasBackbones;
    }

    setblood(blood){
        this.blood = blood;
    }

    gethasBackbones(){
        return this.hasBackbones;
    }

    getblood(){
        return this.blood;
    }
}

class Amphibia extends Animal{
    sethasBackbones(hasBackbones){
        this.hasBackbones = hasBackbones;
    }

    setblood(blood){
        this.blood = blood;
    }

    gethasBackbones(){
        return this.hasBackbones;
    }

    getblood(){
        return this.blood;
    }

}

class Reptiles extends Animal{
   
    sethasBackbones(hasBackbones){
        this.hasBackbones = hasBackbones;
    }

    setblood(blood){
        this.blood = blood;
    }

    gethasBackbones(){
        return this.hasBackbones;
    }

    getblood(){
        return this.blood;
    }
}

class AVES extends Animal{
    
    sethasBackbones(hasBackbones){
        this.hasBackbones = hasBackbones;
    }

    setblood(blood){
        this.blood = blood;
    }

    gethasBackbones(){
        return this.hasBackbones;
    }

    getblood(){
        return this.blood;
    }
}

class Mammals extends Animal{
   
    
    sethasBackbones(hasBackbones){
        this.hasBackbones = hasBackbones;
    }

    setblood(blood){
        this.blood = blood;
    }

    gethasBackbones(){
        return this.hasBackbones;
    }

    getblood(){
        return this.blood;
    }

}


//setting the instance
let cat = new Mammals();
//setting the value of the parameter
cat.setblood('cold');
console.log(cat.getblood());