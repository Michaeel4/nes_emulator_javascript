


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

// 09 Row
export const ORA_901 = 0x0009;
export const AND_901 = 0x2009;
export const EOR_901 = 0x4009;
export const ADC_901 = 0x6009;
export const NOP_901 = 0x8009;
export const LDA_901 = 0xA009;
export const CMP_901 = 0xC009;
export const SBC_901 = 0xE009;

//0A Row
export const ASL_0A = 0x000A;
export const ROL_0A = 0x200A;
export const LSR_0A = 0x400A;
export const ROR_0A = 0x600A;
export const TXA_0A = 0x800A;
export const TXA_0A1 = 0xA00A;
export const DEX_A1 = 0xC00A;
export const NOP_A1 = 0xE00A;

//0B Row
export const ANC_0B = 0x000B;
export const ANC_0B1 = 0x200B;
export const ALR = 0x400B;
export const ARR = 0x600B;
export const XAA = 0x800B;
export const LAX_0B = 0xA00B;
export const AXS = 0xC00B;
export const SBC = 0xE00B;

//0C Row
export const NOP_0C = 0x000C;
export const BIT_0C = 0x200C;
export const JMP_0C = 0x400C;
export const JMP_0C1 = 0x600C;
export const STY_0C = 0x800C;
export const LDY_0C = 0xA00C;
export const CPY_0C = 0xC00C;
export const CPX_0C = 0xE00C;

//0D Row
export const ORA_0D = 0x000D;
export const AND_0D = 0x200D;
export const EOR_0D = 0x400D;
export const ADC_0D = 0x600D;
export const STA_0D = 0x800D;
export const LDA_0D = 0xA00D;
export const CMP_0D = 0xC00D;
export const SBC_0D = 0xE00D;

//0E Row
export const ASL_0E = 0x000E;
export const AND_0E = 0x200E;
export const EOR_0E = 0x400E;
export const ADC_0E = 0x600E;
export const STA_0E = 0x800E;
export const LDA_0E = 0xA00E;
export const CMP_0E = 0xC00E;
export const SBC_0E = 0xE00E;

//0F Row
export const SLO_0F = 0x000F;
export const RLA_0F = 0x200F;
export const SRE_0F = 0x400F;
export const RRA_0F = 0x600F;
export const SAX_0F = 0x800F;
export const LAX_0F = 0xA00F;
export const DCP_0F = 0xC00F;
export const ISC_0F = 0xE00F;

//10 Row
export const BPL_10 = 0x0010;
export const BMI_10 = 0x2010;
export const BVC_10 = 0x4010;
export const BVS_10 = 0x6010;
export const BCC_10 = 0x8010;
export const BCS_10 = 0xA010;
export const BNE_10 = 0xC010;
export const BEQ_10 = 0xE010;

//11 Row
export const ORA_11 = 0x0011;
export const AND_11 = 0x2011;
export const EOR_11 = 0x4011;
export const ADC_11 = 0x6011;
export const STA_11 = 0x8011;
export const LDA_11 = 0xA011;
export const CMP_11 = 0xC011;
export const SBC_11 = 0xE011;

//12 Row
export const STP_121 = 0x0012;
export const STP_122 = 0x2012;
export const STP_123 = 0x4012;
export const STP_124 = 0x6012;
export const STP_125 = 0x8012;
export const STP_126 = 0xA012;
export const STP_127 = 0xC012;
export const STP_128 = 0xE012;

//13 Row
export const SLO_13 = 0x0013;
export const RLA_13 = 0x2013;
export const SRE_13 = 0x4013;
export const RRA_13 = 0x6013;
export const AHX_13 = 0x8013;
export const LAX_13 = 0xA013;
export const CDCP_13 = 0xC013;
export const ICP_13 = 0xE013;

//14 Row
export const NOP_141 = 0x0014;
export const NOP_142 = 0x2014;
export const NOP_143 = 0x4014;
export const NOP_144 = 0x6014;
export const STY_14 = 0x8014;
export const LDY_14 = 0xA014;
export const NOP_145 = 0xC014;
export const NOP_146 = 0xE014;

