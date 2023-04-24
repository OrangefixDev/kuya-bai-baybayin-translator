//loads function on webpage load
window.onload = function () {
  document.getElementById("translatedTextArea").classList.toggle("baybayin");
  convertText()
};

//copy text tooltip
function showTooltip() {
  let toast = document.getElementById("toast");

  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 2100);
}

function clearText() {
  let rawText = document.getElementById("tagalogTextArea");
  let translatedText = document.getElementById("translatedTextArea");
  rawText.value = "";
  translatedText.value = "";
  // goBack()
}

function copyText() {
  let translatedText = document.getElementById("translatedTextArea");
  translatedText.select();
  // translatedText.
  document.execCommand("copy");

  showTooltip();
}

function focus() {
  let rawText = document.getElementById("tagalogTextArea");
  rawText.focus();
}

function baybayinTranslate() {
  let rawText = document.getElementById("tagalogTextArea").value.toLowerCase();
  rawText = rawText.replace(/e/g, "i");
  rawText = rawText.replace(/o/g, "u");

  //rawText = rawText.replace(/nang/g, "\u1708\u1705\u1714");
  //rawText = rawText.replace(/ning/g, "\u1708\u1712\u1705\u1714");
  //rawText = rawText.replace(/neng/g, "\u1708\u1712\u1705\u1714");
  //rawText = rawText.replace(/nong/g, "\u1708\u1713\u1705\u1714");
  //rawText = rawText.replace(/nung/g, "\u1708\u1713\u1705\u1714");


  rawText = rawText.replace(/nga/g, "\u1705");
  rawText = rawText.replace(/ngi/g, "\u1705\u1712");
  rawText = rawText.replace(/ngu/g, "\u1705\u1713");
  rawText = rawText.replace(/ng/g, "\u1705\u1714");


  rawText = rawText.replace(/ka/g, "\u1703");
  rawText = rawText.replace(/ga/g, "\u1704");
  rawText = rawText.replace(/ta/g, "\u1706");
  rawText = rawText.replace(/da/g, "\u1707");
  rawText = rawText.replace(/na/g, "\u1708");
  rawText = rawText.replace(/pa/g, "\u1709");
  rawText = rawText.replace(/ba/g, "\u170A");
  rawText = rawText.replace(/ma/g, "\u170B");
  rawText = rawText.replace(/ya/g, "\u170C");
  rawText = rawText.replace(/ra/g, "\u1707");
  rawText = rawText.replace(/la/g, "\u170E");
  rawText = rawText.replace(/wa/g, "\u170F");
  rawText = rawText.replace(/sa/g, "\u1710");
  rawText = rawText.replace(/ha/g, "\u1711");

  rawText = rawText.replace(/ki/g, "\u1703\u1712");
  rawText = rawText.replace(/gi/g, "\u1704\u1712");
  rawText = rawText.replace(/ti/g, "\u1706\u1712");
  rawText = rawText.replace(/di/g, "\u1707\u1712");
  rawText = rawText.replace(/ni/g, "\u1708\u1712");
  rawText = rawText.replace(/pi/g, "\u1709\u1712");
  rawText = rawText.replace(/bi/g, "\u170A\u1712");
  rawText = rawText.replace(/mi/g, "\u170B\u1712");
  rawText = rawText.replace(/yi/g, "\u170C\u1712");
  rawText = rawText.replace(/ri/g, "\u1707\u1712");
  rawText = rawText.replace(/li/g, "\u170E\u1712");
  rawText = rawText.replace(/wi/g, "\u170F\u1712");
  rawText = rawText.replace(/si/g, "\u1710\u1712");
  rawText = rawText.replace(/hi/g, "\u1711\u1712");

  rawText = rawText.replace(/ku/g, "\u1703\u1713");
  rawText = rawText.replace(/gu/g, "\u1704\u1713");
  rawText = rawText.replace(/tu/g, "\u1706\u1713");
  rawText = rawText.replace(/du/g, "\u1707\u1713");
  rawText = rawText.replace(/nu/g, "\u1708\u1713");
  rawText = rawText.replace(/pu/g, "\u1709\u1713");
  rawText = rawText.replace(/bu/g, "\u170A\u1713");
  rawText = rawText.replace(/mu/g, "\u170B\u1713");
  rawText = rawText.replace(/yu/g, "\u170C\u1713");
  rawText = rawText.replace(/ru/g, "\u1707\u1713");
  rawText = rawText.replace(/lu/g, "\u170E\u1713");
  rawText = rawText.replace(/wu/g, "\u170F\u1713");
  rawText = rawText.replace(/su/g, "\u1710\u1713");
  rawText = rawText.replace(/hu/g, "\u1711\u1713");

  rawText = rawText.replace(/a/g, "\u1700");
  rawText = rawText.replace(/i/g, "\u1701");
  rawText = rawText.replace(/u/g, "\u1702");

  // c&q&k interchangable
  rawText = rawText.replace(/k/g, "\u1703\u1714");
  rawText = rawText.replace(/c/g, "\u1703\u1714");
  rawText = rawText.replace(/q/g, "\u1703\u1714");
  // 
  rawText = rawText.replace(/g/g, "\u1704\u1714");
  rawText = rawText.replace(/t/g, "\u1706\u1714");
  rawText = rawText.replace(/d/g, "\u1707\u1714");
  rawText = rawText.replace(/n/g, "\u1708\u1714");
  // f&p interchangable 
  rawText = rawText.replace(/p/g, "\u1709\u1714");
  //v&b interchangable 
  rawText = rawText.replace(/v/g, "\u170A\u1714");
  rawText = rawText.replace(/b/g, "\u170A\u1714");
  // 
  rawText = rawText.replace(/m/g, "\u170B\u1714");
  rawText = rawText.replace(/y/g, "\u170C\u1714");
  rawText = rawText.replace(/r/g, "\u1707\u1714");
  rawText = rawText.replace(/l/g, "\u170E\u1714");
  rawText = rawText.replace(/w/g, "\u170F\u1714");
  // x&z&s interchangable
  rawText = rawText.replace(/s/g, "\u1710\u1714");
  rawText = rawText.replace(/x/g, "\u1710\u1714");
  rawText = rawText.replace(/z/g, "\u1710\u1714");
  //J&H interchangable
  rawText = rawText.replace(/h/g, "\u1711\u1714");
  rawText = rawText.replace(/j/g, "\u1711\u1714");


  return rawText;
}
function convertText() {
  let translatedText = document.getElementById("translatedTextArea");
  translatedText.value = baybayinTranslate();

}

