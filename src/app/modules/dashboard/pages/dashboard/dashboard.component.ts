import { Component } from '@angular/core';
import { NavbarComponent, SidebarComponent } from '../../../../shared';
import { BoardsComponent, HighlightsComponent } from '../../components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, BoardsComponent, HighlightsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currentRoute: string = "boards";
}
