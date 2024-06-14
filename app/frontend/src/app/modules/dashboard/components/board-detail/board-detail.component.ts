import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService, BoardService, ModalService } from '../../../../services';
import { Board } from '../../../../models';
import { EditBoardModalComponent } from '../edit-board-modal/edit-board-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-detail',
  standalone: true,
  imports: [EditBoardModalComponent],
  templateUrl: './board-detail.component.html',
  styleUrl: './board-detail.component.css'
})
export class BoardDetailComponent implements OnInit{
  private boardService = inject(BoardService);
  private authService = inject(AuthService);
  private activatedRoute = inject(ActivatedRoute);
  public modalService = inject(ModalService);


  private draggedItem: number = 0;
  public modalSwitch: boolean = true;
  public detailList = signal<any>([]);

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.boardService.getBoardsList(id).subscribe({
        next: (response) => {
          this.detailList.set(response.list);
          console.log('this.detailList: ', this.detailList());
        }
      });
    }
    this.authService.renewToken().subscribe();



    
  }
  
  public handleDragStart(index: number) {
    this.draggedItem = index;
    //console.log(this.draggedItem);
    console.log(this.detailList());
    
  }

  public handleDragOver(event: Event) {
    event.preventDefault();
  }

  public handleDrop(index: number) {
    const detailArray: Array<any> = [...this.detailList()];
    const droppedItem: any = detailArray[this.draggedItem];
    const swichedItem: any = detailArray[index];
    detailArray.splice(index, 1, droppedItem);
    detailArray.splice(this.draggedItem, 1, swichedItem);
    this.detailList.set(detailArray);
  }

  public handleDragEnd() {}
  
}
