// RESP serializing and deserializing
import * as readline from "readline";
import * as fs from "fs";

class Value {
  typ: string;
  str: string;
  num: number;
  bulk: string;
  array: Value[];

  constructor(
    typ: string,
    str: string,
    num: number,
    bulk: string,
    array: Value[]
  ) {
    this.typ = "";
    this.str = "";
    this.num = 0;
    this.bulk = "";
    this.array = [];
  }
}

class Resp {
  //   reader: ReadableStream<Uint8Array>;
  //   constructor(rd: Reader) {
  //      this.reader = createBufferedReader(rd);
  //   }
}

function readLine() {
  //logic
}

function readInteger() {
  //logic
}

// const reader = readline.createInterface({
//   input: Buffer.from(input),
// });
// let b = reader.readByte();
// let size = reader.readByte();

// reader.on("line", (line: string) => {
//   // Your logic for processing each line goes here
//   console.log(line);
// });
