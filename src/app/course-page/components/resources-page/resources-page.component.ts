import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../../../services/resources.service';
import { Resources } from '../../../models/resources';
@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.css']
})
export class ResourcesPageComponent implements OnInit {
  public id: string = this._ActivatedRoute.snapshot.params.id;
  public resources: Resources[] = [];
  constructor(private _ResourcesService: ResourcesService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.load(this.id);
  }
  load(id: string) {
    this._ResourcesService.loadResources(id).subscribe(res => {
      if (res.body) {
        this.resources = res.body.data;
      }
    })
  }
}
