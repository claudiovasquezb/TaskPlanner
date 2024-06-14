import { Routes } from "@angular/router";
import { BoardsComponent, HighlightsComponent } from "./pages";
import { BoardDetailComponent } from "./components/board-detail/board-detail.component";
import { BoardListComponent } from "./components";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";


export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { 
                path: 'boards', component: BoardsComponent,
                children: [
                    {
                        path: '',
                        component: BoardListComponent
                    },
                    {
                        path: ':id',
                        component: BoardDetailComponent
                    }
                ]
            },
            { 
                path: 'highlights', component: HighlightsComponent 
            }
        ]
    },

]