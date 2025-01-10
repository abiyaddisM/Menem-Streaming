import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  url = "https://socket.bizawit.com"

  constructor(private http: HttpClient) { }
  postPlaylist(credential:any){
    return this.http.post(`${this.url}/api/v1/playlist`,credential)
  }
  getUserPlaylist(id:number){
    const params = new HttpParams().set('userID', id);
    return this.http.get(`${this.url}/api/v1/playlist`, {params})
  }
  getUserCreatedPlaylist(id:number){
    console.log(id)
    return this.http.get(`${this.url}/api/v1/user/${id}/playlist`)
  }
  getPlaylist(id:number,params:any){
    return this.http.get(`${this.url}/api/v1/playlist/${id}`,{params})
  }
  deletePlaylist(id:number){
    return this.http.delete(`${this.url}/api/v1/playlist/${id}`)
  }
  deletePlaylistSave(id:number){
    return this.http.delete(`${this.url}/api/v1/playlist-save/${id}`)
  }
  getPlaylistContent(id:number){
    return this.http.get(`${this.url}/api/v1/playlist/${id}/content`)
  }
  postPlaylistContent(id:number,credential:any){
    return this.http.post(`${this.url}/api/v1/playlist/${id}/content`,credential)
  }
  postPlaylistSave(credential:any){
    return this.http.post(`${this.url}/api/v1/playlist-save`,credential)
  }
  deletePlaylistContent(id:number){
    return this.http.delete(`${this.url}/api/v1/playlist/content/${id}`)
  }
}
