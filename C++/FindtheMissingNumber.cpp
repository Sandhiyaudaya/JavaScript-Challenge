/*find the missing number from the Array*/

#include<bits/stdc++.h>
using namespace std;

int findMissingNumber(int A[], int sizeOfArray) {
    
    int total=(sizeOfArray+1)*(sizeOfArray+2)/2;
    
    for(int i=0; i<sizeOfArray; i++){
        total= total- A[i];
    }
return total;
}