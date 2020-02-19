import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = false;
  isMobile = false;

  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.isMobile = deviceService.isMobile();
  }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
