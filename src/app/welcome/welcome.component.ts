import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromservice: string;

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log('last line of getWelcomeMessage');
    // console.log('get welcome message!!');
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromservice = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromservice = error.error.message;
  }

}
