#include <iostream>
using namespace std;

int factorial (int n)
{
    int num =1;
 for(int i=1; i<=n; i++){
     num = num * i;
 }   
 return num;
}