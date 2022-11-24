


// Michael Lenort

class Memory{
    constructor(){
        this.ram = new Uint8Array(0x1999).fill(0xFF);


        
    }


    read8(addr){

        // make sure the addr is within the 0x1999 range, otherwise out of memory ROM range.
        addr = addr % 0x800;
        return this.ram[addr];
    }
}


export default Memory;

