function setup() {//設定函數，初始值設定的地方
    // 建立依依視窗的寬與高當作畫布的寬高
    createCanvas(windowWidth,windowHeight);
    // 畫布的背景顏色為f5ebe0
  background(245,235,224);
    
  }
  
  function draw() {//畫圖函數，畫圖的地方
    background(245,235,224);
    // 畫布的背景顏色為f5ebe0
    //畫圓的顏色為#f5ebe0
    
    // 在視窗的中心畫一個圓，寬高為200
    fill(245,235,224);
    // 畫圓的邊框顏色為#6c584c
    stroke(108,88,76);
    // 畫圓的邊框寬度為5
    strokeWeight(5);
    // 畫圓的中心點為視窗的中心
    
   // ellipse(windowWidth/2,windowHeight/2,200,200);
    // 依照上面的圓的顏色與邊線顏色，從視窗的最左邊，畫產生連續的圓，到最右邊
   for (let i=0;i<windowWidth+200;i+=200){
    ellipse(i,windowHeight/2,200,200);
    //圓的顏色為ffc8dd
    fill(255,200,221);
    //圓的邊框顏色為#6c584c
    stroke(108,88,76);
    //圓的邊框寬度為5
    strokeWeight(5);
   }
  }
  