import { Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = true;
  configData;
  isSortMenuVisible: boolean;
  datasource: any;
  @Input() helpType: string;
  @Input() isLogout = new EventEmitter<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  totalItems: number;
  searchControl = new FormControl();
  searchInput: string = '';
  filteredProducts: any;
  showSearchOptions: boolean = false;

  constructor(private router: Router) {}

  logout() {
    this.isLogout.emit();
    this.router.navigate(['']);
  }

  logo() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {}

  selectProduct(event) {}

  closeMenu(): void {}

  viewProfile() {}
}