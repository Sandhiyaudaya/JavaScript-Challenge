/*Find the Kth smallest element from the array*/

#include<bits/stdc++.h>
using namespace std;

int kthSmallest(int A[], int k, int sizeOfArray) {
    //sort the array
    sort(A, A+sizeOfArray);
    //return the element
    return A[k-1];
    
}

/*Example
A[]=1,2,5,8,3,4
k=4
output= 4
*/