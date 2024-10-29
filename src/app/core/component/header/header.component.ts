import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavOpen: boolean = false;
  searchQuery: string = '';  
  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }

  @Input({required:true}) userImg: string = '';
  navList = ["Home", "TV Shows", "My List"];

}
