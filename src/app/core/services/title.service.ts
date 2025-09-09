import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _titleSubject = new BehaviorSubject<string | null>(null);
  
  title$ = this._titleSubject.asObservable();

  setTitle(title: string){
    this._titleSubject.next(title);
  }

  clearTitle() {
    this._titleSubject.next(null);
  }
}
