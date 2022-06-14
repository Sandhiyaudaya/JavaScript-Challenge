#include<iostream>
using namespace std;
 //Code Challege:

 #include<bits/stdc++.h>
using namespace std;


pair<int, int> largestAndSmallest(int A[], int sizeOfArray) {
    
       sort(A, A + sizeOfArray);
       
       if(sizeOfArray == 1){
           return std::make_pair(A[0],0);
       }
      return std::make_pair(A[(sizeOfArray -1)] ,A[0]);
}

// Pair struct is used to return
// two values from getMinMax()
struct Pair
{
    int min;
    int max;
};
 
Pair getMinMax(int arr[], int n)
{
    struct Pair minmax;    
    int i;
     
    // If there is only one element
    // then return it as min and max both
    if (n == 1)
    {
        minmax.max = arr[0];
        minmax.min = arr[0];    
        return minmax;
    }
     
    // If there are more than one elements,
    // then initialize min and max
    if (arr[0] > arr[1])
    {
        minmax.max = arr[0];
        minmax.min = arr[1];
    }
    else
    {
        minmax.max = arr[1];
        minmax.min = arr[0];
    }
     
    for(i = 2; i < n; i++)
    {
        if (arr[i] > minmax.max)    
            minmax.max = arr[i];
             
        else if (arr[i] < minmax.min)    
            minmax.min = arr[i];
    }
    return minmax;
}
 
// Driver code
int main()
{
    int arr[] = { 1000, 11, 445,
                  7, 330, 3000 };
    int arr_size = 6;
     
    struct Pair minmax = getMinMax(arr, arr_size);
     
    cout << "Minimum element is "
         << minmax.min << endl;
    cout << "Maximum element is "
         << minmax.max;
          
    return 0;
}

