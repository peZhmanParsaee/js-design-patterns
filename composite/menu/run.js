const Menu = require("./Menu");
const MenuItem = require("./MenuItem");

var dashboard = new Menu("dashboard");
dashboard.add(new MenuItem("dashboard 1"));
dashboard.add(new MenuItem("dashboard 2"));
dashboard.add(new MenuItem("dashboard 3"));

var profile = new Menu("Profile");
profile.add(new MenuItem("View Profile"));
profile.add(new MenuItem("Edit Profile"));

var pages = new Menu("Pages");
pages.add(new MenuItem("FAQ"));
pages.add(new MenuItem("About"));
pages.add(new MenuItem("Contact"));
pages.add(profile);

var menu = new Menu("Menu");
menu.add(dashboard);
menu.add(pages);

menu.print();
