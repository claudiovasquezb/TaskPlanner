import { Component, signal } from '@angular/core';
import { NavbarComponent, SidebarComponent } from '../../../../shared';
import { BoardListComponent } from '../../components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, BoardListComponent, RouterOutlet],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})
export class BoardsComponent {

  public showAllBoards = signal<boolean>(true);

  public onBoardSelected(boardid: string) {
    this.showAllBoards.set(false);
  }
}
