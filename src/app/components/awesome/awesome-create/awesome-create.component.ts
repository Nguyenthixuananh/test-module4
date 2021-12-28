import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AwesomeService} from "../../../service/awesome.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-awesome-create',
  templateUrl: './awesome-create.component.html',
  styleUrls: ['./awesome-create.component.css']
})
export class AwesomeCreateComponent implements OnInit {
  awesomeForm: FormGroup= new FormGroup({
    tag: new FormControl(),
    url: new  FormControl(),
    descriptions: new FormControl()
  });

  constructor(private awesomeService: AwesomeService,
              private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const awesome= this.awesomeForm.value;
    this.awesomeService.saveAwesome(awesome).subscribe(()=>{
      alert('Tạo thành công');
      this.awesomeForm.reset();
      this.router.navigate(['/awesome/list'])
    }, error => console.log(error));
  }

}
