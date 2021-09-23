import { useSession, signIn, signOut, } from 'next-auth/client';
import { UserProfilePage, OnBoarding } from '../components/components';

export default function Home() {
  const [session] = useSession();

  return (
    <>
      {/*show onboarding screen when user is not logged in */}
      {
        !session && (
          <OnBoarding />
        )
      }

      {/* show profile page after sign */}
      {
        session && (
          <>
            <UserProfilePage />
          </>
        )
      }
    </>
  )
}
