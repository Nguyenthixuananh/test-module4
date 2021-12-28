import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AwesomeService} from "../../../service/awesome.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-awesome-delete',
  templateUrl: './awesome-delete.component.html',
  styleUrls: ['./awesome-delete.component.css']
})
export class AwesomeDeleteComponent implements OnInit {
  awesomeForm: FormGroup = new FormGroup({});
  id=0;

  constructor(private awesomeService: AwesomeService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paramMap:ParamMap)=> {
      // @ts-ignore
      this.id= +paramMap.get('id');
      const awesome =this.getAwesome(this.id);
      this.awesomeForm = new FormGroup({
        // @ts-ignore
        tag: new FormControl(awesome.tag),
        // @ts-ignore
        url: new FormControl(awesome.url),
        // @ts-ignore
        descriptions: new FormControl(awesome.descriptions)
      })

    });
  }

  ngOnInit(): void {
  }

  getAwesome(id: number) {
    return this.awesomeService.findById(id);
    }

    deleteAwesome( id: number) {
  this.awesomeService.deleteAwesome(id).subscribe(()=>{
    this.router.navigate(['/awesome/list']);
  }, error => {
    console.log(error)
  });
    }


}
