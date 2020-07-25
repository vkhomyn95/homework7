import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];
  form: FormGroup;
  userSelect: FormControl = new FormControl('', [Validators.required]);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
     this.activatedRoute.data.subscribe(value => this.users = value.allUsers);
     this.form = new FormGroup({
       userSelect: this.userSelect
     });
  }

  ngOnInit(): void {
  }

  getCurrentUser(): void {
    // console.log(this.form);
    this.router.navigate(['users', this.userSelect.value.id]);
  }
}
