/*Take the argument which takes the argument and return the square root*/

#include<bits/stdc++.h>
using namespace std;

int squareRoot(int n) {
    if (n == 0 || n == 1)
    return n;
    
   int i = 1, result = 1;
    while (result <= n)
    {
      i++;
      result = i * i;
    }
    return i - 1;
}
