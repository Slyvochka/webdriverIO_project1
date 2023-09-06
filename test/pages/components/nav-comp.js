class NavComponent {

  get navMenuLinks() {
    return $$('#zak-primary-menu li');
  }

  get homeLink() {
    return $('#zak-primary-menu li');
  }

  get shoppingCartIcon() {
    return $('//a[@class="cart-page-link"]');
  }

}

export default new NavComponent();