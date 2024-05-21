import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <div className="head_block">
        <span>HEADER</span>
        <nav>
          <ul>
            <li>
              <Link href='/client/catalog'>Catalog</Link>
            </li>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/'>Выйти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}