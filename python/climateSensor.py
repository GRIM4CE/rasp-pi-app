import adafruit_dht
import board
import json


def getSensorData():
    try:
        dhtDevice = adafruit_dht.DHT22(board.D4)
        # Print the values to the serial port
        temperature_c = dhtDevice.temperature
        temperature_f = temperature_c * (9 / 5) + 32
        humidity = dhtDevice.humidity
        data = {'tempC': temperature_c, 'tempF': temperature_f, 'humidity': humidity}
        jsonRes = json.dumps(data)
        return jsonRes
    except RuntimeError as error:
        data = {'error': true, text: 'Failed retrieve data from sensor'}
        jsonRes = json.dumps(data)
        return jsonRes

print(getSensorData())
