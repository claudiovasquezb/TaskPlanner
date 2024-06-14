import { Component, OnInit, inject, signal} from '@angular/core';
import { EditBoardModalComponent } from '../edit-board-modal/edit-board-modal.component';
import { BoardDetailComponent } from '../board-detail/board-detail.component';
import { BoardService } from '../../../../services';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [BoardDetailComponent, CommonModule],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent implements OnInit{
  private boardService = inject(BoardService);
  private router = inject(Router);

  public boards = signal<any[]>([]);

  ngOnInit(): void {
    this.boardService.getBoards().subscribe({
      next: (response) => {
        this.boards.set(response);
      },
      error: (error) => {
        console.log(error);
        
      }
    });
  }
  
  public selectedBoard(boardId: string) {
    this.router.navigate(['dashboard/boards', boardId]);
  }

  

}



