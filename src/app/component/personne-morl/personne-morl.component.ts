import { Component, OnInit, TemplateRef } from '@angular/core';
import {  BsModalService } from 'ngx-bootstrap/modal';
import { PersoneMor } from 'src/app/models/personeMor';
import { Router } from '@angular/router';
import { PersonneMorlsService } from 'src/app/services/personne-morls.service';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-personne-morl',
  templateUrl: './personne-morl.component.html',
  styleUrls: ['./personne-morl.component.css']
})
export class PersonneMorlComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  personeMorls;
  noData = true;
  dataLoaded = false;
  employeAdded = false;
  addingError = false;
  employeUpdated = false;
  updatingError = false;
  emplyeToDelete;
  indexTodelete;
  employeToupdate;

  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  newPersoneMorl= new PersoneMor();
  constructor(private modalService: BsModalService, 
     private router: Router,
     private personneMorlsService: PersonneMorlsService
     ) { }

     ngOnInit() {
      this.getAll();
      this.dataLoaded = true;
    }
  
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  
    }
    openDetailsModal(template: TemplateRef<any>, employee) {
      this.openModal(template);
    }
    openUpdateModal(template: TemplateRef<any>, employee) {
      console.log("employee",employee)
      this.openModal(template);
      this.employeToupdate = employee;

    }
    openDeleteModal(confirmDelete:  TemplateRef<any>, employee, index) {
      this.emplyeToDelete = employee;
      this.openModal(confirmDelete);
      this.indexTodelete = index;
    }
  
    showFilter() {
      this.filter = !this.filter;
    }
  
    getAll() {
      this.personneMorlsService.getAllContribuable().subscribe(result => {
        this.personeMorls = result;
        console.log("this.personeMorls",this.personeMorls)
        if (this.personeMorls.length > 0) {
          this.noData = false;
        }
      });
    }

}
