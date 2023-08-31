class NavComponent {

  get navMenuLinks() {
    return $$('#zak-primary-menu li');
  }

  get homeLink() {
    return $('#zak-primary-menu li');
  }

}

export default new NavComponent();