import ThemeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn,SignIn, UserButton } from "@clerk/clerk-react";
import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Header() {

  const [showSignIn, setShowSignIn] = useState(false);
  const [search,setSearch] = useSearchParams();

  const handleOverlayClick = (e) => {
    if(e.target === e.currentTarget){
      setShowSignIn(false);
      setSearch({});
    }
  };

  useEffect(() => {
    if(search.get("sign-in")){
      setShowSignIn(true);
    }
  },[search]);

  return (
    <>
    <header className="py-10">
    <div className="flex justify-between max-w-6xl mx-auto items-center">
      <div className="logo font-thin text-2xl">JOBREX</div>
      <div className="flex items-center gap-4">
    <ThemeToggle />
    <SignedOut>
      <Button onClick = { () => setShowSignIn(true)}>Login</Button>
    </SignedOut>

    <SignedIn>
      <UserButton
      appearance={{
        elements:{
          avatarBox:"size:10",
        },
      }}
      >
        <UserButton.MenuItems>
          <UserButton.Link
            label="My Jobs"
            labelIcon={<Briefcase size={15} />}
            href="/my-jobs"
          />
        </UserButton.MenuItems>
      </UserButton>
    </SignedIn>

    {showSignIn && (
      <div onClick={handleOverlayClick}>
        <SignIn
         signUpForceRedirectUrl="/onboard"
         fallbackRedirectUrl="/onboard"
        />
      </div>
    )}
    </div>
    </div>
    </header>
    </>
  );
}
