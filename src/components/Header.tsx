export default function Header() {
  return (
    <header>
      <div class="logo">
        <h1>Mitchell Salomon</h1>
      </div>

      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>

      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#Interests" class="nav__link">
              My Interests
            </a>
          </li>
          <li class="nav__item">
            <a href="#Bio" class="nav__link">
              About me
            </a>
          </li>
          <li class="nav__item">
            <a href="#Portfolio" class="nav__link">
              My Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
