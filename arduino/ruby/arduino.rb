require 'rubygems'
require 'serialport'

port = "/dev/tty.usbmodem411"
sp = SerialPort.new(port, 9600, 8, 1, SerialPort::NONE)
sp.putc ARGV[0].chomp
sp.close
