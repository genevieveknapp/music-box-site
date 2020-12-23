export default class MobileMenu {
    constructor(menuIcon, menuContent, siteHeader) {
        this.menuIcon = menuIcon
        this.menuContent = menuContent
        this.siteHeader = siteHeader
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("site-header__menu-content--is-visible")
        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    }
}
