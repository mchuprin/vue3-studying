class filer {
  header: { title: string, content: string } | undefined;

  content: string;

  footer: { title: string, content: string } | undefined;

  constructor(data: string) {
    this.content = data;
  }

  addInput(data: string) {
    this.content += data;
  }
  //
  // setChildMode(switcher: boolean, silent: any) {
  // }

  // eslint-disable-next-line consistent-return
  countWords(rule: string | string[]) {
    if (Array.isArray(rule)) {
      return this.content.split(' ').length;
    }
  }

  // .countWords(['hi', 'la']) // total:, hi, 'la'
  // .countWords('all')
  setHeader(title: string, content: string) {
    this.header = {
      title,
      content,
    };
  }

  setFooter(title: string, content: string) {
    this.footer = {
      title,
      content,
    };
  }

  read() {
    return this.content;
  }
  //
  // outputToConsole
  //
  // outputToFile
  //   .addInput('my_file')
//   .addInput('second_file')
  // .setChildMode(true, { silent: true })
  // .countWords(['hi', 'la']) // total:, hi, 'la'
  // .countWords('all')
  //   .setHeader('My header', '*')
  //   .setFooter('My footer', '=')
  // .read()
  // .outputToConsole()
  // .outputToFile('output');
}
