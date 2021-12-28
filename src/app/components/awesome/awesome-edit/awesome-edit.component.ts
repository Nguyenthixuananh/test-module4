import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AwesomeService} from "../../../service/awesome.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.css']
})
export class AwesomeEditComponent implements OnInit {

  awesomeForm: FormGroup = new FormGroup({});
  id = 0;

  constructor(private awesomeService: AwesomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=> {
      // @ts-ignore
      this.id = +paramMap.get('id');
 this.getAwesome(this.id);
    });
  }

  ngOnInit(): void {
  }
  getAwesome(id: number) {
    return this.awesomeService.findById(id).subscribe(awesome =>{
      this.awesomeForm = new FormGroup({
        tag: new FormControl(awesome.tag),
        url: new FormControl(awesome.url),
        descriptions: new FormControl(awesome.descriptions),
      })
    })
    }


  updateAwesome(id: number){
    const awesome = this.awesomeForm.value;
    this.awesomeService.updateAwesome(id, awesome).subscribe(()=> {
      alert('Cập nhật thành công');
      this.router.navigate(["awesome/list"])
    },  error => {
      console.log(error);
    });
  }

}
