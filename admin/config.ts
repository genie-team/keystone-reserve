
import { AdminConfig, FieldViews } from '@keystone-6/core/types';
import { setContext } from "@apollo/client/link/context";
import { getAuth } from "firebase/auth";
import { CustomNavigation } from './components/CustomNavigation';
import { initializeApp, getApp, FirebaseApp } from 'firebase/app';
import { firebaseConfig } from '../configFrontEnd'
import { useAuthState } from "react-firebase-hooks/auth";
import { KeystoneProviderProps } from '@keystone-6/core/dist/declarations/src/admin-ui/context';
import { useRouter } from 'next/router';
import React from 'react';
let app: FirebaseApp;
try {
  app = getApp();
} catch (e) {
  app = initializeApp(firebaseConfig);
}
const asyncAuthLink = setContext(
	request =>
		new Promise((success, fail) => {
			const auth = getAuth();
			if (auth) {
				const user = auth.currentUser;
				if (user) {
					user.getIdToken(/* forceRefresh */ false).then(function(idToken) {
						success({
							headers: {authorization: idToken}
						  });
					  }).catch(function(error) {
						  fail(error);
					  });
				} else {
					success({
						headers: {authorization: ''}
					  });
				}
			} else {
				success({
					headers: {authorization: ''}
				  });
			}
	  })
  );
export const apolloLinks: AdminConfig['apolloLinks'] = [asyncAuthLink];
export const components: AdminConfig['components'] = {
  Navigation: CustomNavigation,
};
export const providerLogic = (props: KeystoneProviderProps) => {
	const [user, loading, error] = useAuthState(getAuth());
	const router = useRouter();
	if (loading) {
		return React.createElement('div', null, 'Loading...');
	}  else if (!user && router.pathname !== '/login') {
        router.push('/login');
      }

	return;
}
