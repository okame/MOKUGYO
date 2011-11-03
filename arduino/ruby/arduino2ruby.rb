require 'rubygems'
require 'serialport'
port = "/dev/tty.usbmodem411"
sp = SerialPort.new(port, 9600, 8, 1, SerialPort::NONE)
while (sp.gets) do
	  puts sp.gets
end
sp.close
