
// including chalk module
const chalk = require('chalk');

// defining color hex values
const TextColorWhite = '#ffffff';
const TextColorPurple = '#2400ff';

const BGColorWhite = '#ffffff';
const BGColorPurple = '#2400ff';

const ColorBlack = '#000000';

const introduction = async = () => {
  console.log(chalk.underline.hex(TextColorPurple)('\nFRONTEND MENTOR CHALLENGES'));
  
  console.log(chalk.bgWhiteBright.blackBright('\nIntroduction'));
  console.log(chalk.hex(TextColorWhite)(
    `This repository has all the solution code of the challenges I have been doing from frontendmentor.com website.`,
    `\nGo to the website https://www.frontendmentor.com and do check out some really cool and beneficial challenges there :D`
  ));
  
  console.log(chalk.bgWhiteBright.blackBright('\n\nProject Structure'));
  console.log(chalk.hex(TextColorWhite)(
    `\n - Folder (challenges): This folder has all the challenges and resources to those challenges that I have completed/attempted.`,
    `\n - Folder (solutions): This folder has all the code solutions to the challenges.`,
    `\n - README.md (solutions/README.md): This README.md file has all the entries of solutions and their respective frontendmentor.com URL`
  ));

  console.log(chalk.bold.italic.hex(TextColorPurple)('HAPPY CODING :D'));
}

console.log(introduction.call());