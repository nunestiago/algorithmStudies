#include<iostream>
#include <string>
using namespace std;

int main(){
  int a;
  int x{0};
  cin >> a;
  string b;
  while(a--){
    cin >> b;
    if(b[1] == '+'){
      x++;
    }else{
    x--;
    }
   
  }
  cout << x << endl;
  return 0;
};