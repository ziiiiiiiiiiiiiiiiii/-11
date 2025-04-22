function setup() {
  // 設定函數，初始值設定的地方
  // 建立依依視窗的寬與高當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB);
  // 設定初始背景顏色
  background(245, 235, 224);
}

function draw() {
  // 計算圓形的顏色
  let hue = map(mouseX, 0, windowWidth, 0, 260);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓形的顏色
  fill(hue, 100, brightness);
  noStroke();

  // 畫圓形
  ellipse(mouseX, mouseY, 200, 200);
}
