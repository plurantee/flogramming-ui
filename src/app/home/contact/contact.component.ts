import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Attributes, IAttributes } from '../attribute/attributes.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  attributesUrl = 'https://flogramming.herokuapp.com/api/attributes';
  attributeObjects: IAttributes[] = [];
  attributesMap = new Map();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IAttributes[]>(this.attributesUrl).subscribe((attributeObjects: IAttributes[]) => {
      for(let i=0; i < attributeObjects.length; i++) {
        this.attributesMap.set(attributeObjects[i].key, attributeObjects[i].value);
      }
    });
  }

}
