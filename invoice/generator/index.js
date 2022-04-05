const fs = require('fs');
const pdf = require('html-pdf');
const html = fs.readFileSync('../megan-cleaning/index.html', 'utf8');
const options = { format: 'Letter' };
const date = new Date();
const dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

pdf.create(html, options).toFile(`../megan-cleaning/invoice-${dateString}.pdf`, function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});