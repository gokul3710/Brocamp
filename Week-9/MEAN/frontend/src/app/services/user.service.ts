import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: any

  constructor(private http: HttpClient) { }

  login(user: { email: string, password: string }) {
    return this.http.post('http://localhost:3000/api/user/login', user)
  }

  signup(user: user) {
    return this.http.post('http://localhost:3000/api/user/signup', user)
  }

  update(user: any) {
    return this.http.put('http://localhost:3000/api/user/update', user)
  }

  delete(id: string) {
    return this.http.post('http://localhost:3000/api/user/delete',{id})
  }

  getUser() {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this.getToken());
      return this.http.get('http://localhost:3000/api/user',{headers})
  }

  getAllUsers(){
    return this.http.get('http://localhost:3000/api/admin/users')
  }

  setToken(token: string) {
    return window.sessionStorage.setItem('token', token)
  }

  getToken() {
    return window.sessionStorage.getItem('token')
  }

  deleteToken() {
    return window.sessionStorage.removeItem('token')
  }

  getUserById(id: string){
    return this.http.post('http://localhost:3000/api/admin/user',{id})
  }

  getSearchUsers(key: string){
    return this.http.get(`http://localhost:3000/api/admin/user/search?searchKey=${key}`)
  }
}
