import { FormEvent, useContext, useState, useRef, useEffect} from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import { AuthContext } from '../contexts/AuthContext';
import { withSSRGuest } from '../utils/withSSRGuest';

import { LoginForm, SignInPage } from '../styles/home';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorRef = useRef(null);

  const { signIn, isError } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {email, password}

    await signIn(data);
  }

  useEffect(() => {   
    if (isError) {
      errorRef.current.innerHTML = "<p id='#error'>Invalid credentials</p>";

      setTimeout(() => {
        let errorMessage = document.getElementById('#error');
        errorMessage?.remove()
      }, 3000);
    }
  }, [handleSubmit])

  return (
    <SignInPage>
      <LoginForm>
        <h1>USER LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <FaUser />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div>
            <FaLock />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <button type="submit">Sign In</button>

          <span ref={errorRef} />
        </form>
      </LoginForm>
    </SignInPage>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});
