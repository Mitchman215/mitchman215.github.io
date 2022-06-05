export default function Header() {
  const logo = (
    // Replace logo with svg of website name or smthg
    <div class="logo">
      <h1>Mitchell</h1>
    </div>
  )

  function toggleNav() {
    // console.log("clicked nav")
    document.body.classList.toggle("nav-open")
  }

  return (
    <header>
      {logo}
      <button class="nav-toggle" aria-label="toggle navigation" onClick={toggleNav}>
        <span class="hamburger"></span>
      </button>

      <nav class="nav">
        <ul class="nav__list">
          <NavLink display="Home" link="home" />
          <NavLink display="My Interests" link="interests" />
          <NavLink display="About me" link="about" />
          <NavLink display="My Projects" link="work" />
        </ul>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  link: string
  display: string
}

function NavLink(props: NavLinkProps) {
  function onNavLinkClick(): void {
    document.body.classList.remove("nav-open")
  }

  const link = `#${props.link}`

  return (
    <li class="nav__item">
      <a href={link} class="nav__link" onClick={onNavLinkClick}>
        {props.display}
      </a>
    </li>
  )
}
