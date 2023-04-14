//loads function on webpage load
window.onload = function () {
  document.getElementById("translatedTextArea").classList.toggle("baybayin");
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

  rawText = rawText.replace(/nang/g, "\u1708\u1705\u1714");
  rawText = rawText.replace(/ning/g, "\u1708\u1712\u1705\u1714");
  rawText = rawText.replace(/neng/g, "\u1708\u1712\u1705\u1714");
  rawText = rawText.replace(/nong/g, "\u1708\u1713\u1705\u1714");
  rawText = rawText.replace(/nung/g, "\u1708\u1713\u1705\u1714");


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

  rawText = rawText.replace(/k/g, "\u1703\u1714");
  rawText = rawText.replace(/g/g, "\u1704\u1714");
  rawText = rawText.replace(/t/g, "\u1706\u1714");
  rawText = rawText.replace(/d/g, "\u1707\u1714");
  rawText = rawText.replace(/n/g, "\u1708\u1714");
  rawText = rawText.replace(/p/g, "\u1709\u1714");
  rawText = rawText.replace(/b/g, "\u170A\u1714");
  rawText = rawText.replace(/m/g, "\u170B\u1714");
  rawText = rawText.replace(/y/g, "\u170C\u1714");
  rawText = rawText.replace(/r/g, "\u1707\u1714");
  rawText = rawText.replace(/l/g, "\u170E\u1714");
  rawText = rawText.replace(/w/g, "\u170F\u1714");
  rawText = rawText.replace(/s/g, "\u1710\u1714");
  rawText = rawText.replace(/h/g, "\u1711\u1714");


  return rawText;
}
function convertText() {
  let translatedText = document.getElementById("translatedTextArea");
  translatedText.value = baybayinTranslate();

}

//var updater = 0;

function convert(){
  let rawtext = document.getElementById('tagalogTextArea').value;
  let transtext = document.getElementById('translatedTextArea').value;
  //const image = document.getElementById('image');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.reset();

  var img = new Image();
  img.onload = function() {
    let scale = Math.min(canvas.width/img.width, canvas.height/img.height);

    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    ctx.textAlign = 'center';
    var ttext = [];
    var rtext = [];
    var lofctr = 0;
    var heights = [];

    var ttemp = transtext.split("\n");
    for (var i = 0; i < ttemp.length; i++) {
      ctx.font = '12em Baybayin';
      var temp = getLines(ctx, ttemp[i], img.width);
      temp.forEach((element, index) => {
        var temp2 = ctx.measureText(element);
        if (temp2.width > img.width) lofctr++;
        var temp3 = (heights.length-1 < 0) ? 0 : (heights[heights.length-1] + 10);
        heights.push(temp2.actualBoundingBoxAscent + temp2.actualBoundingBoxDescent + temp3);
        ttext.push(element);
      });
    }

    var rtemp = rawtext.split("\n");
    for (var j = 0; j < rtemp.length; j++) {
      ctx.font = '4em Lexend Deca';
      var temp = getLines(ctx, rtemp[j], img.width);
      temp.forEach((element) => {
        var temp2 = ctx.measureText(element);
        if (temp2.width > img.width) lofctr++;
        var temp3 = heights[heights.length-1] + 10;
        heights.push(temp2.fontBoundingBoxAscent + temp2.actualBoundingBoxDescent + temp3);
        rtext.push(element);
      });
    }

    var a = ttext.length;
    var b = rtext.length;

    var textHeight = heights[heights.length-1];

    var x = img.width / 2;
    var y = 625 - textHeight / 2;

    ctx.font = '12em Baybayin';
    for (var k = 0; k < a; k++) ctx.fillText(ttext[k], x, y+heights[k]);

    ctx.font = '4em Lexend Deca';
    for (var l = 0; l < b; l++) ctx.fillText(rtext[l], x, y+heights[l+a]);

    //if (textHeight > 1050) alert('The text may be too long for the image.');

    if (lofctr > 0) {
      var emptay = lofctr > 1 ? `are ${lofctr} words that exceed` : `is ${lofctr} word that exceeds`
      alert(`There ${emptay} the width of the image.`);
    }
    const kek = canvas.toDataURL("image/jpeg");
    console.log(kek); 
    // console.clear();  
  }
  img.src = "../assets/images/share-sample.png";
}

function share(){
  convert();
}



function downloadCanvas() {
  var canvas = document.getElementById('canvas-hidden');
  const ctx = canvas.getContext("2d");
  let rawtext = document.getElementById('tagalogTextArea').value;
  let transtext = document.getElementById('translatedTextArea').value;

  ctx.reset();

  var img = new Image();
  img.onload = function() {
    let scale = Math.min(canvas.width/img.width, canvas.height/img.height);

    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    ctx.textAlign = 'center';
    var ttext = [];
    var rtext = [];
    var lofctr = 0;
    var heights = [];

    var ttemp = transtext.split("\n");
    for (var i = 0; i < ttemp.length; i++) {
      ctx.font = '12em Baybayin';
      var temp = getLines(ctx, ttemp[i], img.width);
      temp.forEach((element, index) => {
        var temp2 = ctx.measureText(element);
        if (temp2.width > img.width) lofctr++;
        var temp3 = (heights.length-1 < 0) ? 0 : (heights[heights.length-1] + 10);
        heights.push(temp2.actualBoundingBoxAscent + temp2.actualBoundingBoxDescent + temp3);
        ttext.push(element);
      });
    }

    var rtemp = rawtext.split("\n");
    for (var j = 0; j < rtemp.length; j++) {
      ctx.font = '4em Lexend Deca';
      var temp = getLines(ctx, rtemp[j], img.width);
      temp.forEach((element) => {
        var temp2 = ctx.measureText(element);
        if (temp2.width > img.width) lofctr++;
        var temp3 = heights[heights.length-1] + 10;
        heights.push(temp2.fontBoundingBoxAscent + temp2.actualBoundingBoxDescent + temp3);
        rtext.push(element);
      });
    }

    var a = ttext.length;
    var b = rtext.length;

    var textHeight = heights[heights.length-1];

    var x = img.width / 2;
    var y = 625 - textHeight / 2;

    ctx.font = '12em Baybayin';
    for (var k = 0; k < a; k++) ctx.fillText(ttext[k], x, y+heights[k]);

    ctx.font = '4em Lexend Deca';
    for (var l = 0; l < b; l++) ctx.fillText(rtext[l], x, y+heights[l+a]);

    var anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = `kuyabai_${getWords(rtext)}_${getNow()}.png`;
    anchor.click();
  }  
  img.src = "../assets/images/share-sample.png";
  const base64Canvas = canvas.toDataURL("image/jpeg").split(';base64,')[1];
  console.log(base64Canvas);
}


function getWords(array) {
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

function getLines(ctx, text, maxWidth) {
  var words = text.split(" ");
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

