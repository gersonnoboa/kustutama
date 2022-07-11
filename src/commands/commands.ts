import type { Arguments, CommandBuilder } from 'yargs';
import LocalFileReader from '../local_file_reader/local-file-reader';

type Options = {
  name: string;
  upper: boolean | undefined;
};

export const command: string = 'file-path <file-path>';
export const desc: string = 'File that contains all tweets.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional('file-path', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { filePath } = argv;
  console.log(`Operating on file ${filePath}`);

  const fileReader = new LocalFileReader(String(filePath));
  const str = fileReader.readJson();
  console.log(str);
  process.exit(0);
};
