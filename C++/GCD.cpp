#include<bits/stdc++.h>
using namespace std;


int greatestCommonDivisor (int x, int y) {
    int gcd;
    if(x ==0){
        gcd=y;
    }
    if(y== 0){
        gcd= x;
    }
    
    if( x==y){
        gcd= x;
    }
    for(int i=1; i <= min(x,y); i++){
        if((x % i == 0)&&(y%i == 0)){
            gcd =i;
        }
    }
    return gcd;

}