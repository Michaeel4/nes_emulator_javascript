


// This file contains all opcoes described 
// in the dev sheets for the nes opcodes
// which is based on the 6502 architecture.

// 00 Row
export const BRK = 0x0000;
export const JSR = 0x2000;
export const RTI = 0x4000;
export const RTS = 0x6000;
export const NOP = 0x8000;
export const LDY = 0xA000;
export const CPY = 0xC000;
export const CPX = 0xE000;

// 01 Row

export const ORA = 0x0001;
export const AND = 0x2001;
export const EOR = 0x4001;
export const ADC = 0x6001;
export const STA = 0x8001;
export const LDA = 0xA001;
export const CMP_101 = 0xC001;
export const SBC_101 = 0xE001;

// 02 Row

export const STP_201 = 0x0002;
export const STP_202 = 0x2002;
export const STP_203 = 0x4002;
export const STP_204 = 0x6002;
export const NOP_201 = 0x8002;
export const LDX     = 0xA002;
export const CMP_201 = 0xC002;
export const SBC_201 = 0xE002;

// 03 Row

export const SLO = 0x0003;
export const RLA = 0x2003;
export const SRE = 0x4003;
export const RRA = 0x6003;
export const SAX = 0x8003;
export const LAX = 0xA003;
export const DCP = 0xC003;
export const ISC = 0xE003;

// 04 Row
export const NOP_401 = 0x0004
export const BIT = 0x2004;
export const NOP_402 = 0x4004;
export const NOP_403 = 0x6004;
export const STY = 0x8004;
export const LDY_401 = 0xA004;
export const CPY_401 = 0xC004;
export const CPX_401 = 0xE004;

// 05 Row

export const ORA_501 = 0x0005;
export const AND_501 = 0x2005;
export const EOR_501 = 0x4005;
export const ADC_501 = 0x6005;
export const STA_501 = 0x8005;
export const LDA_501 = 0xA005;
export const CMP_501 = 0xC005;
export const SBC_501 = 0xE005;

// 06 Row
export const ASL = 0x0006;
export const ROL = 0x2006;
export const LSR = 0x4006;
export const ROR = 0x6006;
export const STX = 0x8006;
export const LDX_601 = 0xA006;
export const DEC = 0xC006;
export const INC = 0xE006;

// 07 Row
export const SLO_701 = 0x0007;
export const RLA_701 = 0x2007;
export const SRE_701 = 0x4007;
export const RRA_701 = 0x6007;
export const SAX_701 = 0x8007;
export const LAX_701 = 0xA007;
export const DCP_701 = 0xC007;
export const ISC_701 = 0xE007;

// 08 Row
export const PHP = 0x0008;
export const PLP = 0x2008;
export const PHA = 0x4008;
export const PLA = 0x6008;
export const DEY = 0x8008;
export const TAY = 0xA008;
export const INY = 0xC008;
export const INX = 0xE008;

function get_instruction(type){

    if(type == 0xA030)
        console.log("found lax instruction!");
}


get_instruction(SAX);