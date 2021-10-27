import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.page.html',
  styleUrls: ['./register-task.page.scss'],
})
export class RegisterTaskPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.route.navigate(['/home']);
  }

}
