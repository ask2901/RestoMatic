#include<bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        int count=1;
        priority_queue<pair<int,int>> pq;
        while(n--)
        {
            
            int a,b;
            cin>>a>>b;
            if(a<=10)
            {
                pq.push({b,count});
            }
            count++;
        }
        cout<<pq.top().second<<'\n';
    }
}