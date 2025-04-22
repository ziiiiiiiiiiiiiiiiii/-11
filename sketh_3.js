function setup() {
    // 設定函數，初始值設定的地方
    // 建立依依視窗的寬與高當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    // 設定顏色模式為HSB
    colorMode(HSB);
    // 畫布的背景顏色為f5ebe0
    background(245, 235, 224);
  }
  
  function draw() {
    // 畫圖函數，畫圖的地方
    background(245, 235, 224);
    // 畫布的背景顏色為f5ebe0
  
    // 計算圓形和方形的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
    size = constrain(size, 100, 500);
  
    // 設定每個形狀之間的間距
    let spacing = size + 20;
  
    // 使用迴圈產生整個視窗的圓形和方形
    for (let y = spacing / 2; y < windowHeight; y += spacing) {
      for (let x = spacing / 2; x < windowWidth; x += spacing) {
        // 畫方形
        fill(0, 80, 96); // 方形的顏色為HSB(0, 80%, 96%)
        stroke(30, 20, 30); // 邊框顏色為HSB(30, 20%, 30%)
        strokeWeight(5);
        rectMode(CENTER);
        rect(x, y, size, size);
  
        // 畫圓形
        fill(350, 30, 100); // 圓形的顏色為HSB(350, 30%, 100%)
        stroke(30, 20, 30); // 邊框顏色為HSB(30, 20%, 30%)
        strokeWeight(5);
        ellipse(x, y, size, size);
      }
    }
  }
  