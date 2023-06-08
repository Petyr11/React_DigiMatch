const fs = require("fs");

const folderPath = "public/digimon png;"; // substitua com o caminho da pasta que você quer listar

const cardImages = [];

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const fileNames = files.map((file) => {
    return cardImages.push({ src: file, matched: false });
  });

  
});

