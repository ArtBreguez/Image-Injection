# Image-Injection
Inject image into emulated camera 

# Compile in Linux with g++

Client:
g++ -c client.cpp -o client.o

Server:
g++ server.cpp -o server -lMagick++

Test:
g++ -o teste teste.cpp client.o

# Run

In one terminal:
./server

In another terminal:
./teste
