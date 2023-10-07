#include<bits/stdc++.h>
using namespace std;

int max(int num1, int num2)
{
    return (num1 > num2) ? num1 : num2;
}
 

int min(int num1, int num2)
{
    return (num1 > num2) ? num2 : num1;
}

int replacegcd (int a, int b, int c) 
{
  
  
  
  int mini = min(a, min(b, c));
  
  for(int i = mini; i>1; i--)
  {
      if(( a%i == 0 ) and ( b%i == 0 ) and ( c%i == 0 ))
      {
          return i;
          break;
      }
  }
  
  return 1;
}
// Function to return gcd of a and b
int gcd(int a, int b)
{
    int result = min(a, b); // Finding minimum of a nd b
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    return result; // return gcd of a nd b
}

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        int price[N];
        int dis[N];
        for(int i=0;i<N;i++)
        {
            cin>>price[i];
        }
        for(int t=0;t<N;t++)
        {
            cin>>dis[t];
        }
        int Prefix[N + 2];
        int Suffix[N + 2];
    
        
        Prefix[1] = price[0];
        for (int i = 2; i <= N; i += 1)
        {
            Prefix[i] = gcd(Prefix[i - 1], price[i - 1]);
        }
        
        Suffix[N] = price[N - 1];
    
        // Single state dynamic programming relation
        // for storing gcd of all the elements having
        // index greater than or equal to i in Suffix[i]
        for (int i = N - 1; i >= 1; i -= 1)
        {
            Suffix[i] = gcd(Suffix[i + 1], price[i - 1]);
        }

        int ans=Suffix[1];
        // Replacing First and Last Index
        ans=max(ans,replacegcd(dis[0],dis[0],Suffix[2]));
        ans=max(ans,replacegcd(dis[N-1],dis[N-1],Prefix[N-1]));

        for(int i=2;i<N;i++)
        {
            
            ans=max(ans,replacegcd(Prefix[i-1],Suffix[i+1],dis[i]));
            
        }
        cout<<ans<<'\n';

    }
}