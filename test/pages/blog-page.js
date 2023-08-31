class BlogPage {
  open() {
    return browser.url('/blog');
  }

  get recentPostsList() {
    return $$('#recent-posts-3 li');
  }
}

export default new BlogPage();