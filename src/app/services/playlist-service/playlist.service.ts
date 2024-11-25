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
  getUserPlaylist(id:number){
    const params = new HttpParams().set('userID', id);
    return this.http.get('http://localhost:3000/api/v1/playlist', {params})
  }
  getUserCreatedPlaylist(id:number){
    console.log(id)
    return this.http.get(`http://localhost:3000/api/v1/user/${id}/playlist`)
  }
  getPlaylist(id:number){
    return this.http.get(`http://localhost:3000/api/v1/playlist/${id}`)
  }
  deletePlaylist(id:number){
    return this.http.delete(`http://localhost:3000/api/v1/playlist/${id}`)
  }
  getPlaylistContent(id:number){
    return this.http.get(`http://localhost:3000/api/v1/playlist/${id}/content`)
  }
  postPlaylistContent(id:number,credential:any){
    return this.http.post(`http://localhost:3000/api/v1/playlist/${id}/content`,credential)
  }
}
