# server.py
import http.server
import socketserver

# Define the handler to use for incoming requests
handler = http.server.SimpleHTTPRequestHandler

# Create the server
server = socketserver.TCPServer(('localhost', 8080), handler)

# Start the server
print('Starting server on port 8080...')
server.serve_forever()