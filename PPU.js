
import PPUMemory from './PPUMemory.js';

class PPU {



    constructor(){

        this.memory = new PPUMemory();




    }
}



const ppu = new PPU();


console.log(ppu.memory.BUS[0].toString(2))