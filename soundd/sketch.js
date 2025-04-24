let mic;
let fft;
let isMicStarted = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
  fill(0);
  noStroke();

  // Create FFT analyzer
  fft = new p5.FFT(0, 128);

  // Create button to start mic
  let micButton = createButton('Enable Mic');
  micButton.mousePressed(startMic);
  micButton.position(20, 20); // ← This places it at (x=20, y=20)
  micButton.style('font-size', '16px');
  micButton.style('padding', '8px');
}

function startMic() {
  if (!isMicStarted) {
    // Create mic input
    mic = new p5.AudioIn();
    mic.start(() => {
      fft.setInput(mic);
      isMicStarted = true;
    });
  }
}

function draw() {
  background(255, 204, 0);

  if (isMicStarted) {
    const data = fft.waveform();

    for (let i = 0; i < data.length; i++) {
      const x = map(i, 0, data.length, 0, width);
      const y = map(data[i], -1, 1, height + 500, -500);
      ellipse(x, y, 5, 5);
    }
  } else {
    textSize(16);
    fill(1);
    textAlign(CENTER, CENTER);
    text('Click "Enable Mic" to begin.', width / 2, height / 2);
  }
}