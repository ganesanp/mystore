import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  page: string = 'home';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('activatedRoute:', router);
  }

  ngOnInit() {}
  navigate(event: any) {
    this.page = event.target.name;
    switch (this.page) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'product':
        this.router.navigate(['/product']);
        break;
      case 'list':
        this.router.navigate(['/list']);
        break;
      case 'contact':
        this.router.navigate(['/contact']);
        break;
      case 'logout':
        this.router.navigate(['/login']);
        break;
    }
  }
}
