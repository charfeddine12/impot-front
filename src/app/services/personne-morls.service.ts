import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneMorlsService {


  private uri = 'http://localhost:9099/personneMorls/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }

  changeStatus(nif,status){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + '/updateStatus/' + nif + '/' +status, options);
  }
  getAllContribuable() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + '/all', options);
  }

  getContribuableById(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find/' + idCategorie, options);
  }

  addContribuable(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'add', categorie, options);
  }

  updateContribuable(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', categorie, options);
  }

  deleteContribuable(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + idCategorie, options);
  }
}
