/*Find the median from the sorted array*/

#include<bits/stdc++.h>
using namespace std;


int calculateMedian(int A[], int sizeOfArray) {
    // check for even case
    if (sizeOfArray % 2 != 0)
        return (int)A[sizeOfArray / 2];
 
    return (int)(A[(sizeOfArray - 1) / 2] + A[sizeOfArray / 2]) / 2;
}