int incomingByte = 0;
int ledPin = 13;
int ain;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}  

void loop() {
  ain = analogRead(0);
  Serial.println(ain);
  delay(200);
  
  digitalWrite(ledPin, LOW);
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
    Serial.print("I received: ");
    int actNum = (incomingByte - 48);
    Serial.println(actNum);
    if(actNum == 1) {
      //digitalWrite(ledPin, HIGH);
    }
  }
    
}
