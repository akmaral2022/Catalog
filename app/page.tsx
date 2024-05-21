'use client'
import Image from 'next/image';
import LockIcon from '../src/assets/icons/Lock.svg';
import MessageIcon from '../src/assets/icons/message.svg'
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [email, setEmail] = useState();

  return (
    <div className="Home">
      <section>
        <div className="form_box">
          <div className="form_value">
            <form action="">
              <h2>Login</h2>
              <div className="input_box">
                <Image src={LockIcon} alt='lockIcon' className='lock-icon' />
                <input type="email" />
                <label htmlFor="Email">Email</label>
              </div>
              <div className="input_box">
                <Image src={MessageIcon} alt='messageIcon' className='message-icon' />
                <input type="password" />
                <label htmlFor="Password">Password</label>
              </div>
              <div className="forget">
                <div className="remember_block">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember_me">Запомнить меня</label>
                </div>
                <a href="#">Forget my password</a>
              </div>
              <div className='btn'>
                <Link href='/client'>
                  <button>
                    Log in
                  </button>
                </Link>
              </div>
              <div className="register">
                <p>Don`t have a account? <a href="#">Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
