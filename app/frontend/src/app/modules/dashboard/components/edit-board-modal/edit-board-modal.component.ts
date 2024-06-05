import { Component, inject } from '@angular/core';
import { ModalService } from '../../../../services';

@Component({
  selector: 'app-edit-board-modal',
  standalone: true,
  imports: [],
  templateUrl: './edit-board-modal.component.html',
  styleUrl: './edit-board-modal.component.css'
})
export class EditBoardModalComponent {
  
  public modalService = inject(ModalService);
}
