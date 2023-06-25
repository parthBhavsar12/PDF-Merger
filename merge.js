const PDFMerger = require('pdf-merger-js');



const mergePdfs = async (p1, p2) => {
  var merger = new PDFMerger();
  await merger.add(p1);  
  await merger.add(p2); 
  // await merger.add(p2, [1, 3]); // merge only page 1 and 3 
  // await merger.add(p2, '4,7,8'); // merge only pages 4,7,8
  // await merger.add(p2, '3 to 5'); // merge only pages 3 to 5
  // await merger.add(p2, '3-6'); // merge only pages 3 to 6
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = { mergePdfs }