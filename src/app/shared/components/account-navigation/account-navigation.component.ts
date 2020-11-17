import { Component, OnInit } from "@angular/core";
import {
  faCalendarAlt,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-account-navigation",
  templateUrl: "./account-navigation.component.html",
  styleUrls: ["./account-navigation.component.scss"],
})
export class AccountNavigationComponent implements OnInit {
  links = [
    {
      link: "/groups",
      title: "Groups",
      icon: faCalendarAlt,
    },
    {
      link: "/members",
      title: "Members",
      icon: faUsers,
    },
    {
      link: "/profile",
      title: "Profile",
      icon: faUser,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
