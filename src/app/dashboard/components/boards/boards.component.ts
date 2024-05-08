import { Component } from '@angular/core';
import { NavbarComponent, SidebarComponent } from '../../../shared';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})
export class BoardsComponent {

}
