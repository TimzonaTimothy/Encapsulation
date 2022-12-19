//base class
class Animal {
    
    //Absraction
    constructor(){
        if (this.constructor === Animal){
            throw new Error('Animal cannot be called or instantiated')
        }
    }

    eat(){
        console.log('Animal Eating')
    }

    //Polymorphism method
    Kingdom() {
        console.log('');
    }
}


/** 
 * OOPS Concept: Inheritance and Encapsulation
 * Closure is an example of Inheritance and encapsulation.
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

    Kingdom() {
        console.log('Arthropoda');
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

    Kingdom(){
        console.log('Fish');
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

    Kingdom(){
        console.log('Amphibia');
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

    Kingdom(){
        console.log('Reptiles');
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

    Kingdom(){
        console.log('AVES');
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

    Kingdom(){
        console.log('Mammals');
    }

}


//setting the instance
let cat = new Mammals();
//setting the value of the parameter
cat.setblood('cold');
cat.Kingdom();