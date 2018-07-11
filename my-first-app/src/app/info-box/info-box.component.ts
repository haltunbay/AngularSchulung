import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-info-box",
  templateUrl: "./info-box.component.html",
  styleUrls: ["./info-box.component.css"]
})
export class InfoBoxComponent implements OnInit {
  isHidden;
  btnTitle = "hide";
  constructor() {
    this.isHidden = false;
  }

  ngOnInit() {}

  toggle() {
    this.isHidden = !this.isHidden;
    this.btnTitle = this.isHidden ? "show" : "hide";
  }
}
