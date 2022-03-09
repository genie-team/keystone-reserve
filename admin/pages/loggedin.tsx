/** @jsxRuntime classic */
/** @jsx jsx */
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { useRouter } from 'next/router';
import { jsx, Heading } from '@keystone-ui/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function Login() {
	const router = useRouter();
	//router.replace('/');

  return (
    <PageContainer header={<Heading type="h3"></Heading>}>
      
    </PageContainer>
  );
}
