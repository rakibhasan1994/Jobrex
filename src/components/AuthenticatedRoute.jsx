import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function AuthenticatedRoute({Children}) {
    const {isSignedIn,isLoaded} = useUser();

    if(isLoaded && !isSignedIn && isSignedIn!== undefined){
        return <Navigate to="/?sign-in=true"/>;
    }
  return Children;
}
