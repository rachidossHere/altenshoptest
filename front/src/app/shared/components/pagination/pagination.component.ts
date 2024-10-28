import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  totalPages: number = 1;
  pagesArray: number[] = [];

  ngOnInit() {
    this.updatePagesArray();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalItems'] || changes['itemsPerPage']) {
      this.updatePagesArray();
    }
  }

  updatePagesArray() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageSelect(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page; // Mettre à jour localement
      this.pageChange.emit(page);
    }
  }
}
