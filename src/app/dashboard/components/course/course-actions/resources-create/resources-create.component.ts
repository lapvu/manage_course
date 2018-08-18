import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Resources } from '../../../../../models/resources';
import { ResourcesService } from '../../../../../services/resources.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resources-create',
  templateUrl: './resources-create.component.html',
  styleUrls: ['./resources-create.component.css']
})
export class ResourcesCreateComponent implements OnInit {
  private resourcesForm: FormGroup;
  public resourcesArr: Resources[] = [];
  public id: string;
  constructor(private _FormBuilder: FormBuilder, private _ResourcesService: ResourcesService, private _ActivatedRoute: ActivatedRoute) {
    this.resourcesForm = _FormBuilder.group({
      resources_name: ['', [Validators.required, Validators.minLength(5)]],
      resources_link: ['', [Validators.required, Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]]
    })
  }

  ngOnInit() {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this.load(this.id);
  }
  onSubmit() {
    let resources = new Resources();
    resources.course_id = this.id;
    resources.resources_link = this.resourcesForm.value.resources_link;
    resources.resources_name = this.resourcesForm.value.resources_name;
    this._ResourcesService.createResources(resources).subscribe(res => {
      if (res.body) {
        resources.resources_id = res.body;
        this.resourcesArr.push(resources);
        this.resourcesForm.reset();
      }
    }, err => console.log(err))
  }
  load(course_id: string) {
    this._ResourcesService.loadResources(course_id).subscribe((res) => {
      if (res.body) {
        this.resourcesArr = res.body.data
      }
    }, err => console.log(err))
  }
  remove(resources_id: string, index: number) {
    if (confirm("Bạn có muốn xóa tài nguyên này ?")) {
      this._ResourcesService.removeResources(resources_id).subscribe(res => {
        if (res.body === 1) {
          this.resourcesArr.splice(index, 1);
        }
      })
    }
  }
}
