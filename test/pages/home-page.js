import NavComp from "./components/nav-comp";

class HomePage {

  open() {
    return browser.url('/');
}

  get getStartedBtn() {
  return $('#get-started');
}
 
  get logoLink() {
    return $('.custom-logo-link');
  }
  
  get header() {
    return $('//h1');
  }
  
  get NavComp() {
    return NavComp;
  }

}

export default new HomePage();