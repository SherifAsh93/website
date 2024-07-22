import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-slate-500">
          <Link href={'/'} className="btn btn-ghost text-lg">
            Zahrtelkhalig
          </Link>
          <ul className="flex">
            <li>
              <Link className="btn btn-ghost rounded-btn" href={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost rounded-btn" href={'/products'}>
                All Products
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost rounded-btn" href={'/contact'}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
