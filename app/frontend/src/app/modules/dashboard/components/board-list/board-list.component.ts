import { Component, OnInit, inject, signal } from '@angular/core';
import { Board } from '../../../../models';
import { AuthService, BoardService, ModalService } from '../../../../services';
import { EditBoardModalComponent } from '../edit-board-modal/edit-board-modal.component';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [EditBoardModalComponent],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent implements OnInit{

  private boardService = inject(BoardService);
  private authService = inject(AuthService);
  public modalService = inject(ModalService);

  private draggedItem: number = 0;
  public modalSwitch: boolean = true;

  ngOnInit(): void {

    this.authService.renewToken().subscribe();
    this.boardService.getBoards().subscribe({
      next: (response) => {
        //this.boards.set(response.boards);
        console.log(this.boards());
      }
    });


    
  }
  
  public handleDragStart(index: number) {
    this.draggedItem = index;
    //console.log(this.draggedItem);
    console.log(this.boards());
    
  }

  public handleDragOver(event: Event) {
    event.preventDefault();
  }

  public handleDrop(index: number) {
    const boardArray: Array<Board> = [...this.boards()];
    const droppedItem: Board = boardArray[this.draggedItem];
    const swichedItem: Board = boardArray[index];
    boardArray.splice(index, 1, droppedItem);
    boardArray.splice(this.draggedItem, 1, swichedItem);
    this.boards.set(boardArray);
  }

  public handleDragEnd() {}
  
  public boards2 = signal<Board[]>([]);
  public boards = signal<Board[]>([
    {
      id: '1',
      order: 1,
      title: 'En proceso',
      cards: [
        {
          id: '1',
          title: "Board list",
          description: "Creando el componente board list para mostrar todos los tableros",
          label: [
            {
              id: '1',
              title: 'Prioridad alta',
              color: '#AE2E24'
            },
            {
              id: '2',
              title: 'Tablero',
              color: '#216E4E'
            }
          ]
        },
        {
          id: '2',
          title: "Highlights component",
          description: "Creando el componente board list para mostrar todos los tableros",
          label: [
            {
              id: '1',
              title: 'Prioridad media',
              color: '#7F5F01'
            }
          ]
        },
      ]
    },
    {
      id: '2',
      order: 2,
      title: 'Por hacer 1',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '3',
      order: 3,
      title: 'Por hacer 2',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '4',
      order: 4,
      title: 'Por hacer 3',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '5',
      order: 5,
      title: 'Por hacer 4',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '6',
      order: 6,
      title: 'Por hacer 5',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    }
  ]);
}



