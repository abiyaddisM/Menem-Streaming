 const genreSwitch:GenreSwitch = {
  '28': 'Action',
  '16' : 'Animated',
  '99' : 'Documentary',
  '18' : 'Drama',
  '10751' : 'Family',
  '14' : 'Fantasy',
  '36' : 'History',
  '35' : 'Comedy',
  '10752' : 'War',
  '80' : 'Crime',
  '10402' : 'Music',
  '9648' : 'Mystery',
  '10749' : 'Romance',
  '878' : 'Sci Fi',
  '27' : 'Horror',
  '10770' : 'TV Movie',
  '53' : 'Thriller',
  '37' : 'Western',
  '12' : 'Adventure',
  '10765' : 'SciFi',
  '10759' : 'Act&Adv'

}
export function getGenreName(id:string){
  return genreSwitch[id]
}
interface GenreSwitch {
  [key: string]: string;
}
