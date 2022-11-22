import * as OPCODES from './opcodes.js';


// Michael Lenort | University of Salzburg | 2022
// 

// Idea:
// In the CPU we check whatever kind of cases we have and then set the flags accordingly.
// We must keep in mind that the cartdrige itself will provide OPCODE operations
// we must ensure those are fetched, decoded and executed accoridngly in the CPU
// and then stored to the memory / rom correctly.

console.log(OPCODES.ADC_501);

console.log(OPCODES.AND);


class CPU{
    constructor(){
        // Creates a new CPU Memory instance
        this.memory = new CPUMemory();
        this.mapper = new Mapper
}



    // we must get the instruction from the ROM / memory and then process it to see what kind of instruction we are dealing with.


    
        
}




