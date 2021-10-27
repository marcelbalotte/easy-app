import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-subjects',
  templateUrl: './register-subjects.page.html',
  styleUrls: ['./register-subjects.page.scss'],
})
export class RegisterSubjectsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  navigateToHome() {
    this.route.navigate(['/home']);
  }

}
