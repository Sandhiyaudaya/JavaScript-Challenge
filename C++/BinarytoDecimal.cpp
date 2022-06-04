#include<bits/stdc++.h>
using namespace std;


int binary_to_decimal(string binaryInteger) {
    int n= stoi(binaryInteger);
   int p=1;
   int result= 0;
   
   while(n != 0){
       int lastDigit= n%10;
       result= result + lastDigit*p;
       p=p*2;
       n=n/10;
    }
    return result;
}
