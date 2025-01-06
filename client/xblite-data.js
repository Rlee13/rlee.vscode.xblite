module.exports = {
xlBuiltInKeywords0 : ['ABS','ALL','ASC','ASM','ATTACH','AUTO','AUTOS','AUTOX','BITFIELD','CASE','CEIL','CFUNCTION','CLEAR','CLOSE','CLR',
'CONSOLE','CSIZE','DATA','DCOMPLEX','DEC','DECLARE','DHIGH','DIM','DLOW','DMAKE','DO','DOUBLE','DOUBLEAT','ELSE','END','ENDIF','EOF','ERROR',
'EXIT','EXPLICIT','EXPORT','EXTERNAL','EXTS','EXTU','FALSE','FIX','FOR','FUNCADDR','FUNCADDRESS','FUNCTION','GHIGH','GIANT','GIANTAT','GLOW',
'GMAKE','GOADDR','GOADDRESS','GOSUB','GOTO','HIGH0','HIGH1','HIWORD','IF','IFF','IFT','IFZ','IMPORT','INC','INCHR','INCHRI','INSTR','INSTRI',
'INT','INTERNAL','LEN','LIBRARY','LOF','LONGDOUBLE','LONGDOUBLEAT','LOOP','LOWORD','MAKE','MAKEFILE','MAX','MIN','MOD','NEXT','NULL','OPEN',
'PACKED','POF','POWER','PRINT','PROGRAM','QUIT','READ','REDIM','RETURN','RINCHR','RINCHRI','RINSTR','RINSTRI','ROTATEL','ROUND','ROUNDNE',
'ROTATER','SBYTE','SBYTEAT','SCOMPLEX','SEEK','SELECT','SET','SFUNCTION','SGN','SHARED','SHELL','SIGN','SINGLE','SINGLEAT','SIZE','SLONG',
'SLONGAT','SMAKE','SSHORT','SSHORTAT','STATIC','STEP','STOP','STRING','SUB','SUBADDR','SUBADDRESS','SWAP','TAB','THEN','TO','TRUE','TYPE',
'UBOUND','UBYTE','UBYTEAT','ULONG','ULONGAT','UNION','UNTIL','USHORT','USHORTAT','VERSION','VOID','WHILE','WRITE','XLONG','XLONGAT','XMAKE',
'OR','AND','XOR','NOT'],
xlBuiltInKeywords1 : ['BIN$','BINB$','CHR$','CJUST$','CSIZE$','CSTRING$','ERROR$','FORMAT$','HEX$','HEXX$','INFILE$','INLINE$','LCASE$',
'LCLIP$','LEFT$','LJUST$','LTRIM$','MID$','NULL$','OCT$','OCTO$','PROGRAM$','RCLIP$','RIGHT$','RJUST$','RTRIM$','SIGNED$','SPACE$','STR$',
'STRING$','STUFF$','TRIM$','UCASE$','VERSION$'],
xlSupportKeywords0 : ['FPClassifyL','IsFiniteL','IsInfL','IsNanL','IsNormalL','IsSubNormalL','IsZeroL','HIWORD','LOWORD','MAKELONG','PowL',
'RGB','SignBitL','XstAbend','XstAlert','XstBackArrayToBinArray','XstBinArrayToBackArray','XstBinRead','XstBinWrite','XstBytesToBound','XstCall',
'XstCauseException','XstCenterWindow','XstChangeDirectory','XstCompareStrings','XstCopyArray','XstCopyDirectory','XstCopyFile','XstCopyMemory',
'XstDateAndTimeToFileTime','XstDecomposePathname','XstDeleteFile','XstDeleteLines','XstEnableFPExceptions','XstErrorNameToNumber',
'XstErrorNumberToName','XstExceptionNameToNumber','XstExceptionNumberToName','XstExceptionToSystemException','XstFileExists',
'XstFileTimeToDateAndTime','XstFileToSystemFile','XstFindArray','XstFindFile','XstFindFiles','XstFindMemoryMatch','XstGetClipboard',
'XstGetCommandLine','XstGetCommandLineArguments','XstGetCPUName','XstGetCurrentDirectory','XstGetDateAndTime','XstGetDateAndTimeFormatted',
'XstGetDrives','XstGetEndian','XstGetEndianName','XstGetEnvironmentVariable','XstGetEnvironmentVariables','XstGetException',
'XstGetExceptionFunction','XstGetExceptionInformation','XstGetExecutionPathArray','XstGetFileAttributes','XstGetFiles','XstGetFilesAndAttributes',
'XstGetFPUControlWord','XstGetLocalDateAndTime','XstGetMemoryMap','XstGetOSName','XstGetOSVersion','XstGetPathComponents','XstGetSystemError',
'XstGetSystemTime','XstGetTypedArray','XstGuessFilename','XstIsAbsolutePath','XstIsDataDimension','XstKillTimer','XstLoadString',
'XstLoadStringArray','XstLockFileSection','XstLog','XstLTRIM','XstMakeDirectory','XstMultiStringToStringArray','XstParseStringToStringArray',
'XstPathToAbsolutePath','XstQuickSort','XstRaiseException','XstRandom','XstRandomCreateSeed','XstRandomSeed','XstRandomUniform','XstReadString',
'XstRegisterException','XstRenameFile','XstReplace','XstReplaceArray','XstReplaceLines','XstRTRIM','XstSaveString','XstSaveStringArray',
'XstSaveStringArrayCRLF','XstSetClipboard','XstSetCommandLineArguments','XstSetCurrentDirectory','XstSetDateAndTime','XstSetEnvironmentVariable',
'XstSetException','XstSetExceptionFunction','XstSetFPUControlWord','XstSetFPUPrecision','XstSetFPURounding','XstSetSystemError','XstSleep',
'XstStartTimer','XstStringArraySectionToString','XstStringArraySectionToStringArray','XstStringArrayToString','XstStringArrayToStringCRLF',
'XstStringToLongDouble','XstStringToNumber','XstStringToStringArray','XstStripChars','XstSystemErrorNumberToName','XstSystemErrorToError',
'XstSystemExceptionNumberToName','XstSystemExceptionToException','XstTally','XstTranslateChars','XstTRIM','XstTry','XstTypeSize',
'XstUnlockFileSection','XstWriteString','XxxReadFile','XxxWriteFile'],
xlSupportKeywords1:['XstBackStringToBinString$','XstBackStringToBinString$','XstBinStringToBackString$','XstBinStringToBackStringNL$',
'XstBinStringToBackStringThese$','XstCreateDoubleImage$','XstGetProgramFileName$','XstLongDoubleToString$','XstMergeStrings$','XstNextCField$',
'XstNextCLine$','XstNextField$','XstNextItem$','XstNextLine$','XstParse$','XstPathString$','XstVersion$','XsxVersion$','XxxFormat$'],
xlHelpFiles: {
      "ABS": {
        "@helpfn": "keywords_1.htm", 
        "@name": "ABS( )",
        "Definition": "#### ABS( ) \nIntrinsic returns the absolute value of any simple numeric type.\n\n\nnumeric = ABS(numeric)", 
        "Example": "a = +23\nb = -23\nc = ABS(a) ' c = 23\nd = ABS(b) ' d = 23\n", 
        "Parameters": "", 
        "Remarks": "", 
        "ReturnValues": "The return value is the absolute value of the parameter.\n\nThe return TYPE is the same as the parameter TYPE.", 
        "SeeAlso": ""
      }, 
      "ALL": {
          "@helpfn": "keywords_2.htm", 
          "@name": "ALL",
          "Definition": "#### ", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "SELECT CASE"
      }, 
      "AND": {
          "@helpfn": "keywords_3.htm", 
          "@name": "AND", 
          "Definition": "#### AND \nOperator applies the bitwise AND operator (on integers only) .\n\ninteger = integer1 AND integer2", 
          "Example": "a = 0x05F0b = 0xFFA0c = a AND b   ' c = 0x05A0", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "ASC": {
          "@helpfn": "keywords_4.htm", 
          "@name": "ASC( )", 
          "Definition": "#### ASC( ) \nIntrinsic returns a numeric value of an ASCII character in a string .\n\ninteger = ASC(string$) \
\n integer = ASC(string$,\nposition)", 
          "Example": "a$ = \"abcde\"b = ASC(a$)      ' b = 97c = ASC(a$,4)   ' c = 100d = ASC(a$,6)   ' d = -1 (specified byte not within string)", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "1 byte character string to extract the byte from (default is 1st byte)."
              }, 
              {
                  "name": "position", 
                  "text": "Optional position of 1 byte character in string$ to extract."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is ASCII number of character. Return is -1 if specified\nbyte is not within string.", 
          "SeeAlso": ""
      }, 
      "ASM": {
          "@helpfn": "asm.htm", 
          "@name": "ASM", 
          "Definition": "#### ASM \nThe ASM statement is used to define a line of assembly code. It must begin a line of assembly.\n\nASM mov ebx,[ebp+0x0C]; put x into ebx", 
          "Example": "FUNCTION  DOUBLE Pi ()\n' example of loading a 80-bit extended precision real\n' and returning it as a DOUBLE\nASM fldpi\t\t; load pi into st(0)\nASM jmp end.Pi.fldpi\t; return with pi in st(0)\nEND FUNCTION", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "Inline Assembly in BA6 manual"
      }, 
      "ATTACH": {
          "@helpfn": "keywords_5.htm", 
          "@name": "ATTACH", 
          "Definition": "#### ATTACH Statement attaches one array/subarray to another .\nATTACH arrayNode TO arrayNode", 
          "Example": "ATTACH a[] TO b[]          ' attach array to arrayATTACH a[] TO b[i,]       ' attach array to nodeATTACH a[i,] TO b[]       ' attach node to arrayATTACH a[i,] TO b[j,k,] ' attach node to nodeATTACH a$ TO b$[i]         ' attach string to nodeATTACH b$[i] TO a$         ' attach node to string", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "AUTO": {
          "@helpfn": "keywords_6.htm", 
          "@name": "AUTO", 
          "Definition": "#### AUTO Statement declares a variable to be AUTO or AUTOX scope .\n  AUTO variables are accessible to one instance of a single function.  Each time the function\nis called a new set of AUTO variables are assigned to CPU registers or memory on the local\nframe, so several sets of a function's AUTO variables may exist at any time, each of which\nis accessible to only one instance of the function.   AUTO variables are temporary,\nthey exist only until the function completes and returns to the caller.   Variables\nare AUTO by default, so all undeclared variables are AUTO.\nAUTO [typename] variablesAUTOX [typename] variables", 
          "Example": "AUTO a, b$, c[]\nAUTO SINGLE x, y, z\nAUTO MYTYPE first[], middle[], last[]\nAUTOX i, j$, k[]\nAUTOX DOUBLE p[], q[], r[], s[], t[]\nAUTOX TYPERS fast[], accurate[], both[]", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "AUTOX": {
          "@helpfn": "keywords_7.htm", 
          "@name": "AUTOX", 
          "Definition": "#### AUTOX \nStatement declares a variable to be AUTOX scope .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "AUTO"
      }, 
      "BIN$": {
          "@helpfn": "keywords_8.htm", 
          "@name": "BIN$( )", 
          "Definition": "#### BIN$( )\nIntrinsics return the binary string representation of an integer. Binary strings represent a number in base 2 using ones and zeros.\n\nstring = BIN$(integers)\n\nstring = BIN$(integers, digits)", 
          "Example": "a = 0xF0F5          ' a = 61685\na$ = BIN$(a)       ' a$ = \"1111000011110101\"\na$ = BINB$(a)      ' a$ = \"0b1111000011110101\"\na$ = BIN$(a,20)   ' a$ = \"00001111000011110101\"\na$ = BINB$(a,20) ' a$ = \"0b00001111000011110101\"\na$ = BIN$(a,5)    ' a$ = \"1111000011110101\"\na$ = BINB$(a,5)    ' a$ = \"0b1111000011110101\"", 
          "Parameters": [
              {
                  "name": "integers", 
                  "text": "Integer value."
              }, 
              {
                  "name": "digits", 
                  "text": "Number of characters to represent integer."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "BINB$": {
          "@helpfn": "keywords_9.htm", 
          "@name": "BINB$( )", 
          "Definition": "#### BINB$( ) \nIntrinsic returns the binary format string of an integer. BINB$ inserts a prefix of \"0b\" in front of the binary string (0b010010111...).\nstring = BINB$(integers)  \nstring = BINB$(integers, digits)", 
          "Example": "a = 0xF0F5          ' a = 61685\na$ = BIN$(a)       ' a$ = \"1111000011110101\"\na$ = BINB$(a)      ' a$ = \"0b1111000011110101\"\na$ = BIN$(a,20)   ' a$ = \"00001111000011110101\"\na$ = BINB$(a,20) ' a$ = \"0b00001111000011110101\"\na$ = BIN$(a,5)    ' a$ = \"1111000011110101\"\na$ = BINB$(a,5)    ' a$ = \"0b1111000011110101\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "",
          "SeeAlso": "BIN$( )"
      }, 
      "BITFIELD": {
          "@helpfn": "keywords_10.htm", 
          "@name": "BITFIELD( )", 
          "Definition": "#### BITFIELD( ) \nIntrinsic defines a bitfield constant or variable .\nbitspec = BITFIELD(width, offset)", 
          "Example": "$$BYTE0 = BITFIELD(8, 0)   ' bits 00-07 : low byte\n$$BYTE1 = BITFIELD(8, 8)   ' bits 08-15 : next higher \n \
$$BYTE2 = BITFIELD(8, 16) ' bits 16-23 : next higher \n$$BYTE3 = BITFIELD(8, 24) ' bits 24-31 : high byte\n$$KINDS = BITFIELD(5, 21) \
' bits 21-25 : 5 wide bitfield at bit 21\nspacing = BITFIELD(3, 29) ' bits 29-31 : 3 wide bitfield at bit 29", 
          "Parameters": [
              {
                  "name": "width", 
                  "text": "Width of bitfield in bits, valid widths are 1 to 31."
              }, 
              {
                  "name": "offset", 
                  "text": "Offset of the bitfield from the least signifcant bit, valid offsets are 0 to 31."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The return value is a bitfield specification.", 
          "SeeAlso": ""
      }, 
      "CASE": {
          "@helpfn": "keywords_11.htm", 
          "@name": "CASE", 
          "Definition": "#### CASE \nStatement within a SELECT CASE block tests cases and executes a block\non a match.\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "SELECT CASE"
      }, 
      "CEIL": {
          "@helpfn": "ceil.htm", 
          "@name": "CEIL", 
          "Definition": "#### The CEIL( ) Intrinsic rounds\nthe argument towards positive infinity\nfloat = CEIL(float)", 
          "Example": "a# = 3.2b# = -4.7c# = CEIL(a#)\t'c# = 4.0d# = CEIL(b#) \t'd# = -4.0", 
          "Parameters": "", 
          "Remarks": "CEIL() is the complement of  which\nrounds towards negative infinity", 
          "ReturnValues": "The return TYPE is the same as the parameter TYPE.", 
          "SeeAlso": ""
      }, 
      "CFUNCTION": [
          {
              "@helpfn": "keywords_12.htm", 
              "@name": "CFUNCTION", 
              "Definition": "#### CFUNCTION \nStatement declares/defines C functions or C callable functions.\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_61b.htm", 
              "@name": "CFUNCTION", 
              "Definition": "#### FUNCTION \nStatement declares/defines a function.\n\nThe SFUNCTION \nStatement declares/defines a system function.\n\nThe CFUNCTION \nStatement declares/defines a C function.\n\n\nFUNCTION [type] FuncName (arguments) [defaultType]\n\n    SFUNCTION [type] FuncName (arguments) [defaultType]\n\n    CFUNCTION [type] FuncName (arguments) [defaultType]", 
              "Example": "FUNCTION Blivit (a, b, c$, d[])FUNCTION Bondar (i#, j#, k#, l#, m#)SFUNCTION DOUBLE DoLittle (DOUBLE lo, DOUBLE hi) DOUBLECFUNCTION DOUBLE ArcCosh (DOUBLE arg)", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "CHR": {
          "@helpfn": "keywords_13.htm", 
          "@name": "CHR$( )", 
          "Definition": "#### CHR$( )Intrinsic returns a string of 1 or more copies of a character .\nstring$ = CHR$(integer)string$ = CHR$(integer, count)", 
          "Example": "a$ = CHR$(32)       ' a$ = \" \" ( 1 space character )a$ = CHR$(32, 8)   ' a$ = \" \" ( 8 space characters )a$ = CHR$('x', 8) ' a$ = \"xxxxxxxx\" (8 'x' characters)", 
          "Parameters": [
              {
                  "name": "integer", 
                  "text": "ASCI value of the character (default is one character output)."
              }, 
              {
                  "name": "count", 
                  "text": "Number of copies of the character to return."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is one or more characters in a string.", 
          "SeeAlso": ""
      }, 
      "CJUST": {
          "@helpfn": "keywords_14.htm", 
          "@name": "CJUST$", 
          "Definition": "#### CJUST$( ), LJUST$( ), and RJUST$( )   \nIntrinsics return a justified string in a field of spaces .\n\nstring$ = CJUST$(string$,\nlength)\nstring$ =\nRJUST$(string$, length)", 
          "Example": "a$ = \"cat\"b$ = \"catamaran\"a$ = CJUST$(a$,7)      ' a$ = \"  cat  \"      (exact centering)a$ = CJUST$(a$,8)      ' a$ = \"  cat   \"     (excess space on right)a$ = CJUST$(\"xxx\",9) ' a$ = \"   xxx   \"    (exact centering)a$ = CJUST$(b$,3)      ' a$ = \"cat\"           (no fit, left justify)a$ = LJUST$(a$,6)      ' a$ = \"cat   \"        (left justify cat in 6)a$ = LJUST$(b$,7)      ' a$ = \"catamar\"     (string longer than 7)a$ = LJUST$(\"xxx\",8) ' a$ = \"xxx     \"      (left justify xxx in 8)a$ = LJUST$(b$,3)      ' a$ = \"cat\"           (string longer than 3)a$ = RJUST$(a$,6)      ' a$ = \"   cat\"        (right justify in 6)a$ = RJUST$(b$,7)      ' a$ = \"catamar\"     (string longer than 7)a$ = RJUST$(\"xxx\",8) ' a$ = \"     xxx\"      (right justify in 8)a$ = RJUST$(b$,3)      ' a$ = \"cat\"           (no fit, so left clip)", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "String to justify."
              }, 
              {
                  "name": "length", 
                  "text": "The total field width."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The return string is justified in a field of space characters. The\nreturn string is always the specified width. If a string cannot be\nexactly centered, the extra space follows the string. If the string is\nlonger than the field, the string is left justified and clipped at the\nend of the field.", 
          "SeeAlso": "columns.x"
      }, 
      "CLOSE": {
          "@helpfn": "keywords_15.htm", 
          "@name": "CLOSE( )", 
          "Definition": "#### CLOSE( ) \nIntrinsic closes an open file.\n\n\n\ninteger = CLOSE(fileNumber)", 
          "Example": "err = CLOSE (ofile) ' test for close errorCLOSE (ofile)          ' ... or don't bother", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is 0 on success, -1 on invalid filenumber", 
          "SeeAlso": "OPENfiledemo.x"
      }, 
      "CLR": {
          "@helpfn": "keywords_16.htm", 
          "@name": "CLR( )", 
          "Definition": "#### The CLR( ) and SET( )\nintrinsics\nclear or set a bit field in an integer.\ninteger = CLR(integer,\nbitspec)  \ninteger = CLR(integer, width,\noffset)  \ninteger = SET(integer,\nbitspec)  \ninteger = SET(integer, width,\noffset)", 
          "Example": "$$TYPE = BITFIELD(5,16) ' constant in PROLOG$KIND = BITFIELD(5,24)   ' in a functionkind = BITFIELD(5,24)    ' variable as bitspeci = 0xFFFFFFFF               ' i = 0xFFFFFFFFj = 0x00000000               ' j = 0x00000000a = CLR(i, $$TYPE)         ' a = 0xFFE0FFFFa = CLR(i, $KIND)          ' a = 0xE0FFFFFFa = CLR(i, kind)            ' a = 0xE0FFFFFFa = CLR(i, 8, 4)            ' a = 0xFFFFF00Fa = SET(j, $$TYPE)         ' a = 0x001F0000a = SET(j, $KIND)          ' a = 0x1F000000a = SET(j, kind)            ' a = 0x1F000000a = SET(j, 8, 4)            ' a = 0x00000FF0", 
          "Parameters": [
              {
                  "name": "integer", 
                  "text": "Integer value to modify bits."
              }, 
              {
                  "name": "bitspec", 
                  "text": "A bit specification that contains the width and offset of the bitfield to clear (0) or set (1). The bit specification was created by BITFIELD( )."
              }, 
              {
                  "name": "width", 
                  "text": "In three argument version, the width is number of bits to clear or set."
              }, 
              {
                  "name": "offset", 
                  "text": "In three argument version, the offset is the offset of bitfield from the least significant bit ."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is integer with modified bits.", 
          "SeeAlso": ""
      }, 
      "CONSOLE": {
          "@helpfn": "keywords_16b.htm", 
          "@name": "CONSOLE", 
          "Definition": "#### CONSOLE \nCONSOLE statement is used to build the program as a console application. It assigns the link flag subsystem:console to be used in the makefile. By default, all programs are built using the subsytem:windows,4.0 linker flag.\nThe CONSOLE statement should be used in the program's PROLOG section. The CONSOLE statement has no parameters.\n\nCONSOLE", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "CSIZE": [
          {
              "@helpfn": "keywords_17.htm", 
              "@name": "CSIZE", 
              "Definition": "#### The CSIZE( )Intrinsic returns\nthe number of bytes before the 1st zero byte .   A zero byte is\nrepresented by \\'0' or \\0.\ninteger = CSIZE(string$)", 
              "Example": "a$ = \"\"b$ = \"abcdefg\"c$ = \"abc\\0defg\"a = CSIZE(a$)      ' a = 0a = CSIZE(b$)      ' a = 7a = CSIZE(c$)      ' a = 3", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is the number of bytes before the first zero byte.", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_18.htm", 
              "@name": "CSIZE$", 
              "Definition": "#### CSIZE$( )Intrinsic clips string\noff at the 1st null character .\n  The zero byte is represented by \\0 or \\'0'.\nstring$ = CSIZE$(string$)", 
              "Example": "a$ = \"\"b$ = \"abcdefg\"c$ = \"abc\\0defg\"s$ = CSIZE$(a$)   ' s$ = \"\"s$ = CSIZE$(b$)   ' s$ = \"abcdefg\"s$ = CSIZE$(c$)   ' s$ = \"abc\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "The return string is a copy of   input string but clipped so that\nthe\nend of the string is the byte before the first zero byte.", 
              "SeeAlso": ""
          }
      ], 
      "CSTRING": {
          "@helpfn": "keywords_19.htm", 
          "@name": "CSTRING$", 
          "Definition": "#### CSTRING$( )Intrinsic converts a\nC style string into a native string . It returns\na copy of the cstring at a memory address. The end of the string is the\nbyte\nbefore the first zero byte. The string at the specified address is not\naltered\nor freed. A zero byte is represented by \\'0' or \\0.\nstring$ = CSTRING$(address)", 
          "Example": "cstr = cfunc()a$ = CSTRING$(cstr)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return   is a string.", 
          "SeeAlso": ""
      }, 
      "DATA": {
          "@helpfn": "keywords_data.htm", 
          "@name": "DATA", 
          "Definition": "#### DATA statement is used to\nstore string data.   This data can be retrieved with calls to READ.\nAll data must be stored as strings. \n   DATA \"value\"\n[,\"value1\", ...]\nThe READ statement is\nused to retrieve data and and assign it to a variable.   The\nvariables can be any combination of numeric variables or string\nvariables. The READ statement will be convert the string data to the\ntype of the corresponding variable.\n   READ a$ [,b...]", 
          "Example": "DATA \"123\", \"abcd\", \"1.234\"READ a, a$, a#", 
          "Parameters": "", 
          "Remarks": "The READ statement can be used to read data from a file. See .", 
          "ReturnValues": "", 
          "SeeAlso": "eliza.x"
      }, 
      "DCOMPLEX": {
          "@helpfn": "keywords_20.htm", 
          "@name": "DCOMPLEX", 
          "Definition": "#### DCOMPLEXStatement declares\ndouble precision complex .\n[scope] DCOMPLEX variables", 
          "Example": "DCOMPLEX ii, jj, kkDCOMPLEX x[], y[], z[]SHARED DCOMPLEX a, b, c, a[], b[], c[]", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DEC": {
          "@helpfn": "keywords_21.htm", 
          "@name": "DEC", 
          "Definition": "#### DECStatement decrements an integer numeric variable by one .The\nINCStatement increments an integer numeric variable by one .\nDEC integer\nINC integer", 
          "Example": "x = 5x[4] = 40DEC x       ' x = 4INC x[4]  ' x[4] = 41", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DECLARE_FUNCTION": {
          "@helpfn": "keywords_23.htm", 
          "@name": "DECLARE FUNCTION", 
          "Definition": "#### DECLARE FUNCTION [type] FuncName ([parameters])  \nEXTERNAL FUNCTION [type] FuncName ([parameters])  \nINTERNAL FUNCTION [type] FuncName ([parameters])", 
          "Example": "DECLARE FUNCTION Twist ()INTERNAL FUNCTION DOUBLE DarkSine (a#, b#, c#[])EXTERNAL FUNCTION DCOMPLEX DoodleDuxis (DCOMPLEX dd, DCOMPLEX ee)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DHIGH": {
          "@helpfn": "keywords_24.htm", 
          "@name": "DHIGH( )", 
          "Definition": "#### DHIGH( ) and DLOW( )Intrinsics extracts the high or low 32-bits from a double precision\nfloating point variable.  The high 32-bits of a double precision floating\npoint number     contains the sign bit, exponent, and high part of the mantissa,\nwhile the low 32-bits     contains the low part of the mantissa.\ninteger = DHIGH(double)\ninteger = DLOW(double)", 
          "Example": "a# = 0d40010802DEADCODE ' a# = double variableb# = 0d4000800080000000 ' b# = double variablei = DHIGH(a#)                ' i = 0x40010802j = DHIGH(b#)                ' j = 0x40008000i = DLOW(a#)                  ' i = 0xDEADCODEj = DLOW(b#)                  ' j = 0x80000000", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "The return is an integer value.", 
          "SeeAlso": ""
      }, 
      "DIM": {
          "@helpfn": "keywords_25.htm", 
          "@name": "DIM", 
          "Definition": "#### DIM Statement dimensions an array and zeros its contents.The\nREDIM Statement redimensions an array and maintains its contents.\nDIM array [subscripts]  \nREDIM array [subscripts]", 
          "Example": "DIM a[]                  ' a[] becomes an empty arrayDIM a#[upper]         ' dimension a#[], upper bound = uDIM points[100000] ' dimension points[], upper bound = 100000DIM a$[tops]          ' dimension string array, upper bound = topsDIM a[i,j,k]          ' dimension a three dimensional arrayDIM a[i,j,]            ' dimension a two dimensional array of nodes", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DLOW": {
          "@helpfn": "keywords_26.htm", 
          "@name": "DLOW( )", 
          "Definition": "#### DLOW( ) \nIntrinsic extracts the low 32-bits from a DOUBLE variable  .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DMAKE": {
          "@helpfn": "keywords_27.htm", 
          "@name": "DMAKE( )", 
          "Definition": "#### DMAKE( ) Intrinsic makes a\nDOUBLE variable from two 32-bit integers .\ndouble = DMAKE(high32, low32)", 
          "Example": "hi = 0x40008000      ' high 32-bits of desired DOUBLElo = 0x80000000      ' low 32-bits of desired DOUBLEi# = DMAKE(hi, lo) ' i# = 0d4000800080000000i# = DMAKE(sign OR uman, lman) ' i# = assemble sign, hi/lo mantissa", 
          "Parameters": [
              {
                  "name": "high32", 
                  "text": "Integer value for high 32-bits"
              }, 
              {
                  "name": "low32", 
                  "text": "Integer value for low 32-bits"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a 64-bit double precision floating point number.", 
          "SeeAlso": ""
      }, 
      "DO": {
          "@helpfn": "keywords_28.htm", 
          "@name": "DO", 
          "Definition": "#### DO  \n #### DO WHILE numString\n #### DO UNTIL numString\n #### DO DO [level]\n #### DO LOOP [level]\n #### EXIT DO [level]\n #### LOOP \n #### LOOP WHILE numString\n #### LOOP UNTIL numString \nThe above\nStatements describe a DO ... LOOP loop block.\n\n \
DO begins a loop, and execution continues on the next line.\n\n \
DO WHILE continues execution on the next line if the numeric or string value is TRUE, otherwise execution continues after the matching LOOP statement.\n\n \
DO UNTIL continues execution on the next line if the numeric or string value is FALSE, otherwise execution continues after the matching LOOP statement.\n\n \
DO DO jumps directly to the DO statement at the beginning of a loop block from anywhere inside the block.\n\n \
DO LOOP jumps directly to the LOOP statement at the end of a loop block from anywhere inside the block.\n\n \
EXIT DO jumps directly past the LOOP statement at the end of the loop block, from anywhere inside the block.\n\n \
LOOP jumps to the matching DO statement.\n\n \
LOOP WHILE jumps to the matching DO statement if the numeric or string expression is TRUE.\n\n \
LOOP UNTIL jumps to the matching DO if the numeric or string expression is FALSE.", 
          "Example": "hash = 0\nIF a$ THEN\n  o = 0 ' offset = 0\n  u = UBOUND(a$) ' u = upper offset in a$\n  DO WHILE (o <= u) ' do hash loop while offset <= upper offset\n   hash = hash + a${o} ' add next byte to hash\n   INC o  ' offset to next byte in a$\n  LOOP\nEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DOUBLE": [
          {
              "@helpfn": "keywords_29.htm", 
              "@name": "DOUBLE", 
              "Definition": "#### DOUBLE Statement declares variables to be type DOUBLE.See", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": "Declarations"
          }, 
          {
              "@helpfn": "keywords_30.htm", 
              "@name": "DOUBLE( )", 
              "Definition": "#### DOUBLE( ) Intrinsic converts a numeric or string variable to type DOUBLE.See", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": "Type Conversions"
          }
      ], 
      "DOUBLEAT": {
          "@helpfn": "keywords_31.htm", 
          "@name": "DOUBLEAT( )", 
          "Definition": "#### DOUBLEAT( ) Intrinsic reads or writes a   DOUBLE value directly to/from a memory address .See", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "Direct Memory Access"
      }, 
      "DO_DO": {
          "@helpfn": "keywords_28c.htm", 
          "@name": "DO DO", 
          "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
          "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DO_FOR": {
          "@helpfn": "keywords_56a.htm", 
          "@name": "DO FOR", 
          "Definition": "#### FORStatement initiates a FOR ... NEXT loop block .\nFOR var = numeric TO numeric [STEP numeric]\nDO FOR [level]  \nDO NEXT [level]  \nEXIT FOR [level]  \nNEXT [var]", 
          "Example": "FOR i = 0 TO last  i$ = item$[i]  IFZ i$ THEN DO NEXT  IF i$ = \"outta here\" THEN EXIT FOR  IF (i$ = \"trash\") THEN i = i + 3 : DO FOR  Register (i$)NEXT i", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DO_LOOP": {
          "@helpfn": "keywords_28d.htm", 
          "@name": "DO LOOP", 
          "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
          "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DO_NEXT": {
          "@helpfn": "keywords_56b.htm", 
          "@name": "DO NEXT", 
          "Definition": "#### FORStatement initiates a FOR ... NEXT loop block .\nFOR var = numeric TO numeric [STEP numeric]\nDO FOR [level]  \nDO NEXT [level]  \nEXIT FOR [level]  \nNEXT [var]", 
          "Example": "FOR i = 0 TO last  i$ = item$[i]  IFZ i$ THEN DO NEXT  IF i$ = \"outta here\" THEN EXIT FOR  IF (i$ = \"trash\") THEN i = i + 3 : DO FOR  Register (i$)NEXT i", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DO_UNTIL": {
          "@helpfn": "keywords_28b.htm", 
          "@name": "DO UNTIL", 
          "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
          "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "DO_WHILE": {
          "@helpfn": "keywords_28a.htm", 
          "@name": "DO WHILE", 
          "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
          "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "ELSE": [
          {
              "@helpfn": "keywords_33.htm", 
              "@name": "ELSE", 
              "Definition": "#### ELSE \nStatement is optional in IF ... THEN ... ELSE ... END IF blocks .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": "IF"
          }, 
          {
              "@helpfn": "keywords_78d.htm", 
              "@name": "ELSE", 
              "Definition": "#### IF \nStatement starts an IF TRUE test in an IF ... END IF block .\n\nAn IF ... END IF block   executes statements conditionally. If the expression\nis TRUE, then the conditional statements are carried out.\n\nIF expression THEN statements\n\n\n    IF expression THEN statements ELSE statements\n\n    IF expression THEN  \n   statements\n\n    END IF\n  \n\n    IF expression THEN  \n   statements\n\n    ELSE  \n   statements\n\n    END IF", 
              "Example": "IF a THEN PRINT \"a is non-zero\"IFZ a THEN PRINT \"a is zero\"IF a$ THEN PRINT \"a$ has contents\"IFZ a$ THEN PRINT \"a$ is empty\"IF a[] THEN PRINT \"a[] has contents\"IFZ a[] THEN PRINT \"a[] is empty\"IF (humidity > 80) THEN PRINT \"Go to the beach\"IF a THEN   IFZ b THEN      PRINT \"a is true, b is not\"   ELSE     PRINT \"a is true, b is true\"   END IFEND IF", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "END": {
          "@helpfn": "keywords_34.htm", 
          "@name": "END", 
          "Definition": "#### END \nStatement ends a program, function, block structure or type\ndeclaration.\n\nSee END FUNCTION, END IF, END PROGRAM, END SELECT, END SUB, END COMMENT, END TYPE", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "END_FUNCTION": {
          "@helpfn": "keywords_35.htm", 
          "@name": "END FUNCTION", 
          "Definition": "#### END FUNCTION Statement ends a\nfunction.\n  If no return expression is given, a zero or empty string is\nreturned.\nEND FUNCTION [expression]", 
          "Example": "END FUNCTION ($$TRUE)END FUNCTION (x + 12)END FUNCTION (x[0])", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "END_IF": [
          {
              "@helpfn": "keywords_36.htm", 
              "@name": "END IF", 
              "Definition": "#### END IF \nStatement ends an IF ... THEN ... ELSE ... ENDIF block .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_78e.htm", 
              "@name": "END IF", 
              "Definition": "#### IF \nStatement starts an IF TRUE test in an IF ... END IF block .\n\nAn IF ... END IF block   executes statements conditionally. If the expression\nis TRUE, then the conditional statements are carried out.\n\nIF expression THEN statements\n\n\n    IF expression THEN statements ELSE statements\n\n    IF expression THEN  \n   statements\n\n    END IF\n  \n\n    IF expression THEN  \n   statements\n\n    ELSE  \n   statements\n\n    END IF", 
              "Example": "IF a THEN PRINT \"a is non-zero\"IFZ a THEN PRINT \"a is zero\"IF a$ THEN PRINT \"a$ has contents\"IFZ a$ THEN PRINT \"a$ is empty\"IF a[] THEN PRINT \"a[] has contents\"IFZ a[] THEN PRINT \"a[] is empty\"IF (humidity > 80) THEN PRINT \"Go to the beach\"IF a THEN   IFZ b THEN      PRINT \"a is true, b is not\"   ELSE     PRINT \"a is true, b is true\"   END IFEND IF", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "END_SELECT": {
          "@helpfn": "keywords_37.htm", 
          "@name": "END SELECT", 
          "Definition": "#### END SELECT \nStatement ends a SELECT block .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "END_SUB": [
          {
              "@helpfn": "keywords_170b.htm", 
              "@name": "END SUB", 
              "Definition": "#### SUB \nStatement begins a subroutine.\n\nThe EXIT SUB Statement exits a subroutine before its end.\nThe END SUB Statement ends a subroutine.\n\n\nSUB SubroutineName\n\n\nA subroutine is a portion of a function that can be called only from within the same\n    function by GOSUB SubroutineName.\n\nEND SUB returns to the statement following the GOSUB .\n\n\n    EXIT SUB jumps to the END SUB which then returns.", 
              "Example": "SUB Sandwich   entry = Convert (a, b)   IFZ entry THEN EXIT SUB ' exit the subroutine   entry = Chew (a, b)END SUB", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_38.htm", 
              "@name": "END SUB", 
              "Definition": "#### END SUB \nStatement ends a SUB routine .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "END_TYPE": [
          {
              "@helpfn": "keywords_180a.htm", 
              "@name": "END TYPE", 
              "Definition": "#### The  TYPE  Statement begins a\nuser-defined composite data type declaration block. \nThe   END TYPE  Statement\nends a user-defined composite data type block. \nThe UNION  Statement begins a\nunion overlay.   UNION statements are valid only within TYPE\ndeclaration blocks.\nThe   END UNION  Statement\nends a union overlay.\n  \n TYPE TYPENAME\nEND TYPE\nUNION\nEND UNION", 
              "Example": "TYPE COLOR   USHORT .red   USHORT .green   USHORT .blue   USHORT .intensityEND TYPE'TYPE POINT   XLONG .x   XLONG .y   COLOR .colorEND TYPE'TYPE LINE   POINT .a   POINT .b   XLONG .thicknessEND TYPE'TYPE DPOINT   DOUBLE .x   DOUBLE .y   COLOR .colorEND TYPE'TYPE ARBITRARY    ' hold an arbitrary data type value   UNION               ' the following overlay each other      SBYTE .sbyte      UBYTE .ubyte      SSHORT .sshort      USHORT .ushort      SLONG .slong      ULONG .ulong      XLONG .xlong      GIANT .giant      SINGLE .single      DOUBLE .double      SCOMPLEX .scomplex      DCOMPLEX .dcomplex   END UNION       ' end overlay   XLONG .type    ' type currently stored in the variableEND TYPE", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_39.htm", 
              "@name": "END TYPE", 
              "Definition": "#### END TYPE \nStatement ends a TYPE structure.\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "END_UNION": [
          {
              "@helpfn": "keywords_180c.htm", 
              "@name": "END UNION", 
              "Definition": "#### The  TYPE  Statement begins a\nuser-defined composite data type declaration block. \nThe   END TYPE  Statement\nends a user-defined composite data type block. \nThe UNION  Statement begins a\nunion overlay.   UNION statements are valid only within TYPE\ndeclaration blocks.\nThe   END UNION  Statement\nends a union overlay.\n  \n TYPE TYPENAME\nEND TYPE\nUNION\nEND UNION", 
              "Example": "TYPE COLOR   USHORT .red   USHORT .green   USHORT .blue   USHORT .intensityEND TYPE'TYPE POINT   XLONG .x   XLONG .y   COLOR .colorEND TYPE'TYPE LINE   POINT .a   POINT .b   XLONG .thicknessEND TYPE'TYPE DPOINT   DOUBLE .x   DOUBLE .y   COLOR .colorEND TYPE'TYPE ARBITRARY    ' hold an arbitrary data type value   UNION               ' the following overlay each other      SBYTE .sbyte      UBYTE .ubyte      SSHORT .sshort      USHORT .ushort      SLONG .slong      ULONG .ulong      XLONG .xlong      GIANT .giant      SINGLE .single      DOUBLE .double      SCOMPLEX .scomplex      DCOMPLEX .dcomplex   END UNION       ' end overlay   XLONG .type    ' type currently stored in the variableEND TYPE", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_39A.htm", 
              "@name": "END UNION", 
              "Definition": "#### END UNION \nStatement ends a UNION overlay within a type structure.\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "EOF": {
          "@helpfn": "keywords_40.htm", 
          "@name": "EOF", 
          "Definition": "#### EOF( ) Intrinsic returns $$TRUE\nif the file pointer is beyond the end of the file.\ninteger = EOF(fileNumber)", 
          "Example": "a = EOF(ifile)DO UNTIL EOF(ifile)LOOP", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is $$TRUE or $$FALSE", 
          "SeeAlso": ""
      }, 
      "ERROR": [
          {
              "@helpfn": "keywords_41.htm", 
              "@name": "ERROR( )", 
              "Definition": "#### ERROR( ) Intrinsic returns and/or sets an error number.    The return value\nis the current shared system ##ERROR error number. If newError value is assigned\nto ##ERROR unless newError = -1.\nlastError = ERROR(newError)", 
              "Example": "IF ERROR(-1) THEN   ' test ##ERROR without clearing iterror = ERROR(0)    ' get current ##ERROR, then clear iterror = ERROR(-1)   ' get current ##ERROR without changing iterror = ERROR(new) ' get current ##ERROR and assign a new value", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is an integer error value.", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_42.htm", 
              "@name": "ERROR$( )", 
              "Definition": "#### ERROR$( ) Intrinsic converts an error number to an error string.\nerror$ = ERROR$(error)", 
              "Example": "error = ERROR(0)          ' get error numbererror$ = ERROR$(error) ' error$ = error string", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "A string which contains an error   description", 
              "SeeAlso": ""
          }
      ], 
      "EXIT": {
          "@helpfn": "keywords_43.htm", 
          "@name": "EXIT", 
          "Definition": "#### EXIT \nStatement exits a function or block structure.\n\nSee   , , , , ,", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "EXIT_DO": [
          {
              "@helpfn": "keywords_28e.htm", 
              "@name": "EXIT DO", 
              "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
              "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_44.htm", 
              "@name": "EXIT DO", 
              "Definition": "#### EXIT DO Statement exits a DO block.\n  It will jump past the nth LOOP statement, where n = 1 or level\nEXIT DO [level]", 
              "Example": "DO  a$ = INLINE$ (\"Enter another choice ===>> \")  IFZ a$ THEN EXIT DO  RegisterEntry (a$)LOOP", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "EXIT_FOR": [
          {
              "@helpfn": "keywords_45.htm", 
              "@name": "EXIT FOR", 
              "Definition": "#### EXIT FOR Statement exits a FOR ... NEXT block . EXIT FOR will jump past the nth NEXT statement, where n =1 or level.\nEXIT FOR [level]", 
              "Example": "FOR i = 0 TO 1000  a$ = INLINE$ (\"Enter another choice ===>> \")  IFZ a$ THEN EXIT FOR  RegisterEntry (i, a$)NEXT i", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_56c.htm", 
              "@name": "EXIT FOR", 
              "Definition": "#### FORStatement initiates a FOR ... NEXT loop block .\nFOR var = numeric TO numeric [STEP numeric]\nDO FOR [level]  \nDO NEXT [level]  \nEXIT FOR [level]  \nNEXT [var]", 
              "Example": "FOR i = 0 TO last  i$ = item$[i]  IFZ i$ THEN DO NEXT  IF i$ = \"outta here\" THEN EXIT FOR  IF (i$ = \"trash\") THEN i = i + 3 : DO FOR  Register (i$)NEXT i", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "EXIT_FUNCTION": [
          {
              "@helpfn": "keywords_122a.htm", 
              "@name": "EXIT FUNCTION", 
              "Definition": "#### RETURN \nStatement returns from a function (not from a GOSUB) .\n\n\nRETURN [expression]\nEXIT FUNCTION [expression]", 
              "Example": "RETURN                        ' return zero or empty stringRETURN a                     ' return value of aRETURN a$                   ' return string a$RETURN ((a+b)*(c+d))   ' return value of numeric expressionRETURN (a$ + b$ + c$) ' return value of string expressionEXIT FUNCTION         ' return zero or empty stringEXIT FUNCTION 5       ' return value of 5EXIT FUNCTION (a * b) ' return value of a * b", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_46.htm", 
              "@name": "EXIT FUNCTION", 
              "Definition": "#### EXIT FUNCTION \nStatement exits a function .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "EXIT_IF": {
          "@helpfn": "keywords_47.htm", 
          "@name": "EXIT IF", 
          "Definition": "#### EXIT IF Statement exits an IF...THEN block.\n  EXIT IF will jump past the nth END IF statement, where n=1 or level.\nEXIT IF [level]", 
          "Example": "IF enabled THEN  IF (value < max) THEN   IF verify[entry] THEN     a = verify[entry]     IF (a < 0) THEN EXIT IF 4     verify[entry] = a+1   END IF  END IFEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "EXIT_SELECT": {
          "@helpfn": "keywords_48.htm", 
          "@name": "EXIT SELECT", 
          "Definition": "#### EXIT SELECT Statement exits a\nSELECT block.\n  EXIT SELECT will jump past the nth END SELECT statement, where\nn=1 or level.\nEXIT SELECT [level]", 
          "Example": "SELECT CASE a   CASE 1: GOSUB FireAway   CASE 2: GOSUB BreakOut   CASE 3: k = Prefix(n)   IFZ k THEN EXIT SELECT   GOSUB PassOffEND SELECT", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "EXIT_SUB": [
          {
              "@helpfn": "keywords_170a.htm", 
              "@name": "EXIT SUB", 
              "Definition": "#### SUB \nStatement begins a subroutine.\n\nThe EXIT SUB Statement exits a subroutine before its end.\nThe END SUB Statement ends a subroutine.\n\n\nSUB SubroutineName\n\n\nA subroutine is a portion of a function that can be called only from within the same\n    function by GOSUB SubroutineName.\n\nEND SUB returns to the statement following the GOSUB .\n\n\n    EXIT SUB jumps to the END SUB which then returns.", 
              "Example": "SUB Sandwich   entry = Convert (a, b)   IFZ entry THEN EXIT SUB ' exit the subroutine   entry = Chew (a, b)END SUB", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_49.htm", 
              "@name": "EXIT SUB", 
              "Definition": "#### EXIT SUB \nStatement exits a subroutine.\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "EXPORT": {
          "@helpfn": "keywords_50.htm", 
          "@name": "EXPORT", 
          "Definition": "#### EXPORT Statement exports ,\ntype, constant, or function declarations.\nEXPORT\n... declarations\nEND EXPORT", 
          "Example": "EXPORTTYPE LINK  XLONG .backward  XLONG .forwardEND TYPE'DECLARE FUNCTION DOUBLE Square (x#)DECLARE FUNCTION DOUBLE Cube (x#)END EXPORT'EXPORT$$Off = 0$$On = -1END EXPORT", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "EXTERNAL": {
          "@helpfn": "keywords_51.htm", 
          "@name": "EXTERNAL", 
          "Definition": "#### EXTERNALStatement declares variables to be EXTERNAL scope .\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "EXTERNAL_FUNCTION": [
          {
              "@helpfn": "keywords_23a.htm", 
              "@name": "EXTERNAL FUNCTION", 
              "Definition": "#### DECLARE FUNCTION [type] FuncName ([parameters])  \nEXTERNAL FUNCTION [type] FuncName ([parameters])  \nINTERNAL FUNCTION [type] FuncName ([parameters])", 
              "Example": "DECLARE FUNCTION Twist ()INTERNAL FUNCTION DOUBLE DarkSine (a#, b#, c#[])EXTERNAL FUNCTION DCOMPLEX DoodleDuxis (DCOMPLEX dd, DCOMPLEX ee)", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_51A.htm", 
              "@name": "EXTERNAL FUNCTION", 
              "Definition": "#### EXTERNAL FUNCTION Statement declares a function to have external scope.\n\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "EXTS": {
          "@helpfn": "keywords_52.htm", 
          "@name": "EXTS( )", 
          "Definition": "#### ", 
          "Example": "$$TYPE = BITFIELD(4,16) ' in PROLOG$KIND = BITFIELD(4,20)   ' in a functionspaz = BITFIELD(8,24)    ' variable as bitspeci = 0x89ABCDEF               ' i = 0x89ABCDEFa = EXTU(i, $$TYPE)       ' a = 0x0000000Ba = EXTU(i, $KIND)         ' a = 0x0000000Aa = EXTU(i, spaz)          ' a = 0x00000089a = EXTU(i, 8, 4)          ' a = 0x000000DE", 
          "Parameters": [
              {
                  "name": "integer", 
                  "text": "integer value to from which bitfield is extracted"
              }, 
              {
                  "name": "bitspec", 
                  "text": "bitfield specification returned from BITFIELD( )"
              }, 
              {
                  "name": "width", 
                  "text": "width of bitfield to extract"
              }, 
              {
                  "name": "offset", 
                  "text": "offset of bitfield to extract"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The return is an integer value.", 
          "SeeAlso": ""
      }, 
      "EXTU": {
          "@helpfn": "keywords_53.htm", 
          "@name": "EXTU( )", 
          "Definition": "#### EXTU( ) \nIntrinsic extracts an unsigned bit field.\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "FALSE": {
          "@helpfn": "keywords_54.htm", 
          "@name": "FALSE", 
          "Definition": "#### FALSE \nAuxiliary is optional in SELECT CASE statements .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "FIX": {
          "@helpfn": "keywords_55.htm", 
          "@name": "FIX( )", 
          "Definition": "#### FIX( ) \nIntrinsic returns an integer rounded towards zero .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "FOR": {
          "@helpfn": "keywords_56.htm", 
          "@name": "FOR", 
          "Definition": "#### FOR \nStatement initiates a FOR ... NEXT loop block .\nFOR var = numeric TO numeric [STEP numeric]\nDO FOR [level]  \
\nDO NEXT [level]  \nEXIT FOR [level]  \nNEXT [var]", 
          "Example": "FOR i = 0 TO last  \t\ni$ = item$[i]  \t\nIFZ i$ THEN DO NEXT  \t\nIF i$ = \"outta here\" THEN EXIT FOR  \t\nIF (i$ = \"trash\") \
THEN i = i + 3 : DO FOR  \t\nRegister(i$)\nNEXT i", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "FORMAT": {
          "@helpfn": "keywords_57.htm", 
          "@name": "FORMAT$( )", 
          "Definition": "#### FORMAT$( ) \nIntrinsic returns a formatted string from a format specification and a value to which the format is applied.\n\n\nstring$ = FORMAT$(format$, argument)", 
          "Example": "x = 23\ny$$ = 23456\nz# = 11111.222\nj$ = \"scam\"\nfa$ = \" ###\"\nfb$ = \"###,###\"\nfc$ = \"###.####^^^^^\"fd$ = \"||||||\"PRINT FORMAT$ (fa$,x)    ' \"23\"PRINT FORMAT$ (fb$,y$$) ' \"23,456\"PRINT FORMAT$ (fc$,z#)   ' \"111.1122d+002\"PRINT FORMAT$ (fd$,j$)   ' \"scam\"a$ = FORMAT$ (fa$,x) + FORMAT$ (fb$,y$$) ' a$ = \"23 23,456\"", 
          "Parameters": [
              {
                  "name": "format$", 
                  "text": "formatting specification string"
              }, 
              {
                  "name": "argument", 
                  "text": "a numeric or string   argument"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "columns.x"
      }, 
      "FUNCADDR": [
          {
              "@helpfn": "keywords_58.htm", 
              "@name": "FUNCADDR", 
              "Definition": "#### FUNCADDR \nStatement declares a variable or array to be of type FUNCADDR .\n\n\n[scope] FUNCADDR [type] variable ([parameters])  \n\n    [scope] FUNCADDR [type] array []([parameters])  \n\nAlso See", 
              "Example": "STATIC FUNCADDR a (STRING, XLONG, XLONG, XLONG)SHARED FUNCADDR DOUBLE Manglex[] (DOUBLE, DOUBLE)", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": "Scope and Type Declarations"
          }, 
          {
              "@helpfn": "keywords_59.htm", 
              "@name": "FUNCADDR( )", 
              "Definition": "#### FUNCADDR( ) \nIntrinsic converts a variable to type FUNCADDR.\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "FUNCADDRESS": {
          "@helpfn": "keywords_60.htm", 
          "@name": "FUNCADDRESS( )", 
          "Definition": "#### FUNCADDRESS( ) \nIntrinsic returns the address of function .\n  It is the same as &FuncName( ).\n\nfuncaddr = FUNCADDRESS(FuncName())\n\nfuncaddr = &FuncName()", 
          "Example": "process[GetColor] = FUNCADDRESS (XuiGetColor())process[SetColor] = FUNCADDRESS (XuiSetColor())", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "FUNCTION": {
          "@helpfn": "keywords_61.htm", 
          "@name": "FUNCTION", 
          "Definition": "#### FUNCTION \nStatement declares/defines a function.\n\nThe SFUNCTION \nStatement declares/defines a system function.\n\nThe CFUNCTION \nStatement declares/defines a C function.\n\n\nFUNCTION [type] FuncName (arguments) [defaultType]\n\n    SFUNCTION [type] FuncName (arguments) [defaultType]\n\n    CFUNCTION [type] FuncName (arguments) [defaultType]", 
          "Example": "FUNCTION Blivit(a, b, c$, d[])\nFUNCTION Bondar(i#, j#, k#, l#, m#)\nSFUNCTION DOUBLE DoLittle(DOUBLE lo, DOUBLE hi) DOUBLE \nCFUNCTION DOUBLE ArcCosh(DOUBLE arg)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "GHIGH": {
          "@helpfn": "keywords_62.htm", 
          "@name": "GHIGH( )", 
          "Definition": "#### GHIGH( ) \nIntrinsic extracts the high 32-bits from a GIANT variable (a 64-bit signed integer).\n\nThe \nGLOW( ) \nIntrinsic extracts the low 32-bits from a GIANT variable (a 64-bit signed integer).\n\n\ninteger = GHIGH(giant)\n\ninteger = GLOW(giant)", 
          "Example": "a$$ = 0x40010802DEADCODE ' a$$ = giant variableb$$ = 0x4000800080000000 ' b$$ = giant variablei = GHIGH(a$$)                ' i = 0x40010802j = GHIGH(b$$)                ' j = 0x40008000i = GLOW(a$$)                  ' i = 0xDEADCODEj = GLOW(b$$)                  ' j = 0x80000000", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is an integer.", 
          "SeeAlso": ""
      }, 
      "GIANT": [
          {
              "@helpfn": "keywords_63.htm", 
              "@name": "GIANT", 
              "Definition": "#### GIANT \nStatement declares a variable to be type GIANT .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_64.htm", 
              "@name": "GIANT( )", 
              "Definition": "#### GIANT( ) \nIntrinsic converts a variable to type GIANT .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "GIANTAT": {
          "@helpfn": "keywords_65.htm", 
          "@name": "GIANTAT( )", 
          "Definition": "#### GIANTAT( ) \nIntrinsic writes a GIANT value into a specified memory address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "GLOW": {
          "@helpfn": "keywords_67.htm", 
          "@name": "GLOW( )", 
          "Definition": "#### GLOW( ) \nIntrinsic extracts the low 32-bits from a GIANT variable .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "GMAKE": {
          "@helpfn": "keywords_68.htm", 
          "@name": "GMAKE( )", 
          "Definition": "#### GMAKE( ) \nIntrinsic creates a GIANT (a 64-bit signed integer) value from two 32-bit integers.\n\n\ngiant = GMAKE(high32, low32)", 
          "Example": "hi = 0x40008000       ' hi 32-bits of desired GIANTlo = 0x80000000       ' lo 32-bits of desired GIANTi$$ = GMAKE(hi, lo) ' i$$ = 0x4000800080000000i$$ = GMAKE(upper, lower) ' i$$ = make GIANT from two XLONGs", 
          "Parameters": [
              {
                  "name": "high32", 
                  "text": "integer value for high 32-bits"
              }, 
              {
                  "name": "low32", 
                  "text": "integer value for low 32-bits"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is a GIANT integer.", 
          "SeeAlso": ""
      }, 
      "GOADDR": [
          {
              "@helpfn": "keywords_69.htm", 
              "@name": "GOADDR", 
              "Definition": "#### GOADDR \nStatement declares a variable to be type GOADDR .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_70.htm", 
              "@name": "GOADDR( )", 
              "Definition": "#### GOADDR( ) \nIntrinsic converts a variable to type GOADDR .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "GOADDRAT": {
          "@helpfn": "keywords_70A.htm", 
          "@name": "GOADDRAT( )", 
          "Definition": "#### GOADDRAT( ) \nIntrinsic reads/writes a GOADDR value directly into memory .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "GOADDRESS": {
          "@helpfn": "keywords_71.htm", 
          "@name": "GOADDRESS( )", 
          "Definition": "#### GOADDRESS( ) \nIntrinsic returns the address of a GOTO label .\n\n\ngoaddr = GOADDRESS(label)", 
          "Example": "IF x < 0 THEN GOTO jump\njump:\ng  = GOADDRESS(jump)\nh[i] = GOADDRESS(jump)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is an integer.", 
          "SeeAlso": ""
      }, 
      "GOSUB": {
          "@helpfn": "keywords_72.htm", 
          "@name": "GOSUB", 
          "Definition": "#### GOSUB \nStatement calls a local subroutine .\n\n\nGOSUB SubName\n\n    GOSUB @subVar\n\n    GOSUB @subArray [indices]", 
          "Example": "GOSUB subroutineGOSUB @subVarGOSUB @subArray[i]", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "GOTO": {
          "@helpfn": "keywords_73.htm", 
          "@name": "GOTO", 
          "Definition": "#### GOTO \nStatement jumps to a local label .\n\n\nGOTO label\n\n\nGOTO @goVar\nGOTO @goArray[indice]\n\nGOTO jumps to a label directly, through a variable, or through an array.", 
          "Example": "GOTO labelGOTO @goVarGOTO @goArray[i]", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "HEX": {
          "@helpfn": "keywords_74.htm", 
          "@name": "HEX$( )", 
          "Definition": "#### HEX$( ) \nIntrinsic returns the hexadecimal string representation of an integer .\n\nThe \nHEXX$( ) \nIntrinsic is identical to HEX$( ) but includes a \"0x\" prefix.\n\n\nstring$ = HEX$(integers)  \n\n    string$ = HEXX$(integers)  \n\n    string$ = HEX$(integers, digits)  \n\n    string$ = HEXX$(integers, digits)    \n\n\nThe return string has as many characters as necessary to represent the\n    integer in hexadecimal, or the number specified by the second argument, whichever is\n    larger.", 
          "Example": "a = 0xDEADC0DEa$ = HEX$(a)       ' a$ = \"DEADC0DE\"a$ = HEXX$(a)      ' a$ = \"0xDEADC0DE\"a$ = HEX$(a,2)    ' a$ = \"DEADC0DE\"a$ = HEXX$(a,2)   ' a$ = \"0xDEADC0DE\"a$ = HEX$(a,12)   ' a$ = \"0000DEADC0DE\"a$ = HEXX$(a,12) ' a$ = \"0x0000DEADC0DE\"", 
          "Parameters": [
              {
                  "name": "integers", 
                  "text": "an integer value"
              }, 
              {
                  "name": "digits", 
                  "text": "number of output characters"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "HEXX": {
          "@helpfn": "keywords_75.htm", 
          "@name": "HEXX$( )", 
          "Definition": "#### HEXX$( ) \nIntrinsic returns a HEX$ with \"0x\" prefix .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "HIGH0": {
          "@helpfn": "keywords_76.htm", 
          "@name": "HIGH0( )", 
          "Definition": "#### HIGH0( ) \nIntrinsic returns the bit number of the most significant 0 bit .\n\nThe \nHIGH1( ) \nIntrinsic returns the bit number of the most significant 1 bit .  \n\ninteger = HIGH0(integer)  \n\n    integer = HIGH1(integer)", 
          "Example": "a = 0x00C03333 ' 00000000110000000011001100110011b = 0xFFFE0000 ' 11111111111111100000000000000000c = HIGH0(a)    ' c = 31d = HIGH0(b)    ' d = 16e = HIGH1(a)    ' e = 23f = HIGH1(b)    ' f = 31", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is bit number (0 - 31).", 
          "SeeAlso": ""
      }, 
      "HIGH1": {
          "@helpfn": "keywords_77.htm", 
          "@name": "HIGH1( )", 
          "Definition": "#### HIGH1( ) \nIntrinsic finds the bit number of the most significant 1 bit.\n\n    integer = HIGH1(integer)  \nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is most significate 1 bit number (0 - 31).", 
          "SeeAlso": "HIGH0( )"
      }, 
      "HIWORD": {
          "@helpfn": "xst_1.htm", 
          "@name": "HIWORD( )", 
          "Definition": "#### HIWORD( )\n function returns the upper 16-bits of an integer.\n\nhi = HIWORD(x)", 
          "Example": "x = 0x1234abcdy = HIWORD(x)   ' y = 0x1234", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is an integer.", 
          "SeeAlso": ""
      }, 
      "IF": {
          "@helpfn": "keywords_78.htm", 
          "@name": "IF", 
          "Definition": "#### IF \nStatement starts an IF TRUE test in an IF ... END IF block .\n\nAn IF ... END IF block   executes statements conditionally. If the expression\nis TRUE, then the conditional statements are carried out.\n\nIF expression THEN statements\n\n\n    IF expression THEN statements ELSE statements\n\n    IF expression THEN  \n   statements\n\n    END IF\n  \n\n    IF expression THEN  \n   statements\n\n    ELSE  \n   statements\n\n    END IF", 
          "Example": "IF a THEN PRINT \"a is non-zero\"IFZ a THEN PRINT \"a is zero\"IF a$ THEN PRINT \"a$ has contents\"IFZ a$ THEN PRINT \"a$ is empty\"IF a[] THEN PRINT \"a[] has contents\"IFZ a[] THEN PRINT \"a[] is empty\"IF (humidity > 80) THEN PRINT \"Go to the beach\"IF a THEN   IFZ b THEN      PRINT \"a is true, b is not\"   ELSE     PRINT \"a is true, b is true\"   END IFEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "IFF": [
          {
              "@helpfn": "keywords_78c.htm", 
              "@name": "IFF", 
              "Definition": "#### IF \nStatement starts an IF TRUE test in an IF ... END IF block .\n\nAn IF ... END IF block   executes statements conditionally. If the expression\nis TRUE, then the conditional statements are carried out.\n\nIF expression THEN statements\n\n\n    IF expression THEN statements ELSE statements\n\n    IF expression THEN  \n   statements\n\n    END IF\n  \n\n    IF expression THEN  \n   statements\n\n    ELSE  \n   statements\n\n    END IF", 
              "Example": "IF a THEN PRINT \"a is non-zero\"IFZ a THEN PRINT \"a is zero\"IF a$ THEN PRINT \"a$ has contents\"IFZ a$ THEN PRINT \"a$ is empty\"IF a[] THEN PRINT \"a[] has contents\"IFZ a[] THEN PRINT \"a[] is empty\"IF (humidity > 80) THEN PRINT \"Go to the beach\"IF a THEN   IFZ b THEN      PRINT \"a is true, b is not\"   ELSE     PRINT \"a is true, b is true\"   END IFEND IF", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_79.htm", 
              "@name": "IFF", 
              "Definition": "#### IFF \nStatement starts an IF FALSE test in an IF ... ENDIF block .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "IFT": [
          {
              "@helpfn": "keywords_78b.htm", 
              "@name": "IFT", 
              "Definition": "#### IF \nStatement starts an IF TRUE test in an IF ... END IF block .\n\nAn IF ... END IF block   executes statements conditionally. If the expression\nis TRUE, then the conditional statements are carried out.\n\nIF expression THEN statements\n\n\n    IF expression THEN statements ELSE statements\n\n    IF expression THEN  \n   statements\n\n    END IF\n  \n\n    IF expression THEN  \n   statements\n\n    ELSE  \n   statements\n\n    END IF", 
              "Example": "IF a THEN PRINT \"a is non-zero\"IFZ a THEN PRINT \"a is zero\"IF a$ THEN PRINT \"a$ has contents\"IFZ a$ THEN PRINT \"a$ is empty\"IF a[] THEN PRINT \"a[] has contents\"IFZ a[] THEN PRINT \"a[] is empty\"IF (humidity > 80) THEN PRINT \"Go to the beach\"IF a THEN   IFZ b THEN      PRINT \"a is true, b is not\"   ELSE     PRINT \"a is true, b is true\"   END IFEND IF", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_80.htm", 
              "@name": "IFT", 
              "Definition": "#### IFT \nStatement starts an IF TRUE test in an IF ... ENDIF block .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "IFZ": [
          {
              "@helpfn": "keywords_78a.htm", 
              "@name": "IFZ", 
              "Definition": "#### IF \nStatement starts an IF TRUE test in an IF ... END IF block .\n\nAn IF ... END IF block   executes statements conditionally. If the expression\nis TRUE, then the conditional statements are carried out.\n\nIF expression THEN statements\n\n\n    IF expression THEN statements ELSE statements\n\n    IF expression THEN  \n   statements\n\n    END IF\n  \n\n    IF expression THEN  \n   statements\n\n    ELSE  \n   statements\n\n    END IF", 
              "Example": "IF a THEN PRINT \"a is non-zero\"IFZ a THEN PRINT \"a is zero\"IF a$ THEN PRINT \"a$ has contents\"IFZ a$ THEN PRINT \"a$ is empty\"IF a[] THEN PRINT \"a[] has contents\"IFZ a[] THEN PRINT \"a[] is empty\"IF (humidity > 80) THEN PRINT \"Go to the beach\"IF a THEN   IFZ b THEN      PRINT \"a is true, b is not\"   ELSE     PRINT \"a is true, b is true\"   END IFEND IF", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_81.htm", 
              "@name": "IFZ", 
              "Definition": "#### IFZ \nStatement starts an IF ZERO test in an IF ... ENDIF block .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "IMPORT": {
          "@helpfn": "keywords_82.htm", 
          "@name": "IMPORT", 
          "Definition": "#### IMPORT statement\n imports a DLL function library, library file or object file.\n\n`IMPORT \"libname\" `\n\n`IMPORT \"filename.ext\" `\n\n`IMPORT \"filename.dec\" `\n\nIf a file extension is not given, .dll is assumed. If extension is .dll or .lib, the IMPORTed file is added to the \"LIBS=\" line in the makefile which makes the librarie's exported types, constants, and functions\nvisible to the calling program. In this case, the IMPORT statement causes \"libname.dec\" to be read and compiled, and if it exists, \"libname.dll\" is loaded and linked to the program, and its entry\nfunction is called to initialize the library.\nIf the file extension is .o or .obj,   then the name is added to a\nnew \"OBJS=\" line in the makefile and the object file is compiled along\nwith the program executable or DLL.   Any other extension is\nignored when generating the makefile.\n       \nAll IMPORTed files require an associated .dec file.   A .dec file\ncan be IMPORTed explicitly (IMPORT \"filename.dec\") if only the\nconstants and/or TYPEs are needed, and no functions are called. In this\ncase, nothing is added to the makefile.", 
          "Example": "IMPORT \"xma\"\nIMPORT \"xst\"\nIMPORT \"gdi32.dll\"\nIMPORT \"myprog.o\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "INC": {
          "@helpfn": "keywords_83.htm", 
          "@name": "INC", 
          "Definition": "#### INC \nStatement increments a variable by 1.\n\nThe DEC \nStatement decrements a variable by 1.\n\n\nINC variable\n\nDEC variable", 
          "Example": "INC a\nINC a[i]\nINC x#\nINC parent.kids\nINC parent[grid].kids\nDEC a\nDEC a[i]\nDEC x#\nDEC parent.kids\nDEC parent[grid].kids", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "INCHR": {
          "@helpfn": "keywords_84.htm", 
          "@name": "INCHR( )", 
          "Definition": "#### INCHR( ) \nIntrinsics find the first search-set character in a string .\n\n\ninteger = INCHR(searchMe$, searchFor$)  \n\n    integer = INCHR(searchMe$, searchFor$, start)  \n\n    integer = INCHRI(searchMe$, searchFor$)  \n\n    integer = INCHRI(searchMe$, searchFor$, start)  \n\n    integer = RINCHR(searchMe$, searchFor$)  \n\n    integer = RINCHR(searchMe$, searchFor$, start)  \n\n    integer = RINCHRI(searchMe$, searchFor$)  \n\n    integer = RINCHRI(searchMe$, searchFor$, start)", 
          "Example": "a$ = \"Help me please!\"b$ = \"ABCDEFG\"c$ = \"mromjtp\"a = INCHR(a$,b$)       ' a = 0 \"e\" != \"E\"a = INCHR(a$,c$)       ' a = 4 \"p\"a = INCHR(a$,c$,10)   ' a = 0 past matchesa = INCHRI(a$,b$)      ' a = 2 \"e\" = \"E\"a = INCHRI(a$,c$)      ' a = 4 \"p\"a = INCHRI(a$,c$,5)   ' a = 6 \"m\"a = RINCHR(a$,b$)      ' a = 0 \"e\" != \"e\"a = RINCHR(a$,c$)      ' a = 9 \"p\"a = RINCHR(a$,c$,7)   ' a = 6 \"m\"a = RINCHRI(a$,b$)    ' a = 14 \"e\" = \"E\"a = RINCHRI(a$,c$)    ' a = 9 \"p\"a = RINCHRI(a$,c$,3) ' a = 0 before matches", 
          "Parameters": [
              {
                  "name": "searchMe$", 
                  "text": "a string upon which a search is performed"
              }, 
              {
                  "name": "searchFor$", 
                  "text": "a search character"
              }, 
              {
                  "name": "start", 
                  "text": "optional starting position in searchMe$"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return integer value is position of the first match.   Return is 0 if search string is not found.", 
          "SeeAlso": ""
      }, 
      "INCHRI": [
          {
              "@helpfn": "keywords_84a.htm", 
              "@name": "INCHRI( )", 
              "Definition": "#### INCHR( ) \nIntrinsics find the first search-set character in a string .\n\n\ninteger = INCHR(searchMe$, searchFor$)  \n\n    integer = INCHR(searchMe$, searchFor$, start)  \n\n    integer = INCHRI(searchMe$, searchFor$)  \n\n    integer = INCHRI(searchMe$, searchFor$, start)  \n\n    integer = RINCHR(searchMe$, searchFor$)  \n\n    integer = RINCHR(searchMe$, searchFor$, start)  \n\n    integer = RINCHRI(searchMe$, searchFor$)  \n\n    integer = RINCHRI(searchMe$, searchFor$, start)", 
              "Example": "a$ = \"Help me please!\"b$ = \"ABCDEFG\"c$ = \"mromjtp\"a = INCHR(a$,b$)       ' a = 0 \"e\" != \"E\"a = INCHR(a$,c$)       ' a = 4 \"p\"a = INCHR(a$,c$,10)   ' a = 0 past matchesa = INCHRI(a$,b$)      ' a = 2 \"e\" = \"E\"a = INCHRI(a$,c$)      ' a = 4 \"p\"a = INCHRI(a$,c$,5)   ' a = 6 \"m\"a = RINCHR(a$,b$)      ' a = 0 \"e\" != \"e\"a = RINCHR(a$,c$)      ' a = 9 \"p\"a = RINCHR(a$,c$,7)   ' a = 6 \"m\"a = RINCHRI(a$,b$)    ' a = 14 \"e\" = \"E\"a = RINCHRI(a$,c$)    ' a = 9 \"p\"a = RINCHRI(a$,c$,3) ' a = 0 before matches", 
              "Parameters": "searchMe$\t\ta string upon which a search is performed\nsearchFor$\t\ta search character\nstart\t\toptional starting position in searchMe$", 
              "Remarks": "", 
              "ReturnValues": "Return integer value is position of the first match.   Return is 0 if search string is not found.", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_85.htm", 
              "@name": "INCHRI( )", 
              "Definition": "#### INCHRI( ) \nIntrinsic is a case insensitive INCHR() .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "INFILE": {
          "@helpfn": "keywords_86.htm", 
          "@name": "INFILE$( )", 
          "Definition": "#### INFILE$( ) \nIntrinsic returns the next line from an open file.\n\n\nstring$ = INFILE$(fileNumber)", 
          "Example": "FUNCTION FindStringInFile (test$, fileName$)  line = 0  ERROR (0)  found = $$FALSE  ifile = OPEN (fileName$, $$RD)  IF ERROR (-1) THEN RETURN (-1)  DO UNTIL EOF(ifile)   line$ = INFILE$ (ifile)   check = INSTR (line$, test$)   IF check THEN     found = $$TRUE     PRINT \"Found ===>> \"; line$     EXIT DO   END IF   INC line  LOOP  CLOSE (ifile)END FUNCTION", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "INLINE$": {
          "@helpfn": "keywords_87.htm", 
          "@name": "INLINE$( )", 
          "Definition": "#### INLINE$( ) \nIntrinsic returns a line from the standard input device (the keyboard).\n\nstring$ = INLINE$(prompt$)", 
          "Example": "a$ = INLINE$(\"Enter your name here > \")\nPRINT \"Ok, your name is \"; a$", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is a string.", 
          "SeeAlso": ""
      }, 
      "INSTR": {
          "@helpfn": "keywords_88.htm", 
          "@name": "INSTR( )", 
          "Definition": "#### INSTR( ) \nIntrinsics find the first substring in a string .\n\ninteger = INSTR(searchMe$,\nsearchFor$)  \n integer = INSTR(searchMe$,\nsearchFor$, start)  \n integer = INSTRI(searchMe$,\nsearchFor$)  \n integer = INSTRI(searchMe$,\nsearchFor$, start )  \n integer = RINSTR(searchMe$,\nsearchFor$)  \n integer = RINSTR(searchMe$,\nsearchFor$, start)  \n integer = RINSTRI(searchMe$,\nsearchFor$)  \n integer = RINSTRI(searchMe$,\nsearchFor$, start)", 
          "Example": "a$ = \"HEALTHY, wealthy, and wise!\"b$ = \"He\"c$ = \"alt\"a = INSTR(a$,b$)       ' a = 0 no matcha = INSTR(a$,c$)       ' a = 12 \"alt\"a = INSTR(a$,c$,13)   ' a = 0 past matcha = INSTRI(a$,b$)      ' a = 1 \"HE\" = \"He\"a = INSTRI(a$,c$)      ' a = 3 \"ALT\" = \"alt\"a = INSTRI(a$,c$,5)   ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,b$)      ' a = 0 no matcha = RINSTR(a$,c$)      ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,c$,7)   ' a = 0 before matcha = RINSTRI(a$,b$)    ' a = 1 \"HE\" = \"He\"a = RINSTRI(a$,c$)    ' a = 12 \"alt\" = \"alt\"a = RINSTRI(a$,c$,4) ' a = 3 \"ALT\" = \"alt\"", 
          "Parameters": [
              {
                  "name": "searchMe$", 
                  "text": "a string upon which a search is performed"
              }, 
              {
                  "name": "searchFor$", 
                  "text": "a search string"
              }, 
              {
                  "name": "start", 
                  "text": "optional start position in SearchMe$"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is integer position or 0 if string is not found.", 
          "SeeAlso": ""
      }, 
      "INSTRI": [
          {
              "@helpfn": "keywords_88a.htm", 
              "@name": "INSTRI( )", 
              "Definition": "#### INSTR( ) \nIntrinsics find the first substring in a string .\n\ninteger = INSTR(searchMe$,\nsearchFor$)  \n integer = INSTR(searchMe$,\nsearchFor$, start)  \n integer = INSTRI(searchMe$,\nsearchFor$)  \n integer = INSTRI(searchMe$,\nsearchFor$, start )  \n integer = RINSTR(searchMe$,\nsearchFor$)  \n integer = RINSTR(searchMe$,\nsearchFor$, start)  \n integer = RINSTRI(searchMe$,\nsearchFor$)  \n integer = RINSTRI(searchMe$,\nsearchFor$, start)", 
              "Example": "a$ = \"HEALTHY, wealthy, and wise!\"b$ = \"He\"c$ = \"alt\"a = INSTR(a$,b$)       ' a = 0 no matcha = INSTR(a$,c$)       ' a = 12 \"alt\"a = INSTR(a$,c$,13)   ' a = 0 past matcha = INSTRI(a$,b$)      ' a = 1 \"HE\" = \"He\"a = INSTRI(a$,c$)      ' a = 3 \"ALT\" = \"alt\"a = INSTRI(a$,c$,5)   ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,b$)      ' a = 0 no matcha = RINSTR(a$,c$)      ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,c$,7)   ' a = 0 before matcha = RINSTRI(a$,b$)    ' a = 1 \"HE\" = \"He\"a = RINSTRI(a$,c$)    ' a = 12 \"alt\" = \"alt\"a = RINSTRI(a$,c$,4) ' a = 3 \"ALT\" = \"alt\"", 
              "Parameters": "searchMe$\t\ta string upon which a search is performed\nsearchFor$\t\ta search string\nstart\t\toptional start position in SearchMe$", 
              "Remarks": "", 
              "ReturnValues": "Return value is integer position or 0 if string is not found.", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_89.htm", 
              "@name": "INSTRI( )", 
              "Definition": "#### INSTRI( ) \nIntrinsic is a case insensitive INSTR() .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "INT": {
          "@helpfn": "keywords_90.htm", 
          "@name": "INT( )", 
          "Definition": "#### INT( ) \nIntrinsic returns the integer part of a number.\n  It rounds downward towards negative infinity.\n\n\nThe FIX( ) \nIntrinsic returns the integer part of a number.\n  It rounds towards zero, so positive values are rounded down, while negative numbers are rounded up.\n\nfloat = INT(float)  \n\n    float = FIX(float)", 
          "Example": "PRINT INT(2.222), INT(2.552)          '  2     2PRINT INT(-2.222), INT(-2.552)       ' -3   -3PRINT FIX(2.222), FIX(2.552)          '  2     2PRINT FIX(-2.222), FIX(-2.552)       ' -2   -2PRINT SLONG(2.222), SLONG(2.552)    '  2     3PRINT SLONG(-2.222), SLONG(-2.552) ' -2   -3", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is same type as argument.", 
          "SeeAlso": ""
      }, 
      "INTERNAL_FUNCTION": [
          {
              "@helpfn": "keywords_23b.htm", 
              "@name": "INTERNAL FUNCTION", 
              "Definition": "#### DECLARE FUNCTION [type] FuncName ([parameters])  \nEXTERNAL FUNCTION [type] FuncName ([parameters])  \nINTERNAL FUNCTION [type] FuncName ([parameters])", 
              "Example": "DECLARE FUNCTION Twist()\nINTERNAL FUNCTION DOUBLE DarkSine(a#, b#, c#[])\nEXTERNAL FUNCTION DCOMPLEX DoodleDuxis(DCOMPLEX dd, DCOMPLEX ee)", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_91.htm", 
              "@name": "INTERNAL FUNCTION", 
              "Definition": "#### INTERNAL FUNCTION \nStatement declares a function to have internal scope .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "IsFiniteL": {
          "@helpfn": "IsFiniteL.htm", 
          "@name": "IsFiniteL", 
          "Definition": "#### The  function tests whether a LONGDOUBLE value is\nfinite.\nret = IsFiniteL\n(x)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "IsInfL": {
          "@helpfn": "IsInfL.htm", 
          "@name": "IsInfL", 
          "Definition": "#### The  function tests whether a LONGDOUBLE value is\ninfinite.\nret = IsInfL\n(x)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "IsNanL": {
          "@helpfn": "IsNanL.htm", 
          "@name": "IsNanL", 
          "Definition": "#### The  function tests whether a LONGDOUBLE value is NAN\n(not a number).\nret = IsNanL\n(x)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "IsNormalL": {
          "@helpfn": "IsNormalL.htm", 
          "@name": "IsNormalL", 
          "Definition": "#### The  function tests whether a LONGDOUBLE value is\nNormal.\nret = IsNormalL\n(x)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "IsSubNormalL": {
          "@helpfn": "IsSubNormalL.htm", 
          "@name": "IsSubNormalL", 
          "Definition": "#### The  function tests whether a LONGDOUBLE value is\nSubnormal.\nret = IsSubNormalL\n(x)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "IsZeroL": {
          "@helpfn": "IsZeroL.htm", 
          "@name": "IsZeroL", 
          "Definition": "#### The  function tests whether a LONGDOUBLE value is zero.\nret = IsZeroL\n(x)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "EXPLICIT": {
          "@helpfn": "keywords_explicit.htm", 
          "@name": "EXPLICIT", 
          "Definition": "#### EXPLICIT \nThe statement can only be used in the PROLOG section. When the EXPLICIT statement is used, all variables in all functions within the program must be explicitly declared using a type statement, eg, \n\nXLONG a, b, c\n\nUBYTE ub\n\nDOUBLE dd, xx, yy, zz\n\nSHARED ULONG sh", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "LCASE": {
          "@helpfn": "keywords_92.htm", 
          "@name": "LCASE$( )", 
          "Definition": "#### LCASE$( ) \nIntrinsic converts the contents of string to lower case .\n\nThe UCASE$( ) \nIntrinsic converts the contents of string to upper case .\n\n\nstring$ = LCASE$(string$)  \n\n    string$ = UCASE$(string$)", 
          "Example": "a$ = LCASE$(\"THE big LIE\") ' a$ = \"the big lie\"a$ = LCASE$(\"BIGGER LIES\") ' a$ = \"bigger lies\"a$ = UCASE$(\"THE big LIE\") ' a$ = \"THE BIG LIE\"a$ = UCASE$(\"bigger lies\") ' a$ = \"BIGGER LIES\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "LCLIP": {
          "@helpfn": "keywords_93.htm", 
          "@name": "LCLIP$( )", 
          "Definition": "#### LCLIP$( ) \nIntrinsic clips n bytes from the left end of a string.\n\nThe RCLIP$( ) \nIntrinsic clips n bytes from the right end of a string .\n\nstring$ = LCLIP$(string$)  \n\n    string$ = LCLIP$(string$, count)  \n\n    string$ = RCLIP$(string$)  \n\n    string$ = RCLIP$(string$, count)    \n\nIf the second argument, count, is not used, then the first or last character in the string is clipped.", 
          "Example": "a$ = \"This old man\"b$ = LCLIP$(a$)       ' b$ = \"his old man\"b$ = RCLIP$(a$)       ' b$ = \"This old ma\"b$ = LCLIP$(a$, 5)   ' b$ = \"old man\"b$ = LCLIP$(a$, 15) ' b$ = \"\"b$ = RCLIP$(a$, 5)   ' b$ = \"This ol\"b$ = RCLIP$(a$, 15) ' b$ = \"\"", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "string upon which clip is performed"
              }, 
              {
                  "name": "count", 
                  "text": "number of bytes to clip from string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "LEFT": {
          "@helpfn": "keywords_94.htm", 
          "@name": "LEFT$( )", 
          "Definition": "#### LEFT$( ) \nIntrinsic returns the leftmost n characters of a string.\n\nThe RIGHT$( ) \nIntrinsic returns the rightmost n characters of a string.\n\nstring$ = LEFT$(string$)  \n\n    string$ = LEFT$(string$, length)  \n\n    string$ = RIGHT$(string$)  \n\n    string$ = RIGHT$(string$, length)\n\nThese two Intrinsics copy   the first or last characters from a string. The\n    first argument is the string to copy characters from. The second argument is the desired\n    length of the result string, or 1 if no second argument is given. If the string has fewer\n    characters than the desired length, the result string is a copy of the argument string.", 
          "Example": "x$ = \"This old man\"a$ = LEFT$(x$)         ' a$ = \"T\"a$ = LEFT$(x$, 5)    ' a$ = \"This \"a$ = LEFT$(x$, 15)   ' a$ = \"This old man\"a$ = RIGHT$(x$)       ' a$ = \"n\"a$ = RIGHT$(x$, 5)   ' a$ = \"d man\"a$ = RIGHT$(x$, 15) ' a$ = \"This old man\"", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "the base string"
              }, 
              {
                  "name": "length", 
                  "text": "the desired length of characters to copy"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "LEN": {
          "@helpfn": "keywords_95.htm", 
          "@name": "LEN( )", 
          "Definition": "#### LEN( ) \nIntrinsic returns the number of characters in a string .\n\n\ninteger = LEN(string$)", 
          "Example": "x$ = \"\"y$ = \"four\"a = LEN(x$) ' a = 0a = LEN(y$) ' a = 4", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is integer.", 
          "SeeAlso": ""
      }, 
      "LIBRARY": [
          {
              "@helpfn": "keywords_96.htm", 
              "@name": "LIBRARY", 
              "Definition": "#### LIBRARY \nStatement  is reserved .", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_97.htm", 
              "@name": "LIBRARY( )", 
              "Definition": "#### LIBRARY( ) \nIntrinsic returns $$TRUE if the program is compiled as a library .\n\n\ninteger = LIBRARY(integer)", 
              "Example": "FUNCTION Entry ()    IF LIBRARY(0) THEN RETURN    InitGui ()    InitProgram ()    MessageLoop ()END FUNCTION", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Returns $$TRUE if program is a library (*.dll), $$FALSE if program is an executable (*.exe).", 
              "SeeAlso": ""
          }
      ], 
      "LJUST": [
          {
              "@helpfn": "keywords_14a.htm", 
              "@name": "LJUST$", 
              "Definition": "#### CJUST$( ), LJUST$( ), and RJUST$( )   \nIntrinsics return a justified string in a field of spaces .\n\nstring$ = CJUST$(string$,\nlength)\nstring$ =\nRJUST$(string$, length)", 
              "Example": "a$ = \"cat\"b$ = \"catamaran\"a$ = CJUST$(a$,7)      ' a$ = \"  cat  \"      (exact centering)a$ = CJUST$(a$,8)      ' a$ = \"  cat   \"     (excess space on right)a$ = CJUST$(\"xxx\",9) ' a$ = \"   xxx   \"    (exact centering)a$ = CJUST$(b$,3)      ' a$ = \"cat\"           (no fit, left justify)a$ = LJUST$(a$,6)      ' a$ = \"cat   \"        (left justify cat in 6)a$ = LJUST$(b$,7)      ' a$ = \"catamar\"     (string longer than 7)a$ = LJUST$(\"xxx\",8) ' a$ = \"xxx     \"      (left justify xxx in 8)a$ = LJUST$(b$,3)      ' a$ = \"cat\"           (string longer than 3)a$ = RJUST$(a$,6)      ' a$ = \"   cat\"        (right justify in 6)a$ = RJUST$(b$,7)      ' a$ = \"catamar\"     (string longer than 7)a$ = RJUST$(\"xxx\",8) ' a$ = \"     xxx\"      (right justify in 8)a$ = RJUST$(b$,3)      ' a$ = \"cat\"           (no fit, so left clip)", 
              "Parameters": "string$\t\tString to justify.\nlength\t\tThe total field width.", 
              "Remarks": "", 
              "ReturnValues": "The return string is justified in a field of space characters. The\nreturn string is always the specified width. If a string cannot be\nexactly centered, the extra space follows the string. If the string is\nlonger than the field, the string is left justified and clipped at the\nend of the field.", 
              "SeeAlso": "columns.x"
          }, 
          {
              "@helpfn": "keywords_98.htm", 
              "@name": "LJUST$( )", 
              "Definition": "#### LJUST$( ) \nIntrinsic returns a left justified string in a field of spaces .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "LOF": {
          "@helpfn": "keywords_99.htm", 
          "@name": "LOF( )", 
          "Definition": "#### LOF( ) \nIntrinsic returns the length of a file in bytes .\n\ninteger = LOF(fileNumber)", 
          "Example": "FUNCTION GimmeFile (filename$)   ifile = OPEN (filename$, $$RD) ' open filename$ for read only   length = LOF (ifile)                ' length = # of bytes in filename$   a$ = NULL$ (length)                  ' make a string that long   READ [ifile], a$                      ' and read the file into it   CLOSE (ifile)                           ' then close the file   RETURN (a$)                              ' and return the stringEND FUNCTION", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is an integer value of the length of the file in bytes.", 
          "SeeAlso": ""
      }, 
      "LONGDOUBLE": [
          {
              "@helpfn": "keywords_99a.htm", 
              "@name": "LONGDOUBLE", 
              "Definition": "#### The LONGDOUBLE Statement\ndeclares variables to be type LONGDOUBLE.\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": "Declarations"
          }, 
          {
              "@helpfn": "keywords_99b.htm", 
              "@name": "LONGDOUBLE( )", 
              "Definition": "#### LONGDOUBLE( ) Intrinsic\nconverts a numeric or string variable to type LONGDOUBLE.\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": "Type Conversions"
          }
      ], 
      "LONGDOUBLEAT": {
          "@helpfn": "keywords_99c.htm", 
          "@name": "LONGDOUBLEAT( )", 
          "Definition": "#### LONGDOUBLEAT( ) Intrinsic reads\nor writes a   LONGDOUBLE value directly to/from a memory address .\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "Direct Memory Access"
      }, 
      "LOOP": [
          {
              "@helpfn": "keywords_100.htm", 
              "@name": "LOOP", 
              "Definition": "#### LOOP \nStatement ends a DO ... LOOP block.\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_28f.htm", 
              "@name": "LOOP", 
              "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
              "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "LOOP_UNTIL": {
          "@helpfn": "keywords_28h.htm", 
          "@name": "LOOP UNTIL", 
          "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
          "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "LOOP_WHILE": {
          "@helpfn": "keywords_28g.htm", 
          "@name": "LOOP WHILE", 
          "Definition": "#### The above\nStatements describe a DO ... LOOP loop block .\nDO  \nDO WHILE numString\nDO UNTIL numString\nDO DO [level]\nDO LOOP [level]\nEXIT DO [level]\nLOOP  \nLOOP WHILE numString\nLOOP UNTIL numString", 
          "Example": "hash = 0IF a$ THEN  o = 0                        ' offset = 0  u = UBOUND(a$)          ' u = upper offset in a$  DO WHILE (o <= u)      ' do hash loop while offset <= upper offset   hash = hash + a${o} ' add next byte to hash   INC o                      ' offset to next byte in a$  LOOPEND IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "LOWORD": {
          "@helpfn": "xst_2.htm", 
          "@name": "LOWORD( )", 
          "Definition": "#### LOWORD( )\n function returns the low 16-bits of an integer.\n\nlow = LOWORD(x)", 
          "Example": "x = 0x1234ABCDy = LOWORD(x)   ' y = 0xABCD", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is an integer.", 
          "SeeAlso": ""
      }, 
      "LTRIM": [
          {
              "@helpfn": "keywords_101.htm", 
              "@name": "LTRIM$( )", 
              "Definition": "#### LTRIM$( ) \nIntrinsic trims the spaces and tabs from the left of a string .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_178a.htm", 
              "@name": "LTRIM$( )", 
              "Definition": "#### The  trim intrinsics remove spaces and tabs from the left and right ends of string .\n\n\nstring$ = TRIM$(string$)   ' trims both ends of string   \n\n    string$ = LTRIM$(string$) ' trims left end of string \n\n    string$ = RTRIM$(string$) ' trims right end of string \n\nThe trim intrinsics trim whitespace and non-printable characters from both\n    ends of a string, the left end of a string, or the right end of a string. All characters\n    from 0x00 to 0x20 and 0x80 to 0xFF are removed.", 
              "Example": "x$ = \"\\n\\nXXX\\t\\0\\1\\2\"y$ = \"\\t \\nZZZ \\t\\t\\n\"a$ = LTRIM$(x$) ' a$ = \"XXX\\t\\0\\1\\2\"a$ = LTRIM$(y$) ' a$ = \"ZZZ \\t\\t\\n\"a$ = RTRIM$(x$) ' a$ = \"\\n\\nXXX\"a$ = RTRIM$(y$) ' a$ = \"\\t \\nZZZ\"a$ = TRIM$(x$)   ' a$ = \"XXX\"a$ = TRIM$(y$)   ' a$ = \"YYY\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "MAKE": {
          "@helpfn": "keywords_102.htm", 
          "@name": "MAKE( )", 
          "Definition": "#### The  MAKE( )  Intrinsic makes\na bit-field . \ninteger = MAKE(integer,\nbitspec)  \n integer = MAKE(integer, width,\noffset)", 
          "Example": "i = 0xAAAAAAAA      ' i = 0b10101010101010101010101010101010j = BITFIELD(5,7) ' j = bitspec for 5-bit wide field at bit 7-11a = MAKE(i,j)       ' a = 0b00000000000000000000010100000000", 
          "Parameters": [
              {
                  "name": "integer", 
                  "text": "source bitfield"
              }, 
              {
                  "name": "bitspec", 
                  "text": "bitfield specification returned from BITFIELD( )"
              }, 
              {
                  "name": "width", 
                  "text": "bitfield width"
              }, 
              {
                  "name": "offset", 
                  "text": "bitfield offset"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is an integer.", 
          "SeeAlso": ""
      }, 
      "MAKEFILE": {
          "@helpfn": "keywords_102b.htm", 
          "@name": "MAKEFILE( )", 
          "Definition": "#### The  MAKEFILE( ) statement\nuses the given custom makefile to build the program executable or DLL. \nMAKEFILE \"myMakeFile\"\nMAKEFILE \"myMakeFile.mak\"\nMAKEFILE\n\"makefile.xxx\"", 
          "Example": "MAKEFILE \"xexe.xxx\"     ' use custom template that will include xbl.dll objects into executable", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "MAKELONG": {
          "@helpfn": "xst_3.htm", 
          "@name": "MAKELONG( )", 
          "Definition": "#### MAKELONG( )\n function returns an integer value from two short values.\n  The lo argument is placed in the lower 16-bits and the hi\nargument is placed in the upper 16-bits.\n\nMAKELONG(lo, hi)", 
          "Example": "y = MAKELONG (0xabcd, 0x1234)   ' y = 0x1234abcd", 
          "Parameters": [
              {
                  "name": "lo", 
                  "text": "a short value"
              }, 
              {
                  "name": "hi", 
                  "text": "a short value"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is an integer.", 
          "SeeAlso": ""
      }, 
      "MAX": {
          "@helpfn": "keywords_103.htm", 
          "@name": "MAX( )", 
          "Definition": "#### The  MAX( )  Intrinsic\nreturns the maximum of two arguments (larger) . \nThe  MIN( )  Intrinsic\nreturns the minimum of two arguments (smaller) .\nnumeric = MAX(numeric1,\nnumeric2)  \n numeric = MIN(numeric1,\nnumeric2)\n  \nMAX( ) and MIN(   ) return the maximum or minimum of two values.   \nMaximum means closest to positive infinity and negative means closest\nto negative     infinity. Both values must be the same data type, and\nthe result is the same type as the     arguments.", 
          "Example": "a = 23b = 123c = -47a# = 23b# = 123.45c# = .0001d# = -4d+22m = MAX(a,b)      ' m = 123m = MAX(a,c)      ' m = 23m# = MAX(a#,b#) ' m# = 123#m# = MAX(a#,c#) ' m# = 23#m# = MAX(a#,d#) ' m# = 23#m = MIN(a,b)      ' m = 23m = MIN(a,c)      ' m = -47m# = MIN(a#,b#) ' m# = 23#m# = MIN(a#,c#) ' m# = .0001m# = MIN(a#,d#) ' m# = -4d+22", 
          "Parameters": [
              {
                  "name": "numeric1", 
                  "text": "a numeric type"
              }, 
              {
                  "name": "numeric2", 
                  "text": "a numeric type"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is of same type as parameters.", 
          "SeeAlso": ""
      }, 
      "MID": {
          "@helpfn": "keywords_104.htm", 
          "@name": "MID$( )", 
          "Definition": "#### MID$( ) \nIntrinsic extracts an arbitrary part of a string .\n\nstring$ = MID$(string$,\nstart)  \n string$ = MID$(string$, start,\nlength) \nMID$( ) copies part of a string. The first argument is the string to\ncopy from. The second argument is the position of the first character\nto copy. The third argument is the number of characters to copy. If no\nthird argument is given, the rest of the characters in the string are\ncopied.", 
          "Example": "x$ = \"This old man\"a$ = MID$(x$, 5)      ' a$ = \" old man\"a$ = MID$(x$, 5, 6) ' a$ = \" old m\"a$ = MID$(x$, 7, 4) ' a$ = \"ld m\"a$ = MID$(x$, 7, 9) ' a$ = \"ld man\"", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "a base string"
              }, 
              {
                  "name": "start", 
                  "text": "starting position of first character to copy"
              }, 
              {
                  "name": "length", 
                  "text": "length of string to copy"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "MIN": {
          "@helpfn": "keywords_105.htm", 
          "@name": "MIN( )", 
          "Definition": "#### MIN( ) \nIntrinsic returns the minimum of two arguments (smaller) .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "MOD": {
          "@helpfn": "keywords_106.htm", 
          "@name": "MOD", 
          "Definition": "#### MOD \nOperator applies the arithmetic MODULUS operator .\n\n\ninteger = numeric1 MOD numeric2\nMOD returns the integer modulus, which is the remainder\n    from a division. Floating point operands are converted to XLONG before the modulus\n    operation is performed.", 
          "Example": "a = 23 : b = 5 : c = 9 : d = 2x = a MOD b ' x = 3 (23/5 = 4 + remainder 3)x = b MOD a ' x = 5 (5/23 = 0 + remainder 5)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "NEXT": [
          {
              "@helpfn": "keywords_107.htm", 
              "@name": "NEXT", 
              "Definition": "#### NEXT \nStatement ends a FOR ... NEXT loop .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_56d.htm", 
              "@name": "NEXT", 
              "Definition": "#### FORStatement initiates a FOR ... NEXT loop block .\nFOR var = numeric TO numeric [STEP numeric]\nDO FOR [level]  \nDO NEXT [level]  \nEXIT FOR [level]  \nNEXT [var]", 
              "Example": "FOR i = 0 TO last  i$ = item$[i]  IFZ i$ THEN DO NEXT  IF i$ = \"outta here\" THEN EXIT FOR  IF (i$ = \"trash\") THEN i = i + 3 : DO FOR  Register (i$)NEXT i", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "NOT": {
          "@helpfn": "keywords_108.htm", 
          "@name": "NOT", 
          "Definition": "#### NOT \nOperator applies a bitwise NOT operator (inverts all bits) .\n  The return integer's bits are all inverted.\n\ninteger = NOT\ninteger", 
          "Example": "a = 0xAAAAFF00 ' a = 0b10101010101010101111111100000000a = NOT a         ' a = 0x555500FF                       ' a = 0b01010101010101010000000011111111", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is an integer.", 
          "SeeAlso": ""
      }, 
      "NULL": {
          "@helpfn": "keywords_109.htm", 
          "@name": "NULL$( )", 
          "Definition": "#### NULL$( ) \nIntrinsic creates a string of n null characters.\n  The argument is\n    the number of null characters in the result string. The string returned has the specified\n    number of null characters, plus the additional null character that serves as a terminator.\n    The null terminator is not part of the string and must not be changed. Null character is '0' or \\0.\n\nstring$ = NULL$(length)", 
          "Example": "FUNCTION GimmeFile (filename$)   ifile = OPEN (filename$, $$RD)   length = LOF (ifile) ' length of file in bytes   a$ = NULL$ (length)   ' make a string that long   READ [ifile], a$   CLOSE (ifile)   RETURN (a$)END FUNCTION", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is a string of null characters. Null character is '0' or \\0.", 
          "SeeAlso": ""
      }, 
      "OCT": {
          "@helpfn": "keywords_110.htm", 
          "@name": "OCT$( )", 
          "Definition": "#### OCT$( ) \nIntrinsic returns an octal string from an integer (1234567012...) .\nThe OCTO$( ) Intrinsic is\nidentical to OCT$( ) but adds a prefix of \"0o\" to the return string.\nstring$ = OCT$(integer)  \n string$ = OCTO$(integer)  \n string$ = OCT(integer,\ndigits)  \n string$ = OCTO$(integer,\ndigits)  \nOCT$( ) returns the octal string representation of an integer. The\nreturn string has as many characters as necessary to represent the\ninteger in octal, or the number specified by the second argument,\nwhichever is larger.", 
          "Example": "a = 0o00007643210a$ = OCT$(a)       ' a$ = \"76543210\"a$ = OCTO$(a)      ' a$ = \"0o76543210\"a$ = OCT$(a,2)    ' a$ = \"76543210\"a$ = OCTO$(a,2)   ' a$ = \"0o76543210\"a$ = OCT$(a,12)   ' a$ = \"000076543210\"a$ = OCTO$(a,12) ' a$ = \"0o000076543210\"", 
          "Parameters": [
              {
                  "name": "integer", 
                  "text": "integer value to convert to octal string"
              }, 
              {
                  "name": "digits", 
                  "text": "number of characters to use"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "OCTO": {
          "@helpfn": "keywords_111.htm", 
          "@name": "OCTO$( )", 
          "Definition": "#### OCTO$( ) \nIntrinsic returns an octal string from an integer (0o1234567012...) .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "OPEN": {
          "@helpfn": "keywords_112.htm", 
          "@name": "OPEN( )", 
          "Definition": "#### OPEN( ) \nIntrinsic opens a disk, console, or communications file.\n\n\n\n\nfileNumber = OPEN(fileName$, mode)\nThe following are valid modes:\n\n\n\n\n\n\n\nOpening an existing file prepares the existing file for reading and/or writing, or if\n    no file yet exists, creates a new file. Opening a new file deletes any existing file with\n    the same name before it creates the new, empty file. The filenumber of the opened file is\n    returned.", 
          "Example": "'' open printer port examplepfile = OPEN(\"LPT1\", $$WR)PRINT[pfile], \"Printing some text\"CLOSE(pfile)", 
          "Parameters": [
              {
                  "name": "fileName$", 
                  "text": "name of file to open"
              }, 
              {
                  "name": "mode", 
                  "text": "method"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is an integer file number.", 
          "SeeAlso": "CLOSEfiledemo.x"
      }, 
      "OR": {
          "@helpfn": "keywords_113.htm", 
          "@name": "OR", 
          "Definition": "#### The  OR  Operator applies a\nbitwise OR operator. \nThe XOR  Operator applies a\nbitwise XOR operator. \ninteger = integer1 OR integer2  \ninteger = integer1 XOR integer2", 
          "Example": "a = 0x05F5   ' 0000010111110101b = 0xFFA0   ' 1111111110100000c = a OR b   ' c = 0xFFF5                  ' 1111111111110101c = a XOR b ' c = 0xFA55                  ' 1111101001010101", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "PACKED": {
          "@helpfn": "keywords_113b.htm", 
          "@name": "PACKED", 
          "Definition": "#### The PACKED statement begins\na user-defined packed composite data type declaration block. \nPACKED USERDEFINEDTYPE\nEND TYPE", 
          "Example": "PACKED COLOR   USHORT .red   USHORT .green   USHORT .blue   USHORT .intensityEND TYPE", 
          "Parameters": "", 
          "Remarks": "The PACKED statement allows the creation of user-defined types that\nhave exactly the specified number of bytes defined by the sum of it's\ncomponents, and no more. By default, XBasic/XBLite will pad most\ncomponents to either 4 or 8 bytes, regardless of it's natural type. A\nUBYTE component contains 1 byte but will be padded with 3 bytes to be\naligned on a 4 byte boundary. For example, consider the following user\ndefined type:\nUSER has a total of 15 bytes, but a SIZE() of 24 bytes, because of\nautomatic alignment of the type's members. This can be confusing when\ncalling a non-XBasic DLL, or reading a file created by a program in\nanother language.\nWith the PACKED statement, a type like USER can be created that has no\ninternal pads, and a SIZE() of exactly 15 bytes:", 
          "ReturnValues": "", 
          "SeeAlso": "TYPE"
      }, 
      "POF": {
          "@helpfn": "keywords_114.htm", 
          "@name": "POF( )", 
          "Definition": "#### The  POF( )  Intrinsic\nreturns the position of the file pointer for an open disk file. \ninteger = POF(fileNumber)", 
          "Example": "ifile = OPEN (filename$, $$RD) ' open a file to readfinal = LOF(ifile)                   ' final = length of filename$line$ = INFILE$(ifile)             ' line$ = first text line in filepos = POF(ifile)                      ' pos = file pointer after first line", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is an integer   file pointer position.", 
          "SeeAlso": ""
      }, 
      "PRINT": {
          "@helpfn": "keywords_115.htm", 
          "@name": "PRINT", 
          "Definition": "#### PRINT \nThe PRINT statement prints to a standard output device (console, printer, or COM port) or to a disk file. The '?' character can be used as a substitute for the PRINT\nstatement.\nPRINT[[fileNumber ,]]\n[arguments] [, or ;]\n  \nPRINT is used to send numeric and/or string arguments to a standard\noutput device  (console, printer, or COM port) or to a disk file.\n  By\ndefault, the data is sent to the console. The console is created and\ndisplayed\nusing .\nNo\nspace is printed between arguments separated by a semi-colon, though\neach subsequent semi-colon prints one space.   Arguments preceded\nby a comma are spaced to the next tab position before they are printed.\nA semi-colon at the end of the argument list suppresses the newline\ncharacter\n( \"\\n\" ) that is otherwise printed.", 
          "Example": "age = 25\nname$ = \"Sophia\"\na = 4\nb$ = \"cat\"\nc# = -3.3\nPRINT  ' Prints a blank line\nPRINT [ofile] ' Prints a blank line to a file\nPRINT \"Her age is\"; age       ' Prints \"Her age is 25\"\nPRINT \"Her age is\";;; age    ' Prints \"Her age is     25\"\nPRINT \"Her name is \"; name$ ' Prints \"Her name is Sophia\"\nPRINT \"Her name is\", name$   ' Prints \"Her name is Sophia\"\nPRINT \"Her name is\",, name$ ' Prints \"Her name is     Sophia\"\nPRINT a; b$; c#  ' Prints \" 4cat-3.3\"\nPRINT a, b$, c#   ' Prints \" 4 cat -3.3\"\nPRINT c#; b$, a  ' Prints \"-3.3cat   4\"\nPRINT [ofile], a, b, c#      ' Prints \" 4 cat -3.3\" to ofile", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstCreateConsole"
      }, 
      "PROGRAM": [
          {
              "@helpfn": "keywords_116.htm", 
              "@name": "PROGRAM", 
              "Definition": "#### The  statement begins and names a program.   The\nargument must be a literal string, beginning with an upper or lower\ncase letter and containing only alpha-numeric characters.   Any\nprogram that contains an EXPORT block must be named in a PROGRAM\nstatement (ie, any program compiled as a DLL), and the name must be\nidentical to the file name, without a path or extent.\n\nPROGRAM \"name\"", 
              "Example": "' if compiled as a DLL library, then the filename is random.xPROGRAM \"random\"", 
              "Parameters": "", 
              "Remarks": "statements are usually optional in programs compiled as\nEXEs, since such programs rarely export functions.   DLLs always\nrequire a PROGRAM statement.\"\nA  string that contains spaces or special characters\nwill usually not generate a compiler error, but may cause runtime\nerrors when the DLL is used.   Only the characters A - Z, a - z,\nand 0 - 9 should be used in the PROGRAM statement.   Because the\nprogram name must be the same as the file name, these restrictions also\napply to the file name.   Characters ordinarily acceptable in a\nfile name, such as ~!*?_()[]{} and others, should not be used in the\nname of a DLL or its source code.", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_117.htm", 
              "@name": "PROGRAM$( )", 
              "Definition": "#### PROGRAM$( ) \nIntrinsic returns program name defined by the PROGRAM statement .\n\n\nstring$ = PROGRAM$(integer)", 
              "Example": "program$ = PROGRAM$(0)", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "QUIT": {
          "@helpfn": "keywords_118.htm", 
          "@name": "QUIT( )", 
          "Definition": "#### QUIT( ) \nIntrinsic quits executing the program (terminates program). It then\nreturns to the program which called it, which is usually the operating system.\n  The return value is lost since the     program is terminated before\nit can return from the call. The argument is passed to the     program that\nran the current program.\n\n\nQUIT(integer)", 
          "Example": "QUIT (0)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "RCLIP": {
          "@helpfn": "keywords_119.htm", 
          "@name": "RCLIP$( )", 
          "Definition": "#### RCLIP$( ) \nIntrinsic clips n bytes from the right end of a string .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "READ": [
          {
              "@helpfn": "keywords_120.htm", 
              "@name": "READ", 
              "Definition": "#### READ \nStatement reads from a disk file into variables.  The first\nargument is the filenumber of the file to read from. The variables can\nbe any combination of numeric variables, string variables, composite\nvariables, composite variable components, or one dimensional arrays of\nany type except strings.\n\n\nREAD [fileNumber], variables", 
              "Example": "DIM a[31]DIM a#[63]a$ = NULL$(256)READ [ifile], a@@, b@@, c@@ ' read 1 byte each into UBYTE variablesREAD [ifile], a, b, c          ' read 4 bytes each into XLONG variablesREAD [ifile], a!, b!, c!      ' read 4 bytes each into SINGLE variablesREAD [ifile], a#, b#, c#      ' read 8 bytes each into DOUBLE variablesREAD [ifile], a$                  ' read 256 bytes to fill STRING a$READ [ifile], a[]                ' read 128 bytes to fill XLONG a[31]READ [ifile], a#[]               ' read 512 bytes to fill DOUBLE a#[63]READ [ofile], pixel             ' read all bytes in composite variableREAD [ofile], pixel.color    ' read all bytes in componentREAD [ofile], name.kid[]      ' read all bytes in component array", 
              "Parameters": "fileNumber\t\ta valid file number returned from OPEN( )\nvariables\t\ta comma separated list of variables", 
              "Remarks": "For information on using DATA with READ, see .", 
              "ReturnValues": "", 
              "SeeAlso": "WRITEfiledemo.x"
          }, 
          {
              "@helpfn": "keywords_dataa.htm", 
              "@name": "READ", 
              "Definition": "#### DATA statement is used to\nstore string data.   This data can be retrieved with calls to READ.\nAll data must be stored as strings. \n   DATA \"value\"\n[,\"value1\", ...]\nThe READ statement is\nused to retrieve data and and assign it to a variable.   The\nvariables can be any combination of numeric variables or string\nvariables. The READ statement will be convert the string data to the\ntype of the corresponding variable.\n   READ a$ [,b...]", 
              "Example": "DATA \"123\", \"abcd\", \"1.234\"READ a, a$, a#", 
              "Parameters": "", 
              "Remarks": "The READ statement can be used to read data from a file. See .", 
              "ReturnValues": "", 
              "SeeAlso": "eliza.x"
          }
      ], 
      "REDIM": {
          "@helpfn": "keywords_121.htm", 
          "@name": "REDIM", 
          "Definition": "#### REDIM \nStatement redimensions an array but preserves its contents .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "RETURN": {
          "@helpfn": "keywords_122.htm", 
          "@name": "RETURN", 
          "Definition": "#### RETURN \n #### EXIT FUNCTION\nStatement returns from a function (not from a GOSUB) .\n\n\nRETURN [expression]\n\nEXIT FUNCTION [expression]", 
          "Example": "RETURN  ' return zero or empty string\nRETURN a  ' return value of a\nRETURN a$  ' return string a$\nRETURN ((a+b)*(c+d))   ' return value of numeric expression\nRETURN (a$ + b$ + c$) ' return value of string expression\nEXIT FUNCTION  ' return zero or empty string\nEXIT FUNCTION 5  ' return value of 5\nEXIT FUNCTION (a * b) ' return value of a * b", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "RGB": {
          "@helpfn": "xst_4.htm", 
          "@name": "RGB( )", 
          "Definition": "#### RGB( )\n function returns a color value from three UBYTE color\ncomponents, r, g, and b.\n\nRGB(r, g, b)", 
          "Example": "mycolor = RGB(0x12, 0x34, 0x45)white = RGB(0xFF, 0xFF, 0xFF)", 
          "Parameters": [
              {
                  "name": "r", 
                  "text": "UBYTE value (0-255)"
              }, 
              {
                  "name": "g", 
                  "text": "UBYTE value (0-255)"
              }, 
              {
                  "name": "b", 
                  "text": "UBYTE value (0-255)"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is an integer.", 
          "SeeAlso": ""
      }, 
      "RIGHT": {
          "@helpfn": "keywords_123.htm", 
          "@name": "RIGHT$( )", 
          "Definition": "#### RIGHT$( ) \nIntrinsic extracts the rightmost n characters of a string .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "RINCHR": [
          {
              "@helpfn": "keywords_124.htm", 
              "@name": "RINCHR( )", 
              "Definition": "#### RINCHR( ) Intrinsic is the same as INCHR except in the reverse search direction .\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_84b.htm", 
              "@name": "RINCHR( )", 
              "Definition": "#### INCHR( ) \nIntrinsics find the first search-set character in a string .\n\n\ninteger = INCHR(searchMe$, searchFor$)  \n\n    integer = INCHR(searchMe$, searchFor$, start)  \n\n    integer = INCHRI(searchMe$, searchFor$)  \n\n    integer = INCHRI(searchMe$, searchFor$, start)  \n\n    integer = RINCHR(searchMe$, searchFor$)  \n\n    integer = RINCHR(searchMe$, searchFor$, start)  \n\n    integer = RINCHRI(searchMe$, searchFor$)  \n\n    integer = RINCHRI(searchMe$, searchFor$, start)", 
              "Example": "a$ = \"Help me please!\"b$ = \"ABCDEFG\"c$ = \"mromjtp\"a = INCHR(a$,b$)       ' a = 0 \"e\" != \"E\"a = INCHR(a$,c$)       ' a = 4 \"p\"a = INCHR(a$,c$,10)   ' a = 0 past matchesa = INCHRI(a$,b$)      ' a = 2 \"e\" = \"E\"a = INCHRI(a$,c$)      ' a = 4 \"p\"a = INCHRI(a$,c$,5)   ' a = 6 \"m\"a = RINCHR(a$,b$)      ' a = 0 \"e\" != \"e\"a = RINCHR(a$,c$)      ' a = 9 \"p\"a = RINCHR(a$,c$,7)   ' a = 6 \"m\"a = RINCHRI(a$,b$)    ' a = 14 \"e\" = \"E\"a = RINCHRI(a$,c$)    ' a = 9 \"p\"a = RINCHRI(a$,c$,3) ' a = 0 before matches", 
              "Parameters": "searchMe$\t\ta string upon which a search is performed\nsearchFor$\t\ta search character\nstart\t\toptional starting position in searchMe$", 
              "Remarks": "", 
              "ReturnValues": "Return integer value is position of the first match.   Return is 0 if search string is not found.", 
              "SeeAlso": ""
          }
      ], 
      "RINCHRI": [
          {
              "@helpfn": "keywords_125.htm", 
              "@name": "RINCHRI( )", 
              "Definition": "#### RINCHRI( ) Intrinsic is the same as RINCHR() except is case insensitive .\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_84c.htm", 
              "@name": "RINCHRI( )", 
              "Definition": "#### INCHR( ) \nIntrinsics find the first search-set character in a string .\n\n\ninteger = INCHR(searchMe$, searchFor$)  \n\n    integer = INCHR(searchMe$, searchFor$, start)  \n\n    integer = INCHRI(searchMe$, searchFor$)  \n\n    integer = INCHRI(searchMe$, searchFor$, start)  \n\n    integer = RINCHR(searchMe$, searchFor$)  \n\n    integer = RINCHR(searchMe$, searchFor$, start)  \n\n    integer = RINCHRI(searchMe$, searchFor$)  \n\n    integer = RINCHRI(searchMe$, searchFor$, start)", 
              "Example": "a$ = \"Help me please!\"b$ = \"ABCDEFG\"c$ = \"mromjtp\"a = INCHR(a$,b$)       ' a = 0 \"e\" != \"E\"a = INCHR(a$,c$)       ' a = 4 \"p\"a = INCHR(a$,c$,10)   ' a = 0 past matchesa = INCHRI(a$,b$)      ' a = 2 \"e\" = \"E\"a = INCHRI(a$,c$)      ' a = 4 \"p\"a = INCHRI(a$,c$,5)   ' a = 6 \"m\"a = RINCHR(a$,b$)      ' a = 0 \"e\" != \"e\"a = RINCHR(a$,c$)      ' a = 9 \"p\"a = RINCHR(a$,c$,7)   ' a = 6 \"m\"a = RINCHRI(a$,b$)    ' a = 14 \"e\" = \"E\"a = RINCHRI(a$,c$)    ' a = 9 \"p\"a = RINCHRI(a$,c$,3) ' a = 0 before matches", 
              "Parameters": "searchMe$\t\ta string upon which a search is performed\nsearchFor$\t\ta search character\nstart\t\toptional starting position in searchMe$", 
              "Remarks": "", 
              "ReturnValues": "Return integer value is position of the first match.   Return is 0 if search string is not found.", 
              "SeeAlso": ""
          }
      ], 
      "RINSTR": [
          {
              "@helpfn": "keywords_126.htm", 
              "@name": "RINSTR( )", 
              "Definition": "#### RINSTR( ) Intrinsic is the same as INSTR() except is reverse search direction.\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_88b.htm", 
              "@name": "RINSTR( )", 
              "Definition": "#### INSTR( ) \nIntrinsics find the first substring in a string .\n\ninteger = INSTR(searchMe$,\nsearchFor$)  \n integer = INSTR(searchMe$,\nsearchFor$, start)  \n integer = INSTRI(searchMe$,\nsearchFor$)  \n integer = INSTRI(searchMe$,\nsearchFor$, start )  \n integer = RINSTR(searchMe$,\nsearchFor$)  \n integer = RINSTR(searchMe$,\nsearchFor$, start)  \n integer = RINSTRI(searchMe$,\nsearchFor$)  \n integer = RINSTRI(searchMe$,\nsearchFor$, start)", 
              "Example": "a$ = \"HEALTHY, wealthy, and wise!\"b$ = \"He\"c$ = \"alt\"a = INSTR(a$,b$)       ' a = 0 no matcha = INSTR(a$,c$)       ' a = 12 \"alt\"a = INSTR(a$,c$,13)   ' a = 0 past matcha = INSTRI(a$,b$)      ' a = 1 \"HE\" = \"He\"a = INSTRI(a$,c$)      ' a = 3 \"ALT\" = \"alt\"a = INSTRI(a$,c$,5)   ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,b$)      ' a = 0 no matcha = RINSTR(a$,c$)      ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,c$,7)   ' a = 0 before matcha = RINSTRI(a$,b$)    ' a = 1 \"HE\" = \"He\"a = RINSTRI(a$,c$)    ' a = 12 \"alt\" = \"alt\"a = RINSTRI(a$,c$,4) ' a = 3 \"ALT\" = \"alt\"", 
              "Parameters": "searchMe$\t\ta string upon which a search is performed\nsearchFor$\t\ta search string\nstart\t\toptional start position in SearchMe$", 
              "Remarks": "", 
              "ReturnValues": "Return value is integer position or 0 if string is not found.", 
              "SeeAlso": ""
          }
      ], 
      "RINSTRI": [
          {
              "@helpfn": "keywords_127.htm", 
              "@name": "RINSTRI( )", 
              "Definition": "#### RINSTRI( ) Intrinsic is the same as RINSTR() except is case insensitive .\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_88c.htm", 
              "@name": "RINSTRI( )", 
              "Definition": "#### INSTR( ) \nIntrinsics find the first substring in a string .\n\ninteger = INSTR(searchMe$,\nsearchFor$)  \n integer = INSTR(searchMe$,\nsearchFor$, start)  \n integer = INSTRI(searchMe$,\nsearchFor$)  \n integer = INSTRI(searchMe$,\nsearchFor$, start )  \n integer = RINSTR(searchMe$,\nsearchFor$)  \n integer = RINSTR(searchMe$,\nsearchFor$, start)  \n integer = RINSTRI(searchMe$,\nsearchFor$)  \n integer = RINSTRI(searchMe$,\nsearchFor$, start)", 
              "Example": "a$ = \"HEALTHY, wealthy, and wise!\"b$ = \"He\"c$ = \"alt\"a = INSTR(a$,b$)       ' a = 0 no matcha = INSTR(a$,c$)       ' a = 12 \"alt\"a = INSTR(a$,c$,13)   ' a = 0 past matcha = INSTRI(a$,b$)      ' a = 1 \"HE\" = \"He\"a = INSTRI(a$,c$)      ' a = 3 \"ALT\" = \"alt\"a = INSTRI(a$,c$,5)   ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,b$)      ' a = 0 no matcha = RINSTR(a$,c$)      ' a = 12 \"alt\" = \"alt\"a = RINSTR(a$,c$,7)   ' a = 0 before matcha = RINSTRI(a$,b$)    ' a = 1 \"HE\" = \"He\"a = RINSTRI(a$,c$)    ' a = 12 \"alt\" = \"alt\"a = RINSTRI(a$,c$,4) ' a = 3 \"ALT\" = \"alt\"", 
              "Parameters": "searchMe$\t\ta string upon which a search is performed\nsearchFor$\t\ta search string\nstart\t\toptional start position in SearchMe$", 
              "Remarks": "", 
              "ReturnValues": "Return value is integer position or 0 if string is not found.", 
              "SeeAlso": ""
          }
      ], 
      "RJUST": [
          {
              "@helpfn": "keywords_128.htm", 
              "@name": "RJUST$( )", 
              "Definition": "#### RJUST$( ) Intrinsic right justifies a string in field of spaces.\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_14b.htm", 
              "@name": "RJUST$", 
              "Definition": "#### CJUST$( ), LJUST$( ), and RJUST$( )   \nIntrinsics return a justified string in a field of spaces .\n\nstring$ = CJUST$(string$,\nlength)\nstring$ =\nRJUST$(string$, length)", 
              "Example": "a$ = \"cat\"b$ = \"catamaran\"a$ = CJUST$(a$,7)      ' a$ = \"  cat  \"      (exact centering)a$ = CJUST$(a$,8)      ' a$ = \"  cat   \"     (excess space on right)a$ = CJUST$(\"xxx\",9) ' a$ = \"   xxx   \"    (exact centering)a$ = CJUST$(b$,3)      ' a$ = \"cat\"           (no fit, left justify)a$ = LJUST$(a$,6)      ' a$ = \"cat   \"        (left justify cat in 6)a$ = LJUST$(b$,7)      ' a$ = \"catamar\"     (string longer than 7)a$ = LJUST$(\"xxx\",8) ' a$ = \"xxx     \"      (left justify xxx in 8)a$ = LJUST$(b$,3)      ' a$ = \"cat\"           (string longer than 3)a$ = RJUST$(a$,6)      ' a$ = \"   cat\"        (right justify in 6)a$ = RJUST$(b$,7)      ' a$ = \"catamar\"     (string longer than 7)a$ = RJUST$(\"xxx\",8) ' a$ = \"     xxx\"      (right justify in 8)a$ = RJUST$(b$,3)      ' a$ = \"cat\"           (no fit, so left clip)", 
              "Parameters": "string$\t\tString to justify.\nlength\t\tThe total field width.", 
              "Remarks": "", 
              "ReturnValues": "The return string is justified in a field of space characters. The\nreturn string is always the specified width. If a string cannot be\nexactly centered, the extra space follows the string. If the string is\nlonger than the field, the string is left justified and clipped at the\nend of the field.", 
              "SeeAlso": "columns.x"
          }
      ], 
      "ROTATEL": {
          "@helpfn": "keywords_129a.htm", 
          "@name": "ROTATEL", 
          "Definition": "#### ROTATEL( ) \nIntrinsic rotates a word left n bits.\n\nThe \nROTATER( ) \nIntrinsic rotates a word right n bits.\n\n\ninteger = ROTATEL(integer, count)  \ninteger = ROTATER(integer, count)\n  \nThese two Intrinsics rotate bits right or left by any number of\n    bits. Bits shifted out the least significant bit are recirculated back into the most\n    significant bit.", 
          "Example": "x = 0xDEADC0DEy = 0x01020304a = ROTATER(x, 16) ' a = 0xC0DEDEADa = ROTATER(y, 4)   ' a = 0x40102030a = ROTATEL(x, 8)   ' a = 0xADC0DEDEa = ROTATEL(y, 4)   ' a = 0x10203040", 
          "Parameters": [
              {
                  "name": "integer", 
                  "text": "value to rotate bits"
              }, 
              {
                  "name": "count", 
                  "text": "number of bits right or left to rotate"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is an integer.", 
          "SeeAlso": ""
      }, 
      "ROTATER": [
          {
              "@helpfn": "keywords_129.htm", 
              "@name": "ROTATER", 
              "Definition": "#### ROTATEL( ) \nIntrinsic rotates a word left n bits.\n\nThe \nROTATER( ) \nIntrinsic rotates a word right n bits.\n\n\ninteger = ROTATEL(integer, count)  \ninteger = ROTATER(integer, count)\n  \nThese two Intrinsics rotate bits right or left by any number of\n    bits. Bits shifted out the least significant bit are recirculated back into the most\n    significant bit.", 
              "Example": "x = 0xDEADC0DEy = 0x01020304a = ROTATER(x, 16) ' a = 0xC0DEDEADa = ROTATER(y, 4)   ' a = 0x40102030a = ROTATEL(x, 8)   ' a = 0xADC0DEDEa = ROTATEL(y, 4)   ' a = 0x10203040", 
              "Parameters": "integer\t\tvalue to rotate bits\ncount\t\tnumber of bits right or left to rotate", 
              "Remarks": "", 
              "ReturnValues": "Return value is an integer.", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_130.htm", 
              "@name": "ROTATER", 
              "Definition": "#### ROTATER( ) \nIntrinsic rotates a word right n bits.\n\ninteger = ROTATER(integer,\ncount)\nSee", 
              "Example": "a = 0b10000000000000011000000000000001'PRINTFOR i = 0 TO 32   r = ROTATER(a,i)                   ' rotate right   l = ROTATEL(a,i)                   ' rotate left   y = ROTATEL(a,32-i)            ' rotate right   z = ROTATER(a,32-i)            ' rotate left   PRINT BIN$(r,32);; BIN$(l,32);;; BIN$(y,32);; BIN$(z,32) ' print bitsNEXT i", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": "ROTATEL( )"
          }
      ], 
      "ROUND": {
          "@helpfn": "round.htm", 
          "@name": "ROUND", 
          "Definition": "#### The ROUND( ) Intrinsic rounds\nthe argument towards the nearest whole number. If the fractional part\nof the parameter is exactly 0.5 then\nit is rounded up to the higher number i.e towards positive infinity.\nfloat = ROUND(float)", 
          "Example": "a# = 3.2b# = 3.5c# = 3.8d# = -7.2e# = -7.5f# = -7.8g# = ROUND(a#)\t'g# = 3.0h# = ROUND(b#)\t'h# = 4.0i# = ROUND(c#)\t'i# = 4.0j# = ROUND(d#)\t'j# = -7.0k# = ROUND(e#)\t'k# = -7.0l# = ROUND(f#)\t'l# = -8.0", 
          "Parameters": "", 
          "Remarks": "ROUND() can introduce a bias in statistical calculations because it\nalways rounds .5 upwards. If this is a problem,   it can largely be\novercome\nby using  which rounds .5 up or\ndown to whichever is the even\nnumber.", 
          "ReturnValues": "The return TYPE is the same as the parameter TYPE.", 
          "SeeAlso": ""
      }, 
      "ROUNDNE": {
          "@helpfn": "roundne.htm", 
          "@name": "ROUNDNE", 
          "Definition": "#### The ROUNDNE( ) Intrinsic\nrounds\nthe argument towards the nearest whole number. If the fractional part\nof the parameter is exactly 0.5 then\nit is rounded up or down to whichever result is even.\nfloat = ROUNDNE(float)", 
          "Example": "a# = 3.2b# = 3.5c# = 3.8d# = 4.2e# = 4.5f# = 4.8g# = ROUNDNE(a#)\t'g# = 3.0h# = ROUNDNE(b#)\t'h# = 4.0i# = ROUNDNE(c#)\t'i# = 4.0j# = ROUNDNE(d#)\t'j# = 4.0k# = ROUNDNE(e#)\t'k# = 4.0   EVENl# = ROUNDNE(f#)\t'l# = 5.0", 
          "Parameters": "", 
          "Remarks": "ROUNDNE() can be used instead of ROUND() to avoid the bias that can be\nintroduced by always rounding .5 upwards.", 
          "ReturnValues": "The return TYPE is the same as the parameter TYPE.", 
          "SeeAlso": "ROUND()"
      }, 
      "RTRIM": [
          {
              "@helpfn": "keywords_131.htm", 
              "@name": "RTRIM$", 
              "Definition": "#### RTRIM$( ) \nIntrinsic trims the spaces and tabs from the right end of a string .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_178b.htm", 
              "@name": "RTRIM$( )", 
              "Definition": "#### The  trim intrinsics remove spaces and tabs from the left and right ends of string .\n\n\nstring$ = TRIM$(string$)   ' trims both ends of string   \n\n    string$ = LTRIM$(string$) ' trims left end of string \n\n    string$ = RTRIM$(string$) ' trims right end of string \n\nThe trim intrinsics trim whitespace and non-printable characters from both\n    ends of a string, the left end of a string, or the right end of a string. All characters\n    from 0x00 to 0x20 and 0x80 to 0xFF are removed.", 
              "Example": "x$ = \"\\n\\nXXX\\t\\0\\1\\2\"y$ = \"\\t \\nZZZ \\t\\t\\n\"a$ = LTRIM$(x$) ' a$ = \"XXX\\t\\0\\1\\2\"a$ = LTRIM$(y$) ' a$ = \"ZZZ \\t\\t\\n\"a$ = RTRIM$(x$) ' a$ = \"\\n\\nXXX\"a$ = RTRIM$(y$) ' a$ = \"\\t \\nZZZ\"a$ = TRIM$(x$)   ' a$ = \"XXX\"a$ = TRIM$(y$)   ' a$ = \"YYY\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "SBYTE": [
          {
              "@helpfn": "keywords_132.htm", 
              "@name": "SBYTE", 
              "Definition": "#### SBYTE \nStatement declares variables to be of type SBYTE .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_133.htm", 
              "@name": "SBYTE( )", 
              "Definition": "#### SBYTE( ) \nIntrinsic converts a variable to type SBYTE .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "SBYTEAT": {
          "@helpfn": "keywords_134.htm", 
          "@name": "SBYTEAT( )", 
          "Definition": "#### SBYTEAT( ) \nIntrinsic reads/writes a SBYTE value into a specified memory address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SCOMPLEX": {
          "@helpfn": "keywords_136.htm", 
          "@name": "SCOMPLEX", 
          "Definition": "#### SCOMPLEX \nStatement declares variables to be of type SCOMPLEX, single precision complex .\n\n\nSee", 
          "Example": "SCOMPLEX ii, jj, kkSCOMPLEX x[], y[], z[]SHARED SCOMPLEX a, b, c, a[], b[], c[]", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SEEK": {
          "@helpfn": "keywords_137.htm", 
          "@name": "SEEK( )", 
          "Definition": "#### SEEK( ) \nIntrinsic sets file pointer position .\n\n\n[filePointer =] SEEK(fileNumber, filePointer) \n\nSEEK( ) will move the file pointer of a\n    file to a new position. The new position can be beyond the end of the file.", 
          "Example": "SEEK (dataFile, recordNumber * recordSize)fp = SEEK(ifile, d3)", 
          "Parameters": [
              {
                  "name": "fileNumber", 
                  "text": "a valid file number returned by OPEN( )"
              }, 
              {
                  "name": "filePointer", 
                  "text": "file position (in bytes)"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Optional return is integer value of new file pointer", 
          "SeeAlso": ""
      }, 
      "SELECT": {
          "@helpfn": "keywords_138.htm", 
          "@name": "SELECT", 
          "Definition": "#### SELECT \nStatement as part of SELECT CASE.\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SELECT_CASE": {
          "@helpfn": "keywords_139.htm", 
          "@name": "SELECT CASE", 
          "Definition": "#### SELECT CASE \nStatement begins a multi-way decision block .\n\n\nSELECT CASE TRUE  \n\n    SELECT CASE FALSE  \n\n    SELECT CASE expression\n\n    SELECT CASE ALL TRUE  \n\n    SELECT CASE ALL FALSE  \n\n    SELECT CASE ALL expression\n\n    END SELECT \n\n\n    \n\n    \n\n    \n\n    \n\n    END SELECT marks the end of every SELECT CASE block.", 
          "Example": "SELECT CASE a             ' test against the contents of aSELECT CASE a$            ' test against the contents of a$SELECT CASE TRUE         ' test for non-zero or non-empty stringSELECT CASE FALSE       ' test for zero or empty stringSELECT CASE ALL a       ' test all cases against the contents of aSELECT CASE ALL a$      ' test all cases against the contents of a$SELECT CASE ALL TRUE   ' test all cases for non-zero or non-empty$SELECT CASE ALL FALSE ' test all cases for zero or empty string'SELECT CASE x   CASE a       : PRINT \"a = x\"   CASE b,c,d : PRINT \"a or b or c = x\"   CASE e+f    : PRINT \"a = e+f\"   CASE ELSE   : PRINT \"None of the above\"END SELECT'SELECT CASE ALL TRUE   CASE i, j, k      : PRINT \"i or j or k is non-zero\"   CASE temp > 100 : PRINT \"Get in the shade\"   CASE a$, b$+c$   : PRINT \"a$ or b$+c$ is has contents\"   CASE !raining    : PRINT \"You can go out now\"   CASE ERROR(-1)   : PRINT \"Something bad happened\"   CASE hope[]       : PRINT \"There is hope[]\"   CASE ALL            : PRINT \"All printed are true\"END SELECT", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SET": {
          "@helpfn": "keywords_140.htm", 
          "@name": "SET( )", 
          "Definition": "#### SET( ) \nIntrinsic sets specified range of bits.\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SFUNCTION": [
          {
              "@helpfn": "keywords_141.htm", 
              "@name": "SFUNCTION( )", 
              "Definition": "#### SFUNCTION( ) Intrinsic declares or defines a \"system\" function.See", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_61a.htm", 
              "@name": "SFUNCTION", 
              "Definition": "#### FUNCTION \nStatement declares/defines a function.\n\nThe SFUNCTION \nStatement declares/defines a system function.\n\nThe CFUNCTION \nStatement declares/defines a C function.\n\n\nFUNCTION [type] FuncName (arguments) [defaultType]\n\n    SFUNCTION [type] FuncName (arguments) [defaultType]\n\n    CFUNCTION [type] FuncName (arguments) [defaultType]", 
              "Example": "FUNCTION Blivit (a, b, c$, d[])FUNCTION Bondar (i#, j#, k#, l#, m#)SFUNCTION DOUBLE DoLittle (DOUBLE lo, DOUBLE hi) DOUBLECFUNCTION DOUBLE ArcCosh (DOUBLE arg)", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "SGN": {
          "@helpfn": "keywords_142.htm", 
          "@name": "SGN( )", 
          "Definition": "#### SGN( ) \nIntrinsic returns the sign of a number (-1 or 0 or +1) .\n\nThe \nSIGN( ) \nIntrinsic returns the sign of a number (-1 or   +1) .\n\n\ninteger = SGN(numeric)  \n\n    integer = SIGN(numeric)  \n\nBoth Intrinsics return the sign of a number. If the argument is\n    negative, return -1 . If the argument is positive, return +1 . If the argument is zero,\n    SGN( ) returns 0 while SIGN( ) returns +1 .", 
          "Example": "i = -23j = 0k = +74x# = -123.4y# = +.0002PRINT SGN(i), SIGN(i)    ' Prints \"-1 -1\"PRINT SGN(j), SIGN(j)    ' Prints \" 0 +1\"PRINT SGN(k), SIGN(k)    ' Prints \"+1 +1\"PRINT SGN(x#), SIGN(x#) ' Prints \"-1 -1\"PRINT SGN(y#), SIGN(y#) ' Prints \"+1 +1\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is   1, -1, or 0", 
          "SeeAlso": ""
      }, 
      "SHARED": {
          "@helpfn": "keywords_143.htm", 
          "@name": "SHARED", 
          "Definition": "#### SHARED \nStatement declares variables to have SHARED scope .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SHELL": {
          "@helpfn": "keywords_144.htm", 
          "@name": "SHELL( )", 
          "Definition": "#### SHELL( ) \nIntrinsic executes a command line string .\n\n\n[integer=] SHELL(command$)    \n\n\nSHELL is used to execute a program. The command string executes\n    as it would at an operating system prompt except the full program name including extent\n    must be specified. Control then returns control to the program. Some operating systems\n    support concurrent execution of both processes, meaning the program does not wait until\n    the newly started program completes. Concurrent execution is indicated by adding a colon \":\" prefix to the command string.", 
          "Example": "SHELL (\"xblite.exe prog.x -bc\")   ' wait for xblite.exe to completeSHELL (\":xblite.exe prog.x -bc\") ' execute concurrently if supportedSHEll (\":c/windows/notepad.exe c:/xblite/readme.txt\") ' open file in notepad", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SIGN": [
          {
              "@helpfn": "keywords_142a.htm", 
              "@name": "SIGN( )", 
              "Definition": "#### SGN( ) \nIntrinsic returns the sign of a number (-1 or 0 or +1) .\n\nThe \nSIGN( ) \nIntrinsic returns the sign of a number (-1 or   +1) .\n\n\ninteger = SGN(numeric)  \n\n    integer = SIGN(numeric)  \n\nBoth Intrinsics return the sign of a number. If the argument is\n    negative, return -1 . If the argument is positive, return +1 . If the argument is zero,\n    SGN( ) returns 0 while SIGN( ) returns +1 .", 
              "Example": "i = -23j = 0k = +74x# = -123.4y# = +.0002PRINT SGN(i), SIGN(i)    ' Prints \"-1 -1\"PRINT SGN(j), SIGN(j)    ' Prints \" 0 +1\"PRINT SGN(k), SIGN(k)    ' Prints \"+1 +1\"PRINT SGN(x#), SIGN(x#) ' Prints \"-1 -1\"PRINT SGN(y#), SIGN(y#) ' Prints \"+1 +1\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is   1, -1, or 0", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_145.htm", 
              "@name": "SIGN( )", 
              "Definition": "#### SIGN( ) \nIntrinsic returns the sign of a number (-1 or +1) .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "SIGNED": [
          {
              "@helpfn": "keywords_146.htm", 
              "@name": "SIGNED$( )", 
              "Definition": "#### SIGNED$( ) Intrinsic converts a variable to type STRING (leading \"-\" or \"+\").See", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_167b.htm", 
              "@name": "SIGNED$( )", 
              "Definition": "#### The various  \nSTRING( ) \nIntrinsics convert variables to type STRING..\n\n\nstring$ = STRING(numeric)  \n\n    string$ = STRING$(numeric)  \n\n    string$ = SIGNED$(numeric)  \n\n    string$ = STR$(numeric)  \n\nThe only\n    difference between these intrinsics is the form the sign takes in the returned string.\n    STRING( ) and STRING$( ) puts a leading \"-\" on negative numbers and nothing on\n    positive numbers. SIGNED$( ) puts a leading \"+\" or \"-\" on all numbers,\n    including \"+0\" . STR$( ) puts a leading \"-\" on negative numbers and a\n    leading space character \" \" on positive numbers.", 
              "Example": "a# = -23.456b# = +11.111a$ = STRING(a#) + STRING(b#)    ' a$ = \"-23.45611.111\"a$ = STRING$(a#) + STRING$(b#) ' a$ = \"-23.45611.111\"a$ = SIGNED$(a#) + SIGNED$(b#) ' a$ = \"-23.456+11.111\"a$ = STR$(a#) + STR$(b#)          ' a$ = \"-23.456 11.111\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is a string.", 
              "SeeAlso": ""
          }
      ], 
      "SINGLE": {
            "@helpfn": "keywords_147.htm", 
            "@name": "SINGLE", 
            "Definition": "#### SINGLE \nStatement declares variables to be type SINGLE .\n\nSee", 
            "Example": "", 
            "Parameters": "", 
            "Remarks": "", 
            "ReturnValues": "", 
            "SeeAlso": ""
          }, 
        "SINGLE( )": {
            "@helpfn": "keywords_148.htm", 
            "@name": "SINGLE( )", 
            "Definition": "#### SINGLE( ) \nIntrinsic converts a variable to type SINGLE .\n\nSee", 
            "Example": "", 
            "Parameters": "", 
            "Remarks": "", 
            "ReturnValues": "", 
            "SeeAlso": ""
        }, 
      "SINGLEAT": {
          "@helpfn": "keywords_149.htm", 
          "@name": "SINGLEAT( )", 
          "Definition": "#### SINGLEAT( ) \nIntrinsic reads/writes a SINGLE value into a specified memory address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SIZE": {
          "@helpfn": "keywords_151.htm", 
          "@name": "SIZE( )", 
          "Definition": "#### SIZE( ) \nIntrinsic returns the size of a data type in bytes .\n\n\ninteger = SIZE(typename)  \n\n    integer = SIZE(variable)  \n\n    integer = SIZE(array [])  \n\n    integer = SIZE(array[n])  \n\n    integer = SIZE(array[n,])  \n\n    integer = SIZE(composite)  \n\n    integer = SIZE(composite.component)  \n\n    integer = SIZE(composite.component[])  \n\n    integer = SIZE(composite.component[n])  \n\n    integer = SIZE(composite.componentString)\n\nSIZE( ) return the size of data in bytes. The\n    argument can be any of the following:", 
          "Example": "name$ = \"John Galt\"a = SIZE(SLONG)         ' size of built-in type SLONG (4 bytes)a = SIZE(COLOR)         ' size of user-defined composite type COLORa = SIZE(employee)    ' size of variable 'employee'a = SIZE(name$)         ' size of string variable (9 bytes)a = SIZE(prog[])       ' size of highest dimension of prog[ ]a = SIZE(prog[n,]      ' size of sub-array prog[n, ]a = SIZE(prog[m,]      ' size of sub-array prog[m, ]a = SIZE(box)            ' size of composite variable boxa = SIZE(box.top)      ' size of composite.component box.topa = SIZE(box.ele[])   ' size of composite.array box.ele[ ]a = SIZE(box.ele[1]) ' size of composite.array element box.ele[1]a = SIZE(box.name)    ' size of composite string box.name", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is integer.", 
          "SeeAlso": ""
      }, 
      "SLONG": [
          {
              "@helpfn": "keywords_152.htm", 
              "@name": "SLONG", 
              "Definition": "#### SLONG \nStatement declares variables to be type SLONG .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_153.htm", 
              "@name": "SLONG( )", 
              "Definition": "#### SLONG( ) \nIntrinsic converts a variable to type SLONG .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "SLONGAT": {
          "@helpfn": "keywords_154.htm", 
          "@name": "SLONGAT( )", 
          "Definition": "#### SLONGAT( ) \nIntrinsic reads/writes a SLONG value into a specified memory address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SMAKE": {
          "@helpfn": "keywords_156.htm", 
          "@name": "SMAKE( )", 
          "Definition": "#### SMAKE( ) \nIntrinsic makes a type SINGLE from a 32-bit integer value .\n\n\nsingle = SMAKE(integer)\n\n\nSMAKE( ) changes the type of a 32-bit integer to SINGLE . The\n    bit pattern of the return value is the same as the integer argument, but the return type\n    is SINGLE .", 
          "Example": "x = 0x48000000   ' x = 0x48000000 (a large integer number)a! = SMAKE(x)    ' a! = 0s48000000 (a small SINGLE number)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is type SINGLE.", 
          "SeeAlso": ""
      }, 
      "SPACE": {
          "@helpfn": "keywords_157.htm", 
          "@name": "SPACE$( )", 
          "Definition": "#### SPACE$( ) \nIntrinsic creates a string of n space characters .\n\n\nstring$ = SPACE$(length)", 
          "Example": "a$ = SPACE$(4)                   ' a$ = \"      \"a$ = \"x\" + SPACE$(2) + \"x\" ' a$ = \"x   x\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is a string filled with spaces.", 
          "SeeAlso": ""
      }, 
      "SSHORT": [
          {
              "@helpfn": "keywords_158.htm", 
              "@name": "SSHORT", 
              "Definition": "#### SSHORT \nStatement declares variables to be type SSHORT, signed short .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_159.htm", 
              "@name": "SSHORT( )", 
              "Definition": "#### SSHORT( ) \nIntrinsic converts variable to type SSHORT .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "SSHORTAT": {
          "@helpfn": "keywords_160.htm", 
          "@name": "SSHORTAT( )", 
          "Definition": "#### SSHORTAT( ) \nIntrinsic reads/writes a SSHORT value into a specified memory address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "STATIC": {
          "@helpfn": "keywords_162.htm", 
          "@name": "STATIC", 
          "Definition": "#### STATIC \nStatement declares variables to be STATIC scope .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "STEP": {
          "@helpfn": "keywords_163.htm", 
          "@name": "STEP", 
          "Definition": "#### STEP \nAuxiliary increments size in a FOR ... TO ... STEP ... NEXT block .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "STOP": {
          "@helpfn": "keywords_164.htm", 
          "@name": "STOP", 
          "Definition": "#### STOP \nStatement stops program execution at current line .\n\nSTOP", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "STR": [
          {
              "@helpfn": "keywords_165.htm", 
              "@name": "STR$( )", 
              "Definition": "#### STR$( ) \nIntrinsic converts variable to type STRING (leading \"-\" or \" \") .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_167c.htm", 
              "@name": "STR$( )", 
              "Definition": "#### The various  \nSTRING( ) \nIntrinsics convert variables to type STRING..\n\n\nstring$ = STRING(numeric)  \n\n    string$ = STRING$(numeric)  \n\n    string$ = SIGNED$(numeric)  \n\n    string$ = STR$(numeric)  \n\nThe only\n    difference between these intrinsics is the form the sign takes in the returned string.\n    STRING( ) and STRING$( ) puts a leading \"-\" on negative numbers and nothing on\n    positive numbers. SIGNED$( ) puts a leading \"+\" or \"-\" on all numbers,\n    including \"+0\" . STR$( ) puts a leading \"-\" on negative numbers and a\n    leading space character \" \" on positive numbers.", 
              "Example": "a# = -23.456b# = +11.111a$ = STRING(a#) + STRING(b#)    ' a$ = \"-23.45611.111\"a$ = STRING$(a#) + STRING$(b#) ' a$ = \"-23.45611.111\"a$ = SIGNED$(a#) + SIGNED$(b#) ' a$ = \"-23.456+11.111\"a$ = STR$(a#) + STR$(b#)          ' a$ = \"-23.456 11.111\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is a string.", 
              "SeeAlso": ""
          }
      ], 
      "STRING": [
          {
              "@helpfn": "keywords_166.htm", 
              "@name": "STRING", 
              "Definition": "#### STRING \nStatement declares variables to be type STRING .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_167.htm", 
              "@name": "STRING( )", 
              "Definition": "#### The various  \nSTRING( ) \nIntrinsics convert variables to type STRING..\n\n\nstring$ = STRING(numeric)  \n\n    string$ = STRING$(numeric)  \n\n    string$ = SIGNED$(numeric)  \n\n    string$ = STR$(numeric)  \n\nThe only\n    difference between these intrinsics is the form the sign takes in the returned string.\n    STRING( ) and STRING$( ) puts a leading \"-\" on negative numbers and nothing on\n    positive numbers. SIGNED$( ) puts a leading \"+\" or \"-\" on all numbers,\n    including \"+0\" . STR$( ) puts a leading \"-\" on negative numbers and a\n    leading space character \" \" on positive numbers.", 
              "Example": "a# = -23.456b# = +11.111a$ = STRING(a#) + STRING(b#)    ' a$ = \"-23.45611.111\"a$ = STRING$(a#) + STRING$(b#) ' a$ = \"-23.45611.111\"a$ = SIGNED$(a#) + SIGNED$(b#) ' a$ = \"-23.456+11.111\"a$ = STR$(a#) + STR$(b#)          ' a$ = \"-23.456 11.111\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is a string.", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_167a.htm", 
              "@name": "STRING$( )", 
              "Definition": "#### The various  \nSTRING( ) \nIntrinsics convert variables to type STRING..\n\n\nstring$ = STRING(numeric)  \n\n    string$ = STRING$(numeric)  \n\n    string$ = SIGNED$(numeric)  \n\n    string$ = STR$(numeric)  \n\nThe only\n    difference between these intrinsics is the form the sign takes in the returned string.\n    STRING( ) and STRING$( ) puts a leading \"-\" on negative numbers and nothing on\n    positive numbers. SIGNED$( ) puts a leading \"+\" or \"-\" on all numbers,\n    including \"+0\" . STR$( ) puts a leading \"-\" on negative numbers and a\n    leading space character \" \" on positive numbers.", 
              "Example": "a# = -23.456b# = +11.111a$ = STRING(a#) + STRING(b#)    ' a$ = \"-23.45611.111\"a$ = STRING$(a#) + STRING$(b#) ' a$ = \"-23.45611.111\"a$ = SIGNED$(a#) + SIGNED$(b#) ' a$ = \"-23.456+11.111\"a$ = STR$(a#) + STR$(b#)          ' a$ = \"-23.456 11.111\"", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is a string.", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_168.htm", 
              "@name": "STRING$( )", 
              "Definition": "#### STRING$( ) \nIntrinsic converts variable to type STRING (leading \"-\" or \"\") .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "STUFF$": {
          "@helpfn": "keywords_169.htm", 
          "@name": "STUFF$( )", 
          "Definition": "#### STUFF$( ) \nIntrinsic stuffs one string into another .\n\nstring$ = STUFF$(stringInto$,\nstringFrom$, start)  \
\n string$ = STUFF$(stringInto$,\nstringFrom$, start, length)\nSTUFF$( ) is used to stuff one string into another. Stuff stringFrom$\ninto \
stringInto$ starting at start. Stuff no more than length\ncharacters.", 
          "Example": "x$ = \"This lazy man\"y$ = \"flabberghast\"z$ = \"is wolf\"a$ = STUFF$(x$, y$, 6, 4) ' a$ = \"This flab man\"a$ = \
STUFF$(x$, y$, 6)      ' a$ = \"This flabberg\"a$ = STUFF$(x$, z$, 6)      ' a$ = \"This is wolfn\"a$ = STUFF$(x$, z$, 6, 5) ' a$ = \"This is woman\"", 
          "Parameters": [
              {
                  "name": "stringInto$", 
                  "text": "target string"
              }, 
              {
                  "name": "stringFrom$", 
                  "text": "string to stuff"
              }, 
              {
                  "name": "start", 
                  "text": "starting position in stringInto$ to place stringFrom$"
              }, 
              {
                  "name": "length", 
                  "text": "number of characters to stuff"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SUB": {
          "@helpfn": "keywords_170.htm", 
          "@name": "SUB", 
          "Definition": "#### SUB \nStatement begins a subroutine.\nThe EXIT SUB Statement exits a subroutine before its end.\nThe END SUB Statement ends a subroutine.\n\n\nSUB SubroutineName\n\n\nA subroutine is a portion of a function that can be called only from within the same\n    function by GOSUB SubroutineName.\n\nEND SUB returns to the statement following the GOSUB.\n\nEXIT SUB jumps to the END SUB which then returns.", 
          "Example": "SUB Sandwich\n   entry = Convert (a, b)\n   IFZ entry THEN EXIT SUB ' exit the subroutine\n   entry = Chew (a, b)\nEND SUB", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SUBADDR": [
          {
              "@helpfn": "keywords_171.htm", 
              "@name": "SUBADDR", 
              "Definition": "#### SUBADDR \nStatement declares variables to be type SUBADDR .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_172.htm", 
              "@name": "SUBADDR( )", 
              "Definition": "#### SUBADDR( ) \nIntrinsic converts a variable to type SUBADDR .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "SUBADDRAT": {
          "@helpfn": "keywords_172A.htm", 
          "@name": "SUBADDRAT( )", 
          "Definition": "#### SUBADDR( ) \nIntrinsic reads/writes a SUBADDR value directly into a memory address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SUBADDRESS": {
          "@helpfn": "keywords_173.htm", 
          "@name": "SUBADDRESS( )", 
          "Definition": "#### SUBADDRESS( ) \nIntrinsic returns the address of a subroutine .\n\n\nsubaddr = SUBADDRESS(sublabel)", 
          "Example": "g = SUBADDRESS(SubName)       ' g = address of subroutine \nSubNameh[i] = SUBADDRESS(SumArray) ' h[i] = address of subroutine SumArray", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SWAP": {
          "@helpfn": "keywords_174.htm", 
          "@name": "SWAP", 
          "Definition": "#### SWAP \nStatement swaps the values of the same type.\n\n\nSWAP string1$, string2$\n\n    SWAP variable1, variable2\n\n    SWAP arrayNode1, arrayNode2\n\nSWAP is used to swap the following:", 
          "Example": "SWAP a, b             ' swap XLONG variablesSWAP a#, b#          ' swap DOUBLE variablesSWAP a$, b$          ' swap STRING variablesSWAP a, b[n]         ' swap XLONG variable with XLONG array elementSWAP a[i], b[j]    ' swap XLONG array elementsSWAP a$[i], b$[j] ' swap STRING array elementsSWAP a$[i], b$      ' swap STRING array element with stringSWAP a[], b[]       ' swap two entire arraysSWAP a[], b[i,]    ' swap array with a sub-arraySWAP a[i,], b[i,] ' swap two sub-arrays", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "SignBitL": {
          "@helpfn": "SignBitL.htm", 
          "@name": "SignBitL", 
          "Definition": "#### SignBitL \nThe  function returns the sign of a LONGDOUBLE value.\nsign = SignBitL\n(x)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "TAB": {
          "@helpfn": "keywords_175.htm", 
          "@name": "TAB( )", 
          "Definition": "#### TAB( ) \nIntrinsic appends spaces in a PRINT string$ to get to a horizontal character position.\n  TAB( ) is valid only in PRINT statements.\n\n\nTAB(integer)", 
          "Example": "PRINT a; TAB(10); b; TAB(24); c; TAB(40); d$; TAB(60); ePRINT TAB(40); x, y, z", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "THEN": {
          "@helpfn": "keywords_176.htm", 
          "@name": "THEN", 
          "Definition": "#### THEN \nAuxiliary is in IF ... THEN ... ELSE ... ENDIF blocks .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "TO": {
          "@helpfn": "keywords_177.htm", 
          "@name": "TO", 
          "Definition": "#### TO \nAuxiliary is in FOR...NEXT blocks and ATTACH statements.\n\nSee \nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "TRIM": {
          "@helpfn": "keywords_178.htm", 
          "@name": "TRIM$( )", 
          "Definition": "#### TRIM \nThe trim intrinsics remove spaces and tabs from the left and right ends of string .\n\n\nstring$ = TRIM$(string$)   ' trims both ends of string   \n\n    string$ = LTRIM$(string$) ' trims left end of string \n\n    string$ = RTRIM$(string$) ' trims right end of string \n\nThe trim intrinsics trim whitespace and non-printable characters from both\n    ends of a string, the left end of a string, or the right end of a string. All characters\n    from 0x00 to 0x20 and 0x80 to 0xFF are removed.", 
          "Example": "x$ = \"\\n\\nXXX\\t\\0\\1\\2\"y$ = \"\\t \\nZZZ \\t\\t\\n\"a$ = LTRIM$(x$) ' a$ = \"XXX\\t\\0\\1\\2\"a$ = LTRIM$(y$) ' a$ = \"ZZZ \\t\\t\\n\"a$ = RTRIM$(x$) ' a$ = \"\\n\\nXXX\"a$ = RTRIM$(y$) ' a$ = \"\\t \\nZZZ\"a$ = TRIM$(x$)   ' a$ = \"XXX\"a$ = TRIM$(y$)   ' a$ = \"YYY\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "TRUE": {
          "@helpfn": "keywords_179.htm", 
          "@name": "TRUE", 
          "Definition": "#### TRUE Statement is optional in SELECT CASE statements.\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "TYPE": [
          {
              "@helpfn": "keywords_180.htm", 
              "@name": "TYPE", 
              "Definition": "#### The  TYPE  Statement begins a\nuser-defined composite data type declaration block. \nThe   END TYPE  Statement\nends a user-defined composite data type block. \nThe UNION  Statement begins a\nunion overlay.   UNION statements are valid only within TYPE\ndeclaration blocks.\nThe   END UNION  Statement\nends a union overlay.\n  \n TYPE TYPENAME\nEND TYPE\nUNION\nEND UNION", 
              "Example": "TYPE COLOR   USHORT .red   USHORT .green   USHORT .blue   USHORT .intensityEND TYPE'TYPE POINT   XLONG .x   XLONG .y   COLOR .colorEND TYPE'TYPE LINE   POINT .a   POINT .b   XLONG .thicknessEND TYPE'TYPE DPOINT   DOUBLE .x   DOUBLE .y   COLOR .colorEND TYPE'TYPE ARBITRARY    ' hold an arbitrary data type value   UNION               ' the following overlay each other      SBYTE .sbyte      UBYTE .ubyte      SSHORT .sshort      USHORT .ushort      SLONG .slong      ULONG .ulong      XLONG .xlong      GIANT .giant      SINGLE .single      DOUBLE .double      SCOMPLEX .scomplex      DCOMPLEX .dcomplex   END UNION       ' end overlay   XLONG .type    ' type currently stored in the variableEND TYPE", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_181.htm", 
              "@name": "TYPE( )", 
              "Definition": "#### TYPE( ) \nIntrinsic returns the type number of variable.\n\n\ninteger = TYPE(typeName)  \n\n    integer = TYPE(typeName.component)  \n\n    integer = TYPE(variable)  \n\n    integer = TYPE(variable.component)  \n\n    integer = TYPE(array[])  \n\n    integer = TYPE(array [subscripts,])  \n\nTYPE( ) returns the type number of a built-in type,\n    composite type, composite type component, variable, component of a composite variable,\n    array, or array node.\n    \n\nShared constants are defined for the built-in types. User-defined types are assigned\n    during compilation. A given user-defined type is not necessarily assigned the same type\n    number on subsequent compilations, or from library to library. Don't make any assumptions\n    about the assignment of type numbers in function libraries or other external modules.", 
              "Example": "a = TYPE(SLONG)                ' a = type number of SLONG ($$SLONG)a = TYPE(DCOMPLEX)            ' a = type number of DCOMPLEX ($$DCOMPLEX)a = TYPE(DCOMPLEX.I)         ' a = type number of component ($$DOUBLE)a = TYPE(employee)            ' a = type number of variable employeea = TYPE(maxValue[])         ' a = type number of array maxValue[]a = TYPE(prog[func,])       ' a = type number of node ($$XLONG)a = TYPE(employee.salary) ' a = type number of variable component", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is an integer constant.", 
              "SeeAlso": ""
          }
      ], 
      "UBOUND": {
          "@helpfn": "keywords_182.htm", 
          "@name": "UBOUND( )", 
          "Definition": "#### UBOUND( ) \nIntrinsic returns the upper bound of a string or any dimension of an array .\n\n\n\ninteger = UBOUND(string$)  \n\n    integer = UBOUND(array[])  \n\n    integer = UBOUND(array[subscripts,])", 
          "Example": "x$ = \"\"y$ = \"0\"z$ = \"012345\"DIM a[]DIM b[0]DIM c[7]DIM d[3,]DIM x[11]DIM y[15]DIM z[31]ATTACH x[] TO d[0]ATTACH y[] TO d[1]ATTACH z[] TO d[2]a = UBOUND(x$)      ' a = -1 (empty string)a = UBOUND(y$)      ' a = 0 (upper bound = 0 : 1 element)a = UBOUND(z$)      ' a = 5 (upper bound = 5 : 6 elements)a = UBOUND(a[])    ' a = -1 (empty array)a = UBOUND(b[])    ' a = 0 (upper bound = 0 : 1 element)a = UBOUND(c[])    ' a = 7 (upper bound = 7 : 8 elements)a = UBOUND(d[])    ' a = 3 (upper bound of highest dimension)a = UBOUND(d[0,]) ' a = 11 (upper bound of d[0,])a = UBOUND(d[1,]) ' a = 15 (upper bound of d[1,])a = UBOUND(d[2,]) ' a = 31 (upper bound of d[2,])a = UBOUND(d[3,]) ' a = -1 (d[3,] is an empty array)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is an integer value of upper bound of array.", 
          "SeeAlso": ""
      }, 
      "UBYTE": [
          {
              "@helpfn": "keywords_183.htm", 
              "@name": "UBYTE", 
              "Definition": "#### UBYTE \nStatement declares variables to be type UBYTE .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_184.htm", 
              "@name": "UBYTE( )", 
              "Definition": "#### UBYTE( ) \nIntrinsic converts a variable to type UBYTE .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "UBYTEAT": {
          "@helpfn": "keywords_185.htm", 
          "@name": "UBYTEAT( )", 
          "Definition": "#### UBYTEAT( ) \nIntrinsic reads/writes a UBYTE value into a specified memory address.\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "UCASE": {
          "@helpfn": "keywords_187.htm", 
          "@name": "UCASE$( )", 
          "Definition": "#### UCASE$( ) Intrinsic converts the contents of a string to upper case.See", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "ULONG": [
          {
              "@helpfn": "keywords_188.htm", 
              "@name": "ULONG", 
              "Definition": "#### ULONG \nStatement declares variables to be type ULONG .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_189.htm", 
              "@name": "ULONG( )", 
              "Definition": "#### ULONG( ) \nIntrinsic converts a variable to type ULONG .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "ULONGAT": {
          "@helpfn": "keywords_190.htm", 
          "@name": "ULONGAT( )", 
          "Definition": "#### ULONGAT( ) \nIntrinsic reads/writes a ULONG value into a specified memory address.\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "UNION": [
          {
              "@helpfn": "keywords_180b.htm", 
              "@name": "UNION", 
              "Definition": "#### The  TYPE  Statement begins a\nuser-defined composite data type declaration block. \nThe   END TYPE  Statement\nends a user-defined composite data type block. \nThe UNION  Statement begins a\nunion overlay.   UNION statements are valid only within TYPE\ndeclaration blocks.\nThe   END UNION  Statement\nends a union overlay.\n  \n TYPE TYPENAME\nEND TYPE\nUNION\nEND UNION", 
              "Example": "TYPE COLOR   USHORT .red   USHORT .green   USHORT .blue   USHORT .intensityEND TYPE'TYPE POINT   XLONG .x   XLONG .y   COLOR .colorEND TYPE'TYPE LINE   POINT .a   POINT .b   XLONG .thicknessEND TYPE'TYPE DPOINT   DOUBLE .x   DOUBLE .y   COLOR .colorEND TYPE'TYPE ARBITRARY    ' hold an arbitrary data type value   UNION               ' the following overlay each other      SBYTE .sbyte      UBYTE .ubyte      SSHORT .sshort      USHORT .ushort      SLONG .slong      ULONG .ulong      XLONG .xlong      GIANT .giant      SINGLE .single      DOUBLE .double      SCOMPLEX .scomplex      DCOMPLEX .dcomplex   END UNION       ' end overlay   XLONG .type    ' type currently stored in the variableEND TYPE", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_192.htm", 
              "@name": "UNION", 
              "Definition": "#### UNION \nStatement begins a union overlay within a TYPE block.\n\n\nSee", 
              "Example": "' This sets up an equivalance between an XLONG, an unsigned char array and' a fixed length string of size 4.TYPE CONVERT   UNION    XLONG .xlong    UBYTE .ubyte[3]    STRING*4 .string4  END UNIONEND TYPE", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "UNTIL": {
          "@helpfn": "keywords_193.htm", 
          "@name": "UNTIL", 
          "Definition": "#### UNTIL \nAuxiliary is in DO and LOOP statements.\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "USHORT": [
          {
              "@helpfn": "keywords_194.htm", 
              "@name": "USHORT", 
              "Definition": "#### USHORT \nStatement declares variables to be type USHORT.\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_195.htm", 
              "@name": "USHORT( )", 
              "Definition": "#### USHORT( ) \nIntrinsic converts a variable to type USHORT .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "USHORTAT": {
          "@helpfn": "keywords_196.htm", 
          "@name": "USHORTAT( )", 
          "Definition": "#### USHORTAT( ) \nIntrinsic reads/writes a USHORT value into a specified memory address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "VERSION": {
            "@helpfn": "keywords_198.htm", 
            "@name": "VERSION", 
            "Definition": "#### VERSION \nStatement defines the version number of a program. The argument must be literal string.\n\n\nVERSION \"number\"", 
            "Example": "VERSION \"1.1234a\"", 
            "Parameters": "", 
            "Remarks": "", 
            "ReturnValues": "", 
            "SeeAlso": ""
        }, 
        "VERSION$":{
              "@helpfn": "keywords_199.htm", 
              "@name": "VERSION$( )", 
              "Definition": "#### VERSION$( ) \nIntrinsic returns the version number previously defined by the VERSION statement .\n\n\nstring$ = VERSION$(0)", 
              "Example": "version$ = VERSION$(0)", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "Return is a string.", 
              "SeeAlso": ""
        }, 
      "VOID": {
          "@helpfn": "keywords_200.htm", 
          "@name": "VOID", 
          "Definition": "#### VOID Statement declares that a\nfunction returns no value.\nSee  and", 
          "Example": "DECLARE FUNCTION VOID DoSomething()'FUNCTION VOID DoSomething()END FUNCTION", 
          "Parameters": "", 
          "Remarks": "Note that VOID is just a placeholder statement. It does not prevent the\nprogrammer from returning a value from the function.\nIt should be used to indicate when function does not return a value. By\ndefault all VOID functions will return 0.", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "WHILE": {
          "@helpfn": "keywords_201.htm", 
          "@name": "WHILE", 
          "Definition": "#### WHILE \nAuxiliary is in DO and LOOP statements .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "WRITE": {
          "@helpfn": "keywords_202.htm", 
          "@name": "WRITE", 
          "Definition": "#### WRITE \nStatement writes variables to a disk file .\n\n\n\n\nWRITE [fileNumber], variables\n\n\n\n\nThe first argument\n    in WRITE is the filenumber of the file to write to. The remaining arguments are any combination of\n    numeric variables, string variables, composite variables, composite variable components,\n    or one dimensional arrays of any type except strings.\n    \n\n\n    \n\n\n    \n\n\n    When an array variable is written, the number of bytes written is the number of bytes\n    in the array. Only one dimension can be written.", 
          "Example": "DIM a[31]                           ' a[] contains 32 XLONG valuesDIM a#[63]                         ' a#[] contains 64 DOUBLE valuesa$ = CHR$('*', 256)            ' a$ contains 256 '*' charactersWRITE [ifile], a@, b@, c@   ' WRITE 1 byte each from SBYTE variablesWRITE [ifile], a, b, c       ' WRITE 4 bytes each from XLONG variablesWRITE [ifile], a!, b!, c!   ' WRITE 4 bytes each from SINGLE variablesWRITE [ifile], a#, b#, c#   ' WRITE 8 bytes each from DOUBLE variablesWRITE [ifile], a$               ' WRITE all 256 bytes from STRING a$WRITE [ifile], a[]             ' WRITE all 128 bytes from XLONG a[31]WRITE [ifile], a#[]            ' WRITE all 512 bytes from DOUBLE a#[63]WRITE [ofile], pixel          ' WRITE all bytes in composite variableWRITE [ofile], pixel.color ' WRITE all bytes in componentWRITE [ofile], name.kid[]   ' WRITE all bytes in component array", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "READfiledemo.x"
      }, 
      "XLONG": [
          {
              "@helpfn": "keywords_203.htm", 
              "@name": "XLONG", 
              "Definition": "#### XLONG \nStatement declares a variable to be type XLONG .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }, 
          {
              "@helpfn": "keywords_204.htm", 
              "@name": "XLONG( )", 
              "Definition": "#### XLONG( ) \nIntrinsic converts a variable to type XLONG .\n\nSee", 
              "Example": "", 
              "Parameters": "", 
              "Remarks": "", 
              "ReturnValues": "", 
              "SeeAlso": ""
          }
      ], 
      "XLONGAT": {
          "@helpfn": "keywords_205.htm", 
          "@name": "XLONGAT( )", 
          "Definition": "#### XLONGAT( ) \nIntrinsic reads/writes a XLONG value into memory at a specified address .\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XMAKE": {
          "@helpfn": "keywords_207.htm", 
          "@name": "XMAKE( )", 
          "Definition": "#### XMAKE( ) \nIntrinsic retypes a variable to XLONG from a single or integer argument .\n\n\nxlong = XMAKE(integer)  \n\n    xlong = XMAKE(single)", 
          "Example": "x! = 2.000a = XMAKE(x!) ' a = XLONG with same bit pattern as x!", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Rteturn value is of type XLONG.", 
          "SeeAlso": ""
      }, 
      "XOR": {
          "@helpfn": "keywords_208.htm", 
          "@name": "XOR", 
          "Definition": "#### XOR \nOperator applies the bitwise exclusive-OR operator.\n\nSee", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XbmCopyImage": {
          "@helpfn": "xbm_1.htm", 
          "@name": "XbmCopyImage", 
          "Definition": "#### The XbmCopyImage function uses BitBlt to copy a bitmap from hSrc to hDest. The images may be either screen or memory bitmaps.\nerror = XbmCopyImage (hDest, hSrc)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "hDest", 
                  "text": "Handle of destination bitmap."
              }, 
              {
                  "name": "hSrc", 
                  "text": "Handle of source bitmap."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmCreateMemBitmap": {
          "@helpfn": "xbm_2.htm", 
          "@name": "XbmCreateMemBitmap", 
          "Definition": "#### The XbmCreateMemBitmap function creates a virtual bitmap in memory\nusing CreateCompatibleBitmap. Use XbmDeleteMemBitmap when the bitmap is\nno longer needed. \n error = XbmCreateMemBitmap\n(hWnd, w, h, @hMemBitmap)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "hWnd", 
                  "text": "Handle of window."
              }, 
              {
                  "name": "w", 
                  "text": "Width of bitmap."
              }, 
              {
                  "name": "h", 
                  "text": "Height of bitmap."
              }, 
              {
                  "name": "hMemBitmap", 
                  "text": "Returned handle for memory bitmap object."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function\nfails, the return value is 0.", 
          "SeeAlso": "XbmDeleteMemBitmap"
      }, 
      "XbmDIBto24Bit": {
          "@helpfn": "xbm_4.htm", 
          "@name": "XbmDIBto24Bit", 
          "Definition": "#### The XbmDIBto24Bit function converts a 1, 4, or 8-bit DIB image[] array to a 24-bit RGB DIB format image array.\nerror = XbmDIBto24Bit (@image[])", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "This function currently only works ok on 8-bit DIBs, but not on non-aligned 4-bit DIBs.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmDeleteMemBitmap": {
          "@helpfn": "xbm_3.htm", 
          "@name": "XbmDeleteMemBitmap", 
          "Definition": "#### The XbmDeleteMemBitmap function delete a virtual bitmap object in\nmemory. \n error = XbmDeleteMemBitmap\n(hMemBitmap)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "Every memory bitmap created using XbmCreateMemBitmap should be deleted\nbefore exiting a program.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function\nfails, the return value is 0.", 
          "SeeAlso": "XbmCreateMemBitmap"
      }, 
      "XbmDrawImage": {
          "@helpfn": "xbm_5.htm", 
          "@name": "XbmDrawImage", 
          "Definition": "#### The XbmDrawImage function transfers the color data from a source bitmap object to destination bitmap object at the destination position dx1, dy1.\nerror = XbmDrawImage (hDest, hSrc, sx1, sy1, sx2, sy2, dx1, dy1)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "hDest", 
                  "text": "Handle of destination bitmap object (screen or memory)."
              }, 
              {
                  "name": "hSrc", 
                  "text": "Handle of source bitmap object (screen or memory)."
              }, 
              {
                  "name": "sx1", 
                  "text": "x-coordinate of source rectangle's upper-left corner."
              }, 
              {
                  "name": "sy1", 
                  "text": "y-coordinate of source rectangle's upper-left corner."
              }, 
              {
                  "name": "sx2", 
                  "text": "x-coordinate of source rectangle's lower-right corner."
              }, 
              {
                  "name": "sy2", 
                  "text": "y-coordinate of source rectangle's lower-right corner."
              }, 
              {
                  "name": "dx1", 
                  "text": "x-coordinate of destination rectangle's upper-left corner."
              }, 
              {
                  "name": "dy1", 
                  "text": "y-coordinate of destination rectangle's upper-left corner."
              }
          ], 
          "Remarks": "If the value of sx2 or sy2 is -1, then it's value is set to the width/height of the source image. This function is a wrapper for BitBlt.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmDrawImageEx": {
          "@helpfn": "xbm_6.htm", 
          "@name": "XbmDrawImageEx", 
          "Definition": "#### The XbmDrawImageEx copies a bitmap from a source rectangle into a destination rectangle, stretching or compressing the bitmap to fit the dimensions of the destination rectangle, if necessary.\nerror = XbmDrawImageEx (hDest, hSrc, sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2, fRop, orient)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "hDest", 
                  "text": "Handle of destination bitmap object (screen or memory)."
              }, 
              {
                  "name": "hSrc", 
                  "text": "Handle of source bitmap object (screen or memory)."
              }, 
              {
                  "name": "sx1", 
                  "text": "x-coordinate of source rectangle's upper-left corner."
              }, 
              {
                  "name": "sy1", 
                  "text": "y-coordinate of source rectangle's upper-left corner."
              }, 
              {
                  "name": "sx2", 
                  "text": "x-coordinate of source rectangle's lower-right corner."
              }, 
              {
                  "name": "sy2", 
                  "text": "y-coordinate of source rectangle's lower-right corner."
              }, 
              {
                  "name": "dx1", 
                  "text": "x-coordinate of destination rectangle's upper-left corner."
              }, 
              {
                  "name": "dy1", 
                  "text": "y-coordinate of destination rectangle's upper-left corner."
              }, 
              {
                  "name": "dx2", 
                  "text": "x-coordinate of destination rectangle's lower-right corner."
              }, 
              {
                  "name": "dy2", 
                  "text": "y-coordinate of destination rectangle's lower-right corner."
              }, 
              {
                  "name": "fRop", 
                  "text": "Raster operation flag, default is $$SRCCOPY."
              }, 
              {
                  "name": "orient", 
                  "text": "Image orientation. 0 = normal (default), 1 = mirror, 2 = flip, 3 = 180 degree rotation."
              }
          ], 
          "Remarks": "If the value of sx2 or sy2 is -1, then it's value is set to the width/height of the source image. If the value of dx2 or dy2 is -1, then it's value is set to the width/height of the destination image. This function is a wrapper for StretchBlt.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmDrawMaskedImage": {
          "@helpfn": "xbm_7.htm", 
          "@name": "XbmDrawMaskedImage", 
          "Definition": "#### The XbmDrawMaskedImage draws a source bitmap to a destination bitmap using a mask bitmap on the source. The mask must be a 24-bit image type. A mask is used to allow certain areas of the source image to be drawn transparently. The mask image is black and white, with the transparent parts in white and the remaining parts in black.\nerror = XbmDrawMaskedImage (hDest, hSrc, sx1, sy1, sx2, sy2, dx1, dy1, hMask, mx1, my1)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "hDest", 
                  "text": "Handle of destination bitmap object (screen or memory)."
              }, 
              {
                  "name": "hSrc", 
                  "text": "Handle of source bitmap object (screen or memory)."
              }, 
              {
                  "name": "sx1", 
                  "text": "x-coordinate of source rectangle's upper-left corner."
              }, 
              {
                  "name": "sy1", 
                  "text": "y-coordinate of source rectangle's upper-left corner."
              }, 
              {
                  "name": "sx2", 
                  "text": "x-coordinate of source rectangle's lower-right corner."
              }, 
              {
                  "name": "sy2", 
                  "text": "y-coordinate of source rectangle's lower-right corner."
              }, 
              {
                  "name": "dx1", 
                  "text": "x-coordinate of destination rectangle's upper-left corner."
              }, 
              {
                  "name": "dy1", 
                  "text": "y-coordinate of destination rectangle's upper-left corner."
              }, 
              {
                  "name": "hMask", 
                  "text": "Handle of mask memory bitmap object (memory)."
              }, 
              {
                  "name": "mx1", 
                  "text": "x-coordinate of mask rectangle's upper-left corner."
              }, 
              {
                  "name": "my1", 
                  "text": "y-coordinate of mask rectangle's upper-left corner."
              }
          ], 
          "Remarks": "If the value of sx2 or sy2 is -1, then it's value is set to the width/height of the source image.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmGetImage": {
          "@helpfn": "xbm_8.htm", 
          "@name": "XbmGetImage", 
          "Definition": "#### The XbmGetImage function copies the image data from a window or a bitmap object to an image array.\nerror = XbmGetImage (hImage, @image[])", 
          "Example": "UBYTE image[]hDesktop = GetDesktopWindow ()XbmGetImage (hDesktop, @image[])", 
          "Parameters": [
              {
                  "name": "hImage", 
                  "text": "Handle of window or bitmap object."
              }, 
              {
                  "name": "image[]", 
                  "text": "Returned DIB format UBYTE image array."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmGetImageArrayInfo": {
          "@helpfn": "xbm_9.htm", 
          "@name": "XbmGetImageArrayInfo", 
          "Definition": "#### The XbmGetImageArrayInfo function returns data from a DIB image array.\nerror = XbmGetImageArrayInfo (@image[], @bpp, @width, @height)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "image[]", 
                  "text": "DIB format UBYTE image array."
              }, 
              {
                  "name": "bpp", 
                  "text": "Returned bits per pixel."
              }, 
              {
                  "name": "bpp", 
                  "text": "Returned image width."
              }, 
              {
                  "name": "bpp", 
                  "text": "Returned image height."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmGetImageSize": {
          "@helpfn": "xbm_10.htm", 
          "@name": "XbmGetImageSize", 
          "Definition": "#### The XbmGetImageSize function returns the width and height from a screen or bitmap object.\nerror = XbmGetImageSize (hImage, @width, @height)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "hImage", 
                  "text": "Handle of window or bitmap object."
              }, 
              {
                  "name": "bpp", 
                  "text": "Returned image width."
              }, 
              {
                  "name": "bpp", 
                  "text": "Returned image height."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmGetImageType": {
          "@helpfn": "xbm_11.htm", 
          "@name": "XbmGetImageType", 
          "Definition": "#### The XbmGetImageType function determines if a handle is for a screen image (window handle) or for a memory image (bitmap object handle).\nerror = XbmGetImageType (hImage)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is the image type. If return value is 1 ($$IMAGE_SCREEN) then it is a valid windows handle. IF the return value is 2 ($$IMAGE_MEMORY) then it is a valid bitmap object handle (memory bitmap). If the handle is invalid, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmLoadBitmap": {
          "@helpfn": "xbm_12.htm", 
          "@name": "XbmLoadBitmap", 
          "Definition": "#### The XbmLoadBitmap function loads a bitmap resource from the executable file into an image array.\nerror = XbmLoadBitmap (name$, @image[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "name$", 
                  "text": "The name of the bitmap to be loaded or resource identifier (id is low-word, zero in high word)."
              }, 
              {
                  "name": "image[]", 
                  "text": "Returned DIB UBYTE image array."
              }
          ], 
          "Remarks": "This function is a wrapper for LoadBitmapA.", 
          "ReturnValues": "If the function succeeds, the return value is -1.  If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmLoadImage": {
          "@helpfn": "xbm_13.htm", 
          "@name": "XbmLoadImage", 
          "Definition": "#### The XbmLoadImage function loads a bitmap disk file into an image array.\nerror = XbmLoadImage (fileName$, @image[])", 
          "Example": "See demo program xbmtest.x.", 
          "Parameters": [
              {
                  "name": "fileName$", 
                  "text": "The filename of the bitmap to be loaded (*.bmp)."
              }, 
              {
                  "name": "image[]", 
                  "text": "Returned DIB UBYTE image array."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1.  If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XbmSaveImage": {
          "@helpfn": "xbm_14.htm", 
          "@name": "XbmSaveImage", 
          "Definition": "#### The XbmSaveImage function saves an image array to a bitmap disk file (*.bmp).\nerror = XbmSaveImage (fileName$, @image[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "fileName$", 
                  "text": "The filename of the bitmap to be saved (*.bmp)."
              }, 
              {
                  "name": "image[]", 
                  "text": "DIB UBYTE image array to save."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1.  If the function fails, the return value is 0. Call ERROR() to get further error information.", 
          "SeeAlso": ""
      }, 
      "XbmSetImage": {
          "@helpfn": "xbm_15.htm", 
          "@name": "XbmSetImage", 
          "Definition": "#### The XbmSetImage function copies the image data from an image array to a window or a bitmap object.\nerror = XbmSetImage (hImage, @image[])", 
          "Example": "UBYTE image[]XbmLoadImage (\"mydog.bmp\", @image[])XbmSetImage (hWnd, @image[])", 
          "Parameters": [
              {
                  "name": "hImage", 
                  "text": "Handle of window or bitmap object."
              }, 
              {
                  "name": "image[]", 
                  "text": "DIB format UBYTE image array to set in window or bitmap object."
              }
          ], 
          "Remarks": "If hImage is a window, then the image array is displayed in the window.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "Xcalloc": {
          "@helpfn": "xcalloc.htm", 
          "@name": "Xcalloc", 
          "Definition": "#### The  function returns the memory address of a newly\nallocated memory block.\naddress = Xcalloc\n(size)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "Xfree": {
          "@helpfn": "xfree.htm", 
          "@name": "Xfree", 
          "Definition": "#### The  function frees the memory block located at given\naddress.\n  \nXfree\n(address)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "Xin": {
          "@helpfn": "xin_1.htm", 
          "@name": "Xin", 
          "Definition": "#### The Xin function initializes the Xin library by calling XinInitialize(). Call Xin() before calling any other Xin functions.\nerror = Xin ()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinAddressNumberToString": {
          "@helpfn": "xin_2.htm", 
          "@name": "XinAddressNumberToString", 
          "Definition": "#### The XinAddressNumberToString function converts a network address into a string in dotted format.\nerror = XinAddressNumberToString (address$$, @address$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "address$$", 
                  "text": "A network address (eg, host.address)."
              }, 
              {
                  "name": "address$", 
                  "text": "Returns the network address in a dotted format."
              }
          ], 
          "Remarks": "This function takes an Internet address structure specified by the address$$ parameter. It returns an ASCII string representing the address in . notation as a.b.c.d.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinAddressStringToNumber": {
          "@helpfn": "xin_3.htm", 
          "@name": "XinAddressStringToNumber", 
          "Definition": "#### The XinAddressStringToNumber function converts a string containing an Internet Protocol dotted address into network address.\nerror = XinAddressStringToNumber (address$, @address$$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "address$", 
                  "text": "A string representing a number expressed in the internet standard . notation, eg, a.b.c.d.."
              }, 
              {
                  "name": "address$$", 
                  "text": "Returns the network address."
              }
          ], 
          "Remarks": "All Internet addresses are returned in IP's network order (bytes ordered from left to right).Internet AddressesValues specified using the . notation take one of the following forms:a.b.c.d    a.b.c    a.b    aWhen four parts are specified, each is interpreted as a byte of data and assigned, from left to right, to the four bytes of an Internet address. Note that when an Internet address is viewed as a 32-bit integer quantity on the Intel architecture, the bytes referred to above appear as d.c.b.a. That is, the bytes on an Intel processor are ordered from right to left.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinHostAddressToInfo": {
          "@helpfn": "xin_4.htm", 
          "@name": "XinHostAddressToInfo", 
          "Definition": "#### The XinHostAddressToInfo function gets host information corresponding to a host address.\nerror = XinHostAddressToInfo (address, HOST @info)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "address", 
                  "text": "A host address."
              }, 
              {
                  "name": "HOST info", 
                  "text": "Returns a filled HOST info."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinHostNameToInfo": {
          "@helpfn": "xin_5.htm", 
          "@name": "XinHostNameToInfo", 
          "Definition": "#### The XinHostNameToInfo function gets host information corresponding to a hostname.\nerror = XinHostNameToInfo (name$, HOST @info)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "name$", 
                  "text": "A string representing a hostname."
              }, 
              {
                  "name": "HOST info", 
                  "text": "Returns a filled HOST info."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinHostNumberToInfo": {
          "@helpfn": "xin_6.htm", 
          "@name": "XinHostNumberToInfo", 
          "Definition": "#### The XinHostNumberToInfo function gets host information corresponding to an index to the HOST host[] array.\nerror = XinHostNumberToInfo (id, HOST @info)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "id", 
                  "text": "A host index."
              }, 
              {
                  "name": "HOST info", 
                  "text": "Returns a filled HOST info."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinInitialize": {
          "@helpfn": "xin_7.htm", 
          "@name": "XinInitialize", 
          "Definition": "#### The XinInitialize function calls WSAStartup to intialize a socket session.\nerror = XinInitialize (@base, @hosts, @version, @sockets, @comment$, @note$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "base", 
                  "text": "Internal HOST host[] array base. Returns 0."
              }, 
              {
                  "name": "hosts", 
                  "text": "Returns the number of local hosts."
              }, 
              {
                  "name": "version", 
                  "text": "Returns the version of the Windows Sockets specification that the Windows Sockets DLL expects the caller to use."
              }, 
              {
                  "name": "sockets", 
                  "text": "Ignore."
              }, 
              {
                  "name": "comment$", 
                  "text": "Returns a description of the Windows Sockets implementation."
              }, 
              {
                  "name": "note$", 
                  "text": "Returns startup status or configuration information."
              }
          ], 
          "Remarks": "Call Xin() to intialize the Xin library. Xin() will then call XinInitialize().", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSetDebug": {
          "@helpfn": "xin_8.htm", 
          "@name": "XinSetDebug", 
          "Definition": "#### The XinSetDebug function sets #debug variable. If state is $$TRUE then all debugging statements are displayed.\nXinSetDebug (state)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XinSetSocketOption": {
          "@helpfn": "xin_9.htm", 
          "@name": "XinSetSocketOption", 
          "Definition": "#### The XinSetSocketOption function sets a socket option.\nerror = XinSetSocketOption (socket, level, optname, optval, optlen)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "Socket identifier."
              }, 
              {
                  "name": "level", 
                  "text": "The level at which the option is defined; the supported levels include $$SOL_SOCKET and $$IPPROTO_TCP."
              }, 
              {
                  "name": "optname", 
                  "text": "The socket option for which the value is to be set."
              }, 
              {
                  "name": "optval", 
                  "text": "A pointer to the buffer in which the value for the requested option is supplied."
              }, 
              {
                  "name": "opelen", 
                  "text": "The size of the optval buffer."
              }
          ], 
          "Remarks": "For more details on using this function, see setsockopt in the Win32 Programmer's Reference.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketAccept": {
          "@helpfn": "xin_10.htm", 
          "@name": "XinSocketAccept", 
          "Definition": "#### The XinSocketAccept function accepts a connection on a socket.\nerror = XinSocketAccept (socket, block, @remote, flags)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "A socket identifier which is listening for connections after XinSocketListen."
              }, 
              {
                  "name": "block", 
                  "text": "The blocking timeout in microseconds."
              }, 
              {
                  "name": "remote", 
                  "text": "A returned newly created and accepted socket. The accepted socket cannot be used to accept more connections. The original socket remains open."
              }, 
              {
                  "name": "flags", 
                  "text": "Not used."
              }
          ], 
          "Remarks": "For more details on using this function, see accept in the Win32 Programmer's Reference.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketBind": {
          "@helpfn": "xin_11.htm", 
          "@name": "XinSocketBind", 
          "Definition": "#### The XinSocketBind function associates a local address with a socket.\nerror = XinSocketBind (socket, block, address$$, port)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "An unbound socket identifier."
              }, 
              {
                  "name": "block", 
                  "text": "The blocking timeout in microseconds."
              }, 
              {
                  "name": "address$$", 
                  "text": "The local network address."
              }, 
              {
                  "name": "port", 
                  "text": "An integer number between 1 and 65535. Port numbers smaller than 1024 are considered well-known -- for example, telnet uses port 23, http uses 80, ftp uses 21, and so on, while tcp uses port numbers >= 1024."
              }
          ], 
          "Remarks": "This routine is used on an unconnected connectionless or connection-oriented socket, before subsequent connects or listens. When a socket is created with socket, it exists in a name space (address family), but it has no name assigned. bind establishes the local association of the socket by assigning a local name to an unnamed socket.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketClose": {
          "@helpfn": "xin_12.htm", 
          "@name": "XinSocketClose", 
          "Definition": "#### The XinSocketClose function closes a socket identified by socket.\nerror = XinSocketClose (socket)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "If socket value is -1, then XinSocketClose will close all open sockets.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketConnectRequest": {
          "@helpfn": "xin_13.htm", 
          "@name": "XinSocketConnectRequest", 
          "Definition": "#### The XinSocketConnectRequest function establishes a connection to a peer.\nerror = XinSocketConnectRequest (socket, block, address$$, port)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "A socket identifier."
              }, 
              {
                  "name": "block", 
                  "text": "The blocking timeout in microseconds."
              }, 
              {
                  "name": "address$$", 
                  "text": "The destination address to which the socket is to be connected."
              }, 
              {
                  "name": "port", 
                  "text": "An integer number between 1 and 65535. Port numbers smaller than 1024 are considered well-known -- for example, telnet uses port 23, http uses 80, ftp uses 21, and so on, while tcp uses port numbers >= 1024."
              }
          ], 
          "Remarks": "This function is used to create a connection to the specified destination. If the socket, socket, is unbound, unique values are assigned to the local association by the system, and the socket is marked as bound.For connection-oriented sockets (for example, type $$SOCK_STREAM), an active connection is initiated to the foreign host using name (an address in the name space of the socket; for a detailed description, see bind). When the socket call completes successfully, the socket is ready to send/receive data.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketConnectStatus": {
          "@helpfn": "xin_14.htm", 
          "@name": "XinSocketConnectStatus", 
          "Definition": "#### The XinSocketConnectStatus function determines the status of a socket, waiting if necessary.\nerror = XinSocketConnectStatus (socket, block, @connected)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "A socket identifier."
              }, 
              {
                  "name": "block", 
                  "text": "The blocking timeout in microseconds."
              }, 
              {
                  "name": "connected", 
                  "text": "Returned connection status. If $$TRUE, then the socket is connected and ready to read or write."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketGetAddress": {
          "@helpfn": "xin_15.htm", 
          "@name": "XinSocketGetAddress", 
          "Definition": "#### The XinSocketGetAddress function returns client/server port and addresss of the peer to which a socket is connected. It can be used only on a connected socket.\nerror = XinSocketGetAddress (socket, @port, @address$$, @remote, @rport, @raddress$$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "A socket identifier."
              }, 
              {
                  "name": "port", 
                  "text": "Returned port for a connected client socket."
              }, 
              {
                  "name": "address$$", 
                  "text": "Returned port for a connected client socket."
              }, 
              {
                  "name": "remote", 
                  "text": "Returned remote socket for a connected server socket."
              }, 
              {
                  "name": "rport", 
                  "text": "Returned remote port for a connected server socket."
              }, 
              {
                  "name": "raddress$$", 
                  "text": "Returned remote address for a connected server socket."
              }
          ], 
          "Remarks": "For more details on using this function, see getpeername in the Win32 Programmer's Reference.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketGetStatus": {
          "@helpfn": "xin_16.htm", 
          "@name": "XinSocketGetStatus", 
          "Definition": "#### The XinSocketGetStatus function returns current socket parameters.\nerror = XinSocketGetStatus (socket, @remote, @syssocket, @syserror, @status, @socketType, @readbytes, @writebytes)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "A socket identifier."
              }, 
              {
                  "name": "remote", 
                  "text": "Returned remote socket identifier."
              }, 
              {
                  "name": "syssocket", 
                  "text": "Returned system socket identifier."
              }, 
              {
                  "name": "syserror", 
                  "text": "Returned pending socket error."
              }, 
              {
                  "name": "status", 
                  "text": "Returned current socket status, eg, $$SocketStatusOpenSuccess."
              }, 
              {
                  "name": "socketType", 
                  "text": "Returned socket type, eg, $$SOCKET_STREAM."
              }, 
              {
                  "name": "readbytes", 
                  "text": "Returned size of socket read buffer."
              }, 
              {
                  "name": "writebytes", 
                  "text": "Returned size of socket write buffer."
              }
          ], 
          "Remarks": "For more details on using this function, see getsockopt in the Win32 Programmer's Reference.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketListen": {
          "@helpfn": "xin_17.htm", 
          "@name": "XinSocketListen", 
          "Definition": "#### The XinSocketListen function establishes a socket to listen for an incoming connection.\nerror = XinSocketListen (socket, block, flags)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "A socket identifier."
              }, 
              {
                  "name": "block", 
                  "text": "Blocking timeout in microseconds."
              }, 
              {
                  "name": "flags", 
                  "text": "Not used."
              }
          ], 
          "Remarks": "To accept connections, a socket is first created with XinSocketOpen, a backlog for incoming connections is specified with XinSocketListen, and then the connections are accepted with XinSocketAccept. XinSocketListen applies only to sockets that are connection oriented, for example, those of type $$SOCK_STREAM.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketOpen": {
          "@helpfn": "xin_18.htm", 
          "@name": "XinSocketOpen", 
          "Definition": "#### The XinSocketOpen function creates a socket which is bound to a specific service provider.\nerror = XinSocketOpen (@socket, @addressFamily, @socketType, flags)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "Returned new socket identifier."
              }, 
              {
                  "name": "addressFamily", 
                  "text": "An address family specification, eg, $$AF_INET. If not specified, then a default address family specification is returned."
              }, 
              {
                  "name": "socketType", 
                  "text": "A type specification for the new socket, eg, $$SOCK_STREAM. If not specified, then a default socket type is returned."
              }, 
              {
                  "name": "flags", 
                  "text": "A particular protocol to be used with the socket which is specific to the indicated address family, eg, $$IPPROTO_TCP."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketRead": {
          "@helpfn": "xin_19.htm", 
          "@name": "XinSocketRead", 
          "Definition": "#### The XinSocketRead function receives data from a socket.\nerror = XinSocketRead (socket, block, address, maxbytes, flags, @bytes)", 
          "Example": "response$ = NULL$(256)DO UNTIL error\terror = XinSocketRead (socket, 1000, &response$, 256, 0, @bytes)\tIF error THEN\t\t? \"XinSocketRead error\"; error\t\tRETURN ($$TRUE)\tEND IFLOOP UNTIL bytes", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "Socket identifier."
              }, 
              {
                  "name": "block", 
                  "text": "Blocking timeout in microseconds. If block = 0, then no blocking. If block is < 10, then block = 10. If block is > 20000 then block is set to a maximum of 20000 (20 msec)."
              }, 
              {
                  "name": "address", 
                  "text": "Address of buffer for incoming data."
              }, 
              {
                  "name": "maxbytes", 
                  "text": "Length of buffer."
              }, 
              {
                  "name": "flags", 
                  "text": "Specifies the way in which the call is made, eg, $$MSG_PEEK."
              }, 
              {
                  "name": "bytes", 
                  "text": "Returned number of bytes received."
              }
          ], 
          "Remarks": "This function is used on connected sockets and is used to read incoming data. For byte stream style socket, eg, type $$SOCK_STREAM, as much information as is currently available up to the size of the buffer supplied is returned.", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XinSocketWrite": {
          "@helpfn": "xin_20.htm", 
          "@name": "XinSocketWrite", 
          "Definition": "#### The XinSocketWrite function sends data on a connected socket.\nerror = XinSocketWrite (socket, block, address, maxbytes, flags, @bytes)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "socket", 
                  "text": "Socket identifier."
              }, 
              {
                  "name": "block", 
                  "text": "Blocking timeout in microseconds. If block = 0, then no blocking. If block is < 10, then block = 10. If block is > 20000 then block is set to a maximum of 20000 (20 msec)."
              }, 
              {
                  "name": "address", 
                  "text": "Address of a buffer containing data to be transmitted."
              }, 
              {
                  "name": "maxbytes", 
                  "text": "Length of buffer."
              }, 
              {
                  "name": "flags", 
                  "text": "Specifies the way in which the call is made, eg, $$MSG_DONTROUTE."
              }, 
              {
                  "name": "bytes", 
                  "text": "Returned number of bytes sent."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0. If the function fails, the return value is $$TRUE (-1). To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XioClearConsole": {
          "@helpfn": "xio_1.htm", 
          "@name": "XioClearConsole", 
          "Definition": "#### Clear the console of all text, and then set cursor to position (0, 0).\nerror = XioClearConsole (hStdOut)", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioClearEndOfLine": {
          "@helpfn": "xio_2.htm", 
          "@name": "XioClearEndOfLine", 
          "Definition": "#### Erase text from cursor position to end of line.\nerror = XioClearEndOfLine (hStdOut)", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioCloseStdHandle": {
          "@helpfn": "xio_3.htm", 
          "@name": "XioCloseStdHandle", 
          "Definition": "#### Close standard input or output console handle.\nerror = XioCloseStdHandle (hStdCon)", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioCreateConsole": {
          "@helpfn": "xio_4.htm", 
          "@name": "XioCreateConsole", 
          "Definition": "#### Creates a win32 console window for a GUI application.\nerror = XioCreateConsole (@title$, nlines)", 
          "Example": "XioCreateConsole (@\"My Console\", 100)", 
          "Parameters": [
              {
                  "name": "title$", 
                  "text": "console window title text."
              }, 
              {
                  "name": "nlines", 
                  "text": "initial number of console lines (or rows) in console buffer. Default is 25 lines."
              }
          ], 
          "Remarks": "Call XioFreeConsole() before exiting process.", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioDeleteLine": {
          "@helpfn": "xio_5.htm", 
          "@name": "XioDeleteLine", 
          "Definition": "#### Delete the current cursor line.\nerror = XioDeleteLine (hStdOut)", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioFreeConsole": {
          "@helpfn": "xio_6.htm", 
          "@name": "XioFreeConsole", 
          "Definition": "#### Free a win32 console created by XioCreateConsole ().\nerror = XioFreeConsole ()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioGetConsoleInfo": {
          "@helpfn": "xio_7.htm", 
          "@name": "XioGetConsoleInfo", 
          "Definition": "#### Returns information on console buffer parameters.\nerror = XioGetConsoleInfo (hStdOut, @bufSizeX, @bufSizeY, @cursorX, @cursorY, @fColors)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard console output handle."
              }, 
              {
                  "name": "bufSizeX", 
                  "text": "Number of buffer columns."
              }, 
              {
                  "name": "bufSizeY", 
                  "text": "Number of buffer rows."
              }, 
              {
                  "name": "cursorX", 
                  "text": "Location of cursor by column."
              }, 
              {
                  "name": "cursorY", 
                  "text": "Location of cursor by row."
              }, 
              {
                  "name": "fColors", 
                  "text": "Current buffer text/background color attributes."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioGetConsoleTextRect": {
          "@helpfn": "xio_8.htm", 
          "@name": "XioGetConsoleTextRect", 
          "Definition": "#### Grab a rectangular area of text from the console screen buffer.\nerror = XioGetConsoleTextRect (hStdOut, left, top, right, bottom, CHAR_INFO ci[])", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard console output handle."
              }, 
              {
                  "name": "left", 
                  "text": "Left rectangle coordinate."
              }, 
              {
                  "name": "top", 
                  "text": "Top rectangle coordinate."
              }, 
              {
                  "name": "right", 
                  "text": "Right rectangle coordinate."
              }, 
              {
                  "name": "bottom", 
                  "text": "Bottom rectangle coordinate."
              }, 
              {
                  "name": "ci[]", 
                  "text": "Array of CHAR_INFO type date containing text and attributes for each cell."
              }
          ], 
          "Remarks": "Coordinates are zero-based.", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioGetConsoleWindow": {
          "@helpfn": "xio_9.htm", 
          "@name": "XioGetConsoleWindow", 
          "Definition": "#### Return the console window handle.\nhWnd = XioGetConsoleWindow ()", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Window handle on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioGetStdIn": {
          "@helpfn": "xio_10.htm", 
          "@name": "XioGetStdIn", 
          "Definition": "#### Return the console window handle.\nhStdIn = XioGetStdIn ()", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Standard console input handle on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioGetStdOut": {
          "@helpfn": "xio_11.htm", 
          "@name": "XioGetStdOut", 
          "Definition": "#### Return the console window handle.\nhStdOut = XioGetStdOut ()", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Standard console output handle on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioGrabConsoleText": {
          "@helpfn": "xio_12.htm", 
          "@name": "XioGrabConsoleText", 
          "Definition": "#### Get all console screen buffer text from console origin to current cursor position.\nerror = XioGrabConsoleText (hStdOut, @text$)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard console ouput handle."
              }, 
              {
                  "name": "text$", 
                  "text": "Returned screen buffer text."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioHideConsole": {
          "@helpfn": "xio_13.htm", 
          "@name": "XioHideConsole", 
          "Definition": "#### Hide the console window.\nerror = XioHideConsole ()", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioInkey": {
          "@helpfn": "xio_14.htm", 
          "@name": "XioInkey", 
          "Definition": "#### The XioInkey function returns a character key code when a keyboard key has been pressed. It does not wait for a keyboard event. If there is no pending key in the input buffer, then program execution continues after XioInkey() has checked for a keystroke.\nkeyCode = XioInkey ()", 
          "Example": "See inkey.x.", 
          "Parameters": "", 
          "Remarks": "Non ASCII chars return as negative numbers (eg; arrow keys). Alt+key - Adds 1000 to return value. Ctrl+key - Adds 2000 to return value.", 
          "ReturnValues": "0 if no keyboard event, else key code.", 
          "SeeAlso": ""
      }, 
      "XioInsertLine": {
          "@helpfn": "xio_15.htm", 
          "@name": "XioInsertLine", 
          "Definition": "#### Insert a line above current cursor line.\nerror = XioInsertLine (hStdOut)", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioPutConsoleText": {
          "@helpfn": "xio_16.htm", 
          "@name": "XioPutConsoleText", 
          "Definition": "#### Write text string to position x, y in console screen buffer. This does not change the current cursor position.\nerror = XioPutConsoleText (hStdOut, text$, x, y)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "text$", 
                  "text": "Text string to write to console."
              }, 
              {
                  "name": "x", 
                  "text": "x console cell position (0 based)."
              }, 
              {
                  "name": "y", 
                  "text": "y console cell position (0 based)."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioPutConsoleTextArray": {
          "@helpfn": "xio_17.htm", 
          "@name": "XioPutConsoleTextArray", 
          "Definition": "#### Write text array to position x, y in console screen buffer. This does\nnot change the current cursor position.\n\nerror = XioPutConsoleTextArray\n(hStdOut, text$[], x, y)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "text$[]", 
                  "text": "Text array to write to console."
              }, 
              {
                  "name": "x", 
                  "text": "x console cell position (0 based)."
              }, 
              {
                  "name": "y", 
                  "text": "y console cell position (0 based)."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioPutConsoleTextAttributes": {
          "@helpfn": "xio_17a.htm", 
          "@name": "XioPutConsoleTextAttributes", 
          "Definition": "#### Set foreground and background color attributes to position x, y in\nconsole screen buffer. \nerror =\nXioPutConsoleTextAttributes (hStdOut, attribute, length, x, y)", 
          "Example": "See console demo gol.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "attribute", 
                  "text": "Color attribute for cells beginning at x and y."
              }, 
              {
                  "name": "length", 
                  "text": "Number of cells which are assigned new attributes."
              }, 
              {
                  "name": "x", 
                  "text": "x console cell position (0 based)."
              }, 
              {
                  "name": "y", 
                  "text": "y console cell position (0 based)."
              }
          ], 
          "Remarks": "Each attribute specifies the foreground (text) and background colors in\nwhich that character cell is drawn. The attribute values are some\ncombination of the following values: $$FOREGROUND_BLUE,\n$$FOREGROUND_GREEN, $$FOREGROUND_RED, $$FOREGROUND_INTENSITY,\n$$BACKGROUND_BLUE, $$BACKGROUND_GREEN, $$BACKGROUND_RED, and\n$$BACKGROUND_INTENSITY. For example, the following combination of\nvalues produces red text on a white background: \n$$FOREGROUND_RED | $$BACKGROUND_RED | $$BACKGROUND_GREEN |\n$$BACKGROUND_BLUE", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioReadConsole": {
          "@helpfn": "xio_18.htm", 
          "@name": "XioReadConsole", 
          "Definition": "#### Read data from console screen buffer.\n\nerror = XioReadConsole (hStdIn,\n@input$)", 
          "Example": "See contest.x.", 
          "Parameters": [
              {
                  "name": "hStdIn", 
                  "text": "Standard input handle."
              }, 
              {
                  "name": "input$[]", 
                  "text": "Returned text string."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioScrollBufferUp": {
          "@helpfn": "xio_19.htm", 
          "@name": "XioScrollBufferUp", 
          "Definition": "#### Scroll entire console screen buffer up 'count' lines from bottom.\nerror = XioScrollBufferUp (hStdOut, count)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "count", 
                  "text": "Number of lines to scroll."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetConsoleBufferSize": {
          "@helpfn": "xio_20.htm", 
          "@name": "XioSetConsoleBufferSize", 
          "Definition": "#### Set console screen buffer size.\nerror = XioSetConsoleBufferSize (hStdOut, w, h)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "w", 
                  "text": "Number of cells or columns wide (default = 80)."
              }, 
              {
                  "name": "h", 
                  "text": "Number of lines (default = 25)."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetConsoleCursorPos": {
          "@helpfn": "xio_21.htm", 
          "@name": "XioSetConsoleCursorPos", 
          "Definition": "#### Set console cursor position.\nerror = XioSetConsoleCursorPos (hStdOut, x, y)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "x", 
                  "text": "Zero based coordinates of new x cursor position."
              }, 
              {
                  "name": "y", 
                  "text": "Zero based coordinates of new y cursor position."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetConsoleTextRect": {
          "@helpfn": "xio_22.htm", 
          "@name": "XioSetConsoleTextRect", 
          "Definition": "#### Write a text rect area to the console screen buffer.\nerror = XioSetConsoleTextRect (hStdOut, left, top, right, bottom, CHAR_INFO ci[])", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "left", 
                  "text": "Zero based coordinates of left rect position."
              }, 
              {
                  "name": "top", 
                  "text": "Zero based coordinates of top rect position."
              }, 
              {
                  "name": "right", 
                  "text": "Zero based coordinates of right rect position."
              }, 
              {
                  "name": "bottom", 
                  "text": "Zero based coordinates of bottom rect position."
              }, 
              {
                  "name": "ci[]", 
                  "text": "Array of CHAR_INFO type data of text and attributes (colors)."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetCursorType": {
          "@helpfn": "xio_23.htm", 
          "@name": "XioSetCursorType", 
          "Definition": "#### Set cursor style.\nerror = XioSetCursorType (hStdOut, fCursor)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "fCursor", 
                  "text": "cursor style flag: $$NOCURSOR = 0 (hide cursor), $$SOLIDCURSOR = 1, $$NORMALCURSOR = 2."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetDefaultColors": {
          "@helpfn": "xio_24.htm", 
          "@name": "XioSetDefaultColors", 
          "Definition": "#### Set default text attributes: lightgray text on black background.\nerror = XioSetDefaultColors (hStdOut)", 
          "Example": "See conio.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetTextAttributes": {
          "@helpfn": "xio_25.htm", 
          "@name": "XioSetTextAttributes", 
          "Definition": "#### Set the console foreground and background text colors.\nerror = XioSetTextAttributes (hStdOut, newAttribute)", 
          "Example": "See contest.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "newAttribute", 
                  "text": "Color attribute flags, attributes can be ORd together."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetTextBackColor": {
          "@helpfn": "xio_26.htm", 
          "@name": "XioSetTextBackColor", 
          "Definition": "#### Set the console background color.\nerror = XioSetTextBackColor (hStdOut, newColor)", 
          "Example": "XioSetTextBackColor (hStdOut, $$YELLOW)", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "newColor", 
                  "text": "Console background color constant."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioSetTextColor": {
          "@helpfn": "xio_27.htm", 
          "@name": "XioSetTextColor", 
          "Definition": "#### Set the console text color.\nerror = XioSetTextColor (hStdOut, newColor)", 
          "Example": "XioSetTextColor (hStdOut, $$RED)", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "Standard output handle."
              }, 
              {
                  "name": "newColor", 
                  "text": "Console text color constant."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioShowConsole": {
          "@helpfn": "xio_28.htm", 
          "@name": "XioShowConsole", 
          "Definition": "#### Show the console.\nerror = XioShowConsole ()", 
          "Example": "See contest.x.", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XioWriteConsole": {
          "@helpfn": "xio_29.htm", 
          "@name": "XioWriteConsole", 
          "Definition": "#### Write text to the console window. Cursor position is set to current end of line. Screen will scroll text up when last line in buffer is reached. The size of the screen buffer is not altered.\nerr = XioWriteConsole (hStdOut, text$)", 
          "Example": "See conio.x.", 
          "Parameters": [
              {
                  "name": "hStdOut", 
                  "text": "standard output handle."
              }, 
              {
                  "name": "text$", 
                  "text": "text string to write to console."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "Xmalloc": {
          "@helpfn": "xmalloc.htm", 
          "@name": "Xmalloc", 
          "Definition": "#### The  function returns the memory address of a newly\nallocated memory block.\naddress = Xmalloc\n(size)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XprDrawBox": {
          "@helpfn": "xpr_1.htm", 
          "@name": "XprDrawBox", 
          "Definition": "#### The XprDrawBox function prints a rectangle on the page using bounding rectangle coordinates.\nerror = XprDrawBox (color, x1, y1, x2, y2, lineStyle, lineWidth)", 
          "Example": "XprDrawBox ($$LightRed, 100, 100, 450, 300, $$LineStyleDashDot, 0)XprDrawBox ($$Black, 100, 100, 200, 300, 0, 10)", 
          "Parameters": [
              {
                  "name": "color", 
                  "text": "Line color."
              }, 
              {
                  "name": "x1", 
                  "text": "x-position of upper-left corner of box."
              }, 
              {
                  "name": "y1", 
                  "text": "y-position of upper-left corner of box."
              }, 
              {
                  "name": "x2", 
                  "text": "x-position of lower-right corner of box."
              }, 
              {
                  "name": "y2", 
                  "text": "y-position of lower-right corner of box."
              }, 
              {
                  "name": "lineStyle", 
                  "text": "Line style. The lineStyle uses XBasic linestyle constants or Win32 Pen Style constants. The lineStyle will only function if lineWidth = 0 (default), a width of 1 unit.  LineStyles: $$LineStyleSolid = 0 $$LineStyleDash = 1 $$LineStyleDot = 2 $$LineStyleDashDot = 3 $$LineStyleDashDotDot = 4"
              }, 
              {
                  "name": "lineWidth", 
                  "text": "Line width. The line width is given is 1/100\" units or 25 = 1/4\"."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprDrawCircle": {
          "@helpfn": "xpr_2.htm", 
          "@name": "XprDrawCircle", 
          "Definition": "#### The XprDrawCircle function prints a circle on the page centered at x y and radius r.\nerror = XprDrawCircle (color, r, x, y, lineStyle, lineWidth)", 
          "Example": "XprDrawCircle ($$LightRed, 50, 100, 100, $$LineStyleDashDot, 0)XprDrawCircle ($$Cyan, 200, 300, 300, 0, 3)", 
          "Parameters": [
              {
                  "name": "color", 
                  "text": "Line color."
              }, 
              {
                  "name": "r", 
                  "text": "Radius of circle."
              }, 
              {
                  "name": "x", 
                  "text": "x-position of center of circle."
              }, 
              {
                  "name": "y", 
                  "text": "y-position of center of circle."
              }, 
              {
                  "name": "lineStyle", 
                  "text": "Line style. The lineStyle uses XBasic linestyle constants or Win32 Pen Style constants. The lineStyle will only function if lineWidth = 0 (default), a width of 1 unit.  LineStyles: $$LineStyleSolid = 0 $$LineStyleDash = 1 $$LineStyleDot = 2 $$LineStyleDashDot = 3 $$LineStyleDashDotDot = 4"
              }, 
              {
                  "name": "lineWidth", 
                  "text": "Line width. The line width is given is 1/100\" units or 25 = 1/4\"."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprDrawEllipse": {
          "@helpfn": "xpr_3.htm", 
          "@name": "XprDrawEllipse", 
          "Definition": "#### The XprDrawEllipse function prints an ellipse on the page using the bounding rectangle coordinates.\nerror = XprDrawEllipse (color, x1, y1, x2, y2, lineStyle, lineWidth)", 
          "Example": "XprDrawEllipse ($$LightRed, 10, 10, 50, 90, $$LineStyleDashDot, 0)XprDrawEllipse ($$Green, 100, 100, 200, 300, 0, 4)", 
          "Parameters": [
              {
                  "name": "color", 
                  "text": "Line color."
              }, 
              {
                  "name": "x1", 
                  "text": "x-position of upper-left corner of bounding rectangle."
              }, 
              {
                  "name": "y1", 
                  "text": "y-position of upper-left corner of bounding rectangle."
              }, 
              {
                  "name": "x2", 
                  "text": "x-position of lower-right corner of bounding rectangle."
              }, 
              {
                  "name": "y2", 
                  "text": "y-position of lower-right corner of bounding rectangle."
              }, 
              {
                  "name": "lineStyle", 
                  "text": "Line style. The lineStyle uses XBasic linestyle constants or Win32 Pen Style constants. The lineStyle will only function if lineWidth = 0 (default), a width of 1 unit.  LineStyles: $$LineStyleSolid = 0 $$LineStyleDash = 1 $$LineStyleDot = 2 $$LineStyleDashDot = 3 $$LineStyleDashDotDot = 4"
              }, 
              {
                  "name": "lineWidth", 
                  "text": "Line width. The line width is given is 1/100\" units or 25 = 1/4\"."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprDrawLine": {
          "@helpfn": "xpr_4.htm", 
          "@name": "XprDrawLine", 
          "Definition": "#### The XprDrawLine function prints a line on the page at the given coordinates.\nerror = XprDrawLine (color, x1, y1, x2, y2, lineStyle, lineWidth)", 
          "Example": "XprDrawLine ($$LightRed, 100, 100, 450, 300, $$LineStyleDashDot, 0)XprDrawLine ($$Black, 100, 100, 200, 300, 0, 10)", 
          "Parameters": [
              {
                  "name": "color", 
                  "text": "Line color."
              }, 
              {
                  "name": "x1", 
                  "text": "x-position of line starting point."
              }, 
              {
                  "name": "y1", 
                  "text": "y-position of line starting point."
              }, 
              {
                  "name": "x2", 
                  "text": "x-position of line ending point."
              }, 
              {
                  "name": "y2", 
                  "text": "y-position of line ending point."
              }, 
              {
                  "name": "lineStyle", 
                  "text": "Line style. The lineStyle uses XBasic linestyle constants or Win32 Pen Style constants. The lineStyle will only function if lineWidth = 0 (default), a width of 1 unit.  LineStyles: $$LineStyleSolid = 0 $$LineStyleDash = 1 $$LineStyleDot = 2 $$LineStyleDashDot = 3 $$LineStyleDashDotDot = 4"
              }, 
              {
                  "name": "lineWidth", 
                  "text": "Line width. The line width is given is 1/100\" units or 25 = 1/4\"."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprDrawPie": {
          "@helpfn": "xpr_5.htm", 
          "@name": "XprDrawPie", 
          "Definition": "#### The XprDrawPie function prints a pie shaped wedge on the page centered at x y and radius r beginning at angleStart degrees and ending at angleEnd degrees moving in a counterclockwise direction.\nerror = XprDrawPie (color, r, x, y, angleStart#, angleEnd#, lineStyle, lineWidth)", 
          "Example": "XprDrawPie ($$LightRed, 50, 100, 100, 0, 45, $$LineStyleDashDot, 0)XprDrawPie (RGB(50, 100, 150), 200, 300, 300, 45, 225, $$LineStyleSolid, 3)", 
          "Parameters": [
              {
                  "name": "color", 
                  "text": "Line color."
              }, 
              {
                  "name": "r", 
                  "text": "Circle radius."
              }, 
              {
                  "name": "x", 
                  "text": "x-position of center of circle."
              }, 
              {
                  "name": "y", 
                  "text": "y-position of center of circle."
              }, 
              {
                  "name": "angleStart#", 
                  "text": "Beginning angle in degrees."
              }, 
              {
                  "name": "angleEnd#", 
                  "text": "Ending angle in degrees."
              }, 
              {
                  "name": "lineStyle", 
                  "text": "Line style. The lineStyle uses XBasic linestyle constants or Win32 Pen Style constants. The lineStyle will only function if lineWidth = 0 (default), a width of 1 unit.  LineStyles: $$LineStyleSolid = 0 $$LineStyleDash = 1 $$LineStyleDot = 2 $$LineStyleDashDot = 3 $$LineStyleDashDotDot = 4"
              }, 
              {
                  "name": "lineWidth", 
                  "text": "Line width. The line width is given is 1/100\" units or 25 = 1/4\"."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprDrawText": {
          "@helpfn": "xpr_6.htm", 
          "@name": "XprDrawText", 
          "Definition": "#### The XprDrawText function prints a text string.\nerror = XprDrawText (text$, textFlags, xpos, @ypos, fontName$, fontHeight)", 
          "Example": "text$ = \"Protect your privacy. Clean up your tracks.\"ypos = 150XprDrawText (text$, $$TEXT_NORMAL, 100, @ypos, \"arial\", 24)", 
          "Parameters": [
              {
                  "name": "text$", 
                  "text": "Text string to print."
              }, 
              {
                  "name": "textFlags", 
                  "text": "Text style flags to indicate font properties and text justification on page. One font weight textFlag can be OR'd with one or both text style flags"
              }, 
              {
                  "name": "xPos", 
                  "text": "x-position of text. The x and y positions are given in 1/100\" or 100 = 1\"."
              }, 
              {
                  "name": "yPos", 
                  "text": "y-position of text. The y position of the next line is returned which is useful for printing rows of text."
              }, 
              {
                  "name": "fontName$", 
                  "text": "Font name; eg, \"arial\", \"fixedsys\". The default font is \"times new roman\"."
              }, 
              {
                  "name": "fontHeight", 
                  "text": "Height of font in points, 1 pt = 1/72\"."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprEndDocument": {
          "@helpfn": "xpr_7.htm", 
          "@name": "XprEndDocument", 
          "Definition": "#### The XprEndDocument function ends a print job and deletes the current printer device context.\nerror = XprEndDocument ()", 
          "Example": "XprEndDocument ()", 
          "Parameters": "", 
          "Remarks": "XprEndDocument must be called at the end of print job which was started using XprStartDocument.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprGetDefaultPrinter": {
          "@helpfn": "xpr_8.htm", 
          "@name": "XprGetDefaultPrinter", 
          "Definition": "#### The XprGetDefaultPrinter function returns the default printer name from the windows initialization file win.ini.\nerror = XprGetDefaultPrinter (@defPrinter$, @driver$, @port$)", 
          "Example": "XprGetDefaultPrinter (@defPrinter$, @driver$, @port$)' defPrinter$ = \"BJC-4200\"' driver$= \"CBJ95\"' port$ = \"LPT1:\"", 
          "Parameters": [
              {
                  "name": "defPrinter$", 
                  "text": "The returned default printer name."
              }, 
              {
                  "name": "driver$", 
                  "text": "The returned default printer driver name."
              }, 
              {
                  "name": "port$", 
                  "text": "The returned default printer port name."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprGetLinesPerPage": {
          "@helpfn": "xpr_9.htm", 
          "@name": "XprGetLinesPerPage", 
          "Definition": "#### The XprGetLinesPerPage function returns the maximum lines of text per page based on a specified font height.\nerror = XprGetLinesPerPage (fontHeight, @lpp)", 
          "Example": "XprGetLinesPerPage (10, @lpp)' lpp = 78 (paper size = A4)", 
          "Parameters": [
              {
                  "name": "fontHeight", 
                  "text": "Font height."
              }, 
              {
                  "name": "lpp", 
                  "text": "The returned lines per page. This value will depend on the current default paper size."
              }
          ], 
          "Remarks": "Call XprGetLinesPerPage after calling XprStartDocument.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprGetPrinterYpos": {
          "@helpfn": "xpr_10.htm", 
          "@name": "XprGetPrinterYpos", 
          "Definition": "#### The XprGetPrinterYpos function returns the current y-position on the page in 1/100\" units.\nerror = XprGetPrinterYpos (@pyPos)", 
          "Example": "XprGetPrinterYpos (@y)", 
          "Parameters": "", 
          "Remarks": "Call XprGetPrinterYpos after calling XprStartDocument.", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XprGetPrintingOffset": {
          "@helpfn": "xpr_11.htm", 
          "@name": "XprGetPrintingOffset", 
          "Definition": "#### The XprGetPrintingOffset function returns a printer's offset margins. These are the non-printable margins on all sides of the paper.\nerror = XprGetPrintingOffset (prtName$, @right, @left, @top, @bottom)", 
          "Example": "XprGetPrintingOffset (\"\", @right, @left, @top, @bottom)' right = 14' left = 14' top = 12' bottom = 66", 
          "Parameters": [
              {
                  "name": "prtName$", 
                  "text": "Printer name. If argument is empty, then the default printer is used."
              }, 
              {
                  "name": "right", 
                  "text": "The returned minimum right margin."
              }, 
              {
                  "name": "left", 
                  "text": "The returned minimum left margin."
              }, 
              {
                  "name": "top", 
                  "text": "The returned minimum top margin."
              }, 
              {
                  "name": "bottom", 
                  "text": "The returned minimum bottom margin."
              }
          ], 
          "Remarks": "Return values are in 1/100\" units or 100 = 1\".", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprGetTabValue": {
          "@helpfn": "xpr_12.htm", 
          "@name": "XprGetTabValue", 
          "Definition": "#### The XprGetTabValue function returns the current number of space characters used to replace a tab CHR$(9).\nXprGetTabValue (@tabV)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XprLPrint": {
          "@helpfn": "xpr_13.htm", 
          "@name": "XprLPrint", 
          "Definition": "#### The XprLPrint function prints a text string to the default printer on LPT1.\nerror = XprLPrint (text$)", 
          "Example": "XprLPrint (\"What a day for a daydream.\")", 
          "Parameters": "", 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function. This function only works under win95/win98.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprNewPage": {
          "@helpfn": "xpr_14.htm", 
          "@name": "XprNewPage", 
          "Definition": "#### The XprNewPage function starts a new page to be printed.\nerror = XprNewPage ()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "Use XprNewPage after calling XprStartDocument to cause a form feed and begin new page.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprPrintBmpFile": {
          "@helpfn": "xpr_15.htm", 
          "@name": "XprPrintBmpFile", 
          "Definition": "#### The XprPrintBmpFile function prints a bitmap image from a *.bmp disk file.\nerror = XprPrintBmpFile (fileName$, style, pxPos, @pyPos, scaleFactor)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "fileName$", 
                  "text": "File name of bitmap."
              }, 
              {
                  "name": "style", 
                  "text": "Style flags to indicate scaling and justification printing styles. $$BMP_SCALEFACTORON can be OR'd with one justification style flag ($$BMP_TOPLEFT, $$BMP_MIDDLECENTER, $$BMP_MANUALPOSITION)."
              }, 
              {
                  "name": "pxPos", 
                  "text": "Page x-position of bitmap (a DOUBLE type). The x and y positions are given in 1/100\" or 100 = 1\"."
              }, 
              {
                  "name": "pyPos", 
                  "text": "Page y-position of bitmap. The y position of the bottom of the bitmap is returned."
              }, 
              {
                  "name": "scaleFactor", 
                  "text": "Percent factor to reduce or enlarge the bitmap. The scaleFactor must be > 0. For example, 100 = 100% or a 1:1 ratio with no change in scale, while 50 = 50% or a reduction of image size by half."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprPrintFileToLPT1": {
          "@helpfn": "xpr_16.htm", 
          "@name": "XprPrintFileToLPT1", 
          "Definition": "#### The XprPrintFileToLPT1 function prints a text file to the default printer on LPT1.\nerror = XprPrintFileToLPT1 (fileName$, linesPerPage, EscSequence$)", 
          "Example": "XprPrintFileToLPT1 (\"c:/xblite/readme.txt\", 64, CHR$(27) + CHR$(77)) ' 12 cpi", 
          "Parameters": [
              {
                  "name": "fileName$", 
                  "text": "File name of text file to send to printer."
              }, 
              {
                  "name": "linesPerPage", 
                  "text": "Number of lines to print per page. Default is 62."
              }, 
              {
                  "name": "EscSequence$", 
                  "text": "An initialization escape code sequence string."
              }
          ], 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprPrintFileToMsHtml": {
          "@helpfn": "xpr_17.htm", 
          "@name": "XprPrintFileToMsHtml", 
          "Definition": "#### The XprPrintFileToMsHtml function prints an html file to the default printer. This function will work if IE4.0+ (mshtml.dll) is installed.\nerror = XprPrintFileToMsHtml (fileName$)", 
          "Example": "XprPrintFileToMsHtml (\"c:\\\\xblite\\\\myfile.html\")", 
          "Parameters": "", 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprPrintFileToNetscape": {
          "@helpfn": "xpr_18.htm", 
          "@name": "XprPrintFileToNetscape", 
          "Definition": "#### The XprPrintFileToNetscape function prints an html file to the default printer. This function will work if Netscape3.0+ (netscape.exe) is installed.\nerror = XprPrintFileToNetscape (fileName$)", 
          "Example": "XprPrintFileToNetscape (\"c:/xblite/myfile.html\")", 
          "Parameters": "", 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprPrintFileToNotePad": {
          "@helpfn": "xpr_19.htm", 
          "@name": "XprPrintFileToNotePad", 
          "Definition": "#### The XprPrintFileToNotePad function prints a text file to the default printer using notepad.exe.\nerror = XprPrintFileToNotePad (fileName$)", 
          "Example": "XprPrintFileToNotePad (\"c:/xblite/myfile.html\")", 
          "Parameters": "", 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprPrintFileToShellExecute": {
          "@helpfn": "xpr_20.htm", 
          "@name": "XprPrintFileToShellExecute", 
          "Definition": "#### The XprPrintFileToShellExecute function prints a text file to the default printer using ShellExecute. ShellExecute will try to print the selected text file using whichever\tapplication is associated with the file's extension. *.txt >>> notepad, *.htm/html >>> web browser, IE or NS or ?, *.doc >>> winword.exe.\nerror = XprPrintFileToShellExecute (fileName$)", 
          "Example": "IMPORT \"shell32\"'FUNCTION Entry ()XprPrintFileToShellExecute (\"c:/xblite/myfile.doc\")END FUNCTION", 
          "Parameters": "", 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function. The line\tIMPORT \"shell32\" must be in the PROLOG.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprPrintFileToWordPad": {
          "@helpfn": "xpr_21.htm", 
          "@name": "XprPrintFileToWordPad", 
          "Definition": "#### The XprPrintFileToWordPad function prints a text file to the default printer using wordpad.exe. This prints text using WordPad's default margins.\nerror = XprPrintFileToWordPad (fileName$)", 
          "Example": "XprPrintFileToWordPad (\"c:/xblite/myfile.html\")", 
          "Parameters": "", 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprPrintScreen": {
          "@helpfn": "xpr_22.htm", 
          "@name": "XprPrintScreen", 
          "Definition": "#### The XprPrintScreen function prints the current desktop screen.\nerror = XprPrintScreen (x1Disp, y1Disp, x2Disp, y2Disp, style, pxPos, @pyPos, scaleFactor)", 
          "Example": "pyPos = 200XprPrintScreen (0, 0, 400, 400, $$BMP_SCALEFACTORON, 0, @pyPos, 150)", 
          "Parameters": [
              {
                  "name": "x1Disp", 
                  "text": "Screen x-position of upper-left corner of bounding rectangle."
              }, 
              {
                  "name": "y1Disp", 
                  "text": "Screen y-position of upper-left corner of bounding rectangle."
              }, 
              {
                  "name": "x2Disp", 
                  "text": "Screen x-position of lower-right corner of bounding rectangle."
              }, 
              {
                  "name": "y2Disp", 
                  "text": "Screen y-position of lower-right corner of bounding rectangle."
              }, 
              {
                  "name": "style", 
                  "text": "Style flags to indicate scaling and justification printing styles. $$BMP_SCALEFACTORON can be OR'd with one justification style flag ($$BMP_TOPLEFT, $$BMP_MIDDLECENTER, $$BMP_MANUALPOSITION)."
              }, 
              {
                  "name": "pxPos", 
                  "text": "Page x-position of bitmap. The x and y positions are given in 1/100\" or 100 = 1\"."
              }, 
              {
                  "name": "pyPos", 
                  "text": "Page y-position of bitmap (a DOUBLE value). The y position of the bottom of the bitmap is returned."
              }, 
              {
                  "name": "scaleFactor", 
                  "text": "Percent factor to reduce or enlarge the bitmap. The scaleFactor must be > 0. For example, 100 = 100% or a 1:1 ratio with no change in scale, while 50 = 50% or a reduction of image size by half."
              }
          ], 
          "Remarks": "If all screen bounding coordinates are zero, then the entire screen is printed.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprPrintWindow": {
          "@helpfn": "xpr_23.htm", 
          "@name": "XprPrintWindow", 
          "Definition": "#### The XprPrintWindow function prints a displayed window or control.\nerror = XprPrintWindow (hWnd, style, pxPos, @pyPos, scaleFactor)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "hWnd", 
                  "text": "Window or control handle."
              }, 
              {
                  "name": "style", 
                  "text": "Style flags to indicate scaling and justification printing styles. $$BMP_SCALEFACTORON can be OR'd with one justification style flag ($$BMP_TOPLEFT, $$BMP_MIDDLECENTER, $$BMP_MANUALPOSITION)."
              }, 
              {
                  "name": "pxPos", 
                  "text": "Page x-position of bitmap. The x and y positions are given in 1/100\" or 100 = 1\"."
              }, 
              {
                  "name": "pyPos", 
                  "text": "Page y-position of bitmap (a DOUBLE value). The y position of the bottom of the bitmap is returned."
              }, 
              {
                  "name": "scaleFactor", 
                  "text": "Percent factor to reduce or enlarge the bitmap. The scaleFactor must be > 0. For example, 100 = 100% or a 1:1 ratio with no change in scale, while 50 = 50% or a reduction of image size by half."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprRawTextToPrinter": {
          "@helpfn": "xpr_24.htm", 
          "@name": "XprRawTextToPrinter", 
          "Definition": "#### The XprRawTextToPrinter function prints a text string (as is) directly to the specified printer.\nerror = XprRawTextToPrinter (printerName$, @text$)", 
          "Example": "XprGetDefaultPrinter (@defPrinter$, @driver$, @port$)text$ = \"Some raw text\\r\\nprinted on more\\r\\nthan one line.\\f\"XprRawTextToPrinter (defPrinter$, text$)", 
          "Parameters": [
              {
                  "name": "printerName$", 
                  "text": "The name of printer to send data."
              }, 
              {
                  "name": "text$", 
                  "text": "The raw text string to send to the printer."
              }
          ], 
          "Remarks": "It is not necessary to use XprStartDocument/XprEndDocument with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprSetFillStyle": {
          "@helpfn": "xpr_25.htm", 
          "@name": "XprSetFillStyle", 
          "Definition": "#### The XprSetFillStyle function sets a fillstyle and a fillcolor for graphic objects that can be filled: boxes, ellipses, circles, and pies.\nXprSetFillStyle (style, color)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "style", 
                  "text": "Fill style flag. $$FillStylehatch can be OR'd with the hatchstyles."
              }, 
              {
                  "name": "color", 
                  "text": "Fill color."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XprSetTabValue": {
          "@helpfn": "xpr_26.htm", 
          "@name": "XprSetTabValue", 
          "Definition": "#### The XprSetTabValue function sets the current number of space characters used to replace a tab CHR$(9).\nXprSetTabValue (tabV)", 
          "Example": "XprSetTabValue (5)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XprSetTextColors": {
          "@helpfn": "xpr_27.htm", 
          "@name": "XprSetTextColors", 
          "Definition": "#### The XprSetTextColors function sets the printed text color and background color. This function must be called before calling an XprText function but after XprStartDocument.\nerror = XprSetTextColors (textColor, backColor)", 
          "Example": "XprSetTextColors ($$LightRed, -1)XprSetTextColors (RGB(255, 255, 0), 0x00FF00)", 
          "Parameters": [
              {
                  "name": "textColor", 
                  "text": "Text color."
              }, 
              {
                  "name": "backColor", 
                  "text": "Background color."
              }
          ], 
          "Remarks": "Use -1 to keep current text color or background color.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XprStartDocument": {
          "@helpfn": "xpr_28.htm", 
          "@name": "XprStartDocument", 
          "Definition": "#### The XprStartDocument function initializes a print job and creates a printer device context. It then begins the print job by calling StartDocA. Finally, it informs the driver that the application is about to begin sending data by calling StartPage.\nerror = XprStartDocument (prtName$, jobName$)", 
          "Example": "XprStartDocument (\"BJC-4200\", \"My XBLite Document\")", 
          "Parameters": [
              {
                  "name": "prtName$", 
                  "text": "The printer to send a print job. If prtName$ is empty, then the default printer is used."
              }, 
              {
                  "name": "jobName$", 
                  "text": "A print job name or description. If jobName$ is empty, then a default job name is used."
              }
          ], 
          "Remarks": "XprStartDocument must be called at the start of any print job using the Xpr drawing or text functions. XprStartDocument should not be called again after the job has started and before calling XprEndDocument. XprStartDocument must be matched with XprEndDocument. It is not required with the XprPrintFileXXX functions.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprTextArray": {
          "@helpfn": "xpr_29.htm", 
          "@name": "XprTextArray", 
          "Definition": "#### The XprTextArray function prints an text array within specified margins.\nerror = XprTextArray (@text$[], textFlags, marLeft, @marTop, marRight, marBottom, fontName$, fontHeight)", 
          "Example": "marTop = 100XprTextArray (text$[], 0, 100, @marTop, 100, 100, \"FixedSys\", 10)", 
          "Parameters": [
              {
                  "name": "text$[]", 
                  "text": "Text array to print."
              }, 
              {
                  "name": "textFlags", 
                  "text": "Text style flags to indicate font properties and text justification on page. One font weight textFlag can be OR'd with one or both text style flags"
              }, 
              {
                  "name": "marLeft", 
                  "text": "x-position of left margin. All margin positions are given in 1/100\" or 100 = 1\". Margins begin measurements going inwards from each exterior edge of paper."
              }, 
              {
                  "name": "marTop", 
                  "text": "y-position of top margin (a DOUBLE value). The current y position of the next line is returned in marTop."
              }, 
              {
                  "name": "marRight", 
                  "text": "x-position of right margin."
              }, 
              {
                  "name": "marBottom", 
                  "text": "y-position of bottom margin."
              }, 
              {
                  "name": "fontName$", 
                  "text": "Font name; eg, \"arial\", \"fixedsys\". The default font is \"times new roman\"."
              }, 
              {
                  "name": "fontHeight", 
                  "text": "Height of font in points, 1 pt = 1/72\"."
              }
          ], 
          "Remarks": "There is no word wrapping with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprTextFile": {
          "@helpfn": "xpr_30.htm", 
          "@name": "XprTextFile", 
          "Definition": "#### The XprTextFile function prints an disk text file within specified margins.\nerror = XprTextFile (fileName$, textFlags, marLeft, @marTop, marRight, marBottom, fontName$, fontHeight)", 
          "Example": "marTop = 100XprTextFile (\"c:/xblite/readme.txt\", $$TEXT_WORDWRAPON, 100, @marTop, 100, 100, \"MS Sans Serif\", 10)", 
          "Parameters": [
              {
                  "name": "fileName$", 
                  "text": "Name of text file to print."
              }, 
              {
                  "name": "textFlags", 
                  "text": "Text style flags to indicate font properties and text justification on page. One font weight textFlag can be OR'd with one or both text style flags"
              }, 
              {
                  "name": "marLeft", 
                  "text": "x-position of left margin. All margin positions are given in 1/100\" or 100 = 1\". Margins begin measurements going inwards from each exterior edge of paper."
              }, 
              {
                  "name": "marTop", 
                  "text": "y-position of top margin (a DOUBLE value). The current y position of the next line is returned in marTop."
              }, 
              {
                  "name": "marRight", 
                  "text": "x-position of right margin."
              }, 
              {
                  "name": "marBottom", 
                  "text": "y-position of bottom margin."
              }, 
              {
                  "name": "fontName$", 
                  "text": "Font name; eg, \"arial\", \"fixedsys\". The default font is \"times new roman\"."
              }, 
              {
                  "name": "fontHeight", 
                  "text": "Height of font in points, 1 pt = 1/72\"."
              }
          ], 
          "Remarks": "Word wrapping can be toggled on or off using the text mode flags  $$TEXT_WORDWRAPOFF or $$TEXT_WORDWRAPON.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprTextLine": {
          "@helpfn": "xpr_31.htm", 
          "@name": "XprTextLine", 
          "Definition": "#### The XprTextLine function prints a text string within specified margins. A blank line is printed if text$ = \"\"\nerror = XprTextLine (text$, textFlags, marLeft, @marTop, marRight, marBottom, fontName$, fontHeight)", 
          "Example": "marTop = 150 \t\t'= 1.5\"text$ = \"Protect your privacy. Clean up your tracks.\"XprTextLine (text$, $$TEXT_NORMAL, 100, @marTop, 100, 150, \"arial\", 10)", 
          "Parameters": [
              {
                  "name": "text$", 
                  "text": "Text string to print."
              }, 
              {
                  "name": "textFlags", 
                  "text": "Text style flags to indicate font properties and text justification on page. One font weight textFlag can be OR'd with one or both text style flags"
              }, 
              {
                  "name": "marLeft", 
                  "text": "x-position of left margin. All margin positions are given in 1/100\" or 100 = 1\". Margins begin measurements going inwards from each exterior edge of paper."
              }, 
              {
                  "name": "marTop", 
                  "text": "y-position of top margin (a DOUBLE value). The current y position of the next line is returned in marTop."
              }, 
              {
                  "name": "marRight", 
                  "text": "x-position of right margin."
              }, 
              {
                  "name": "marBottom", 
                  "text": "y-position of bottom margin."
              }, 
              {
                  "name": "fontName$", 
                  "text": "Font name; eg, \"arial\", \"fixedsys\". The default font is \"times new roman\"."
              }, 
              {
                  "name": "fontHeight", 
                  "text": "Height of font in points, 1 pt = 1/72\"."
              }
          ], 
          "Remarks": "There is no word wrapping with this function.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XprTextParagraph": {
          "@helpfn": "xpr_32.htm", 
          "@name": "XprTextParagraph", 
          "Definition": "#### The XprTextParagraph function prints a text string as a word wrapped paragraph within specififed margins.\nerror = XprTextParagraph (text$, textFlags, marLeft, @marTop, marRight, marBottom, fontName$, fontHeight)", 
          "Example": "marTop = 100\"XprTextParagraph (text$, $$TEXT_NORMAL | $$TEXT_ITALIC, 300, @marTop, 300, 150, \"arial\", 10)", 
          "Parameters": [
              {
                  "name": "text$", 
                  "text": "Text string to print."
              }, 
              {
                  "name": "textFlags", 
                  "text": "Text style flags to indicate font properties and text justification on page. One font weight textFlag can be OR'd with one or both text style flags"
              }, 
              {
                  "name": "marLeft", 
                  "text": "x-position of left margin. All margin positions are given in 1/100\" or 100 = 1\". Margins begin measurements going inwards from each exterior edge of paper."
              }, 
              {
                  "name": "marTop", 
                  "text": "y-position of top margin (a DOUBLE value). The current y position of the next line is returned in marTop."
              }, 
              {
                  "name": "marRight", 
                  "text": "x-position of right margin."
              }, 
              {
                  "name": "marBottom", 
                  "text": "y-position of bottom margin."
              }, 
              {
                  "name": "fontName$", 
                  "text": "Font name; eg, \"arial\", \"fixedsys\". The default font is \"times new roman\"."
              }, 
              {
                  "name": "fontHeight", 
                  "text": "Height of font in points, 1 pt = 1/72\"."
              }
          ], 
          "Remarks": "The text justification flags do not apply to word wrapping in paragraphs.", 
          "ReturnValues": "If the function succeeds, the return value is -1. If the function fails, the return value is 0. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "Xrealloc": {
          "@helpfn": "xrealloc.htm", 
          "@name": "Xrealloc", 
          "Definition": "#### The  function returns the memory address of a\nreallocated existing memory block.\naddress = Xrealloc\n(address, size)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "address", 
                  "text": "The address of an existing memory block."
              }, 
              {
                  "name": "size", 
                  "text": "The number of bytes to reallocate."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "Xst": {
          "@helpfn": "xst_5.htm", 
          "@name": "Xst", 
          "Definition": "#### Xst\n function initializes the standard function library.\n\nXst()\n  \nEvery\nprogram must call this function before it calls any other standard\nlibrary function as an EXTERNAL function.\n  Xst() can be called any number of times without\nadverse effects.   If all the functions in Xst are imported using\nIMPORT \"xst\", then it is not necessary to call Xst().", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstAbend": {
          "@helpfn": "xst_6.htm", 
          "@name": "XstAbend", 
          "Definition": "#### XstAbend\n function pops up a critical error box, then terminates the current process.\n\nXstAbend(errorMessage$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstAlert": {
          "@helpfn": "xst_7.htm", 
          "@name": "XstAlert", 
          "Definition": "#### XstAlert\n function pops up an alert dialog box displaying a user defined\nmessage (mostly\na warning or error).\n\nXstAlert(message$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstAnsiToUnicode": {
          "@helpfn": "XstAnsiToUnicode.htm", 
          "@name": "XstAnsiToUnicode$", 
          "Definition": "#### XstAnsiToUnicode$ function makes a copy of the input ANSI\nstring as a UNICODE string.\nunicode$ =\nXstAnsiToUnicode$(ansi$)", 
          "Example": "file$ = XstAnsiToUnicode$(\"1.wmf\")GdipCreateBitmapFromFile (&file$, &ImageObject)\t\t'this function demands unicode input", 
          "Parameters": "", 
          "Remarks": "The input string is not altered.\nThe output string should NOT be used further within xblite but it may\nbe passed by address to a Windows or other external function.\nthat requires input strings in unicode format.", 
          "ReturnValues": "The string returned is a copy of the input string but in unicode format.", 
          "SeeAlso": "XstUnicodeToAnsi$()"
      }, 
      "XstBMSearch": {
          "@helpfn": "XstBMSearch.htm", 
          "@name": "XstBMSearch", 
          "Definition": "#### XstBMSearch function performs a Boyer-Moore search on text$\nlooking for exactly matching pat$\n       pos\n= XstBMSearch( @pat$, @text$, @pos[], first )", 
          "Example": "text$ = \"abracadabrasssabracadabrassssabracadcadbrabrabasaaaaabbbbcccadcadabra\"pat$ = \"ss\"ret = BMSearch (pat$, text$, @pos[], 0)upp = UBOUND (pos[])? \"BMSearch time elapsed:\"; end - start; \" msec\"count = upp + 1? count; \" matches\"         ' 5 matches", 
          "Parameters": [
              {
                  "name": "pat$", 
                  "text": "the pattern string to match"
              }, 
              {
                  "name": "text$", 
                  "text": "the string on which to perform the search"
              }, 
              {
                  "name": "pos[]", 
                  "text": "the return array of matching positions in text$"
              }, 
              {
                  "name": "first", 
                  "text": "if $$TRUE, then return from function after first match and return pos"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The function returns $$TRUE if an error has occured. if first is\n$$TRUE, then the function returns the position of the first match.\nIf no match is found, then the returned pos[] is empty.", 
          "SeeAlso": "XstTally"
      }, 
      "XstBackArrayToBinArray": {
          "@helpfn": "xst_8.htm", 
          "@name": "XstBackArrayToBinArray", 
          "Definition": "#### XstBackArrayToBinArray\n function makes a duplicate of back$[] in bin$[] with all\nbackslash characters converted into their binary equivalents. For\nexample, every occurrence of two character sequence \" \\t \"\nin back$[] into a single 0x09 \"tab\" character in bin$[].\nXstBackArrayToBinArray(@back$[],\n@bin$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "back$[]", 
                  "text": "a string array with backslash characters (\\n, \\0, \\t)"
              }, 
              {
                  "name": "bin$[]", 
                  "text": "returned string array with converted backslash characters"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstBackStringToBinString": {
          "@helpfn": "xst_9.htm", 
          "@name": "XstBackStringToBinString$", 
          "Definition": "#### XstBackStringToBinString$\n function makes a duplicate of back$ in bin$ with all backslash\ncharacters converted to their binary equivalents. For example, convert\nevery occurrence of two character sequence \" \\t \" in back$\ninto a single 0x09 \"tab\" character in bin$.\nbin$ = XstBackStringToBinString$(back$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "back$", 
                  "text": "a string with backslash characters to be converted"
              }, 
              {
                  "name": "bin$", 
                  "text": "returned string with converted backslash characters"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a string.", 
          "SeeAlso": ""
      }, 
      "XstBinArrayToBackArray": {
          "@helpfn": "xst_10.htm", 
          "@name": "XstBinArrayToBackArray", 
          "Definition": "#### XstBinArrayToBackArray\n function makes a duplicate of bin$[] in back$[] with all\n0x00-0x1F and 0x80-0xFF characters converted to backslash character\nequivalents. For example, convert every one byte 0x09 \"tab\"\ncharacter in bin$[] to the two character backslash character sequence\n\" \\t \" in back$[]..\n\nXstBinArrayToBackArray(@bin$[], @back$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "bin$[ ]", 
                  "text": "string array to convert"
              }, 
              {
                  "name": "back$[ ]", 
                  "text": "returned converted string array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstBinRead": {
          "@helpfn": "xst_11.htm", 
          "@name": "XstBinRead", 
          "Definition": "#### XstBinRead\n function reads binary data from diskfile into memory.\nbytesRead = XstBinRead(fileNumber, address, maxBytes)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "fileNumber", 
                  "text": "file number returned by OPEN( )"
              }, 
              {
                  "name": "address", 
                  "text": "memory address to read file data into"
              }, 
              {
                  "name": "maxBytes", 
                  "text": "maximum number of bytes to read"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is the  number of bytes  read into memory address.\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": "XstBinWrite"
      }, 
      "XstBinStringToBackString": {
          "@helpfn": "xst_12.htm", 
          "@name": "XstBinStringToBackString$", 
          "Definition": "#### XstBinStringToBackString$\n function makes a duplicate of bin$ in back$ with every 0x00-0x1F\nand 0x80-0xFF character converted to backslash character equivalent.\nFor example, convert every one byte 0x09 \"tab\" character\nin bin$ to the two character backslash character sequence \"\n\\t \" in back$..\nback$ = XstBinStringToBackString$(binString$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is converted string.", 
          "SeeAlso": ""
      }, 
      "XstBinStringToBackStringNL": {
          "@helpfn": "xst_13.htm", 
          "@name": "XstBinStringToBackStringNL$", 
          "Definition": "#### XstBinStringToBackStringNL$\n function is the same as XstBinStringToBackString$ except 0x0A\nnewline characters are not converted into their backslash character\nequivalent..\nback$ = XstBinStringToBackStringNL$(bin$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is a converted string.", 
          "SeeAlso": "XstBinStringToBackString$"
      }, 
      "XstBinStringToBackStringThese": {
          "@helpfn": "xst_14.htm", 
          "@name": "XstBinStringToBackStringThese$", 
          "Definition": "#### XstBinStringToBackStringThese$\n function makes a duplicate of bin$ in back$ but converts characters\nto their backslash character equivalent. The array these[ ] is used as a\ntemplate for the 256 ASCII character set. If these[x] is   != 0 then\nCHR$(x) in bin$ will be converted to a backslash code. If UBOUND(these[ ])\n< x then CHR$(x) is treated the same as within XstBinStringToBackString$(\n)   - which means every character whose code is 127 or larger will be\nconverted if it isn't specifically set to 0 in these[].\n\nIn Windows, you should probably convert every ASCII control character (x\n< 32), plus of course the quote (x = 34), backslash (x = 92), and ASCII\nDEL (x = 127).\nback$ = XstBinStringToBackStringThese$(bin$, @these[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "bin$", 
                  "text": "string to convert"
              }, 
              {
                  "name": "these[ ]", 
                  "text": "these[] is an array of up to 256 XLONGs"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is a converted string.", 
          "SeeAlso": ""
      }, 
      "XstBinWrite": {
          "@helpfn": "xst_15.htm", 
          "@name": "XstBinWrite", 
          "Definition": "#### XstBinWrite\n function writes binary data\nto diskfile from memory.\n\nbytesWritten =\nXstBinWrite(fileNumber, address, writeBytes)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "fileNumber", 
                  "text": "valid file number returned from OPEN( )"
              }, 
              {
                  "name": "address", 
                  "text": "memory address to get data from"
              }, 
              {
                  "name": "writeBytes", 
                  "text": "number of bytes to write to file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is the  number of bytes\nwritten to disk file.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": "XstBinRead"
      }, 
      "XstBuildDataArray": {
          "@helpfn": "XstBuildDataArray.htm", 
          "@name": "XstBuildDataArray", 
          "Definition": "#### ", 
          "Example": "XstBuildDataArray( @a1[], \"5,7,9,34,56\", $$XLONG)\t 'create array a1[4] with 5 values suppliedXstBuildDataArray( @a1[], \"{67,78,89}\", $$XLONG)      \t 'replace a1[4] with a1[2] having values supplied                                                         'note use of {} which are optional for 1-D arrays 'create 2D array s[1,1] and load 4 values  SINGLE s[]\t\t\t\t\t\t 'note need to declare s[] because it is not XLONGXstBuildDataArray( @s[], \"{{12.78,-78.976},{34.98,12.7}}\", $$SINGLE)  'create irregular 2D array and populate with the supplied values'the tree itself is regular in depth but each data node has a different number of values DOUBLE d[]\t\t\t\t\t\t XstBuildDataArray( @d[], \"{{1.2,3.4},{7.0,6.9,3.8},{5.9}}\", $$DOUBLE)'build array with irregular tree structure and irregular data nodesirreg$ = \"{{{17},{234,3176}},{4096},{{{51654},{66,-777}},{999}},{{{{45,67}}}}}\"XstBuildDataArray(@array[],irreg$,$$XLONG)\t\t' array[0,0,0]     = 17' array[0,1,0]     = 234' array[0,1,1]     = 3176' array[1,0]       = 4096' array[2,0,0,0]   = 51654' array[2,0,1,0]   = 66' array[2,0,1,1]   = -777' array[2,1,0]     = 999' array[3,0,0,0,0] = 45' array[3,0,0,0,1] = 67SSHORT ss[]XstBuildDataArray( @ss[], \"c:/data/datafile.csv\", $$SSHORT) 'dimension and populate SSHORT array from data file 'create a regular 3-D arrayGIANT g[]data$ = \"{{{23,45,22},{67,89,44}},{{49,12,29},{37,18,52}}}\"XstBuildDataArray( @g[], data$, $$GIANT)\t\t 'build g[1,1,2] and load 12 values", 
          "Parameters": [
              {
                  "name": "@a[]", 
                  "text": "the array to be created or replaced"
              }, 
              {
                  "name": "data$", 
                  "text": "a string containing comma separated values and braces"
              }, 
              {
                  "name": "to show the array structure OR", 
                  "text": "the name of a file containing this data"
              }, 
              {
                  "name": "type", 
                  "text": "the data type of the array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "To APPEND to the contents of an existing 1D array see \nTo save the contents of any array, see"
      }, 
      "XstBytesToBound": {
          "@helpfn": "xst_16.htm", 
          "@name": "XstBytesToBound", 
          "Definition": "#### XstBytesToBound\n function returns the upperbound which an array of a type 'type'\nmust have to occupy at least 'bytes' bytes.\n\nupper = XstBytesToBound(type,\nbytes)", 
          "Example": "upper = XstBytesToBound($$DOUBLE, 500)   ' upper = 62", 
          "Parameters": [
              {
                  "name": "type", 
                  "text": "data type; $$ULONG, $$XLONG, $$UBYTE, $$SSHORT, etc."
              }, 
              {
                  "name": "bytes", 
                  "text": "total number of bytes in array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is the required upperbound\nof array.\nIf the function fails, the return value is -1 (unknown type or bytes =\n0).", 
          "SeeAlso": ""
      }, 
      "XstCall": {
          "@helpfn": "XstCall.htm", 
          "@name": "XstCall", 
          "Definition": "#### XstCall\n function calls an external library (DLL) function without the\nneed to IMPORT\nthe library in the PROLOG.\n\nreturn = XstCall(funcName$,\ndllName$, @args[])", 
          "Example": "DIM args[2]args[0] = 0fn$ = NULL$(255)args[1] = &fn$args[2] = LEN(fn$)ret = XstCall (\"GetModuleFileName\", \"kernel32.dll\", @args[])PRINT \"XstCall: 3 args: GetModuleFileName ret=\"; ret; \" \"; LEFT$(fn$, ret)", 
          "Parameters": [
              {
                  "name": "funcName$", 
                  "text": "the function name to call"
              }, 
              {
                  "name": "dllName$", 
                  "text": "the name of the DLL which contains the function"
              }, 
              {
                  "name": "@args[]", 
                  "text": "an array containing values for each argument in the function"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is return value from the\ncalled function.", 
          "SeeAlso": ""
      }, 
      "XstCauseException": {
          "@helpfn": "XstCauseException.htm", 
          "@name": "XstCauseException", 
          "Definition": "#### The  function causes the specified native or\nuser-registered exception to occur. \nXstCauseException (exception)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "Ordinarily, this function does not return; control passes to the most\nrecently installed exception handler, if any.    Any code\nfollowing a call to XstCauseException() will not be\nexecuted.    See XstTry() for more information.\nXstCauseException() always raises a user-defined exception as\n$$ExceptionTypeError.    For other exception types, use\nXstRaiseException().", 
          "ReturnValues": "", 
          "SeeAlso": "ExceptionsXstRaiseException()XstRegisterException()XstTry()"
      }, 
      "XstCenterWindow": {
          "@helpfn": "xst_18.htm", 
          "@name": "XstCenterWindow", 
          "Definition": "#### XstCenterWindow\n function centers a window within the display area.\nerror = XstCenterWindow(hWnd)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstChangeDirectory": {
          "@helpfn": "xst_19.htm", 
          "@name": "XstChangeDirectory", 
          "Definition": "#### XstChangeDirectory\n function changes the default or working directory\nto directory$.\n\nerror =\nXstChangeDirectory(directory$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstCompareStrings": {
          "@helpfn": "xst_21.htm", 
          "@name": "XstCompareStrings", 
          "Definition": "#### XstCompareStrings\n function compares two strings based on a test operator.\n\nresult =\nXstCompareStrings(addrString1, op, addrString2, flags)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "addrString1", 
                  "text": "address of first string to compare"
              }, 
              {
                  "name": "op", 
                  "text": "test operator; $$EQ, $$NE, $$LT, $$LE, $$GE, $$GT"
              }, 
              {
                  "name": "addrString2", 
                  "text": "address of 2nd string to compare"
              }, 
              {
                  "name": "flags", 
                  "text": "type of comparison; $$SortCaseInsensitive, $$SortAlphaNumeric"
              }
          ], 
          "Remarks": "Valid Test Operator constants:", 
          "ReturnValues": "If the function succeeds, the return value is FALSE or a valid test\noperator depending on requested comparison operator.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstCopyArray": {
          "@helpfn": "xst_22.htm", 
          "@name": "XstCopyArray", 
          "Definition": "#### XstCopyArray\n function returns a copy of simple numeric type or string\narray[] in copy[]. XstCopyArray cannot copy composite arrays,\nwhich includes SCOMPLEX and DCOMPLEX arrays, as well as all user-defined\nand composite type arrays. Make sure copy[] is the same type as\narray[].\nerror = XstCopyArray(@array[], @copy[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "array[ ]", 
                  "text": "source array"
              }, 
              {
                  "name": "copy[ ]", 
                  "text": "destination array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstCopyDirectory": {
          "@helpfn": "xst_23.htm", 
          "@name": "XstCopyDirectory", 
          "Definition": "#### XstCopyDirectory\n function copies all files and sub-folders from source directory path to destination directory path.\nerror = XstCopyDirectory(source$, dest$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "source directory path"
              }, 
              {
                  "name": "dest$", 
                  "text": "destination directory path"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstCopyFile": {
          "@helpfn": "xst_25.htm", 
          "@name": "XstCopyFile", 
          "Definition": "#### XstCopyFile\n function creates a new file called\nnewFilename$ and copies the contents of the existing sourceFilename$ into newFilename$..\nerror = XstCopyFile(sourceFilename$, newFilename$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "sourceFilename$", 
                  "text": "source file"
              }, 
              {
                  "name": "newFilename$", 
                  "text": "destination file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstCopyMemory": {
          "@helpfn": "xst_26.htm", 
          "@name": "XstCopyMemory", 
          "Definition": "#### XstCopyMemory\n function copies a fixed number of bytes from a source memory\naddress to a destination memory address.\n\nerror =\nXstCopyMemory(sourceAddr, destAddr, bytes)", 
          "Example": "x = 500y = 0XstCopyMemory (&x, &y, SIZE(x))   ' y=500", 
          "Parameters": [
              {
                  "name": "sourceAddr", 
                  "text": "source memory address"
              }, 
              {
                  "name": "destAddr", 
                  "text": "destination memory address"
              }, 
              {
                  "name": "bytes", 
                  "text": "number of bytes to copy from source to destination address"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstCreateDoubleImage": {
          "@helpfn": "xst_27A.htm", 
          "@name": "XstCreateDoubleImage$", 
          "Definition": "#### XstCreateDoubleImage$\n function returns a double image literal of a double value.\nDouble\nimage literals are images of the 64-bit DOUBLE data type in 4-bit\nchunks.\nDouble image literals begin with 0d and are followed by exactly 16\nsignificant\nhexadecimal digits.\n\nXstCreateDoubleImage$(x)", 
          "Example": "di$ = XstCreateDoubleImage$(2.333)", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "The return value is a double image literal string.", 
          "SeeAlso": ""
      }, 
      "XstDateAndTimeToFileTime": {
          "@helpfn": "xst_27B.htm", 
          "@name": "XstDateAndTimeToFileTime", 
          "Definition": "#### XstDateAndTimeToFileTime\n function converts the time and date arguments to a file time. The\nFILETIME structure is a 64-bit value representing the number of 100-nanosecond\nintervals since January 1, 1601.\nXstDateAndTimeToFileTime(year, month, day, hour, minute, second, nanos, @filetime$$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "year", 
                  "text": "year"
              }, 
              {
                  "name": "month", 
                  "text": "month; January = 1, February = 2, ..."
              }, 
              {
                  "name": "day", 
                  "text": "day of month"
              }, 
              {
                  "name": "hour", 
                  "text": "hour"
              }, 
              {
                  "name": "minute", 
                  "text": "minute"
              }, 
              {
                  "name": "second", 
                  "text": "second"
              }, 
              {
                  "name": "nanos", 
                  "text": "nanoseconds"
              }, 
              {
                  "name": "filetime$$", 
                  "text": "returned file time GIANT integer"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": "XstFileTimeToDateAndTime"
      }, 
      "XstDecomposePathname": {
          "@helpfn": "xst_28.htm", 
          "@name": "XstDecomposePathname", 
          "Definition": "#### XstDecomposePathname\n function breaks down a file path name into component parts\n\n\nXstDecomposePathname(pathname$, @path$, @parent$, @filename$, @file$, @extent$)", 
          "Example": "pathname$ = \"c:/program files/coolapp/cool.exe\"XstDecomposePathname(pathname$, @path$, @parent$, @filename$, @file$, @extent$)'results:'path$       = \"c:/program files/coolapp\"'parent$    = \"coolapp\"'filename$ = \"cool.exe\"'file$       = \"cool\"'extent$    = \".exe\"", 
          "Parameters": [
              {
                  "name": "pathname$", 
                  "text": "full file path name"
              }, 
              {
                  "name": "path$", 
                  "text": "returned full pathname to the left of \"/file.ext\""
              }, 
              {
                  "name": "parent$", 
                  "text": "returned parent pathname if any"
              }, 
              {
                  "name": "filename$", 
                  "text": "returned file$ + extent$; \"name.ext\""
              }, 
              {
                  "name": "file$", 
                  "text": "returned file name without exension"
              }, 
              {
                  "name": "extent$", 
                  "text": "returned  file extension; \".ext\""
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstDeleteFile": {
          "@helpfn": "xst_29.htm", 
          "@name": "XstDeleteFile", 
          "Definition": "#### XstDeleteFile\n function deletes a file or empty directory.\n \nerror = XstDeleteFile(filename$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstDeleteLines": {
          "@helpfn": "xst_30.htm", 
          "@name": "XstDeleteLines", 
          "Definition": "#### XstDeleteLines\n function deletes 'count' lines from string array text$[]\nstarting\nat line 'first'.\n\nerror =\nXstDeleteLines(@text$[], first, count)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "text$[ ]", 
                  "text": "input string array from which lines are removed, altered array is returned"
              }, 
              {
                  "name": "first", 
                  "text": "starting line"
              }, 
              {
                  "name": "count", 
                  "text": "number of lines to delete"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstEnableFPExceptions": {
          "@helpfn": "XstEnableFPExceptions.htm", 
          "@name": "XstEnableFPExceptions", 
          "Definition": "#### XstEnableFPExceptions \nThe function enables the divide-by-zero, overflow, and underflow FPU exceptions. This is accomplished by unmasking their respective bits in the control word.\n\ncwLast = XstEnableFPExceptions()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "By default, all XBLite programs will run with FPU exceptions enabled. All of the FPU control word exceptions can be disabled by calling the assembly instruction 'finit'. This will also set the FPU precision to 64 bits.", 
          "ReturnValues": "The returned value is the previous USHORT control word.", 
          "SeeAlso": ""
      }, 
      "XstErrorNameToNumber": {
          "@helpfn": "xst_31.htm", 
          "@name": "XstErrorNameToNumber", 
          "Definition": "#### XstErrorNameToNumber  \nfunction converts the one or two part error name in error$ into a\nnative error number. See\nxst.dec for $$ErrorObject and $$ErrorNature constants.\nerror =\nXstErrorNameToNumber(error$, @error)", 
          "Example": "error$ = \"Array Empty\"XstErrorNameToNumber (error$, @error) ' error = 2820XstErrorNumberToName (error, @err$)    ' err$ = \"Array Empty\"", 
          "Parameters": [
              {
                  "name": "error$", 
                  "text": "error string"
              }, 
              {
                  "name": "error", 
                  "text": "returned native error number"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is error number.", 
          "SeeAlso": "XstErrorNumberToName"
      }, 
      "XstErrorNumberToName": {
          "@helpfn": "xst_32.htm", 
          "@name": "XstErrorNumberToName", 
          "Definition": "#### XstErrorNumberToName\n function converts the one or two part native error number into\nan error$ name.\n\nXstErrorNumberToName(error, @error$)", 
          "Example": "error = 2820  XstErrorNumberToName (error, @err$)    ' err$ = \"Array Empty\"", 
          "Parameters": [
              {
                  "name": "error", 
                  "text": "native error number"
              }, 
              {
                  "name": "error$", 
                  "text": "returned error string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstErrorNameToNumber"
      }, 
      "XstExceptionNameToNumber": {
          "@helpfn": "XstExceptionNameToNumber.htm", 
          "@name": "XstExceptionNameToNumber", 
          "Definition": "#### The  function reports the exception\nnumber\ncorresponding to the name of a native or user-registered exception.\n\nXstExceptionNameToNumber\n(exception$, @exception)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "exception$", 
                  "text": "exception name"
              }, 
              {
                  "name": "exception", 
                  "text": "exception number"
              }
          ], 
          "Remarks": "If the exception name has not been registered or is not the name of a\nnative exception, the exception number is 0.", 
          "ReturnValues": "Returns 0 is successful, -1 if the exception name is unknown.", 
          "SeeAlso": "ExceptionsXstExceptionNumberToName()XstRegisterException()"
      }, 
      "XstExceptionNumberToName": {
          "@helpfn": "XstExceptionNumberToName.htm", 
          "@name": "XstExceptionNumberToName", 
          "Definition": "#### XstExceptionNumberToName \nThe function reports the name or description corresponding to a native or user-registered exception number.\n\nXstExceptionNumberToName\n(exception, @exception$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "exception", 
                  "text": "a native or user-registered exception code"
              }, 
              {
                  "name": "exception$", 
                  "text": "name or description of the exception"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Returns 0 if successful, -1 if the exception number is invalid.", 
          "SeeAlso": "Exceptions\n\nXstExceptionNameToNumber()\n\nXstRegisterException()"
      }, 
      "XstExceptionToSystemException": {
          "@helpfn": "XstExceptionToSystemException.htm", 
          "@name": "XstExceptionToSystemException", 
          "Definition": "#### The  function converts a native or\nuser-registered exception number to an operating system exception\nnumber.\n\nXstExceptionToSystemException\n(exception, @sysException)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "exception", 
                  "text": "native or user-registered exception code"
              }, 
              {
                  "name": "sysException", 
                  "text": "operating system exception code"
              }
          ], 
          "Remarks": "System exception codes are defined in kernel32.dec; corresponding\nnative codes are in xst.dec.    User-registered codes are\nconverted to system codes by adding the $$ExceptionTypeError and\n$$ExceptionCodeUser bits.", 
          "ReturnValues": "Returns 0 if successful, -1 if the native or user exception code is invalid.", 
          "SeeAlso": "ExceptionsXstSystemExceptionToException()XstRegisterException()"
      }, 
      "XstFileExists": {
          "@helpfn": "XstFileExists.htm", 
          "@name": "XstFileExists", 
          "Definition": "#### XstFileExists\n function returns 0 if file file$ exists and -1 if it fails to\nfind the file.\nreturn = XstFileExists(file$)", 
          "Example": "IFZ XstFileExists (\"c:/xblite/demo/console/pidigits/pidigits.x\") THEN PRINT \"FileExists\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstFileTimeToDateAndTime": {
          "@helpfn": "xst_34A.htm", 
          "@name": "XstFileTimeToDateAndTime", 
          "Definition": "#### XstDateAndTimeToFileTime\n function converts a file time into time and date arguments. The\nFILETIME structure is a 64-bit value representing the number of\n100-nanosecond\nintervals since January 1, 1601.\n\nXstFileTimeToDateAndTime(filetime$$, @year, @month, @day,\n@hour, @minute, @second, @nanos)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filetime$$", 
                  "text": "File time GIANT integer"
              }, 
              {
                  "name": "year", 
                  "text": "Returned year"
              }, 
              {
                  "name": "month", 
                  "text": "Returned month; January = 1, February = 2, ..."
              }, 
              {
                  "name": "day", 
                  "text": "Returned day of month"
              }, 
              {
                  "name": "hour", 
                  "text": "Returned hour"
              }, 
              {
                  "name": "minute", 
                  "text": "Returned minute"
              }, 
              {
                  "name": "second", 
                  "text": "Returned second"
              }, 
              {
                  "name": "nanos", 
                  "text": "Returned nanoseconds"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": "XstDateAndTimeToFileTime"
      }, 
      "XstFileToSystemFile": {
          "@helpfn": "xst_35.htm", 
          "@name": "XstFileToSystemFile", 
          "Definition": "#### XstFileToSystemFile\n function converts a native filenumber returned by OPEN( ) into the systemFilenumber - the\nfile number or handle the operating system refers to the file with.\nThis makes it possible to call operating system functions directly to\nget information about the file..\n\n\nXstFileToSystemFile (filenumber, @systemFilenumber)", 
          "Example": "ofile = OPEN (\"myfile\", $$RW)XstFileToSystemFile (ofile, @hFile)", 
          "Parameters": [
              {
                  "name": "filenumber", 
                  "text": "native file number returned from OPEN()"
              }, 
              {
                  "name": "systemFilenumber", 
                  "text": "system file handle"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstFindArray": {
          "@helpfn": "xst_36.htm", 
          "@name": "XstFindArray", 
          "Definition": "#### XstFindArray (mode, @text$[], @find$, @line, @pos, @match)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "mode", 
                  "text": "Type of match to perform, default is a forward, case-sensitive find."
              }, 
              {
                  "name": "text$[ ]", 
                  "text": "String array"
              }, 
              {
                  "name": "find$", 
                  "text": "Find string"
              }, 
              {
                  "name": "line", 
                  "text": "Returned line number where a match was found"
              }, 
              {
                  "name": "pos", 
                  "text": "Returned character position in line where a match was found"
              }, 
              {
                  "name": "match", 
                  "text": "match return is $$TRUE when a match is found, else zero."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstFindFile": {
          "@helpfn": "xst_37.htm", 
          "@name": "XstFindFile", 
          "Definition": "#### XstFindFile(file$, @path$[],\n@path$, @attr) \n\nThe purpose of this function is to find a file that might be in more\nthan one place.   This function searches for the file in the\nsubdirectories in the order specified in path$[].\nIf the file is found, path$ is returned with the complete path,\nincluding the filename, and attr contains the file attributes.  \nNote that this function does not find directories of the given file$\nname - it looks for regular files.\nOnly the current directory will be searched if file$  starts with\n\"./\".", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "file$", 
                  "text": "File name to search for"
              }, 
              {
                  "name": "path$[ ]", 
                  "text": "String array of path names to include in search"
              }, 
              {
                  "name": "path$", 
                  "text": "Returned path of found file"
              }, 
              {
                  "name": "attr", 
                  "text": "Returned attributes of found file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstFindFiles": {
          "@helpfn": "xst_38.htm", 
          "@name": "XstFindFiles", 
          "Definition": "#### The  function returns in array file$[] all files in\nbasepath$ that match filter$. If the recurse argument is $$TRUE, then\nXstFindFiles uses recursion to find all subsequent file matches within\nall sub-directories of basepath$. The file filter can include the '*'\nand '?' wildcard characters. It is not necessary to DIM the array\nfile$[] before calling the function.\nerror = XstFindFiles(basepath$,\nfilter$, recurse, @file$[])", 
          "Example": "basedir$ = \"/xblite/\"filefilter$ = \"*.bmp\"XstFindFiles (@basedir$, @filefilter$, $$TRUE, @file$[])IF file$[] THEN  FOR i = 0 TO UBOUND (file$[])     PRINT file$[i]  NEXT iEND IF", 
          "Parameters": [
              {
                  "name": "basepath$", 
                  "text": "Directory to begin search"
              }, 
              {
                  "name": "filter$", 
                  "text": "File filter; myprog.x, *.x, a*.x, *.00?"
              }, 
              {
                  "name": "recurse", 
                  "text": "If $$TRUE, then use recursion on all sub-directories"
              }, 
              {
                  "name": "file$[ ]", 
                  "text": "Returned array of matching file names"
              }
          ], 
          "Remarks": "Characters that represent one or more characters in a filename. The\nWindows wildcard characters are the question mark (?) and the asterisk\n(*). The question mark matches any single character; the asterisk\nmatches any combination of characters. For example, if a directory\ncontains files with the names BAT, B12, BOAT, and CAT, the pattern \"b*\n\" matches the names BAT, B12, and BOAT. The pattern \"b?t\" matches only\nthe name BAT (from Win32 Reference Guide).", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstFindMemoryMatch": {
          "@helpfn": "xst_38A.htm", 
          "@name": "XstFindMemoryMatch", 
          "Definition": "#### XstFindMemoryMatch\n function returns the address of the first byte in the source\nbuffer which matches the find/match string.   \nbytes =\nXstFindMemoryMatch(@addrStart, addrAfter, addrFind, @minLength,\nmaxLength)", 
          "Example": "text$         = \"What a fine friendly dog you have there\"addrText   = &text$find$         = \"dog\"addrFind   = &find$minLength = LEN(find$)maxLength = minLength'bytes = XstFindMemoryMatch(@addrText, addrText+LEN(text$), @addrFind, minLength, maxLength)IF bytes THEN   FOR i = 0 TO bytes - 1       match$ = match$ + CHR$(UBYTEAT(addrText + i))   NEXT i   PRINT match$END IF", 
          "Parameters": [
              {
                  "name": "addrStart", 
                  "text": "Address of first byte in source buffer to search. Returns the address of first byte that matched."
              }, 
              {
                  "name": "addrAfter", 
                  "text": "Address of byte past end of source buffer to search."
              }, 
              {
                  "name": "addrFind", 
                  "text": "Address of first byte in string to find."
              }, 
              {
                  "name": "minLength", 
                  "text": "Minimum number of bytes that must match. Returns the number of characters that matched."
              }, 
              {
                  "name": "maxLength", 
                  "text": "Maximum number of bytes that may match (length of find string)."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The return value is the number of bytes in source buffer that matched.\nIf no match is found, or an error has occurred, the return value is\nzero.", 
          "SeeAlso": ""
      }, 
      "XstGetCPUName": {
          "@helpfn": "xst_44.htm", 
          "@name": "XstGetCPUName", 
          "Definition": "#### XstGetCPUName\n function returns the CPU number and returns CPU information in the arguments.\ncpu = XstGetCPUName(@id$, @cpuFamily, @model, @intelBrandID)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "id$", 
                  "text": "CPU string ID"
              }, 
              {
                  "name": "cpuFamily", 
                  "text": "CPU family name"
              }, 
              {
                  "name": "model", 
                  "text": "CPU model number"
              }, 
              {
                  "name": "intelBrandID", 
                  "text": "Intel brand ID number"
              }
          ], 
          "Remarks": "See the comments in  for more specific information on CPU family and model values.", 
          "ReturnValues": "Return is 386 if CPU is a 80386 microprocessor.\nReturn is 486 if CPU is a 80486 or other post-386 CPU that does not have a CPUID instruction\nReturn is x86 if CPU has a CPUID instruction, so it could be 486, 586, 686...", 
          "SeeAlso": ""
      }, 
      "XstGetClipboard": {
          "@helpfn": "xst_41.htm", 
          "@name": "XstGetClipboard", 
          "Definition": "#### XstGetClipboard\n function returns the current clipboard data. The returned data\ncan be text or bitmap bytes.\nerror =\nXstGetClipboard(clipType, @text$, UBYTE image[])", 
          "Example": "UBYTE image[]DIM image[]XstGetClipboard (1, @clip$, @image[])       ' get clipboard text", 
          "Parameters": [
              {
                  "name": "cliptype", 
                  "text": "Clipboard type: 1 = text, 2 = bitmap image data"
              }, 
              {
                  "name": "text$", 
                  "text": "Returned clipboard text"
              }, 
              {
                  "name": "image[]", 
                  "text": "Returned clipboard bitmap data"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstGetCommandLine": {
          "@helpfn": "xst_42.htm", 
          "@name": "XstGetCommandLine", 
          "Definition": "#### XstGetCommandLine\n function returns a command-line string for the current process.\n\n\nXstGetCommandLine(@commandline$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetCommandLineArguments": {
          "@helpfn": "xst_43.htm", 
          "@name": "XstGetCommandLineArguments", 
          "Definition": "#### XstGetCommandLineArguments\n function returns the number of command line arguments in\nargCount, and the command line argument strings in argv$[]. argCount\nshould never be 0 or less, since the name of the program is the\nfirst argument, unless XstSetCommandLineArguments has changed\nthem.", 
          "Example": "XstGetCommandLineArguments(@argCount, @argv$[])PRINT argCountFOR i = 0 TO UBOUND(argv$[])   PRINT argv$[i]NEXT", 
          "Parameters": [
              {
                  "name": "argCount", 
                  "text": "Returned number of command-line arguments"
              }, 
              {
                  "name": "argv$[ ]", 
                  "text": "Returned string array of command-line arguments"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "system.x"
      }, 
      "XstGetCurrentDirectory": {
          "@helpfn": "xst_45.htm", 
          "@name": "XstGetCurrentDirectory", 
          "Definition": "#### XstGetCurrentDirectory\n function returns the current default (or working) directory path name in directory$.\nerror = XstGetCurrentDirectory(@directory$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": "SetCurrentDirectory( )"
      }, 
      "XstGetDateAndTime": {
          "@helpfn": "xst_46.htm", 
          "@name": "XstGetDateAndTime", 
          "Definition": "#### XstGetDateAndTime\n function gets the current date and time in GMT (Greenwich\nmean time). \nXstGetDateAndTime(@year, @month, @day, @weekDay, @hour, @min, @sec, @nanos)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "year", 
                  "text": "Returned current year (0000 - 9999)"
              }, 
              {
                  "name": "month", 
                  "text": "Returned current month ( 1 - 12)"
              }, 
              {
                  "name": "day", 
                  "text": "Returned current day of month (1 - 31)"
              }, 
              {
                  "name": "weekDay", 
                  "text": "Returned current week day (sunday = 0, saturday = 6)"
              }, 
              {
                  "name": "hour", 
                  "text": "Returned current hour (0 - 23)"
              }, 
              {
                  "name": "min", 
                  "text": "Returned current minute (0 - 59)"
              }, 
              {
                  "name": "sec", 
                  "text": "Returned current second (0 - 59)"
              }, 
              {
                  "name": "nanos", 
                  "text": "Returned current nanosecond (0 -   999999999)"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetLocalDateAndTimeXstSetDateAndTime"
      }, 
      "XstGetDateAndTimeFormatted": {
          "@helpfn": "xst_46A.htm", 
          "@name": "XstGetDateAndTimeFormatted", 
          "Definition": "#### XstGetDateAndTimeFormatted\n function returns formatted strings for the current date and\ntime. \n\nXstGetDateAndTimeFormatted(language, dateFormat, @date$, timeFormat,\n@time$)", 
          "Example": "XstGetDateAndTimeFormatted(0, 2, @date$, 5, @time$)PRINT date$, time$      '   10/04/02   15:14:40", 
          "Parameters": [
              {
                  "name": "language", 
                  "text": "Language (0 = English, 1 = French)"
              }, 
              {
                  "name": "dateFormat", 
                  "text": "Style of date string:"
              }, 
              {
                  "name": "date$", 
                  "text": "Returned date string"
              }, 
              {
                  "name": "timeFormat", 
                  "text": "Style of time string:"
              }, 
              {
                  "name": "time$", 
                  "text": "Returned time string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetLocalDateAndTime( )XstGetDateAndTime( )"
      }, 
      "XstGetDrives": {
          "@helpfn": "xst_47.htm", 
          "@name": "XstGetDrives", 
          "Definition": "#### XstGetDrives\n function gets the drives\ncurrently recognized by the system.\n\nXstGetDrives(@count, @drive$[], @type[], @type$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "count", 
                  "text": "Returned number of drives"
              }, 
              {
                  "name": "drive$[ ]", 
                  "text": "Returned string array of drive names"
              }, 
              {
                  "name": "type[ ]", 
                  "text": "Returned array of drive types"
              }, 
              {
                  "name": "type$[ ]", 
                  "text": "Returned string array of drive types"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetEndian": {
          "@helpfn": "xst_48.htm", 
          "@name": "XstGetEndian", 
          "Definition": "#### XstGetEndian\n function returns a 64-bit endian descriptor that contains\nthe following 8 bytes: 0x00 , 0x01 , 0x02 , 0x03, 0x04, 0x05, 0x06,\n0x07 in the lowest to highest addresses of endian$$. The value of\nendian$$ is therefore 0x0706050403020100 on little endian systems,\nand 0x0001020304050607 on pure big endian systems.\n\nXstGetEndian(@endian$$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetEndianName"
      }, 
      "XstGetEndianName": {
          "@helpfn": "xst_49.htm", 
          "@name": "XstGetEndianName", 
          "Definition": "#### XstGetEndianName\n function returns the system endian name;   \"LittleEndian\" or \"BigEndian\"\nis returned in endian$.\n\nXstGetEndianName(@endian$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetEndian"
      }, 
      "XstGetEnvironmentVariable": {
          "@helpfn": "xst_50.htm", 
          "@name": "XstGetEnvironmentVariable", 
          "Definition": "#### XstGetEnvironmentVariable\n function gets the string value$ of the environment variable name$. \n\nXstGetEnvironmentVariable(name$, @value$)", 
          "Example": "XstGetEnvironmentVariable (\"PATH\", @path$)", 
          "Parameters": [
              {
                  "name": "name$", 
                  "text": "Environment variable name"
              }, 
              {
                  "name": "value$", 
                  "text": "Returned environment variable string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetEnvironmentVariables": {
          "@helpfn": "xst_51.htm", 
          "@name": "XstGetEnvironmentVariables", 
          "Definition": "#### XstGetEnvironmentVariables\n function returns the number of environment variable strings and\nthe\nenvironment variable strings in string array envp$[]. The strings\ncontain\nboth the name of the environment variable and its value, separated by\nan\n\" = \", as in \"PATH=c:\\windows; c:\\windows\\system; c:\\xblite\".\n\nXstGetEnvironmentVariables(@count, @envp$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "count", 
                  "text": "Returned number of environment variable strings"
              }, 
              {
                  "name": "envp$[ ]", 
                  "text": "Returned array of environment variable strings"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetException": {
          "@helpfn": "XstGetException.htm", 
          "@name": "XstGetException", 
          "Definition": "#### The  function reports the code for the most recent exception.\n\nXstGetException (@exception)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Does not return a value.", 
          "SeeAlso": "Exceptions"
      }, 
      "XstGetExceptionFunction": {
          "@helpfn": "XstGetExceptionFunction.htm", 
          "@name": "XstGetExceptionFunction", 
          "Definition": "#### The  function reports the address of the\ncurrent exception function, as set by XstSetExceptionFunction().\n\nXstGetExceptionFunction\n(@exceptionFunction)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "If no exception function has been set,  will\nbe 0.", 
          "ReturnValues": "Does not return a value.", 
          "SeeAlso": "ExceptionsXstSetExceptionFunction()"
      }, 
      "XstGetExceptionInformation": {
          "@helpfn": "XstGetExceptionInformation.htm", 
          "@name": "XstGetExceptionInformation", 
          "Definition": "#### The  function retrieves information\nabout the most recent exception, and about the machine state when\nthe exception occurred.\n\nXstGetExceptionInformation\n(EXCEPTION_RECORD @exRec, CONTEXT @context)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "exRec", 
                  "text": "an EXCEPTION_RECORD variable describing the exception"
              }, 
              {
                  "name": "context", 
                  "text": "a CONTEXT variable describing the state of CPU at the time of the exception"
              }
          ], 
          "Remarks": "The EXCEPTION_RECORD and CONTEXT types are declared in kernel32.dec.", 
          "ReturnValues": "", 
          "SeeAlso": "ExceptionsXstTry()"
      }, 
      "XstGetExecutionPathArray": {
          "@helpfn": "xst_54.htm", 
          "@name": "XstGetExecutionPathArray", 
          "Definition": "#### XstGetExecutionPathArray\n function returns the directory path components of the current\n\"PATH\" environment variable string.\n\nXstGetExecutionPathArray(@path$[])", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetFPUControlWord": {
          "@helpfn": "XstGetFPUControlWord.htm", 
          "@name": "XstGetFPUControlWord", 
          "Definition": "#### The  function returns the current Control\nWord. The Control Word 16-bit register is used by the programmer to\nselect between the various modes of computation available from the FPU,\nand to define which exceptions should be handled by the FPU or by an\nexception handler written by the programmer.\ncw = XstGetFPUControlWord\n()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstSetFPUControlWord ()"
      }, 
      "XstGetFileAttributes": {
          "@helpfn": "xst_56.htm", 
          "@name": "XstGetFileAttributes", 
          "Definition": "#### XstGetFileAttributes\n function gets the file attributes\nof the specified filename$. \nerror = XstGetFileAttributes(filename$, @attributes)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filename$", 
                  "text": "Name of file"
              }, 
              {
                  "name": "attributes", 
                  "text": "Returned file attributes"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstGetFiles": {
          "@helpfn": "xst_57.htm", 
          "@name": "XstGetFiles", 
          "Definition": "#### The  XstGetFiles  function\nreturns an array of file names in file$[] that corresponds to the\nfilename filter$ string. The filter$ can contain drive, path, and\nfilename with \" * \" and \" ? \" wildcard characters. The filter$ may be a\nfile (which may include wildcards) or a directory. Files will retain\nany leading directory path from filter$. Wildcards match any file or\ndirectory. It is not necessary to DIM the array file$[] before calling\nthe function.\nmaxLength =\nXstGetFiles(@filter$, @file$[])", 
          "Example": "filter$ = \"c:/xblite/bin/*.*\"XstGetFiles (@filter$, @file$[])IF file$[] THEN  FOR i = 0 TO UBOUND (file$[])     PRINT file$[i]  NEXT iEND IF", 
          "Parameters": [
              {
                  "name": "filter$", 
                  "text": "File or directory filter string: eg, \"c:/*.bat\""
              }, 
              {
                  "name": "file$[ ]", 
                  "text": "Returned string array of matching file/directory names, directories have an appended path slash character \"\\\""
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If function is successful, the return value is the maximum length of\nmatch names.\nIf no matches are found the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstFindFiles"
      }, 
      "XstGetFilesAndAttributes": {
          "@helpfn": "xst_58.htm", 
          "@name": "XstGetFilesAndAttributes", 
          "Definition": "#### XstGetFilesAndAttributes\n function returns an array of filenames in file$[] and file information in info[] for the\nfiles specified by the drive/path/filename in filter$ and the file attributes in filter.\nThe info[] array is type FILEINFO. The number of\ncharacters in the longest filename is returned in maxLength.\nmaxLength = XstGetFilesAndAttributes(@filter$, attributesFilter, @file$[], FILEINFO @info[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filter$", 
                  "text": "File filter string; \"c:/*.bat\""
              }, 
              {
                  "name": "attributesFilter", 
                  "text": "File attributes filter;"
              }, 
              {
                  "name": "file$[ ]", 
                  "text": "Returned string array of matching file names"
              }, 
              {
                  "name": "info[ ]", 
                  "text": "Returned FILEINFO array on matching files"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If function is successful, the return value is the maximum length of match names.\n\nIf no matches are found the return value is zero.\n\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstGetFilesXstFindFilesXstGetFileAttributes"
      }, 
      "XstGetLocalDateAndTime": {
          "@helpfn": "xst_59.htm", 
          "@name": "XstGetLocalDateAndTime", 
          "Definition": "#### XstGetLoacalDateAndTime\n function gets the current date and time in the local timezone. \nXstGetLocalDateAndTime(@year, @month, @day, @weekDay, @hour, @min, @sec, @nanos)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "year", 
                  "text": "Returned current year (0000 - 9999)"
              }, 
              {
                  "name": "month", 
                  "text": "Returned current month ( 1 - 12)"
              }, 
              {
                  "name": "day", 
                  "text": "Returned current day of month (1 - 31)"
              }, 
              {
                  "name": "weekDay", 
                  "text": "Returned current week day (sunday = 0, saturday = 6)"
              }, 
              {
                  "name": "hour", 
                  "text": "Returned current hour (0 - 23)"
              }, 
              {
                  "name": "min", 
                  "text": "Returned current minute (0 - 59)"
              }, 
              {
                  "name": "sec", 
                  "text": "Returned current second (0 - 59)"
              }, 
              {
                  "name": "nanos", 
                  "text": "Returned current nanosecond (0 -   999999999)"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetDateAndTime"
      }, 
      "XstGetMemoryMap": {
          "@helpfn": "xst_60.htm", 
          "@name": "XstGetMemoryMap", 
          "Definition": "#### XstGetMemoryMap\n function returns a type MEMORYMAP. memorymap contains shared external variables defined in xlib.s.\n\nXstGetMemoryMap(MEMORYMAP @memorymap)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetOSName": {
          "@helpfn": "xst_61.htm", 
          "@name": "XstGetOSName", 
          "Definition": "#### XstGetOSName\n function return the operating system name.   Examples\ninclude \"Windows 98 Second Edition\", \"Windows NT 4.0\", \"Windows 2000\", \"Windows XP\". \nerror = XstGetOSName(@name$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\n\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": "XstGetOSVersion"
      }, 
      "XstGetOSVersion": {
          "@helpfn": "xst_62.htm", 
          "@name": "XstGetOSVersion", 
          "Definition": "#### XstGetOSVersion\n function returns version information on the operating\nsystem. The major and minor part are the integer and fractional\nportions of the complete version number, so version 4.10 of the\nWindows operating system, major = 0x0004 and minor = 0x000A .\nerror = XstGetOSVersion (@major, @minor, @platformId, @version$, @platform$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "major", 
                  "text": "Returned major version number"
              }, 
              {
                  "name": "minor", 
                  "text": "Returned minor version number"
              }, 
              {
                  "name": "platformId", 
                  "text": "Returned platform identification"
              }, 
              {
                  "name": "version$", 
                  "text": "Returned string form of   version number; \"4.10\""
              }, 
              {
                  "name": "platform$", 
                  "text": "Returned platform string; \"Win32s\", \"Windows\", or \"NT\""
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\n\n\n\n\n\n\n\n\n\n\n\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstGetPathComponents": {
          "@helpfn": "xst_64.htm", 
          "@name": "XstGetPathComponents", 
          "Definition": "#### XstGetPathComponents\n function gets the components of a file path.\n\n\nXstGetPathComponents(file$, @path$, @drive$, @dir$, @filename$, @attributes)", 
          "Example": "file$ = \"c:/xblite/bin/xblite.exe\"XstGetPathComponents(file$, @path$, @drive$, @dir$, @filename$, @attributes)' results :' path$         = \"c:\\xblite\\bin\\\"' drive$       = \"c:\"' dir$          = \"\\xblite\\bin\\\"' filename$   = \"xblite.exe\"' attributes = 4128", 
          "Parameters": [
              {
                  "name": "path$", 
                  "text": "Returned path string"
              }, 
              {
                  "name": "drive$", 
                  "text": "Returned drive string"
              }, 
              {
                  "name": "dir$", 
                  "text": "Returned directory string"
              }, 
              {
                  "name": "filename$", 
                  "text": "Returned file name string"
              }, 
              {
                  "name": "attributes", 
                  "text": "Returned file attributes"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetProgramFileName": {
          "@helpfn": "xst_66.htm", 
          "@name": "XstGetProgramFileName$", 
          "Definition": "#### XstGetProgramFileName$\n function returns the full path to the file-name of the program which is running.\nWhen a compiled version of your stand-alone executable is running,\nit will return the folder and filename from where your executable was started.\nselfExeFile$ = XstGetProgramFileName$()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return is a string to currently running executable file path.", 
          "SeeAlso": ""
      }, 
      "XstGetSystemError": {
          "@helpfn": "xst_68.htm", 
          "@name": "XstGetSystemError", 
          "Definition": "#### XstGetSystemError\n function returns the calling thread's system last-error code value.\nThe last-error code is maintained on a per-thread basis. Multiple threads\ndo not overwrite each other's last-error code. To obtain an error string\nfor operating system error codes, use \n or the Win32 FormatMessageA function.\n  \n  \n\nXstGetSystemError(@sysError)", 
          "Example": "hPen = ExtCreatePen (pStyle, width, &logbrush, 0, 0)IFZ hPen THEN   XstGetSystemError (@error)   msgBuf$ = NULL$(256)   FormatMessageA ($$FORMAT_MESSAGE_FROM_SYSTEM, 0, error, 0, &msgBuf$, LEN(msgBuf$), 0)   msgBuf$ = CSIZE$(msgBuf$)   PRINT error, msgBuf$END IF", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetSystemTime": {
          "@helpfn": "xst_69.htm", 
          "@name": "XstGetSystemTime", 
          "Definition": "#### XstGetSystemTime\n function returns the program's free running time in msec (the number\nof milliseconds that have elapsed since this program was started).\nXstGetSystemTime(@msec)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstGetTypedArray": {
          "@helpfn": "xst_70.htm", 
          "@name": "XstGetTypedArray", 
          "Definition": "#### XstGetTypedArray\n function creates an array of type 'type' that occupies at least 'byte' bytes.\nupperBound = XstGetTypedArray(type, bytes, ANY @array[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "type", 
                  "text": "The type of the array; $$UBYTE, $$SLONG, $$DOUBLE, etc."
              }, 
              {
                  "name": "bytes", 
                  "text": "The number of bytes the array should occupy."
              }, 
              {
                  "name": "array[ ]", 
                  "text": "The returned array."
              }
          ], 
          "Remarks": "This function has limited usefulness and can be written as the (type-)safer version:", 
          "ReturnValues": "If the function succeeds, the return value is the upperbound of the array.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstBytesToBound"
      }, 
      "XstGuessFilename": {
          "@helpfn": "xst_71.htm", 
          "@name": "XstGuessFilename", 
          "Definition": "#### XstGuessFilename\n function returns a filename path guess$ and its attributes. \nThe returned guess$ is based on the filename path arguments old$ and\nnew$.\nIf old$ is not specified, and new$ is a valid filename (without a\npath),\nthen the current directory is used as the path.\nAn attribute of $$FileNormal will be returned if the file does not\nexist,\nbut the path is valid so that the specified file could be created, as\nis\noften the case for files to be saved (they don't yet exist). \nIf the return value of attributes is zero, the file name is invalid for\nboth read and write.\nThis function is used with Open/Save file dialogs to create/verify a\nfilename path.\n\nXstGuessFilename(old$, new$, @guess$, @attributes)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "old$", 
                  "text": "Previous filename path"
              }, 
              {
                  "name": "new$", 
                  "text": "New filename path (if any)"
              }, 
              {
                  "name": "guess$", 
                  "text": "Returned filename path"
              }, 
              {
                  "name": "attributes", 
                  "text": "File attributes of guess$ filename path"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstIsAbsolutePath": {
          "@helpfn": "xst_73.htm", 
          "@name": "XstIsAbsolutePath", 
          "Definition": "#### XstIsAbsolutePath\n function returns $$TRUE if file$ path is absolute.   \nA path is absolute if:\n\nXstIsAbsolutePath(file$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If file$ is an absolute path, then return value is -1.\nIf file$ is not an absolute path, then return value is 0.", 
          "SeeAlso": "XstPathToAbsolutePath"
      }, 
      "XstIsDataDimension": {
          "@helpfn": "xst_74.htm", 
          "@name": "XstIsDataDimension", 
          "Definition": "#### XstIsDataDimension\n function returns zero if the array[] argument contains data of any\ndata type. XstIsDataDimension returns non-zero if the array[] argument  \nis empty or contains nodes (addresses of \"lower\" dimensions).\nisdata = XstIsDataDimension(ANY @array[])", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstKillTimer": {
          "@helpfn": "xst_75.htm", 
          "@name": "XstKillTimer", 
          "Definition": "#### XstKillTimer\n function kills the specified timer.\n\nXstKillTimer(timer)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstStartTimer"
      }, 
      "XstLTRIM": {
          "@helpfn": "xst_80.htm", 
          "@name": "XstLTRIM", 
          "Definition": "#### XstLTRIM\n function trims characters from the left of a string based on\nthe character template array[].\n  \nThe intrinsic   LTRIM$() normally removes only spaces and tabs from\nthe\nleft of a string. With XstLTRIM, any set of ASCII characters can be\ntrimmed\nusing a 256 element array representing the ASCII character set. If\narray[x]\nis zero, then the character is trimmed from the left of the string. \n\nXstLTRIM(@string$, @array[])", 
          "Example": "DIM array[255]FOR i = 0 TO 255   array[i] = iNEXT iarray[0x9] = 0   ' tab chararray[' '] = 0   ' space chararray['''] = 0   ' comment charstring$ = \"'       my string   ' this is a test\"XstLTRIM (@string$, @array[])' string$ = \"my string   ' this is a test\"", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "A string to left trim"
              }, 
              {
                  "name": "array[ ]", 
                  "text": "An array identifying which ASCII characters should be trimmed. The array type must be SLONG, ULONG or XLONG. The upperbound of array[] must be >= 255. If array[] is empty, then string$ is returned using LTRIM$()."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstRTRIMXstTRIM"
      }, 
      "XstLoadCompositeDataArray": {
          "@helpfn": "XstLoadCompositeDataArray.htm", 
          "@name": "XstLoadCompositeDataArray", 
          "Definition": "#### XstLoadCompositeDataArray\n function loads data into a 1D composite array from\neither a string or a file containing comma separated variables. \n\nreturn =\nXstLoadCompositeDataArray(\n@a[], input$, template$, @errornum )", 
          "Example": "TYPE TESTTYPEXLONG .xXLONG .ySTRING*10 .zEND TYPE TESTTYPE y[], z[]DIM y[0]DIM z[0] template$ = \"TYPE,XLONG,XLONG,STRING*10\"input$    = \"{5,67,xxxxxxx},{78,97,aaaaa},{34,198,bbbbbbbb},{12,56,cccccc}\" 'load the data and automatically redimension z[] to z[3] to accommodate itXstLoadCompositeDataArray (@z[], input$, template$, @errornum) 'load data from a fileXstLoadCompositeDataArray (@y[], \"infile.txt\", template$, @errornum)", 
          "Parameters": "", 
          "Remarks": "The array must be declared and dimensioned. It can be given a dimension\nof [0] and will be automatically redimensioned to accommodate\n\nthe data. Any existing data in the array is overwritten.\n\nArrays and composites within composites should be expanded to their\nindividual components in template$ (see demos).\n\nTemplate$ must not contain any whitespace or formatting characters.\n\nValues for each composite can optionally be enclosed with a pair of\nbraces { } to improve readability.\nSince {   } and ,   are used for formatting, special action is\nneeded to load these characters within the content of a STRING field:\nFor { use \\xFE for } use \\xFD and for , use \\xFF. These special characters are converted automatically. \nIf a STRING field needs to contain a newline or carriage return then use \\n or \\r. Binary cr and lf will be stripped out.", 
          "ReturnValues": "If the function succeeds, the return value is 0, otherwise it returns\n-1.\n\nIf the return value is -1 then errornum has the following values and\nmeanings.\n\n       1       template$ empty\n\n       2       a[] empty - a new array must be\ndimensioned with at least DIM a[0]\n\n       3      address of a[] is 0 - see 2\n\n       4       a[] is not lowest level of array\nor is a string array\n\n       5      first keyword of template$ must be\nTYPE or PACKED in line with the composite definition\n\n       6       SCOMPLEX and DCOMPLEX components\nmust be split to SINGLE, SINGLE or DOUBLE, DOUBLE\n\n       7       unknown data type in template$\n\n       8       size of composite calculated\nfrom template$ does not match the array header\n\n       9       unknown data type\n\n       10    Error opening file where input$ is a\nfilename\n\n       11     Error closing file\n\n       12     input has unbalanced {} braces\n\n       13     type of array is not composite\n\n       14     template$ has invalid STRING*\ndefinition\n\n       15     no input data in string or file\n\n       16    number of data elements supplied is not a\nmultiple of number of elements per composite", 
          "SeeAlso": "XstSaveCompositeDataArray()"
      }, 
      "XstLoadData": {
          "@helpfn": "XstLoadData.htm", 
          "@name": "XstLoadData", 
          "Definition": "#### XstLoadData\n function loads numeric data into a 1 dimensioned array from\neither a string or a file containing comma separated variables.\nArrays of type XLONG can be created without declaring them first. All\nother types must be declared prior to loading them.\n\nreturn = XstLoadData ( @a[],\ndata$, type )", 
          "Example": "XstLoadData( @new[], \"5,7,9,34,56\", $$XLONG)\t\t 'create array new[4] with 5 values suppliedXstLoadData( @new[], \"67,78,89\", $$XLONG)      \t\t 'append 3 more values to produce new[7]  SINGLE s[]\t\t\t\t\t\t 'note need to declare s[] because it is not XLONGXstLoadData( @s[], \"12.78,-78.976,34.98,12.7\", $$SINGLE) 'dimension and populate s[3]  SSHORT ss[]XstLoadData( @ss[], \"c:/data/datafile.csv\", $$SSHORT)\t 'dimension and populate SSHORT array from data file", 
          "Parameters": [
              {
                  "name": "@a[]", 
                  "text": "the array to be created or appended to"
              }, 
              {
                  "name": "data$", 
                  "text": "a string containing comma separated values OR the name of a file containing the CSV values"
              }, 
              {
                  "name": "type", 
                  "text": "the data type of the array"
              }
          ], 
          "Remarks": "If the array does not already exist, it is created and dimensioned to\nhold the amount of data supplied\n\nIf the array does exist, it is redimensioned and the data is APPENDED\nto the existing values (if any)", 
          "ReturnValues": "If the function succeeds, the return value is 0, otherwise it returns -1", 
          "SeeAlso": "XstBuildDataArray()XstBuildDataArray()"
      }, 
      "XstLoadString": {
          "@helpfn": "xst_76.htm", 
          "@name": "XstLoadString", 
          "Definition": "#### XstLoadString\n function loads the contents of filename$\ninto a string$. The length of string$ is the same as the number of\nbytes in filename$.\nstring$ can contain any combination of ascii and/or binary bytes.\n\nerror =\nXstLoadString(filename$, @string$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filename$", 
                  "text": "File name"
              }, 
              {
                  "name": "string$", 
                  "text": "Returned string   containing contents of file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": "XstSaveString"
      }, 
      "XstLoadStringArray": {
          "@helpfn": "xst_77.htm", 
          "@name": "XstLoadStringArray", 
          "Definition": "#### XstLoadStringArray\n function loads the contents of\nfilename$ into string array string$[]. \nThe contents of filename$ are broken into separate\n\"lines\" by any of the following newline byte sequences - \"\\r\\n\" ,\n\"\\n\\r\" , \"\\n\".   \nThe newline bytes are not put into string$[]. If the last characters in filename$ are a\nnewline byte sequence, the last element of string$[] is an empty string aka \"\" . \nerror = XstLoadStringArray(filename$, @string$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filename$", 
                  "text": "File name"
              }, 
              {
                  "name": "string$[ ]", 
                  "text": "Returned string array containing contents of file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstLockFileSection": {
          "@helpfn": "xst_78.htm", 
          "@name": "XstLockFileSection", 
          "Definition": "#### XstLockFileSection\n function locks a region within an open file. Locking a region prevents other processes from accessing the region. \nerror = XstLockFileSection(filenumber, mode, offset$$, length$$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filenumber", 
                  "text": "A valid file number returned by OPEN( )."
              }, 
              {
                  "name": "mode", 
                  "text": "Not used."
              }, 
              {
                  "name": "offset$$", 
                  "text": "GIANT value for the starting byte offset in the file where the lock should begin."
              }, 
              {
                  "name": "length$$", 
                  "text": "GIANT value for length of the byte range to be locked."
              }
          ], 
          "Remarks": "Locking a region of a file gives the locking process exclusive\naccess to the specified region. File locks are not inherited by processes\ncreated by the locking process. \nLocking a region of a file denies all other processes both read and write\naccess to the specified region. Locking a region that goes beyond the current\nend-of-file position is not an error. \nLocks may not overlap an existing locked region of the file.", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": "XstUnlockFileSection"
      }, 
      "XstLog": {
          "@helpfn": "xst_79.htm", 
          "@name": "XstLog", 
          "Definition": "#### ", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "message$", 
                  "text": "Message string to write to log file"
              }, 
              {
                  "name": "style", 
                  "text": "Output style; 0 = time/date stamp, 1 = no time/date stamp"
              }, 
              {
                  "name": "fileName$", 
                  "text": "Name of log file, default is \"x.log\""
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstLongDoubleToString": {
          "@helpfn": "XstLongDoubleToString.htm", 
          "@name": "XstLongDoubleToString", 
          "Definition": "#### The  XstLongDoubleToString$ \nfunction converts a LONGDOUBLE type\nnumber into a formatted string. \nstring$ =\nXstLongDoubleToString$(LONGDOUBLE ld, maxDigits, expChar, prefixChar)\n \nThis function is used within the compiler to convert long double values\nto strings and is used by intrinsic functions like STR$() to perform\nthe conversion. It is not meant to be used directly by the\nprogrammer. For more accurate conversion from a long double value to a\nstring, use the ieelib library function e64toasc().\nNOTE: the source long double value ld MUST be positive. Use  to determine the sign of ld. \nThe returned string will be in scientific notation format.", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "ld", 
                  "text": "Source LONGDOUBLE value, a positive value"
              }, 
              {
                  "name": "maxDigits", 
                  "text": "Maximum number of significant digits to display in string, <= 19 characters."
              }, 
              {
                  "name": "expChar", 
                  "text": "Exponent character : 'e', 'E', 'd', 'D', default is 'd'."
              }, 
              {
                  "name": "prefixChar", 
                  "text": "Prefix character : '-', '+', ' ', or 0 for no prefix character."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstMakeDirectory": {
          "@helpfn": "xst_81.htm", 
          "@name": "XstMakeDirectory", 
          "Definition": "#### XstMakeDirectory\n function creates a new directory.\nerror = XstMakeDirectory(directory$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstMergeStrings": {
          "@helpfn": "xst_82.htm", 
          "@name": "XstMergeStrings$", 
          "Definition": "#### XstMergeStrings$\n function overwrites or adds a string compartment into an\nexisting string, replacing 'replace' bytes starting at 'offset'.\n\ninput$ = XstMergeStrings$(input$, add$, offset, replace)", 
          "Example": "input$ = \"Hello I'm impressed by your name\"input$ = XstMergeStrings$(input$, \"confused\", 11, 9)' input$ = \"Hello I'm confused by your name\"'input$ = \"Hello I'm impressed by your name\"input$ = XstMergeStrings$(input$, \"I always wanted to know\", 1, 22)' input$  = \"I always wanted to know your name\"'input$ = \"Hello I'm impressed by your name\"input$ = XstMergeStrings$(input$, \"tremendously \", 11, 0' input$  = \"Hello I'm tremendously impressed by your name\"", 
          "Parameters": [
              {
                  "name": "input$", 
                  "text": "A string to modify"
              }, 
              {
                  "name": "add$", 
                  "text": "A string to insert into input$"
              }, 
              {
                  "name": "offset", 
                  "text": "The starting offset in input$ to write input$"
              }, 
              {
                  "name": "replace", 
                  "text": "The number of bytes to write"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return is the merged string.", 
          "SeeAlso": ""
      }, 
      "XstMultiStringToStringArray": {
          "@helpfn": "xst_83.htm", 
          "@name": "XstMultiStringToStringArray", 
          "Definition": "#### XstMultiStringToStringArray\n function converts a string$\ninto a string array$[] by breaking the string into separate strings\nat each occurrence of an \\r character. \nNote that the line separator\ncharacter is not the \\n aka newline character, and that the lines\nin array$[] may therefore contain \\n characters. \\r characters are\ndiscarded..\n\nXstMultiStringToStringArray(string$, @array$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "Source string"
              }, 
              {
                  "name": "array$", 
                  "text": "Destination string array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstNextCField": {
          "@helpfn": "xst_84.htm", 
          "@name": "XstNextCField$", 
          "Definition": "#### XstNextCField$\n function returns the next text element from a C string.\nstring$ = XstNextCField$(address, @index, @done)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "address", 
                  "text": "The memory address of a C string"
              }, 
              {
                  "name": "index", 
                  "text": "The character position in C string (1st byte = 1)"
              }, 
              {
                  "name": "done", 
                  "text": "done is $$TRUE if end of C string was reached"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Returned string is the next text element within the C string.", 
          "SeeAlso": ""
      }, 
      "XstNextCLine": {
          "@helpfn": "xst_85.htm", 
          "@name": "XstNextCLine$", 
          "Definition": "#### XstNextCLine$\n function returns the next newline terminated string from\na C string. \nstring$ = XstNextCLine$(address, @index, @done)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "address", 
                  "text": "Memory address of C string."
              }, 
              {
                  "name": "index", 
                  "text": "Returned character position in C string (1st byte = 1)."
              }, 
              {
                  "name": "done", 
                  "text": "Returned value is -1 if end of C string is reached."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The returned string is the next element within the C string.", 
          "SeeAlso": ""
      }, 
      "XstNextField": {
          "@helpfn": "xst_86.htm", 
          "@name": "XstNextField$", 
          "Definition": "#### XstNextField$\n function returns the next text element from a delimited string.\nstring$ = XstNextField$(source$, @index, @done)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "A delimited string"
              }, 
              {
                  "name": "index", 
                  "text": "The character position within source$"
              }, 
              {
                  "name": "done", 
                  "text": "done is $$TRUE if the end of the string was reached"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The returned string is the next element within the source string.", 
          "SeeAlso": ""
      }, 
      "XstNextItem": {
          "@helpfn": "xst_87.htm", 
          "@name": "XstNextItem$", 
          "Definition": "#### XstNextItem$\n function returns the next text element from a delimited string.\nXstNextItem$ can be used on a comma delimited string. Spaces are not\naltered.\nstring$ = XstNextItem$(source$,\n@index, @term, @done)\n\n\nsource$ is not modified by XstNextItem$ , so\nit can be passed by reference for optimal speed.", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "A delimited string"
              }, 
              {
                  "name": "index", 
                  "text": "The character position within source$"
              }, 
              {
                  "name": "term", 
                  "text": "The terminating character (tab- \\t,"
              }, 
              {
                  "name": "newline- \\n, comma - ,)", 
                  "text": "or 0 if end of line reached with no terminator"
              }, 
              {
                  "name": "done", 
                  "text": "done is $$TRUE if the end of the string was reached"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The returned string is the next element within the source string.", 
          "SeeAlso": ""
      }, 
      "XstNextLine": {
          "@helpfn": "xst_88.htm", 
          "@name": "XstNextLine$", 
          "Definition": "#### XstNextLine$\n function returns the next newline (\\n) terminated string from a string.\nstring$ = XstNextLine$(source$, @index, @done)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "The source string with newline strings"
              }, 
              {
                  "name": "index", 
                  "text": "The character position within source$"
              }, 
              {
                  "name": "done", 
                  "text": "done is $$TRUE if the end of the string was reached"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The returned string is the next newline.", 
          "SeeAlso": ""
      }, 
      "XstParse": {
          "@helpfn": "xst_88A.htm", 
          "@name": "XstParse$", 
          "Definition": "#### XstParse$\n function returns the nth string in source$ separated with delimiter$.\nIf a string is not found, the function returns empty string \"\".   The\ndefault delimiter is a space character.   The delimiter character(s)\nare removed.\n\nstring$ = XstParse$(source$, delimiter$, n)", 
          "Example": "4th$ = Parse$ (\"0,1,2,3,4,5\", \",\", 4)   ' 4th$ = \"3\"", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "The source string to parse."
              }, 
              {
                  "name": "delimiter", 
                  "text": "The delimiting character(s)."
              }, 
              {
                  "name": "n", 
                  "text": "nth string in source$ to return, where n > 0."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The returned string is the nth delimited string.", 
          "SeeAlso": ""
      }, 
      "XstParseStringToStringArray": {
          "@helpfn": "xst_88B.htm", 
          "@name": "XstParseStringToStringArray", 
          "Definition": "#### XstParseStringToStringArray\n function parses a string and splits it into a string array\nbased\non the specified delimiter. The default delimiter is a space character.\nThe\ndelimiter string is not included in s$[].\n\nIf no delimiter is found, the function returns the source$ as the zero\nelement in s$[0], otherwise, it DIMs s$[] to the number of parsed\nelements (zero based). If an error occurs, a NULL array is returned in\ns$[].\n\nstring$ =\nXstParseStringToStringArray(source$, delimiter$, @s$[])", 
          "Example": "XstParseStringToStringArray (\"0,1,2,3,4,5,6,7,8,9\", \",\", @s$[])", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "The source string to parse."
              }, 
              {
                  "name": "delimiter$", 
                  "text": "The delimiting character(s)."
              }, 
              {
                  "name": "s$[]", 
                  "text": "Returned string array."
              }
          ], 
          "Remarks": "Note that this function returns -1 and source$ in s$[0] if  no occurrence of the delimiter$ is found.\nThis could occur because source$ is genuinely a single value or it could indicate that the wrong delimiter has been used.", 
          "ReturnValues": "If the function succeeds, the return value is zero.\n\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstPathString": {
          "@helpfn": "xst_89.htm", 
          "@name": "XstPathString$", 
          "Definition": "#### XstPathString$\n function converts a UNIX style path string to a Win32 path string.\n\npath$ = XstPathString$(path$)", 
          "Example": "path$ = \"<     /program files/    >\"newPath$ = XstPathString$ (path$)'  newPath$ = \"\\\\program files\\\\\"'newPath$ = XstPathString$(\"$XBLDIR/demo\")' newPath$ = \"c:\\\\xblite\\\\demo\"", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Returned is a converted path string.", 
          "SeeAlso": ""
      }, 
      "XstPathToAbsolutePath": {
          "@helpfn": "xst_90.htm", 
          "@name": "XstPathToAbsolutePath", 
          "Definition": "#### XstPathToAbsolutePath\n function retrieves the full path and filename of a specified\nfile.\n\nerror =\nXstPathToAbsolutePath(ipath$, @opath$)", 
          "Example": "XstPathToAbsolutePath(\"\\\\xblite\\\\myfile.x\", @opath$)PRINT opath$    ' opath$ = \"C:\\xblite\\myfile.x\"", 
          "Parameters": [
              {
                  "name": "ipath$", 
                  "text": "File name"
              }, 
              {
                  "name": "opath$", 
                  "text": "Returned string containing the full path and filename"
              }
          ], 
          "Remarks": "The XstPathToAbsolutePath function merges the name of\nthe current drive and directory with the specified filename to\ndetermine\nthe full path and filename of the specified file.   This function\ndoes\nnot verify that the resulting path and filename are valid or that they\nrefer\nto an existing file on the associated volume.", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstQuickSort": {
          "@helpfn": "xst_92.htm", 
          "@name": "XstQuickSort", 
          "Definition": "#### XstQuickSort\n function sorts the\ncontents of all or part of an array.\n\nerror =\nXstQuickSort(@sortArray[], @orderArray[], first, last, flags)\nXstQuickSort sorts the elements of sortArray[] between first and last.\nDepending on\nflags, the sorted elements are stored in increasing or decreasing\norder, are sorted\nalphabetic or alphanumeric, and sorted case sensitive or case\ninsensitive.\nThe data type of sortArray[ ] can be any of the following:\nSBYTE   UBYTE\nSSHORT USHORT\nSLONG   ULONG   XLONG\nGIANT\nSINGLE DOUBLE\nSTRING\n\nIf orderArray[ ] enters XstQuickSort with no elements, it is ignored.\nSo to skip indices:\n DIM orderArray[ ]\nTo generate order indices:\nDIM orderArray[0]\nIf orderArray[ ] is non-NULL, then   the function will return with\norderArray[\n] dimensioned to the same size as sortArray[ ]. It is then filled with\n0,1,2,3,4,5...\n, and then sorted in parallel with sortArray[] . When the sort is\nfinished,\norderArray[ ] contains the original element number for every element in\nsortArray[].\nThe sortArray[ ] must be a one dimension array. The orderArray[ ] must\nbe a one dimensional XLONG\narray.\nDepending on the type of sortArray[ ] , XstQuickSort calls internal\nfunctions that\nsort SLONG , XLONG , GIANT , DOUBLE , or STRING arrays. When sortArray[\n] is another type,\na temporary array of the next larger type from this selection is\ncreated, the contents of\nsortArray[ ] are transferred to the temporary array, the sort is\nperformed, then the\ncontents are transferred back into the original array.", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "sortArray[ ]", 
                  "text": "An array to sort all or part of"
              }, 
              {
                  "name": "orderArray[ ]", 
                  "text": "An optional array left with original indices"
              }, 
              {
                  "name": "first", 
                  "text": "The first element of region in sortArray[] to sort"
              }, 
              {
                  "name": "last", 
                  "text": "The  last element of region in sortArray[] to sort"
              }, 
              {
                  "name": "flags", 
                  "text": "Sorting mode flags: OR aprpriate flags together"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstRTRIM": {
          "@helpfn": "xst_98.htm", 
          "@name": "XstRTRIM", 
          "Definition": "#### XstRTRIM\n function trims characters from the right of a string based on\nthe character template array[].\n  \nThe intrinsic RTRIM$() normally removes only spaces and tabs from the\nright\nof a string. With XstRTRIM, any set of ASCII characters can be trimmed\nusing a 256 element array representing the ASCII character set. If\narray[x]\nis zero, then the character is trimmed from the right of the string. .\n\nXstRTRIM(@string$, array[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "A string to right trim"
              }, 
              {
                  "name": "array[ ]", 
                  "text": "An array identifying which ASCII characters should be"
              }, 
              {
                  "name": "trimmed.", 
                  "text": "The array  "
              }, 
              {
                  "name": "type must be SLONG, ULONG or XLONG.", 
                  "text": "The upperbound of array[] must be >="
              }, 
              {
                  "name": "255.", 
                  "text": "If array[] is empty, then string$ is returned using RTRIM$()."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstLTRIMXstTRIM"
      }, 
      "XstRaiseException": {
          "@helpfn": "XstRaiseException.htm", 
          "@name": "XstRaiseException", 
          "Definition": "#### The  function causes the specified exception\nto\noccur.\n\nXstRaiseException (exception,\ntype, @args[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "exception", 
                  "text": "a native or user-registered exception code"
              }, 
              {
                  "name": "type", 
                  "text": "the exception type"
              }, 
              {
                  "name": "args[]", 
                  "text": "an array of up to 15 arguments to be passed to the exception handler"
              }
          ], 
          "Remarks": "The exception will be raised as one of $$ExceptionTypeInformation,\n$$ExceptionTypeWarning, or $$ExceptionTypeError (see ), depending on the value of .    If\nzero, $$ExceptionTypeError is assumed.\nThe argument array can be retrieved in the exception handler from the\nEXCEPTION_DATA argument of XstTry(), or from the EXCEPTION_RECORD\nargument of XstGetExceptionInformation().\nLike XstCauseException(), this function does not normally return; control passes to the most\nrecently installed exception handler, if any.", 
          "ReturnValues": "", 
          "SeeAlso": "ExceptionsXstCauseException()XstGetExceptionInformation()XstRegisterException()XstTry()"
      }, 
      "XstRandom": {
          "@helpfn": "xst_92A.htm", 
          "@name": "XstRandom", 
          "Definition": "#### XstRandom\n function returns a pseudo random ULONG number.\n  Use  to use a particular\nseed value. However, XstRandom is self-seeding, so it is not required\nto use XstRandomSeed.\nrn = XstRandom()", 
          "Example": "ULONG rnrn = XstRandom ()", 
          "Parameters": "", 
          "Remarks": "XstRandom uses the KISS generator, (Keep It Simple Stupid), by George\nMarsaglia.\nIt is designed to combine the two multiply-with-carry generators in MWC\nwith\nthe 3-shift register SHR3 and the congruential generator CONG, using\naddition\nand exclusive-or. It has a period of about 2^123.", 
          "ReturnValues": "The return is a ULONG random number.", 
          "SeeAlso": ""
      }, 
      "XstRandomARGB": {
          "@helpfn": "XstRandomARGB.htm", 
          "@name": "XstRandomARGB", 
          "Definition": "#### XstRandomARGB function returns an ARGB color value with the\nspecified ALPHA and random RGB components\nreturn = XstRandomARGB(alpha)", 
          "Example": "argb1 = XstRandomARGB(200)\t\t\t'argb1 has an alpha of 200 and random RGB valuesargb2 = XstRandomARGB(XstRandomRange(127,255)) \t'argb2 has random alpha between 127 and 255 plus random RGBargb3 = XstRandom()\t\t\t\t'argb3 has all four ARGB components fully random", 
          "Parameters": "", 
          "Remarks": "For an ARGB value with all components including the alpha value fully\nrandom simply use XstRandom()\nFor an ARGB value with alpha random within a range use this function\ncombined with XstRandomRange() as shown below", 
          "ReturnValues": "The value returned is an ARGB color value with specified ALPHA and\nrandom RGB", 
          "SeeAlso": ""
      }, 
      "XstRandomCreateSeed": {
          "@helpfn": "xst_92B.htm", 
          "@name": "XstRandomCreateSeed", 
          "Definition": "#### XstRandomCreateSeed\n function returns a ULONG seed number.\n\nseed = XstRandomCreateSeed()", 
          "Example": "ULONG seedseed = XstRandomCreateSeed ()", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "The return is a ULONG seed number.", 
          "SeeAlso": ""
      }, 
      "XstRandomRGB": {
          "@helpfn": "XstRandomRGB.htm", 
          "@name": "XstRandomRGB", 
          "Definition": "#### XstRandomRGB function returns a random RGB color value\nreturn = XstRandomRGB()", 
          "Example": "randcolor = XstRandomRGB()", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "The value returned is a random RGB color", 
          "SeeAlso": ""
      }, 
      "XstRandomRange": {
          "@helpfn": "XstRandomRange.htm", 
          "@name": "XstRandomRange", 
          "Definition": "#### XstRandomRange function returns a random XLONG result in a\nspecified range\nreturn = XstRandomRange( lower,\nupper )", 
          "Example": "x = XstRandomRange( -15, 32)\t'x = random number between -15 and 32", 
          "Parameters": [
              {
                  "name": "lower", 
                  "text": "the lower limit of the inclusive range"
              }, 
              {
                  "name": "upper", 
                  "text": "the upper limit of the inclusive range"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The value returned is a random XLONG between lower and upper inclusive", 
          "SeeAlso": ""
      }, 
      "XstRandomRangeF": {
          "@helpfn": "XstRandomRangeF.htm", 
          "@name": "XstRandomRangeF", 
          "Definition": "#### XstRandomRangeF function returns a random DOUBLE result in a\nspecified range\nreturn = XstRandomRangeF(\nlower,\nupper )", 
          "Example": "x# = XstRandomRangeF( -7.89, 5.32)\t'x# = random number between -7.89 and 5.32", 
          "Parameters": [
              {
                  "name": "lower", 
                  "text": "a DOUBLE value - the lower limit of the non - inclusive range"
              }, 
              {
                  "name": "upper", 
                  "text": "a DOUBLE value - the upper limit of the non - inclusive range"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The value returned is a random DOUBLE between lower and upper", 
          "SeeAlso": ""
      }, 
      "XstRandomSeed": {
          "@helpfn": "xst_92C.htm", 
          "@name": "XstRandomSeed", 
          "Definition": "#### XstRandomSeed\n function sets the initial seed for .\nIf seed is zero, then a new seed is created using \nand returned as seed.\nXstRandomSeed(seed)", 
          "Example": "ULONG seedXstRandomSeed (@seed)PRINT seed", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstRandomUniform": {
          "@helpfn": "xst_92D.htm", 
          "@name": "XstRandomUniform", 
          "Definition": "#### XstRandomUniform\n function returns a DOUBLE uniform pseudo random number.\nuni = XstRandomUniform()", 
          "Example": "rn# = XstRandomUniform ()", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "Return value is a DOUBLE uniform random number (0 < uni < 1).", 
          "SeeAlso": ""
      }, 
      "XstReadString": {
          "@helpfn": "xst_94.htm", 
          "@name": "XstReadString", 
          "Definition": "#### XstReadString\n function reads a string written to a disk file by. It first reads the string length header into a ULONG variable\nand sizes\nthe string variable based on that length.   Then it reads that\nnumber\nof bytes of string data into the string.  \n\nXstReadString(ifile, @string$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "ifile", 
                  "text": "valid file number returned by OPEN( )"
              }, 
              {
                  "name": "string$", 
                  "text": "returned string read from file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstWriteString"
      }, 
      "XstRegisterException": {
          "@helpfn": "XstRegisterException.htm", 
          "@name": "XstRegisterException", 
          "Definition": "#### The  function associates a user-defined\nexception\nname with a unique exception code.\n\nXstRegisterException\n(exception$, @exception)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "exception$", 
                  "text": "name or description of the exception"
              }, 
              {
                  "name": "exception", 
                  "text": "exception code assigned by XstRegisterException()"
              }
          ], 
          "Remarks": "User-defined exception codes can be used with XstCauseException() or\nXstRaiseException() to invoke an exception handler.\nIf the named exception has already been registered, the function\nreturns the previously assigned exception code.    Exception\nnames are case-sensitive.", 
          "ReturnValues": "The return value is always 0.", 
          "SeeAlso": "ExceptionsXstExceptionNameToNumber()XstExceptionNumberToName()XstCauseException()XstRaiseException()"
      }, 
      "XstRemoveExcessDelimiters": {
          "@helpfn": "XstRemoveExcessDelimiters.htm", 
          "@name": "XstRemoveExcessDelimiters", 
          "Definition": "#### XstRemoveExcessDelimiters$ function returns a copy of a string\nwith repeated occurrences of a delimiting character reduced to a single\noccurrence\n       result$ =\nXstRemoveExcessDelimiters$( string$, delimChar )", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "the string to be processed - this is not changed"
              }, 
              {
                  "name": "delimChar", 
                  "text": "the delimiting character. Enter as ansi code or character in single quotes e.g. ','"
              }
          ], 
          "Remarks": "Only single character delimiters are allowed.\nThis function can be used to pre-process a string prior to using a\nparsing function", 
          "ReturnValues": "result$ is a copy of string$ with n  consecutive delimiters\nreplaced with a single delimiter", 
          "SeeAlso": ""
      }, 
      "XstRenameFile": {
          "@helpfn": "xst_95.htm", 
          "@name": "XstRenameFile", 
          "Definition": "#### XstRenameFile\n function will rename (move) either a file or a directory\n(including\nall its children) either in the same directory or across directories.\nThe\none caveat is that the XstRenameFile function will fail on directory\nmoves\nwhen the destination is on a different volume..\nerror = XstRenameFile(oldName$,\nnewName$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "oldName$", 
                  "text": "Name of the existing file or directory to rename (move)"
              }, 
              {
                  "name": "newName$", 
                  "text": "New name for the file or directory"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstReplace": {
          "@helpfn": "xst_95A.htm", 
          "@name": "XstReplace", 
          "Definition": "#### XstReplace\n function replaces n number of find$ with replace$ in string$.\nIf n = 0 then all instances are replaced. The search string find$ is\ncase sensitive.\ncount = XstReplace (@source$,\nfind$, replace$, n)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "The source string to modify."
              }, 
              {
                  "name": "find$", 
                  "text": "The string to find within source$."
              }, 
              {
                  "name": "replace$", 
                  "text": "The string to substitute for find$."
              }, 
              {
                  "name": "n", 
                  "text": "The number of instances of find$ to"
              }, 
              {
                  "name": "replace.", 
                  "text": "If n = 0 then all instances of find$ are replaced by replace$."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is the number of replaced\nstrings.\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstReplaceArray": {
          "@helpfn": "xst_96.htm", 
          "@name": "XstReplaceArray", 
          "Definition": "#### XstReplaceArray\n function replaces the first occurrance of a searched for string\nwithin a string array.\n\nXstReplaceArray(mode, @text$[],\nfind$, replace$, @line, @pos, @match)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "mode", 
                  "text": "Type of search to perform, see mode constants listed above. The default mode is $$FindForward OR $$FindCaseSensitive"
              }, 
              {
                  "name": "text$[ ]", 
                  "text": "A string array to search and modify"
              }, 
              {
                  "name": "find$", 
                  "text": "The search string"
              }, 
              {
                  "name": "replace$", 
                  "text": "The string to replace find$"
              }, 
              {
                  "name": "line", 
                  "text": "The returned current text array line"
              }, 
              {
                  "name": "pos", 
                  "text": "The returned current character position in line"
              }, 
              {
                  "name": "match", 
                  "text": "match is returned $$TRUE if find$ is found"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstReplaceLines": {
          "@helpfn": "xst_97.htm", 
          "@name": "XstReplaceLines", 
          "Definition": "#### XstReplaceLines\n function replaces countD lines in dest$[] with countS lines in source$[].\n  The range of lines in dest$[] to replace begins at firstD, while the\nrange of lines in source$[] to substitute start at firstS. If countD or countS\nare set to -1, then all of the lines from firstD or firstS to the end of\nthe array will be replaced.\nXstReplaceLines(@dest$[], @source$[], firstD, countD, firstS, countS)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "dest$[ ]", 
                  "text": "The destination string array"
              }, 
              {
                  "name": "source$[ ]", 
                  "text": "The source string array"
              }, 
              {
                  "name": "firstD", 
                  "text": "The first line in dest$[] to begin replacement"
              }, 
              {
                  "name": "countD", 
                  "text": "The number of lines in dest$[] to replace"
              }, 
              {
                  "name": "firstS", 
                  "text": "The first line in source$[] to begin substitution"
              }, 
              {
                  "name": "countS", 
                  "text": "The number of lines in source$[] to substitute"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstSaveCompositeDataArray": {
          "@helpfn": "XstSaveCompositeDataArray.htm", 
          "@name": "XstSaveCompositeDataArray", 
          "Definition": "#### XstSaveCompositeArray\n function saves data from a 1D composite array to\neither a string or a file as comma separated variables. \n\nreturn =\nXstSaveCompositeDataArray(\n@a[], output$, template$, crlf, braces, @errornum )", 
          "Example": "'Save the composite array z[] to output$ with one composite per line and no bracesXstSaveCompositeDataArray (@z[], @output$, template$, 1, 0,  @errornum) 'save the composite array y[] to a file with 3 composites per line and enclosing bracesXstSaveCompositeDataArray (@y[], \"outfile.txt\", template$, 3, $$TRUE, @errornum)", 
          "Parameters": "", 
          "Remarks": "Arrays and composites within composites should be expanded to their\nindividual components in template$ (see demos).\n\nTemplate$ must not contain any whitespace or formatting characters.\n\nAn array saved with XstSaveCompositeDataArray() can be loaded back with\nXstLoadCompositeDataArray().\nAny cr or lf characters in a STRING field will be converted to \\r and \\n. Any , { or } characters in a STRING field will be\nconverted to special characters - all these conversions are reversed if the output is loaded back with", 
          "ReturnValues": "If the function succeeds, the return value is 0, otherwise it returns -1\n\nIf the return value is -1 then errornum has the following values and\nmeanings\n\n       1       template$ empty\n\n       2       a[] empty - a new array must be\ndimensioned with at least DIM a[0]\n\n       3      address of a[] is 0 - see 2\n\n       4       a[] is not lowest level of array\nor is a string array\n\n       5      first keyword of template$ must be\nTYPE or PACKED in line with the composite definition\n\n       6       SCOMPLEX and DCOMPLEX components\nmust be split down to SINGLE, SINGLE or DOUBLE, DOUBLE\n\n       7       unknown data type in template$\n\n       8       size of composite calculated\nfrom template$ does not match the array header\n\n       9       unknown data type\n\n       10    Error opening file where output$ is a\nfilename\n\n       11     Error closing file\n\n       12     n/a - load only\n\n       13     type of array is not composite\n\n       14     template$ has invalid STRING*\ndefinition\n\n       15     n/a - load only\n\n       16    n/a - load only", 
          "SeeAlso": "XstLoadCompositeDataArray()"
      }, 
      "XstSaveDataArray": {
          "@helpfn": "XstSaveDataArray.htm", 
          "@name": "XstSaveDataArray", 
          "Definition": "#### XstSaveDataArray\n function saves numeric data in an nD array to either a string\nor a file.\nThe output   is in the form of a comma separated list of values. nD\narrays have their node structure defined using C-style brace notation.\nThe output can optionally be formatted with indenting and cr/lf to show\nthe tree structure when viewed in a text editor.\nEither the formatted or unformatted output can be used as the input to\nXstBuildDataArray or XstLoadData ( 1D arrays only).\n\nreturn = XstSaveDataArray (\n@a[],\n@out$, formatted )", 
          "Example": "XstSaveDataArray( @array[], @out$, 0)\t\t \t \t'save unformatted comma separated values in out$   XstSaveDataArray( @array[], \"c:/mydata/array.txt\", $$TRUE)\t'save formatted comma separated values in specified file", 
          "Parameters": [
              {
                  "name": "@a[]", 
                  "text": "the array whose values are to be saved"
              }, 
              {
                  "name": "out$", 
                  "text": "either an empty string to receive the output OR the name of a file to write to"
              }, 
              {
                  "name": "formatted", 
                  "text": "if $$TRUE then output uses spacing and cr/lf to produce a tree structure, otherwise output is unformatted"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0, otherwise it returns -1", 
          "SeeAlso": "XstBuildDataArrayXstLoadData"
      }, 
      "XstSaveString": {
          "@helpfn": "xst_99.htm", 
          "@name": "XstSaveString", 
          "Definition": "#### XstSaveString\n function saves a string into a file. string$ can contain any\ncombination of ascii and/or binary bytes.  \n\nerror = XstSaveString(filename$, string$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filename$", 
                  "text": "File name"
              }, 
              {
                  "name": "string$", 
                  "text": "The string to save to file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstLoadString"
      }, 
      "XstSaveStringArray": {
          "@helpfn": "xst_100.htm", 
          "@name": "XstSaveStringArray", 
          "Definition": "#### XstSaveStringArray\n function saves a string array to a disk file.\nerror = XstSaveStringArray(filename$, @string$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filename$", 
                  "text": "File name"
              }, 
              {
                  "name": "string$[ ]", 
                  "text": "String array to save to file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstLoadStringArray"
      }, 
      "XstSaveStringArrayCRLF": {
          "@helpfn": "xst_101.htm", 
          "@name": "XstSaveStringArrayCRLF", 
          "Definition": "#### XstSaveStringArrayCRLF\n function saves a string array to a disk file.   It appends\nCRLF (\"\\r\\n\")\n  to each line in the string array before the file is saved.\nerror =\nXstSaveStringArrayCRLF(filename$, @string$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filename$", 
                  "text": "File name"
              }, 
              {
                  "name": "string$[ ]", 
                  "text": "String array to save to file"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstSequentialParse": {
          "@helpfn": "XstSequentialParse.htm", 
          "@name": "XstSequentialParse$", 
          "Definition": "#### XstSequentialParse$ function returns the first / next\nsub-string in a string\n       sub-string$\n= XstSequentialParse$( @string$, @index, delimChar, @bEnd )", 
          "Example": "test$ = \"1,22,aaa,4444,55555,666666,7777777,8,99\"index = 1DO  sub$ = XstSequentialParse$(@test$, @index, ',', @bEnd)LOOP UNTIL bEndreturns 1 then 22 then aaa ................. and finally 99", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "the string to be processed - this is not changed but should be passed by reference for speed"
              }, 
              {
                  "name": "index", 
                  "text": "this is initially set to 1 (or less) to get the first sub-string. Subsequent values are maintained by the function and should not be modified"
              }, 
              {
                  "name": "delimChar", 
                  "text": "the delimiting character. Enter as ansi code or character in single quotes e.g. ','"
              }, 
              {
                  "name": "bEnd", 
                  "text": "a Boolean flag that is $$FALSE whilst there are still sub-strings to read. It is set to $$TRUE when the last sub-string is returned. It is set by the function and should not be modified"
              }
          ], 
          "Remarks": "Only single character delimiters are allowed.\nIf bEnd is ignored and further calls are made the function will return\nempty sub-string$.\nTo re-read the sub-strings reset index to 1 or less", 
          "ReturnValues": "The first / next sub-string in string$", 
          "SeeAlso": ""
      }, 
      "XstSetClipboard": {
          "@helpfn": "xst_101A.htm", 
          "@name": "XstSetClipboard", 
          "Definition": "#### XstSetClipboard\n function copies data to the clipboard. The data can be text or\nbitmap bytes.\nerror =\nXstSetClipboard(clipType, text$, UBYTE image[])", 
          "Example": "UBYTE image[]DIM image[]XstSetClipboard (1, clip$, @image[])       ' set clipboard text", 
          "Parameters": [
              {
                  "name": "cliptype", 
                  "text": "Clipboard type: 1 = text, 2 = bitmap image data"
              }, 
              {
                  "name": "text$", 
                  "text": "Clipboard text"
              }, 
              {
                  "name": "image[]", 
                  "text": "Clipboard bitmap data array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is 0.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": "XstGetClipboard"
      }, 
      "XstSetCommandLineArguments": {
          "@helpfn": "xst_102.htm", 
          "@name": "XstSetCommandLineArguments", 
          "Definition": "#### XstSetCommandLineArguments\n function sets the number of command-line arguments to argCount,\nand the command-line argument strings to argv$[].   argCount should\nnever be less than 0..\n\nXstSetCommandLineArguments(argCount, @argv$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "argCount", 
                  "text": "Number of command-line arguments"
              }, 
              {
                  "name": "argv$[ ]", 
                  "text": "String array of command-line strings"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstSetCurrentDirectory": {
          "@helpfn": "xst_104.htm", 
          "@name": "XstSetCurrentDirectory", 
          "Definition": "#### XstSetCurrentDirectory\n function changes the current directory for the current process.\n\nerror =\nXstSetCurrentDirectory(directory$)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": "XstGetCurrentDirectory"
      }, 
      "XstSetDateAndTime": {
          "@helpfn": "xst_105.htm", 
          "@name": "XstSetDateAndTime", 
          "Definition": "#### XstSetDateAndTime\n function sets the current system date and time.   The system\ntime is expressed in Coordinated Universal Time (UTC). This function may\nfail if the user running the task does not have supervisor or administrator\npriority.\nerror = XstSetDateAndTime(year, month, day, weekDay, hour, minute, second, nanos)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "year", 
                  "text": "Current year (0000 - 9999)"
              }, 
              {
                  "name": "month", 
                  "text": "Current month ( 1 - 12)"
              }, 
              {
                  "name": "day", 
                  "text": "Current day of month (1 - 31)"
              }, 
              {
                  "name": "weekDay", 
                  "text": "Current week day (sunday = 0, saturday = 6)"
              }, 
              {
                  "name": "hour", 
                  "text": "Current hour (0 - 23)"
              }, 
              {
                  "name": "minute", 
                  "text": "Current minute (0 - 59)"
              }, 
              {
                  "name": "second", 
                  "text": "Current second (0 - 59)"
              }, 
              {
                  "name": "nanos", 
                  "text": "Current nanosecond (0 -   999999999)"
              }
          ], 
          "Remarks": "Windows NT: The SetSystemTime function fails if the calling\nprocess does not have the SE_SYSTEMTIME_NAME privilege. This privilege is\ndisabled by default. Use the AdjustTokenPrivileges function to enable this\nprivilege and again to disable it after the time has been set.", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetDateAndTime"
      }, 
      "XstSetEnvironmentVariable": {
          "@helpfn": "xst_106.htm", 
          "@name": "XstSetEnvironmentVariable", 
          "Definition": "#### XstSetEnvironmentVariable\n function sets environment variable name$ to value$. \nerror =\nXstSetEnvironmentVariable(name$, value$)", 
          "Example": "XstSetEnvironmentVariable (\"PATH\", \"c:\\windows\")", 
          "Parameters": [
              {
                  "name": "name$", 
                  "text": "Environment variable to change"
              }, 
              {
                  "name": "value$", 
                  "text": "New environment string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": ""
      }, 
      "XstSetException": {
          "@helpfn": "XstSetException.htm", 
          "@name": "XstSetException", 
          "Definition": "#### The  function sets the value of the code\nreturned by\nXstGetException().\n\nXstSetException (exception)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "ExceptionsXstGetException()"
      }, 
      "XstSetExceptionFunction": {
          "@helpfn": "XstSetExceptionFunction.htm", 
          "@name": "XstSetExceptionFunction", 
          "Definition": "#### XstSetExceptionFunction \nThe  function sets the address of a function to be called when an exception occurs. \
\n\nXstSetExceptionFunction(exceptionFunction)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "The exception function is called only if no exception handler installed by XstTry() handles the exception.  \
The function must have zero arguments, and should return $$ExceptionTerminate, $$ExceptionContinue, or $$ExceptionForward. Call \
XstSetExceptionFunction() with an address of 0 to disable the exception function.", 
          "ReturnValues": "Does not return a value.", 
          "SeeAlso": "ExceptionsXstGetExceptionFunction() XstTry()"
      }, 
      "XstSetFPUControlWord": {
          "@helpfn": "XstSetFPUControlWord.htm", 
          "@name": "XstSetFPUControlWord", 
          "Definition": "#### The  function sets the current Control\nWord. The Control Word 16-bit register is used by the programmer to\nselect between the various modes of computation available from the FPU,\nand to define which exceptions should be handled by the FPU or by an\nexception handler written by the programmer.\ncwLast = XstSetFPUControlWord\n(cw)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetFPUControlWord ()"
      }, 
      "XstSetFPUPrecision": {
          "@helpfn": "XstSetFPUPrecision.htm", 
          "@name": "XstSetFPUPrecision", 
          "Definition": "#### The  function sets the precision control (PC)\nbits in the FPU control word. This determines to what precision the FPU\nrounds results after each arithmetic instruction. \ncwLast = XstSetFPUPrecision\n(mode)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "The returned value is the previous USHORT control word.", 
          "SeeAlso": ""
      }, 
      "XstSetFPURounding": {
          "@helpfn": "XstSetFPURounding.htm", 
          "@name": "XstSetFPURounding", 
          "Definition": "#### The  function sets the rounding control (RC)\nbits in the FPU control word. This determines how the FPU will round\nresults after each arithmetic instruction. \ncwLast = XstSetFPURounding\n(mode)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstSetSystemError": {
          "@helpfn": "xst_110.htm", 
          "@name": "XstSetSystemError", 
          "Definition": "#### The  XstSetSystemError \nfunction sets the current operating system last-error number for the\ncalling thread. \n XstSetSystemError(error)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "Error codes are 32-bit values (bit 31 is the most significant bit). Bit\n29 is reserved for application-defined error codes; no Win32 API error\ncode has this bit set. If you are defining an error code for your\napplication, set this bit to indicate that the error code has been\ndefined by your application and to ensure that your error code does not\nconflict with any system-defined error codes.\nThis function is intended primarily for dynamic-link libraries (DLLs).\nCalling this function after an error occurs lets the DLL emulate the\nbehavior of a Win32 function.", 
          "ReturnValues": "", 
          "SeeAlso": "XstGetSystemError"
      }, 
      "XstSleep": {
          "@helpfn": "xst_112.htm", 
          "@name": "XstSleep", 
          "Definition": "#### The  XstSleep  function\nsuspends program execution of the current thread for a specified\ninterval. While a program sleeps, other programs get an opportunity to\nrun. \n XstSleep(msec)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "This function does not return a value.", 
          "SeeAlso": ""
      }, 
      "XstStartTimer": {
          "@helpfn": "xst_113.htm", 
          "@name": "XstStartTimer", 
          "Definition": "#### The  XstStartTimer  function\ncreates a timer with the specified time-out value. \nerror = XstStartTimer(@timer,\ncount, msec, function) \nEach time the timer times out, XstStartTimer calls:\n@function (timer, @count, msec,\ntime)\nThe timer procedure function function ( ) can kill the timer in the\nfollowing ways:\nfunction( ) must accept four XLONG arguments, and can change count to\nchange the number of timeout cycles remaining.", 
          "Example": "FUNCTION   Entry ()  XstStartTimer (@timer1, 10, 1000, &Timer())END FUNCTION'FUNCTION   Timer (timer, count, msec, time)  IF (count = 8) THEN count = 5                       ' reduce count to 5  IF (count = 3) THEN RETURN (-1)                   ' one way to kill timer  IF (count = 1) THEN XstKillTimer (timer)   ' kill timer earlyEND FUNCTION", 
          "Parameters": [
              {
                  "name": "timer", 
                  "text": "Returned integer timer identifier"
              }, 
              {
                  "name": "count", 
                  "text": "The timer cycle count; the number of times for timer to countdown"
              }, 
              {
                  "name": "msec", 
                  "text": "The specified time-out value, in milliseconds"
              }, 
              {
                  "name": "function", 
                  "text": "The address of the function to be notified when the time-out value elapses."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstKillTimer"
      }, 
      "XstStringArraySectionToString": {
          "@helpfn": "xst_114.htm", 
          "@name": "XstStringArraySectionToString", 
          "Definition": "#### The  XstStringArraySectionToString \nfunction copies a section of text from a source string array to a\ndestination string. \n\nXstStringArraySectionToString(@text$[], @copy$, x1, y1, x2, y2, term)", 
          "Example": "DIM text$[1]text$[0] = \"What a nice day to be outside \"text$[1] = \"singing or dancing in the rain.\"XstStringArraySectionToString(@text$[], @copy$, 7, 0, 18, 1, 0)'copy$ = \"nice day to be outside singing or dancing\"", 
          "Parameters": [
              {
                  "name": "text$[ ]", 
                  "text": "Source string array"
              }, 
              {
                  "name": "copy$", 
                  "text": "Returned string section"
              }, 
              {
                  "name": "x1", 
                  "text": "Starting character position"
              }, 
              {
                  "name": "y1", 
                  "text": "Starting line in array"
              }, 
              {
                  "name": "x2", 
                  "text": "Ending character position"
              }, 
              {
                  "name": "y2", 
                  "text": "Ending line in array"
              }, 
              {
                  "name": "term", 
                  "text": "String newline termination: 0 = none, 1 = \\n, 2 = \\r\\n"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstStringArraySectionToStringArray": {
          "@helpfn": "xst_115.htm", 
          "@name": "XstStringArraySectionToStringArray", 
          "Definition": "#### XstStringArraySectionToStringArray  function copies a section\nfrom a source string array to a destination string array. \n\nXstStringArraySectionToStringArray(@text$[], @copy$[], x1, y1, x2, y2)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "text$[ ]", 
                  "text": "Source string array"
              }, 
              {
                  "name": "copy$[ ]", 
                  "text": "Returned string array"
              }, 
              {
                  "name": "x1", 
                  "text": "Starting character position"
              }, 
              {
                  "name": "y1", 
                  "text": "Starting line in array"
              }, 
              {
                  "name": "x2", 
                  "text": "Ending character position"
              }, 
              {
                  "name": "y2", 
                  "text": "Ending line in array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstStringArrayToString": {
          "@helpfn": "xst_116.htm", 
          "@name": "XstStringArrayToString", 
          "Definition": "#### The  XstStringArrayToString \nfunction copies a source string array to a destination string. \n\nXstStringArrayToString(@text$[], @text$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "text$[ ]", 
                  "text": "Source string array"
              }, 
              {
                  "name": "text$", 
                  "text": "Returned string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstStringArrayToStringCRLF": {
          "@helpfn": "xst_117.htm", 
          "@name": "XstStringArrayToStringCRLF", 
          "Definition": "#### The  XstStringArrayToStringCRLF \nfunction copies a source string array to a destination string. Each line\nin the source array is appended with \\r\\n before it is copied to the\ndestination string.\n\nXstStringArrayToStringCRLF(@text$[], @text$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "text$[ ]", 
                  "text": "Source string array"
              }, 
              {
                  "name": "text$", 
                  "text": "Returned string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstStringToLongDouble": {
          "@helpfn": "XstStringToLongDouble.htm", 
          "@name": "XstStringToLongDouble", 
          "Definition": "#### The  XstStringToLongDouble \nfunction converts all or part of a string into a LONGDOUBLE type\nnumber. \nerr =\nXstStringToLongDouble(@value$, start, @after, @rtype, LONGDOUBLE value)\n \nThis function is used within the compiler to convert string assignments\nto long double values. It is not meant to be used directly by the\nprogrammer. For more accurate conversion from a string to a long double\nvalue, use the ieelib library function asctoe64().\nXstStringToLongDouble converts all or part of value$ into a numeric\nlong double value.\nIt returns the numeric value in value.   value$ can be passed by\nreference\nfor faster execution.", 
          "Example": "string$ = \"54.4444\"x##   = LONGDOUBLE (string$)PRINT x##", 
          "Parameters": [
              {
                  "name": "value$", 
                  "text": "Source string"
              }, 
              {
                  "name": "start", 
                  "text": "Starting offset in value$ ( not modified )"
              }, 
              {
                  "name": "after", 
                  "text": "Returned with offset after last numeric character"
              }, 
              {
                  "name": "rtype", 
                  "text": "Returned with 0 or $$LONGDOUBLE"
              }, 
              {
                  "name": "value", 
                  "text": "Returned with value of number in LONGDOUBLE format"
              }
          ], 
          "Remarks": "It is usually MUCH easier to use the built in type conversion\nintrinsic LONGDOUBLE() to do string to long double conversions.", 
          "ReturnValues": "If the function succeeds, the return is $$LONGDOUBLE.\nIf the function fails, the return value is -1 (numeric format error).", 
          "SeeAlso": ""
      }, 
      "XstStringToNumber": {
          "@helpfn": "xst_118.htm", 
          "@name": "XstStringToNumber", 
          "Definition": "#### The  XstStringToNumber \nfunction converts all or part of a string into a number of natural data\ntype. \nspecType =\nXstStringToNumber(@value$, start, @after, @rtype, @value$$)  \nXstStringToNumber converts all or part of value$ into a numeric value.\nIt returns the numeric value in value$$ , its natural type in rtype ,\nand any explicit type in specType. value$ can be passed by reference\nfor faster execution.\n\n\n\nXstStringToNumber() only sets rtype to $$SINGLE in the special case of\na string in the \"0s\" format; otherwise it is always $$DOUBLE for\nfloating-point numbers.\n\n0b1010010010111      '\nXLONG: \"0b\" that fits in 32-bits\n0b1010...010111      '\nXLONG: \"0b\" that won't fit in 32-bits\n0o361032723      \n     ' XLONG: \"0o\" that fits in 32-bits\n0o7373315631277      '\nXLONG: \"0o\" that won't fit in 32-bits\n0x12345678         \n   ' XLONG: \"0x\" followed by 0-8 hex digits\n0x123456789AB      \n  ' GIANT: \"0x\" followed by 9+ hex digits\n0s3F800000         \n   ' SINGLE: \"0s\" followed by 8 hex digits\n0d3FE0000000000000 ' DOUBLE:\n\"0d\" followed by 16 hex digits", 
          "Example": "string$ = \"54.4444\"x@   = SBYTE(string$)x@@ = UBYTE (string$)x%   = SSHORT (string$)x%% = USHORT (string$)x&   = SLONG (string$)x&& = ULONG (string$)x     = XLONG (string$)x$$ = GIANT (string$)x!   = SINGLE (string$)x#   = DOUBLE (string$)PRINT x@, x@@, x%, x%%, x&,x&&, x, x$$, x!, x#DIM data$[1]data$[0] = \"25,4,2\"data$[1] = \"65,100,250,41\"'' parse numbers from data$[] array to myData[]' this assumes rtype = 6 or type XLONG'count = 0numRecords = UBOUND(data$[])FOR i = 0 TO numRecords   start = 0   after = 0   rtype = $$XLONG   DO WHILE rtype <> 0      data$ = data$[i]      specType = XstStringToNumber (@data$, start, @after, @rtype, @value$$)      IF rtype = 0 THEN EXIT DO      REDIM myData[count]      myData[count] = XLONG(value$$)      start = after+1      INC count    LOOPNEXT i'REDIM myData[count-1]'FOR i = 0 TO count-1    PRINT myData[i]NEXT i", 
          "Parameters": [
              {
                  "name": "value$", 
                  "text": "Source string"
              }, 
              {
                  "name": "start", 
                  "text": "Starting offset in value$ ( not modified )"
              }, 
              {
                  "name": "after", 
                  "text": "Returned with offset after last numeric character"
              }, 
              {
                  "name": "rtype", 
                  "text": "Returned with \"natural data type\" of value"
              }, 
              {
                  "name": "value$$", 
                  "text": "Returned with value of number in rtype format"
              }
          ], 
          "Remarks": "The code for XstStringToNumber resides in .\nIt is usually MUCH easier to use the built in type conversion\nintrinsics to do string to number conversions.", 
          "ReturnValues": "If the function succeeds, the return is $$SINGLE for strings using \"0s\"\nformat,   $$DOUBLE for strings using \"0d\" format, and otherwise\nalways 0.\nIf the function fails, the return value is -1 (numeric format error).", 
          "SeeAlso": ""
      }, 
      "XstStringToStringArray": {
          "@helpfn": "xst_119.htm", 
          "@name": "XstStringToStringArray", 
          "Definition": "#### The  XstStringToStringArray \nfunction copies a source string to a destination string array.   A newline \\n character in the source string will cause a new line to be added to the destination string array. All \\n and \\r characters are not included in the destination string array.\n XstStringToStringArray(text$, @text$[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "text$", 
                  "text": "Source string"
              }, 
              {
                  "name": "text$[ ]", 
                  "text": "Destination string array"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstStringArrayToString"
      }, 
      "XstStripChars": {
          "@helpfn": "XstStripChars.htm", 
          "@name": "XstStripChars", 
          "Definition": "#### The  XstStripChars function\nremoves  characters from source$. The mode determines whether the\ncharacters in testchar$ are stripped or preserved.\nThe source string is modified.\n\n              XstStripChars(@source$,\ntestchar$, mode)", 
          "Example": "t$ = \"{1,2,3,4},{5,6,7,8},{9,10,11,12}\"XstStripChars(@t$, \"{}\", 0)     ' strip {} giving t$ = \"1,2,3,4,5,6,7,8,9,10,11,12\"t$ = \"ab1cdbb2efg31h\"XstStripChars(@t$, \"12b\", 1)    ' strip all except 12b giving t$ = \"b1bb21\"", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "Source string - modified"
              }, 
              {
                  "name": "testchar$", 
                  "text": "A string containing characters which should be stripped from or preserved in the source string"
              }, 
              {
                  "name": "mode", 
                  "text": "If mode = 0 then characters in testchar$ are stripped from source$ and all other characters are preserved. If mode <> 0 then characters in testchar$ are preserved in source$ and all other characters are stripped"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "The return value is 0 if successful or -1", 
          "SeeAlso": ""
      }, 
      "XstSystemErrorNumberToName": {
          "@helpfn": "xst_120.htm", 
          "@name": "XstSystemErrorNumberToName", 
          "Definition": "#### XstSystemErrorNumberToName\n function converts a system error number into an error$ name\nstring.\n\nXstSystemErrorNumberToName(error, @error$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "error", 
                  "text": "System error number"
              }, 
              {
                  "name": "error$", 
                  "text": "Returned system error string"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstSystemErrorToError": {
          "@helpfn": "xst_121.htm", 
          "@name": "XstSystemErrorToError", 
          "Definition": "#### XstSystemErrorToError\n function converts an operating system error number to a\nnative error number.\n\nXstSystemErrorToError(sysError, @error)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "sysError", 
                  "text": "Operating system error number"
              }, 
              {
                  "name": "error", 
                  "text": "Returned native error number"
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": ""
      }, 
      "XstSystemExceptionNumberToName": {
          "@helpfn": "XstSystemExceptionNumberToName.htm", 
          "@name": "XstSystemExceptionNumberToName", 
          "Definition": "#### The function converts a system\nexception number into a string name.\n\nXstSystemExceptionNumberToName\n(sysException, @sysException$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "sysException", 
                  "text": "system exception number"
              }, 
              {
                  "name": "sysException$", 
                  "text": "name of system exception"
              }
          ], 
          "Remarks": "A system exception may be either an operating system exception (defined\nin kernel32.dec) or a user-registered exception in operating system\nformat.", 
          "ReturnValues": "Returns 0 if successful, -1 if the system exception number is unknown.", 
          "SeeAlso": "Exceptions"
      }, 
      "XstSystemExceptionToException": {
          "@helpfn": "XstSystemExceptionToException.htm", 
          "@name": "XstSystemExceptionToException", 
          "Definition": "#### The  function converts an\noperating system\nexception code to a native or user-registered code.\n\nXstSystemExceptionToException\n(sysException, @exception)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "sysException", 
                  "text": "operating system exception code"
              }, 
              {
                  "name": "exception", 
                  "text": "native or user-registered exception code"
              }
          ], 
          "Remarks": "System exception codes are defined in kernel32.dec; corresponding\nnative codes are in xst.dec.", 
          "ReturnValues": "Returns 0 if successful, -1 if system exception code is unknown.", 
          "SeeAlso": "ExceptionsXstExceptionToSystemException()XstRegisterException()"
      }, 
      "XstTRIM": {
          "@helpfn": "xst_124.htm", 
          "@name": "XstTRIM", 
          "Definition": "#### XstTRIM\n function trims characters from the left and right of a string\nbased on the character template array[].\n  \nThe intrinsic   TRIM$( ) normally removes only spaces and tabs from\nthe\nleft and right of a string. With XstTRIM, any set of ASCII characters\ncan be trimmed\nusing a 256 element array representing the ASCII character set. If\narray[x]\nis zero, then the character is trimmed from the left and right of the\nstring. .\n\nXstTRIM(@string$, array[])", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "A string to trim"
              }, 
              {
                  "name": "array$[ ]", 
                  "text": "An array identifying which ASCII characters should be trimmed. The array type must be SLONG, ULONG or XLONG. The upperbound of array[] must be >= 255. If array[] is empty, then string$ is returned using TRIM$()."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "", 
          "SeeAlso": "XstRTRIMXstLTRIM"
      }, 
      "XstTally": {
          "@helpfn": "xst_123A.htm", 
          "@name": "XstTally", 
          "Definition": "#### XstTally\n function returns a count of all find$ in source$.   The\ndefault find$ is a space character.\ncount = XstTally(source$,\nfind$)", 
          "Example": "count = XstTally (\"mississippi\", \"s\")    ' count = 4", 
          "Parameters": [
              {
                  "name": "source$", 
                  "text": "Source string."
              }, 
              {
                  "name": "find$", 
                  "text": "String to search for within source$ and tally."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is the count of find$.", 
          "SeeAlso": ""
      }, 
      "XstTranslateChars": {
          "@helpfn": "XstTranslateChars.htm", 
          "@name": "XstTranslateChars", 
          "Definition": "#### XstTranslateChars\n function scans string$ substituting all occurrences of any\ncharacter in from$ to the corresponding character in to$. The nth\ncharacter in from$ is translated to the nth character in to$. The\ntranslation strings from$ and to$ must have the same number of\ncharacters. The source string is modified.\nerr =\nXstTranslateChars(@string$, from$, to$)", 
          "Example": "string$ = \"0,1,2,3,4,5,6,7,8,9,0,-1,-2,-3\"from$ = \",-\"to$ = \"|+\"XstTranslateChars (@string$, from$, to$)   ' string$= \"0|1|2|3|4|5|6|7|8|9|0|+1|+2|+3\"", 
          "Parameters": [
              {
                  "name": "string$", 
                  "text": "Source string to scan in order to make substitutions."
              }, 
              {
                  "name": "from$", 
                  "text": "List of characters to exchange."
              }, 
              {
                  "name": "to$", 
                  "text": "List of characters to substitute."
              }
          ], 
          "Remarks": "", 
          "ReturnValues": "Return value is 0 on success, -1 on failure.", 
          "SeeAlso": ""
      }, 
      "XstTry": {
          "@helpfn": "XstTry.htm", 
          "@name": "XstTry", 
          "Definition": "#### XstTry() \nThe XstTry() function installs an exception handler, and executes a protected body of code. If an exception occurs while executing the code, the exception handler is executed. The handler may correct the condition that caused the exception, or abort the protected code, or take other action. The handler also sets a response variable to determine how execution is to continue.\n\nXstTry(SUBADDR Try, SUBADDR\nExcept, EXCEPTION_DATA @exception)", 
          "Example": "FUNCTION Inverse (count, inverse#[])\n EXCEPTION_DATA exception\n XstTry (SUBADDRESS(Try), SUBADDRESS(Except), @exception)\n RETURN\n SUB Try\n  DIM inverse\#[count-1]\n  FOR i = 0 TO count-1\nRetry:    \n   inverse\#[i] = 1\# / DataPoint()\n  NEXT i\n END SUB\n SUB Except\n  SELECT CASE exception.code\n   CASE $$ExceptionFloatDivideByZero, $$ExceptionFloatOverflow\n    exception.address = GOADDRESS(Retry)\n    exception.response = $$ExceptionRetry\n   CASE ELSE\n    XstExceptionNumberToName (exception.code, @exception$)\n    PRINT \"Exception \"; exception$; \" occurred while processing input.\"\n    exception.response = $$ExceptionTerminate\n  END SELECT\n END SUB\nEND FUNCTION", 
          "Parameters": [
              {
                  "name": "Try", 
                  "text": "address of subroutine containing the protected code"
              }, 
              {
                  "name": "Except", 
                  "text": "address of subroutine containing the exception handler"
              }, 
              {
                  "name": "exception", 
                  "text": "an EXCEPTION_DATA variable describing the exception"
              }
          ], 
          "Remarks": "\n\nTYPE EXCEPTION_DATA\n\n  XLONG .code     'exception code\n\n  XLONG .type     'exception type\n\n  XLONG .flags    'exception flags\n\n  XLONG .address  'exception address\n\n  XLONG .response 'exception response\n\n  XLONG .info[14] 'exception arguments\n\nEND TYPE \
\n\nThe **exception code** is the native or user-registered exception code for the exception that has occurred.\n\nThe **exception type** is $$ExceptionTypeInformation, $$ExceptionTypeWarning, or $$ExceptionTypeError. For native codes, the type is determined by the corresponding system exception code; for user-registered codes, it is determined by the programmer when calling XstRaiseException().\n\nThe **exception flags** may indicate more information about the exception. This member will be either 0 ($$EXCEPTION_CONTINUABLE) or 1 ($$EXCEPTION_NONCONTINUABLE). All non-continuable exceptions are forwarded (see below), regardless of how the exception handler sets the exception response.\n\nThe **exception address** is the address of the instruction at which the exception occurred. The exception handler may change this address to cause execution to resume at a different place within the protected code.\n\nThe **exception response** is set by the exception handler, and determines how execution continues after exiting the handler. The response can be one of the following: \
\n\n* $$ExceptionTerminate - terminate the protected code (in which the exception has occurred) and return from XstTry(). Execution continues at the next statement after the call to XstTry(). \
\n* $$ExceptionContinue - return to the instruction at which the exception occurred, and continue execution. This is allowed only for $$ExceptionTypeInformation or $$ExceptionTypeWarning.  \
\n* $$ExceptionRetry - continue execution at the address given by the EXCEPTION_DATA .address member. The exception handler must set this to the GOADDRESS() of a label within the protected code. See example below. \
\n* $$ExceptionForward - forward the exception to the next installed exception handler. (Exception handlers can be nested, by calling XstTry() within a block of protected code, or even within an exception handler.) If there are no more installed handlers, $$ExceptionForward will terminate the program. \
\n\nThe default response is $$ExceptionForward. \
\n\nThe **exception arguments** may contain additional information about the exception. For most native exceptions, these arguments are not used. For user-registered exceptions, the programmer can use the arguments for any desired purpose when the exception is raised (see XstRaiseException()).\nThe protected code and exception handler subroutines are written like any other SUBs, and can execute any valid code including calling other functions, etc. However, neither subroutine should ever include a RETURN or EXIT FUNCTION statement, nor should there be any GOTO statement transferring control into or out of these SUBs. Always exit with either END SUB or EXIT SUB.\nThe handler installed by XstTry() is uninstalled when XstTry() returns. This happens if: \
\n* the protected code ends with no exceptions; or \
\n* an exception occurs, and the response is $$ExceptionTerminate, $$ExceptionContinue, or $$ExceptionRetry. \
\n\nThe handler is also uninstalled if the response is $$ExceptionForward, but in this case XstTry() never returns; execution continues as determined by the handler to which the exception is forwarded, which usually means the rest of function in which XstTry() was called is abandoned.", 
          "ReturnValues": "If the protected code is terminated by an $$ExceptionTerminate response from the exception handler, XstTry() returns -1; otherwise the return value is 0.", 
          "SeeAlso": ""
      }, 
      "XstTypeSize": {
          "@helpfn": "xst_125.htm", 
          "@name": "XstTypeSize", 
          "Definition": "#### XstTypeSize\n function returns the size of the type value.\n\nbytes = XstTypeSize(type)", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "If the function succeeds, the return value is the size in bytes of the\ngiven type.\nIf the function fails, the return value is -1.", 
          "SeeAlso": ""
      }, 
      "XstUnicodeToAnsi": {
          "@helpfn": "XstUnicodeToAnsi.htm", 
          "@name": "XstUnicodeToAnsi$", 
          "Definition": "#### XstUnicodeToAnsi$ function makes a copy of the input UNICODE\nstring as an ANSI string.\nansi$ =\nXstUnicodeToAnsi$(lpTextWide)", 
          "Example": "ucfname$ = NULL$(66)\t\t\t\t'make space for a 32 character unicode string + 2 null bytesGdipGetFamilyName(FontFamily, &ucfname$, NULL)\t'Family Name returned as a unicode string up to 32 charactersansifname$ = XstUnicodeToAnsi$(&ucfname$)\t'make copy of unicode string as ansi stringPRINT ansifname$\t\t\t\t'the ansi string can now be used in xblite expressions  OR, the same thing can be done with a buffer array ....  USHORT buffer[]\t\t\t\t\t'each unicode character is held as USHORTDIM buffer[32]\t\t\t\t\t'room for up to 32 characters plus null ushortGdipGetFamilyName(FontFamily, &buffer[], NULL)\t'Family Name returned as a unicode string up to 32 charactersansifname$ = XstUnicodeToAnsi$(&buffer[])\t'make copy of unicode string as ansi stringPRINT ansifname$\t\t\t\t'the ansi string can now be used in xblite expressions", 
          "Parameters": "", 
          "Remarks": "The input string is not altered.\nOnly the subset of unicode strings that have 0 in the high order byte\nof each 2 byte\nvalue can be processed. i.e. the unicode.\nstring must contain ansi characters 0 to 255 only. If non-ansi\ncharacters are\nencountered, an empty string is returned.", 
          "ReturnValues": "If successful, the string returned is a copy of the input string but in\nansi format.\nIf the conversion is not possible, an empty string is returned.", 
          "SeeAlso": "XstAnsiToUnicode$()"
      }, 
      "XstUnlockFileSection": {
          "@helpfn": "xst_126.htm", 
          "@name": "XstUnlockFileSection", 
          "Definition": "#### XstUnlockFileSection\n function   unlocks a region in an open file. Unlocking a\nregion enables other processes to access the region. .\n\nerror =\nXstUnlockFileSection(filenumber, mode, offset$$, length$$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "filenumber", 
                  "text": "A valid file number returned by OPEN( )."
              }, 
              {
                  "name": "mode", 
                  "text": "Not used."
              }, 
              {
                  "name": "offset$$", 
                  "text": "GIANT value for the starting byte offset in the file where the lock should begin."
              }, 
              {
                  "name": "length$$", 
                  "text": "GIANT value for length of the byte range to be locked."
              }
          ], 
          "Remarks": "Unlocking a region of a file releases a lock on the file.\nThe region to unlock must correspond exactly to an existing locked\nregion.\nFor example, two adjacent regions of a file cannot be locked separately\nand\nthen unlocked as a single region that spans both locked regions. \nA process should not be terminated with a portion of a file locked and\na file that has locked regions should not be closed.", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error\ninformation, call ERROR().", 
          "SeeAlso": "XstLockFileSection"
      }, 
      "XstVersion": {
          "@helpfn": "xst_127.htm", 
          "@name": "XstVersion$", 
          "Definition": "#### The  XstVersion$  function\nreturns a string containing the standard function library version. \nversion$ = XstVersion$()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "The returned string is the standard function library version.", 
          "SeeAlso": ""
      }, 
      "XstWriteString": {
          "@helpfn": "xst_129.htm", 
          "@name": "XstWriteString", 
          "Definition": "#### XstWriteString function writes\na string to a disk file. It first writes a ULONG\nheader variable containing the string length, then writes the string\ndata.\nA string written to a file can be read by using .\nXstWriteString(ofile, @string$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "ofile", 
                  "text": "a valid file number returned from OPEN( )"
              }, 
              {
                  "name": "string$", 
                  "text": "string to write to file"
              }
          ], 
          "Remarks": "Currently to read strings from files with READ, you need\nto know the length of the string   you intend to read, then size a\nstring\nto that length to receive the string data, then READ the string.  \nXstWriteString and XstReadString automatically read and write the\nstring length along\nwith the string. This greatly simplifies reading and writing strings\nfrom\nand to open files.", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1.", 
          "SeeAlso": "XstReadString"
      }, 
      "XsxVersion": {
          "@helpfn": "xst_130.htm", 
          "@name": "XsxVersion$", 
          "Definition": "#### XsxVersion$\n function returns the version string for the extended standard library xsx.\nversion$ = XsxVersion$()", 
          "Example": "", 
          "Parameters": "", 
          "Remarks": "", 
          "ReturnValues": "The returned string is the version string.", 
          "SeeAlso": ""
      }, 
      "XxxFormat": {
          "@helpfn": "xst_131.htm", 
          "@name": "XxxFormat$", 
          "Definition": "#### XxxFormat$\n function formats a variable.   It is used by the  intrinsic \nresult$ = XxxFormat$(format$, argType, arg$$)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "format$", 
                  "text": "formatting string"
              }, 
              {
                  "name": "argType", 
                  "text": "argument type"
              }, 
              {
                  "name": "arg$$", 
                  "text": "value to format; can be integer/float/string"
              }
          ], 
          "Remarks": "Programmers should use the  intrinsic.", 
          "ReturnValues": "Return string is formatted string.", 
          "SeeAlso": ""
      }, 
      "XxxReadFile": {
          "@helpfn": "xst_132.htm", 
          "@name": "XxxReadFile", 
          "Definition": "#### XxxReadFile\n function reads data from a file, starting at the position indicated\nby the file pointer. After the read operation has been completed, the file\npointer is adjusted by the number of bytes actually read.\nerror = XxxReadFile(fileNumber, addr, bytes, bytesRead, overlapped)", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "fileNumber", 
                  "text": "A valid file number returned from OPEN( )"
              }, 
              {
                  "name": "addr", 
                  "text": "Address of a buffer that receives data"
              }, 
              {
                  "name": "bytes", 
                  "text": "Number of bytes to read"
              }, 
              {
                  "name": "bytesRead", 
                  "text": "Number of bytes read"
              }, 
              {
                  "name": "overlapped", 
                  "text": "Usually NULL"
              }
          ], 
          "Remarks": "This function is used for the READ statement. It is also just a wrapper function for the Win32 API function ReadFile.", 
          "ReturnValues": "If functions fails, return value is -1.", 
          "SeeAlso": ""
      }, 
      "XxxWriteFile": {
          "@helpfn": "xst_133.htm", 
          "@name": "XxxWriteFile", 
          "Definition": "#### XxxWriteFile\n function writes data to a file and is designed for both synchronous\nand asynchronous operation. The function starts writing data to the file\nat the position indicated by the file pointer. After the write operation\nhas been completed, the file pointer is adjusted by the number of bytes actually\nwritten.\n `error = XxxWriteFile(fileNumber, addr, bytes, bytesWritten, overlapped)`", 
          "Example": "", 
          "Parameters": [
              {
                  "name": "fileNumber", 
                  "text": "A valid file number returned from OPEN( )"
              }, 
              {
                  "name": "addr", 
                  "text": "Address of a buffer that receives data"
              }, 
              {
                  "name": "bytes", 
                  "text": "Number of bytes to write"
              }, 
              {
                  "name": "bytesWritten", 
                  "text": "Number of bytes written"
              }, 
              {
                  "name": "overlapped", 
                  "text": "Usually NULL"
              }
          ], 
          "Remarks": "This function is used for the WRITE statement. It is also just a wrapper function for the Win32 API function WriteFile.", 
          "ReturnValues": "If the function succeeds, the return value is zero.\nIf the function fails, the return value is -1. To get extended error information, call ERROR().", 
          "SeeAlso": ""
      }
      }
}
