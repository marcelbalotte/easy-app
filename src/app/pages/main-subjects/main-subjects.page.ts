import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-main-subjects',
  templateUrl: './main-subjects.page.html',
  styleUrls: ['./main-subjects.page.scss'],
})
export class MainSubjectsPage implements OnInit {
  constructor(private route: Router) { }

  subjects = ["Dispositivos Móveis", "Banco de Dados", "Gestão de Projetos"];

  ngOnInit() { }

  navigateToHome() {
    this.route.navigate(['/home']);
  }

  navigateToSelectedSubject(subject) {
    navigationExtras.state.pageTitle = subject; 
    this.route.navigate(['/subject'], navigationExtras);
  }
}

const navigationExtras: NavigationExtras = {
  state: {
    pageTitle: '',
  }
};