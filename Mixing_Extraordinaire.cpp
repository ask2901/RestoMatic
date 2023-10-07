#include<bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        int arr[N];
        for(int i=0;i<N;i++)
        {
            cin>>arr[i];
        }
        long long ans=0;
        for(int i=0;i<N;i++)
        {
            for(int j=i+1;j<N;j++)
            {
                ans+=arr[i]*arr[j];
            }
        }
        cout<<ans<<'\n'; 
    }
}