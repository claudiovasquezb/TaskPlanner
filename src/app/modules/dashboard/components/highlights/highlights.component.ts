import { Component } from '@angular/core';

import { NavbarComponent, SidebarComponent } from '../../../../shared';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {

}
