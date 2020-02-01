const light = '#f9f8fd';
const dark = '#3d3d3f';
const accent = '#7dce94';
const lines = document.getElementsByClassName('line');

const fadeIn = function(hover) {
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.opacity = 1;
    }
}

const lighten = function(hover) {
    document.body.style.background = light;
    document.body.style.color = dark;
    for (let i = 1; i < lines.length; i++) {
      lines[i].style.borderTop = `1px solid ${accent}`;
    }
}

const darken = function(hover) {
  document.body.style.background = dark;
  document.body.style.color = light;
  for (let i = 1; i < lines.length; i++) {
    lines[i].style.borderTop = `1px solid ${accent}`;
  }
}

for (let i = 0; i < lines.length; i+=2) {
  lines[i].addEventListener('mouseover', lighten, false);
  lines[i].addEventListener('mouseout', darken, false);
}

for (let i = 1; i < lines.length; i+=2) {
  lines[i].addEventListener('mouseover', darken, false);
  lines[i].addEventListener('mouseout', lighten, false);
}

lighten();
setTimeout(function() {
  fadeIn();
}, 500);