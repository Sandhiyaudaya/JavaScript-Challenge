#include<bits/stdc++.h>
using namespace std;

int sum_of_digits(int n) {
    int x = 0;
     while(n > 0){
         int last_digit= n %10;
         x = x+ last_digit;
         n = n/10;
     }
     return x;
     
     
}