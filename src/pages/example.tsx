import React from 'react';
import { useAuthStore } from '../store/auth';

const ExamplePage = () => {
  const { user, login } = useAuthStore();

  const submit = () => {};
  // @ts-ignore
  const submitMyForm = async (email, password) => {
    await login({ email, password });
  };
  console.log(user);
  return (
    <div>
      <h2>Hello {user ? user.email : ''}</h2>
      <button
        onClick={() => submitMyForm('john.doe@test.com', 'q1w2e3r4')}
      ></button>
    </div>
  );
};

export default ExamplePage;