//var updater = 0;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function createImage() {
  let scale = Math.min(canvas.width/this.width, canvas.height/this.height);

  ctx.scale(scale, scale);
  ctx.drawImage(this, 0, 0, this.width, this.height);

  ctx.textAlign = 'center';
  var ttext = [];
  var rtext = [];
  var height = 0;
  var wscale = 1;
  var hscale = 1;
  var correction = 30;
  //var rscale = 0;
  
  ctx.font = `${12*wscale*hscale}em Baybayin`;
  ttext = getText(this.dataset.transtext, this.width);
  wscale = getWidthScale(ttext, this.width);
  height += getHeight(ttext, hscale, wscale, correction);

  height += ((10+correction)*wscale*hscale);

  ctx.font = `${4*hscale}em Lexend Deca`;
  rtext = getText(this.dataset.rawtext, this.width);
  height += getHeight(rtext, hscale);


  while(height > 1050) {
    hscale = (height > 1050) ? (1050/height) : 1;
    height = 0;

    ctx.font = `${12*wscale*hscale}em Baybayin`;
    ttext = getText(this.dataset.transtext, this.width);
    height += getHeight(ttext, hscale, wscale, correction);

    height += ((10+correction)*wscale*hscale);

    ctx.font = `${4*hscale}em Lexend Deca`;
    rtext = getText(this.dataset.rawtext, this.width);
    height += getHeight(rtext, hscale);
  }

  var heights = getHeights(ttext, rtext, wscale, hscale, correction);

  var a = ttext.length;
  var b = rtext.length;

  var textHeight = heights[heights.length-1];

  var x = this.width / 2;
  var y = 625 - textHeight / 2;

  ctx.font = `${12*wscale*hscale}em Baybayin`;
  for (var k = 0; k < a; k++) ctx.fillText(ttext[k], x, y+heights[k]);
  ctx.font = `${4*hscale}em Lexend Deca`;
  for (var l = 0; l < b; l++) ctx.fillText(rtext[l], x, y+heights[l+a]);

  if (this.dataset.isPreview) {
    if (lofctr > 0) {
      var emptay = (lofctr > 1) ? `are ${lofctr} words that exceed` : `is ${lofctr} word that exceeds`
      alert(`There ${emptay} the width of the image.`);
    }
  }

  if (this.dataset.isDownload) {
    var anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = `kuyabai_${textToFilename(rtext)}_${getNow()}.png`;
    anchor.click();
  }
}

