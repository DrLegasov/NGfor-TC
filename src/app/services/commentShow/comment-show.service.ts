import { Injectable } from '@angular/core';
import { CommentShow } from 'src/app/models/commentShow.model';

@Injectable({
  providedIn: 'root'
})
export class CommentShowService {

  comments: Array<CommentShow>;

  constructor() {
    this.comments = [
      new CommentShow(new Date(2020, 2, 1), 'Edouard P.', "lorem"),
      new CommentShow(new Date(2020, 4, 21), 'Peggy C.', "lorem"),
      new CommentShow(new Date(2020, 5, 18), 'Alice C.', "lorem"),
      new CommentShow(new Date(2020, 4, 5), 'Laurel H.', " lorem"),
      new CommentShow(new Date(2018, 9, 8), 'Daphnée D.', "lorem"),
      new CommentShow(new Date(2018, 1, 8), 'Agnes L.', "lorem"),
      new CommentShow(new Date(2009, 10, 10), 'Bernard L.', "lorem"),
      new CommentShow(new Date(2020, 4, 21), 'Peggy C.', "lorem"),
      new CommentShow(new Date(2020, 5, 18), 'Alice C.', "lorem"),
      new CommentShow(new Date(2020, 4, 5), 'Laurel H.', " lorem"),
      new CommentShow(new Date(2018, 9, 8), 'Daphnée D.', "lorem"),
      new CommentShow(new Date(2018, 1, 8), 'Agnes L.', "lorem"),
      new CommentShow(new Date(2009, 10, 10), 'Bernard L.', "lorem"),
      new CommentShow(new Date(2020, 4, 21), 'Peggy C.', "lorem"),
      new CommentShow(new Date(2020, 5, 18), 'Alice C.', "lorem"),
      new CommentShow(new Date(2020, 4, 5), 'Laurel H.', " lorem"),
      new CommentShow(new Date(2018, 9, 8), 'Daphnée D.', "lorem"),
      new CommentShow(new Date(2018, 1, 8), 'Agnes L.', "lorem"),
      new CommentShow(new Date(2009, 10, 10), 'Bernard L.', "lorem"),
      new CommentShow(new Date(2010, 6, 6), 'Jules J.', "lorem"),
      new CommentShow(new Date(2020, 10, 30), 'Alphonse M.', " lorem"),
      new CommentShow(new Date(2020, 11, 17), 'Philippe J.', "lorem")
    ]
  }
}
