import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }
  postPlaylist(credential:any){
    return this.http.post('http://localhost:3000/api/v1/playlist',credential)
  }
  getPlaylist(id:number){
    const params = new HttpParams().set('userID', id);
    return this.http.get('http://localhost:3000/api/v1/playlist', {params})
  }
  deletePlaylist(id:number){
    return this.http.delete(`http://localhost:3000/api/v1/playlist/${id}`)
  }
  getPlaylistContent(id:number){
    return this.http.get(`http://localhost:3000/api/v1/playlist/${id}`)
  }
  postPlaylistContent(id:number,credential:any){
    return this.http.get(`http://localhost:3000/api/v1/playlist/${id}`,credential)
  }
}
