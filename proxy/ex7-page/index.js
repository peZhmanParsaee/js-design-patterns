class Page {
  setCookie() {
    console.log('I\'m setting a cookie');
  }
  goto() {
    console.log('I\'m going to another page');
  }
}

class CustomPage {
  constructor(page) {
    this.page = page;
  }

  login() {
    this.page.goto('localhost:3000');
    this.page.setCookie();
  }
}

const buildPage = () => {
  const page = new Page();
  const customPage = new CustomPage(page);

  const superPage = new Proxy(customPage, {
    get: function(target, property) {
      return target[property] || page[property];
    }
  });

  return superPage;
};

const superPage = buildPage();

superPage.goto();
superPage.setCookie();
superPage.login();
