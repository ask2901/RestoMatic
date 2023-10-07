#include<bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int X,H;
        cin>>X>>H;
        int count=0;
        while(H>0)
        {
            if(count<5)
            {
                H-=(X/2);
            }
            else
            {
                H-=X;
            }
            count++;
        }
        cout<<count<<'\n';
    }
}