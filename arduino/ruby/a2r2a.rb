require 'rubygems'
require 'serialport'
port = "/dev/tty.usbmodem411"
sp = SerialPort.new(port, 9600, 8, 1, SerialPort::NONE)
  puts sp.gets
while (sp.gets) do
	  puts sp.gets
	  #puts 'hoge' if(sp.gets.to_i > 200) 
	  #sp.putc 1 if(sp.gets.to_i > 100) 
end
sp.close
