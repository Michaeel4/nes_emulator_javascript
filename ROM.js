
// Class is used to read the ROM cartridge. 


import { timeStamp } from 'console';
import fs from 'fs';
class ROM{
    constructor(dataBuffer){

        var array;
        const PRGROMSIZE = 16384;
        const CHRROMSIZE = 8192;


        array = fs.readFileSync('s.nes');
        
        // console.log(array[0].toString(16));
        // console.log(array[1].toString(16));
        // console.log(array[2].toString(16));
        // console.log(array[3].toString(16));

        // NES Header is 16 byte long
        this.header = array.subarray(0, 16);


        var lastByte = 16;

        // 4 Byte (starting from 0) contains PRG ROM Size
        this.prgRomSize = this.header[4];
        // 5 Byte contains CHR ROM Size
        this.chrRomSize = this.header[5];

        this.prgLength = this.prgRomSize * PRGROMSIZE;
        this.chrLength = this.chrRomSize * CHRROMSIZE;

        this.prg = array.subarray(lastByte, lastByte+this.prgLength);

        lastByte += this.prgLength;

        if (chrLength > 0) {
            this.chr = byteArray.subarray(lastByte, lastByte + this.chrLength);
          } else {
            this.chr = new Uint8Array(CHRROMSIZE).fill(0);
          }



        this.mapper6 = this.header[6];
        this.mapper7 = this.header[7];
        this.mapper8 = this.header[8];
        this.mapper9 = this.header[9];
        this.mapper10 = this.header[10];
        this.mapper1115 = this.header.subarray(11, 15);


          // TODO Mapper Types

    }

    
}


export default ROM;