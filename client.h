#ifndef CLIENT_H
#define CLIENT_H

#include <stdio.h>
#include <string.h>
#include <vector>

int openSocket();
std::vector<unsigned char> loadBuffer();

#endif