import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockDataShow } from 'src/app/mockData/mockData';
import { CommentShow } from 'src/app/models/commentShow.model';
import { Show } from 'src/app/models/show.model';
import { CommentShowService } from '../commentShow/comment-show.service';


@Injectable({
  providedIn: 'root'
})
export class ShowService {

  shows: BehaviorSubject<Array<Show>>;

  constructor(private commentShow: CommentShowService) {
    const showsArray = [];

    showsArray.push(new Show('Game of Thrones', new Date(2011, 3, 17), 5,
      mockDataShow.gameOfThrones.description,
      mockDataShow.gameOfThrones.critic,
      mockDataShow.gameOfThrones.poster,
      this.commentShow.comments.slice(2, 4)));

    showsArray.push(new Show('Chernobyl', new Date(2019, 4, 6), 3,
      mockDataShow.chernobyl.description,
      mockDataShow.chernobyl.critic,
      mockDataShow.chernobyl.poster,
      this.commentShow.comments.slice(4, 6)));

    showsArray.push(new Show('House of Cards', new Date(2013, 2, 1), 6,
      mockDataShow.houseOfCards.description,
      mockDataShow.houseOfCards.critic,
      mockDataShow.houseOfCards.poster,
      this.commentShow.comments.slice(6, 8)));

      showsArray.push(new Show('Breaking Bad', new Date(2008, 0, 28), 5,
      mockDataShow.breakingBad.description,
      mockDataShow.breakingBad.critic,
      mockDataShow.breakingBad.poster,
      this.commentShow.comments.slice(0, 2)));

    this.shows = new BehaviorSubject<Array<Show>>(showsArray);
  }

  /**
   *
   * @param showId
   * @returns
   */
  getShowById(showId: number): Promise<Show> {
    return new Promise<Show>(
      (res, rej) => {
        const showValues = this.shows.getValue();

        for (let show of showValues) {
          if (showId == show.id) {
            res(show);
            break
          }
        }
      }
    )
  }

  /**
   *
   * @param show
   */
  addShow(show: Show) {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const showsValue = this.shows.getValue();
          showsValue.push(show);
          this.shows.next(showsValue);
          res();
        }, 200);
      }
    )
  }

  addCommentShow(commentShowAdd: CommentShow, showCommented: number) {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const showsValue = this.shows.getValue();
          for(let [index, show] of showsValue.entries()) {
            if(show.id == showCommented) {
              showsValue[index].addComment(commentShowAdd);
              this.shows.next(showsValue);
              console.log(commentShowAdd);
              res();
              break;
            }
        }

        })
      }
    )
  }
  editShow(editedShow: Show) {

    return new Promise<void>(
      (res, rej) => {

        setTimeout(() => {
          const shows = this.shows.getValue();
            for(let [index, show] of shows.entries()) {
              if(show.id === editedShow.id) {
                shows[index] = editedShow;
                this.shows.next(shows);
                res();
                break;
              }}
        }, 500)
      }
    )
  }

  deleteShow(showIdToDelete: number) {
    const shows = this.shows.getValue();

    for (let [index, show] of shows.entries()) {
      if (show.id === showIdToDelete) {
        shows.splice(index, 1)
        this.shows.next(shows);
        break;
      }
    }
  }

}
