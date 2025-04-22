function setup() {
    // 設定函數，初始值設定的地方
    // 建立依依視窗的寬與高當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
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
        fill(245, 202, 195); // 方形的顏色為f5cac3
        stroke(108, 88, 76);
        strokeWeight(5);
        rectMode(CENTER);
        rect(x, y, size, size);
  
        // 畫圓形
        fill(255, 175, 204); // 圓形的顏色為ffafcc
        stroke(108, 88, 76);
        strokeWeight(5);
        ellipse(x, y, size, size);
      }
    }
  }