import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';



const Index = () => {
  return (
    <div>

<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    const details=jwtDecode(credentialResponse.credential);
    console.log(details);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    
    </GoogleOAuthProvider>;



    </div>
  )
}

export default Index