//15 Row
export const ORA_15 = 0x0015;
export const AND_15 = 0x2015;
export const EOR_15 = 0x4015;
export const ADC_15 = 0x6015;
export const STA_15 = 0x8015;
export const LDA_15 = 0xA015;
export const CMP_15 = 0xC015;
export const SBC_15 = 0xE015;

//16 Row
export const ASL_16 = 0x0016;
export const ROL_16 = 0x2016;
export const LSR_16 = 0x4016;
export const ROR_16 = 0x6016;
export const STX_16 = 0x8016;
export const LDX_16 = 0xA016;
export const DEC_16 = 0xC016;
export const INC_16 = 0xE016;

//17 Row
export const SLO_17 = 0x0017;
export const RLA_17 = 0x2017;
export const SRE_17 = 0x4017;
export const RRA_17 = 0x6017;
export const SAX_17 = 0x8017;
export const LAX_17 = 0xA017;
export const DCP_17 = 0xC017;
export const ISC_17 = 0xE017;

//18 Row
export const CLC_18 = 0x0018;
export const SEC_18 = 0x2018;
export const CLI_18 = 0x4018;
export const SEI_18 = 0x6018;
export const TYA_18 = 0x8018;
export const CLV_18 = 0xA018;
export const CLD_18 = 0xC018;
export const SED_18 = 0xE018;

//19 Row
export const ORA_19 = 0x0019;
export const AND_19 = 0x2019;
export const EOR_19 = 0x4019;
export const ADC_19 = 0x6019;
export const STA_19 = 0x8019;
export const LDA_19 = 0xA019;
export const CMP_19 = 0xC019;
export const SBC_19 = 0xE019;

//1A Row
export const NOP_1A1 = 0x001A;
export const NOP_1A2 = 0x201A;
export const NOP_1A3 = 0x401A;
export const NOP_1A4 = 0x601A;
export const NOP_1A5 = 0x801A;
export const NOP_1A6 = 0xA01A;
export const NOP_1A7 = 0xC01A;
export const NOP_1A8 = 0xE01A;

//1B Row
export const SLO_1B = 0x001B;
export const RLA_1B = 0x201B;
export const SRE_1B = 0x401B;
export const RRA_1B = 0x601B;
export const TAS_1B = 0x801B;
export const LAS_1B = 0xA01B;
export const DCP_1B = 0xC01B;
export const ISC_1B = 0xE01B;

//1C Row
export const NOP_1C1 = 0x001C;
export const NOP_1C2 = 0x201C;
export const NOP_1C3 = 0x401C;
export const NOP_1C4 = 0x601C;
export const SHY_1C = 0x801C;
export const LDY_1C = 0xA01C;
export const NOP_1C5 = 0xC01C;
export const NOP_1C6 = 0xE01C;

//1D Row
export const ORA_1D = 0x001D;
export const AND_1D = 0x201D;
export const EOR_1D = 0x401D;
export const ADC_1D = 0x601D;
export const STA_1D = 0x801D;
export const LDA_1D = 0xA01D;
export const CMP_1D = 0xC01D;
export const SBC_1D = 0xE01D;

//1E Row
export const ASL_1E = 0x001E;
export const ROL_1E = 0x201E;
export const LSR_1E = 0x401E;
export const ROR_1E = 0x601E;
export const SHX_1E = 0x801E;
export const LDX_1E = 0xA01E;
export const DEC_1E = 0xC01E;
export const INC_1E = 0xE01E;

//1F Row
export const SLO_1F = 0x001F;
export const RLA_1F = 0x201F;
export const SRE_1F = 0x401F;
export const RRA_1F = 0x601F;
export const AHX_1F = 0x801F;
export const LAX_1F = 0xA01F;
export const DCP_1F = 0xC01F;
export const ISC_1F = 0xE01F;






function get_instruction(type){

    if(type == 0xA030)
        console.log("found lax instruction!");
}


get_instruction(SAX);