#include<iostream>
 
using namespace std;
 
// main function -
// where the execution of program begins
int main()
{
  int n;
  std::cin >> n;
  if(n % 2 == 0 && n > 2){
    cout << "YES" << endl;
  } else {
    cout << "NO" << endl;
  }
    
    return 0;
}