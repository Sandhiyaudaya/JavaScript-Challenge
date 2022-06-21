/*Function to take the sorted array and find the freqenucy of the largest number*/

#include<bits/stdc++.h>
using namespace std;

int frequencyOfLargestElement (vector<int> A) {
    int arrSize = sizeof(A)/sizeof(A[0]);
    int count = 0;
    int largest=A[arrSize-1];
    
    for(int i=0; i <= arrSize; i++){
        if(A[i] == largest){
            count++;
        }
    }
   return count;
}