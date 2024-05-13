import { Routes } from "@angular/router";
import { BoardsComponent, HighlightsComponent } from "./pages";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/boards',
        pathMatch: 'full'
    },
    { 
        path: 'boards', component: BoardsComponent 
    },
    { 
        path: 'highlights', component: HighlightsComponent 
    }
]