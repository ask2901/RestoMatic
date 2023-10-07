import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from '../../../../../lib/mongodb'

const adminEmails=['aryan290102@gmail.com']

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],
      adapter: MongoDBAdapter(clientPromise),
      callbacks:{
        session : ({session,token,user}) =>{
          if(adminEmails.includes(session?.user?.email))
          {
            return session;
          }
          else
          {
            return false;
          }
        }
      }
})

export { handler as GET, handler as POST }