#include<bits/stdc++.h>
using namespace std;

void helper(vector<vector<char>>& v)
{
    int flag=0;
    for(int i=0;i<8;i++)
    {
        for(int j=0;j<8;j++)
        {
            int k=j;
            string st="";
            if(v[i][j]!='.')
            {
                flag=1;
                for(int x=i;x<8;x++)
                {
                    if(v[x][k]!='.')
                        st+=v[x][k];
                    else
                        break;
                }
                cout<<st<<'\n';
                break;
            }
        }
        if(flag==1)
        {
            break;
        }
    }
}

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        vector<vector<char>> v(8,vector<char>(8,'0'));

        for(int i=0;i<8;i++)
        {
            for(int j=0;j<8;j++)
            {
                cin>>v[i][j];
            }
        }
        helper(v);
    }
}