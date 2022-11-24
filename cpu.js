import * as OPCODES from './opcodes.js';
import Memory from './memory.js';

// Michael Lenort | University of Salzburg | 2022
// 

// Idea:
// In the CPU we check whatever kind of cases we have and then set the flags accordingly.
// We must keep in mind that the cartdrige itself will provide OPCODE operations
// we must ensure those are fetched, decoded and executed accoridngly in the CPU
// and then stored to the memory / rom correctly.


class CPU{
    constructor(){
        // Creates a new CPU Memory instance
        this.memory = new Memory();
        

        // Flags accordings to the 6502 Architecture
        this.c = 0; 
        this.z = 0;
        this.i = 0;
        this.d = 0;
        this.v = 0;
        this.n = 0;
        this.b = 0;
    }


    // Read 8 Byte from the Adress
    read8(addr, debug, binary, decimal){
        // If address is < 0x2000, than its the 2KB internal ROM
        // and its mirroring
        if(decimal == null)
            decimal = false;
        if(binary == null)
            binary = false;
        if(debug == null)
            debug = false;

        if(debug)
           console.log(`Getting from address 0x${addr.toString(16)} the value: ${this.memory.read8(addr)}`);
        if(debug && binary)
           console.log(`Getting from address 0x${addr.toString(16)} the value: ${this.memory.read8(addr)}, binary value: ${this.memory.read8(addr).toString(2)}`);
        if(debug && binary && decimal)
           console.log(`Getting from address 0x${addr.toString(16)} the value: ${this.memory.read8(addr)}, binary value: ${this.memory.read8(addr).toString(2)}, decimal value: ${this.memory.read8(addr).toString(10)}`);
        
    }

    // Used to write data to the memory
    write8(addr, value){



    }


    // we must get the instruction from the ROM / memory and then process it to see what kind of instruction we are dealing with.
    
}

export default CPU;