import axios from 'axios';
import * as csv from 'fast-csv';
import fs from 'fs';
import path from 'path';

fs.createReadStream(path.join(process.cwd(), 'urls.csv'))
  .pipe(csv.parse({ headers: false }))
  .on('data', async (row) => {
    await downloadFile(row[0], 'temp-downloads/' + row[1]);
  });

async function downloadFile(url: string, outputPath: string) {
  const writer = fs.createWriteStream(outputPath);

  const result = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  return new Promise((resolve, reject) => {
    result.data.pipe(writer);
    let error: any = null;
    writer.on('error', (err) => {
      error = err;
      writer.close();
      reject(err);
    });
    writer.on('close', () => {
      if (!error) {
        resolve(true);
      }
    });
  });
}
