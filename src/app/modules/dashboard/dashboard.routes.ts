import { Routes } from "@angular/router";
import { BoardsComponent, HighlightsComponent } from "./components";
import { DashboardComponent } from "./pages";


export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/dashboard/boards',
    //     pathMatch: 'full'
    // },
    { 
        path: '', component: DashboardComponent 
    },
    { 
        path: 'boards', component: BoardsComponent 
    },
    { 
        path: 'highlights', component: HighlightsComponent 
    }
]