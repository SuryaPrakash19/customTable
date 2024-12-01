import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatTableModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.css',
})
export class CustomTableComponent {
  @Input() tableData: any[] = [];
  @Input() columnData: any[] = [];
}
