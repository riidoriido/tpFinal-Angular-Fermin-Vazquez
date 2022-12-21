import { Component } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  linkList: Link[] = [
    new Link(
      1,
      'Repositorio',
      'https://github.com/riidoriido/tpFinal-Angular-Fermin-Vazquez'
    ),
    new Link(2, 'Twitter', 'https://www.twitter.com'),
    new Link(3, 'Coderhouse', 'https://plataforma.coderhouse.com'),
    new Link(4, 'LinkedIn', 'https://www.linkedin.com'),
  ];
}
