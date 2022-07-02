var textFolder = './data'; // ./ 현재 디렉토리라는 뜻
var fs = require('fs');

fs.readdir(testFolder, function(err, filelist){
  console.log(filelist);
})
