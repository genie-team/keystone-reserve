/** @jsxRuntime classic */
/** @jsx jsx */
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { jsx, Heading } from '@keystone-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FirebaseApp } from 'firebase/app';
import { firebaseConfig } from '../../configFrontEnd'


let app: FirebaseApp;
try {
  app = firebase.app();
} catch (e) {
  app = firebase.initializeApp(firebaseConfig);
}

// Please note that while this capability is driven by Next.js's pages directory
// We do not currently support any of the auxillary methods that Next.js provides i.e. `getStaticProps`
// Presently the only export from the directory that is supported is the page component itself.
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};
export default function Login() {
  return (
    <PageContainer header={<Heading type="h3">Login</Heading>}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>
    </PageContainer>
  );
}
