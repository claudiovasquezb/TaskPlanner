import { Component } from '@angular/core';
import { NavbarComponent, SidebarComponent } from '../../../../shared';
import { BoardListComponent } from '../../components';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, BoardListComponent],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})
export class BoardsComponent {

}
