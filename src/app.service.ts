import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
var path = require('path');
var program = require('commander');
var anychartExport = require('anychart-nodejs');
// Get window

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getJpg() {
    var chart =
      "var chart = anychart.line([10, 20, 7, 18, 30]); chart.bounds(0, 0, 800, 600); chart.container('container'); chart.draw()";

    // generate PDF image and save it to a file
    anychartExport.exportTo(chart, 'pdf').then(
      function (image: any) {
        fs.writeFile('public/anychart.pdf', image, function (fsWriteError) {
          if (fsWriteError) {
            console.log(fsWriteError);
          } else {
            console.log('Complete');
          }
        });
      },
      function (generationError: any) {
        console.log(generationError);
      },
    );
  }
}
