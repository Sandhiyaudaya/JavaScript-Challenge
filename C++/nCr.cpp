/*Implement a function that takes two arugument and return nCr= n!/(r!*(n-r)!)*/

#include<bits/stdc++.h>
using namespace std;

int factorial(int x){
    int num =1;
        for(int i=1; i<=x; i++){
            num= num*i;
        }
    return num;
}

int nCr (int n, int r) {
    int prob; 
    int x;
  if(n>=r){
      x=n-r;
      prob= factorial(n)/(factorial(r)*factorial(x));
      return prob;
  }    
}