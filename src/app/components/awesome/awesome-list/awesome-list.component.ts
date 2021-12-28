import { Component, OnInit } from '@angular/core';
import {Awesome} from "../../../model/awesome";
import {AwesomeService} from "../../../service/awesome.service";

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomes: Awesome[] = [];

  constructor(private awesomeService: AwesomeService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.awesomeService.getAll().subscribe(awesomes => {
      this.awesomes = awesomes;
    })
  }

  delete(i: any) {
    const awesome = this.awesomes[i]
    this.awesomeService.deleteAwesome(awesome.id).subscribe(res=>{
      this.awesomes = this.awesomes.filter(
        n=>n.id !== awesome.id
      )
    })
  }

}
