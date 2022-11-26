import Memory from './memory.js'
import CPU from './cpu.js';
import * as fs from 'fs';
import { SlowBuffer } from 'buffer';
const cpu = new CPU();

var byteArray = new Uint8Array(0xFFFF);

//console.log(mem.ram);
cpu.read8(255,true, true, true);
cpu.write8(0, 0x55);
cpu.fetch8();
cpu.fetch8();
cpu.fetch8();
cpu.fetch8();
cpu.fetch8();
cpu.fetch8();

var i = 0;
var array;


array = fs.readFileSync('s.nes');

console.log(array[0].toString(16));
console.log(array[1].toString(16));
console.log(array[2].toString(16));
console.log(array[3].toString(16));
// HEADER first 16 bytes 

  
// Use fs.readFile() method to read the file
fs.readFile('s.nes', (err, data) => {
    console.log(data);

 });



console.log(Buffer.from('./s.nes'));
