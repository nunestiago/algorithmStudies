#include<iostream>
using namespace std;

int main(){
  int map[5][5];
int a,b,c,d,e,r;
for(int i=0;i<5;i++){
  for(int j=0;j<5;j++){
    cin>>map[i][j];
    if(map[i][j]==1){
      cout<<i<<" "<<j<<endl;
      a=i;
      b=j;
    }
  }
}
c = abs(a-2);
d = abs(b-2);
r = c + d;

cout << a << b << c << d << r << endl;
// cout<<r<<endl;

return 0;
}
