import Memory from './memory.js';


const memory = new Memory();


// according to the documentation, each pattern specifies an area in the tile
// the first pattern controls the first bit of the color and the second pattern
// the 1 bit. Any pixel whos color is 0 is transparent 

class PatternTable {



    constructor(){


        // according to the docs, each tile has 16 bytes and 16x16 tiles 

        this.patternTable = new Uint16Array(0x1FFF).fill(0xF9);
    }
}


const p = new PatternTable();

console.log((p.patternTable[0] % 2).toString(2));
class PPUMemory {




    constructor(){
        // Explanation:

        // this architecture uses the main memory, which is 0xFFFF bytes large.
        // according to the documentation: https://www.nesdev.org/wiki/PPU_registers
        // the PPU memory BUS uses the adress space from 0x2000 to 0x2007. So it makes
        // sense to get the main memory and then declare the bus to these addresses,
        // altough i am not 100% sure if thats the correct way. 

        // PPU // PPUMASK ETC.


        // https://www.nesdev.org/wiki/PPU_registers
        // According to the documentation these are the PPU 
        // 8 Bit registers. 
        
        this.PPURegisters = new Uint8Array(0x3FFF).fill(0xFF);
        
        

        // 7 Adresses 


    }



    // According to the documentation the PPU register contains only 7
    // adresses. However those are mirrored till 0x3FFF. So the starting
    // address is at 0x2000 to 



    get_register(value){

        value = value & 0x2007;

        if(value >= 0x2000 && value <= 0x3FFF){

        console.log(value);
        
        if(value == 0x2000)
            return this.PPURegisters[0];
        else if(value == 0x2001)
            return this.PPURegisters[1];
        else if(value == 0x2002)
            return this.PPURegisters[2];
        else if(value == 0x2003)
            return this.PPURegisters[3];
        else if(value == 0x2004)
            return this.PPURegisters[4];
        else if(value == 0x2005)
            return this.PPURegisters[5];
        else if(value == 0x2006)
            return this.PPURegisters[6]
        else if(value == 0x2007)
            return this.PPURegisters[7];
        else
            return `not a valid value ${value}`

        } else
            return `Adress ${value} not in between 0x2000 and 0x3FFF for PPU Registers`
    }
}




const p1 = new PPUMemory();

console.log(p1.get_register(0x1000));

export default PPUMemory;