int micPin = 1;
int xPin = 4;
int yPin = 5;
int xAin;
int yAin;
int micAin;
int xDiff;
int yDiff;
int preMicAin = 600;
int DELAY = 50;
int gThs = 250;
int micThs = 250;
int bias = 277; 

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Mic
  micAin = analogRead(micPin);
  int micDiff = abs(preMicAin - micAin);
  if(micDiff > micThs) {
    Serial.println('M');
  }
  
  // Gyro
  xAin = analogRead(xPin);
  yAin = analogRead(yPin);
  xDiff = xAin - bias;
  yDiff = yAin - bias;
  if(xDiff > 0 && xDiff > gThs) {
    Serial.println("XP");
  } else if(xDiff < 0 && (-1 * xDiff) > gThs) {
    Serial.println("XM");
  }
  if(yDiff > 0 && yDiff > gThs) {
    Serial.println("YP");
  } else if(yDiff < 0 && (-1 * yDiff) > gThs) {
    Serial.println("YM");
  }
  
  delay(DELAY);
}
