import LoginForm from "@/components/loginForm";
import { checkToken } from "@/utils/checkToken";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Test() {
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 useEffect(() => {
  setIsAuthenticated(checkToken());
 }, []);
 if (!isAuthenticated) {
  return <LoginForm />;
 }
 return (
  <>
   <Head>
    <title>{isAuthenticated ? "Prices" : "Login"}</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   {!isAuthenticated ? <LoginForm /> : <div>Не</div>}
  </>
 );
}
