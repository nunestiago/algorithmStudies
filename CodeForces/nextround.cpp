#include<iostream>

using namespace std;

int main(){
	int a,b;
	cin >> a >> b;
	int c[a];
	int r{0};
	
	for(int i = 0; i < a;i++){
		cin >> c[i];
		}

	for(int i = 0; i < a;i++){
		if(c[i] > 0 && c[i] >= c[b-1]){
			r++;}
		}

	cout << r << endl;
	return 0;
	}
