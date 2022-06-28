import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import replace from 'replace-in-file';
import axios from 'axios';

const files = fs.readdirSync(join(process.cwd(), 'apps/personal-site/posts'));

const filePaths = files.map((file) =>
  join(process.cwd(), 'apps/personal-site/posts', file)
);

const toUpdate = filePaths;
// const toUpdate = [filePaths[0]];

const replaceOptions = {
  files: toUpdate,
  dry: false,
  from: /!\[.+\]\(.+\)/g,
  to: (match: any) => {
    const regex = /!\[(.+)\]\((.+)\)/;

    const matchResult = match.match(regex);
    const url = matchResult[2];
    const alt = matchResult[1];

    // console.log(match);
    const split = url.split('/');
    const lastPart = split[split.length - 1];
    const filename = (
      lastPart === 'giphy.gif' ? `${split[split.length - 2]}.gif` : lastPart
    ).toLowerCase();

    // if (url[0] === 'h') {
    //   fs.writeFileSync(
    //     join(process.cwd(), 'urls.csv'),
    //     `${url},${filename}\n`,
    //     {
    //       flag: 'a+',
    //     }
    //   );
    // }

    // console.log(split);
    const replacement = `![${alt}](https://media.zachgollwitzer.com/${filename})`;
    console.log({ match, url, alt, filename, replacement });
    return replacement;
  },
  countMatches: true,
};

const results = replace.sync(replaceOptions);
