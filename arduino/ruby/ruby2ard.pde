int incomingByte = 0;
int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
    Serial.print("I received: ");
    int ledBlinkTime = (incomingByte - 48) * 1000;
    Serial.println(ledBlinkTime);
    Serial.println(incomingByte);
    digitalWrite(ledPin, HIGH);
    delay(ledBlinkTime);
    digitalWrite(ledPin, LOW);
    delay(1000);
  }
}
