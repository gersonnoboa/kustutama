import fs from 'fs';

export default class LocalFileReader {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  readJson(): string {
    try {
      const data = fs.readFileSync(this.fileName, 'utf8');
      return String(data);
    } catch(err) {
      throw new Error(`Failed to extract data from file. Detailed error: ${err}`);
    }
  }
}