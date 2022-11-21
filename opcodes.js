


// This file contains all opcoes described 
// in the dev sheets for the nes opcodes
// which is based on the 6502 architecture.

// 00 Row
const BRK = 0x0000;
const JSR = 0x2000;
const RTI = 0x4000;
const RTS = 0x6000;
const NOP = 0x8000;
const LDY = 0xA000;
const CPY = 0xC000;
const CPX = 0xE000;

// 01 Row

const ORA = 0x0010;
const AND = 0x2010;
const EOR = 0x4010;
const ADC = 0x6010;
const STA = 0x8010;
const LDA = 0xA010;
const CMP_101 = 0xC010;
const SBC_101 = 0xE010;

// 02 Row

const STP_201 = 0x0020;
const STP_202 = 0x2020;
const STP_203 = 0x4020;
const STP_204 = 0x6020;
const NOP_201 = 0x8020;
const LDX     = 0xA020;
const CMP_201 = 0xC020;
const SBC_201 = 0xE020;

// 03 Row

const SLO = 0x0003;
const RLA = 0x2003;
const SRE = 0x4003;
const RRA = 0x6003;
const SAX = 0x8003;
const LAX = 0xA003;
const DCP = 0xC003;
const ISC = 0xE003;

// 04 Row
const NOP_401 = 0x0004
const BIT = 0x2004;
const NOP_402 = 0x4004;
const NOP_403 = 0x6004;
const STY = 0x8004;
const LDY_401 = 0xA004;
const CPY_401 = 0xC004;
const CPX_401 = 0xE004

function get_instruction(type){

    if(type == 0xA030)
        console.log("found lax instruction!");
}


get_instruction(SAX);