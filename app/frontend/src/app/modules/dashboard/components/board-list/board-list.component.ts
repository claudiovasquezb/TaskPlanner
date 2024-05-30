import { Component, OnInit, inject, signal } from '@angular/core';
import { Board } from '../../../../models';
import { AuthService, BoardService, TokenService } from '../../../../services';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent implements OnInit{

  private boardService = inject(BoardService);
  private authService = inject(AuthService);
  private tokenService = inject(TokenService);


  ngOnInit(): void {

    this.authService.renewToken().subscribe();
    this.boardService.getBoards().subscribe({
      next: (response) => {
        console.log(response); 
      }
    });
  }

  
  
  public boards = signal<Board[]>([
    {
      id: '1',
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
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
      cards: [
        {
          id: '1',
          title: "Autenticación con JWT",
          description: "Crear sistema de autenticación usando JWT",
        },
      ]
    },
    {
      id: '2',
      title: 'Por hacer',
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



