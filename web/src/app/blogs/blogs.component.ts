import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  showToastr() {
    this.toastrService.success('Some message', 'title')
  }

}
