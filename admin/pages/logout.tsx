/** @jsxRuntime classic */
/** @jsx jsx */
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { useRouter } from 'next/router';
import { jsx, Heading } from '@keystone-ui/core';
import { FirebaseApp, getApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../configFrontEnd';
import { signOut, getAuth } from 'firebase/auth';

let app: FirebaseApp;
try {
  app = getApp();
} catch (e) {
  app = initializeApp(firebaseConfig);
}
export default function Login() {
	const router = useRouter();
	const auth = getAuth();
	signOut(auth).finally(() => {
		router.push('/login');
	});
  return (
    <PageContainer header={<Heading type="h3">Logout</Heading>}>
      
    </PageContainer>
  );
}