function convert() {
  let rawtext = document.getElementById('tagalogTextArea').value;
  let transtext = document.getElementById('translatedTextArea').value;
  //const image = document.getElementById('image');

  ctx.reset();
  
  var img = new Image();
  img.dataset.transtext = transtext;
  img.dataset.rawtext = rawtext;
  img.onload = createImage;
  img.src = "/assets/images/share-sample.png";
}

function share(){
  convert();
}

function downloadCanvas() {
  let rawtext = document.getElementById('tagalogTextArea').value;
  let transtext = document.getElementById('translatedTextArea').value;

  ctx.reset();

  var img = new Image();
  img.dataset.transtext = transtext;
  img.dataset.rawtext = rawtext;
  img.dataset.isDownload = true;
  img.onload = createImage;
  img.src = "../assets/images/share-sample.png";
  const base64Canvas = canvas.toDataURL("image/jpeg").split(';base64,')[1];
  console.log(base64Canvas);
}

function textToFilename(array) {
  var str = "";
  var temp = array[0];
  var temp2 = temp.split(" ");
  str += temp2[0];
  for (var m = 1; m < temp2.length; m++) str += `-${temp2[m]}`;
  for (var n = 1; n < array.length; n++) {
    str += '-';
    temp = array[n];
    temp2 = temp.split(" ");
    str += temp2[0];
    for (var o = 1; o < temp2.length; o++) str += `-${temp2[o]}`;
  }
  return str;
}

function getNow() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  return `${year}${month}${date}T${hour}${minute}${second}`;
}

function getWidthScale(lines, maxWidth) {
  var widestWidth = 0;
  lines.forEach((element) => {
    var width = ctx.measureText(element).width;
    if (width > maxWidth) {
      if (width > widestWidth) widestWidth = width;
    }
  });

  return (widestWidth > maxWidth) ? (maxWidth/widestWidth) : 1;
}

function getHeight(lines, hscale, wscale = 1, correction = 0) {
  var height = 0;
  lines.forEach((element) => {
    var line = ctx.measureText(element);
    var y = line.fontBoundingBoxAscent + line.actualBoundingBoxDescent + ((height > 0) ? ((10+correction)*wscale*hscale) : 0);
    height += y;
  });
  return height;
}

function getHeights(text1, text2, wscale, hscale, correction) {
  var heights = [];
  ctx.font = `${12*wscale*hscale}em Baybayin`;
  text1.forEach((element) => {
    var line = ctx.measureText(element);
    var space = (heights.length === 0) ? 0 : (heights[heights.length-1] + ((10+correction)*wscale*hscale));
    heights.push(line.fontBoundingBoxAscent + line.actualBoundingBoxDescent + space);
  });
  ctx.font = `${4*hscale}em Lexend Deca`;
  text2.forEach((element, index) => {
    var line = ctx.measureText(element);
    var space = heights[heights.length-1] + ((10 + ((index > 0) ? 0 : correction))*hscale);
    heights.push(line.fontBoundingBoxAscent + line.actualBoundingBoxDescent + space);
  });
  return heights;
}

function getText(text, width) {
  var newLines = [];
  var lines = text.split('\n');
  lines.forEach((element) => {
    var line = getLines(element, width);
    line.forEach(element => newLines.push(element));
  });
  return newLines;
}

function getLines(text, maxWidth) {
  var words = text.split(' ');
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) currentLine += " " + word;
    else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('down-btn');
  const shareOptions = document.querySelector('.down-options');

  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }
  }  
);

const preview = document.querySelector('#preview');
const openPreview = document.querySelector('.open-preview');
const closePreview = document.querySelector('.close-preview');
  
openPreview.addEventListener('click', () => {
  preview.showModal();
});
  
closePreview.addEventListener('click', () => {
    preview.close();
});

var contentToToggle = document.querySelector(".social"); 

  document.querySelector(".js-btn-open")
      .addEventListener("click", (event) => {
        event.preventDefault();
        contentToToggle.classList.toggle("open");
}
);


