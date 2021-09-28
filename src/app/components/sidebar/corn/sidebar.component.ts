import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cornsidebar",
  templateUrl: "./sidebar.component.html",
})
export class CornSidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
