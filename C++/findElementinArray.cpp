/*Find the element from the array*/

#include<bits/stdc++.h>
using namespace std;

int elementPresentOrNot(vector<int> array, int element) {
    
    for(int i=0; i <= element; i++){
        if(array[i] == element){
            return 1;
        }
    }
    return 0;
}