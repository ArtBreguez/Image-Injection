#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>   
#include <sys/ioctl.h>
#include <unistd.h>  
#include <iostream>
#include <fstream>
#include <errno.h>
#include <vector>
#include "client.h"

using namespace std;

int main()
{
    int socket = openSocket();
    std::vector<unsigned char> buffer = loadBuffer();
}