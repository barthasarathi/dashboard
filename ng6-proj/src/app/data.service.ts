import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training, Clock, Birthday, Project, NewJoinee } from './data.prop';
import { TRAINING, CLOCK, BIRTHDAY, PROJECT, NEWJOINEE } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getTraining(): Training[] {
    return TRAINING;
  }

  getClock(): Clock[] {
    return CLOCK;
  }

  getBirthday(): Birthday[] {
    return BIRTHDAY;
  }

  getProject(): Project[] {
    return PROJECT;
  }

  getNewJoinee(): NewJoinee[] {
    return NEWJOINEE;
  }
}
