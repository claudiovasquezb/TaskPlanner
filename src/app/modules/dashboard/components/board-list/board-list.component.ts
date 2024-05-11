import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent {

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


export interface Board {
  id: string;
  title: string;
  cards: {
    id: string
    title: string;
    description: string;
    label?: {
      id: string;
      title: string;
      color: string;
    }[];
  }[];

}
