#include<bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin>>t;
    
    while(t--)
    {
        int a,b,c;
        cin>>a>>b>>c;
        
        string ans="NO";
        if(a+b>=10 || a+c>=10)
        {
            ans="YES";
        }
        else if(b+c>=10)
        {
            ans="YES";
        }
        cout<<ans<<'\n';
    }
}