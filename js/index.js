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
    var ctr = 0;
    var ttext = [];
    var rtext = [];

    var ttemp = transtext.split("\n");
    console.log(ttemp);
    for (var i = 0; i < ttemp.length; i++) {
      var temp = getLines(ctx, ttemp[i], canvas.width);
      temp.forEach((element) => { ttext.push(element); });
    }

    var rtemp = rawtext.split("\n");
    for (var j = 0; j < rtemp.length; j++) {
      var temp = getLines(ctx, rtemp[j], canvas.width);
      temp.forEach((element) => { rtext.push(element); });
    }

    var a = ttext.length;
    var b = rtext.length;
    var textHeight = 160*a + 80*b;
    var x = img.width / 2;
    var y = (img.height / 2) - (textHeight / 2) - 80;

    ctx.font = '12em Baybayin';
    for (var k = 0; k < a; k++) {
      ctr += 160;
      ctx.fillText(ttext[k], x, y+ctr);
    }

    ctx.font = '4em Lexend Deca';
    for (var l = 0; l < b; l++) {
      ctr += 80;
      ctx.fillText(rtext[l], x, y+ctr);
    }
    
    //ctx.font = '12em Baybayin';
    //ctx.fillText(transtext.value, x, y);

    //ctx.font = '4em Lexend Deca';
    //ctx.fillText(rawtext.value, x, y+80);

    //var anchor = document.createElement("a");
    ///anchor.href = canvas.toDataURL("image/png");
    //anchor.download = "image.hpng";
    //anchor.click();
  }
  img.src = "../assets/images/share-sample.png";
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

// Action listeners for the share button
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('share-btn');
  const shareOptions = document.querySelector('.share-options');

  // function show() {
  //   tooltip.setAttribute('data-show', '');  
  //   popperInstance.update();
  // }
  
  // function hide() {
  //   tooltip.removeAttribute('data-show');
  // }
  
  // const showEvents = ['mouseenter', 'focus'];
  // const hideEvents = ['mouseleave', 'blur'];
  
  // showEvents.forEach((event) => {
  //   button.addEventListener(event, show);
  // });
  
  // hideEvents.forEach((event) => {
  //   button.addEventListener(event, hide);
  // });

  const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const main_popup = document.querySelector('.main-popup');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)  
  })
  main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
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
  console.log(btn);

  btn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
    console.log('btn clicked');
  });
});

