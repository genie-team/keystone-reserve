import React, {useEffect, useState} from 'react';
import { NavItem, ListNavItems, NavigationContainer } from '@keystone-6/core/admin-ui/components';
import type { NavigationProps } from '@keystone-6/core/admin-ui/components';
import { getAuth, User } from "firebase/auth";
import { initializeApp, getApp, FirebaseApp } from 'firebase/app';

import { useRouter } from 'next/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// firebase.initializeApp(firebaseConfig);
// let userCache: firebase.User | null;
// if (typeof window !== 'undefined') {
//   firebase.auth().onAuthStateChanged(function (user) {
//     userCache = user;
//     window.dispatchEvent(new Event('onAuthStateChanged'));
//   });
// }
// let startingPath = '';
export function CustomNavigation({ lists }: NavigationProps) {
  // const router = useRouter();
  // const [userName, setUserName] = useState(userCache?.displayName || '');
  // if (!startingPath) {
  //   startingPath = router.asPath;
  // }
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('onAuthStateChanged', () => {
    
  //     if (userCache && router.pathname === '/login') {
  //       router.push('/');
  //     } else if (!userCache && router.pathname !== '/login') {
  //       router.push('/login');
  //     } else if (userCache) {
  //       router.replace('/users');
  //       setTimeout(() => {
  //         router.replace(startingPath);
  //       }, 1000);
  //     }
  //     setUserName(userCache?.displayName || '');
  //   });
  // }
  useEffect(() => {
    const app = getApp();
  }, [])

  return (
    <NavigationContainer>
      <NavItem href="/">Dashboard</NavItem>
      <ListNavItems lists={lists} />
      {getAuth().currentUser && <NavItem href="/logout">Logout {getAuth().currentUser?.displayName}</NavItem>}
    </NavigationContainer>
  );
}
