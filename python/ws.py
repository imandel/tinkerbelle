import json
from websocket import create_connection
from colour import Color
import time

ws = create_connection("ws://IPADDRESS:3000/")
for color in Color('green').range_to(Color("blue"),50):
	ws.send(json.dumps({"type": "hex", "value": color.get_hex()}))
	time.sleep(0.1)
ws.send(json.dumps({"type":"audio","value":"gong"}))