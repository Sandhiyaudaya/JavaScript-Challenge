#include<bits/stdc++.h>
using namespace std;


int is_prime(int n) {
        int i;
        for(i=2; i<=n-1; i++){
		if(n%i==0){
			return 0;
		
		}
	}
	//Prime
	if(i==n){
		return 1;
	}
	return 0;
}   
            
