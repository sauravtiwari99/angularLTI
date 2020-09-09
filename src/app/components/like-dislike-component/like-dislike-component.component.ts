import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike-component',
  templateUrl: './like-dislike-component.component.html',
  styleUrls: ['./like-dislike-component.component.css']
})
export class LikeDislikeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
likes_counter : number = 100;
dislikes_counter : number = 25;
showLiked = false;
showDisLiked = false;
likeClickedFlag = false;
dislikeClickedFlag = false;

likeClicked(){
  if(this.likeClickedFlag == true){
    this.likes_counter++;
    this.showLiked =true;
    if(this.dislikeClickedFlag == true){
      this.dislikes_counter--;
      this.showDisLiked =false;
      this.dislikeClickedFlag =false
    }
  }
  else if(this.likeClickedFlag == false){
    this.likes_counter--;
    this.showLiked =false;
  }
}

dislikeClicked(){
  if(this.dislikeClickedFlag == true){
    this.dislikes_counter++;
    this.showDisLiked =true;
    if(this.likeClickedFlag == true){
      this.likes_counter--;
      this.showLiked =false;
      this.likeClickedFlag = false
    }
  }
  else if(this.dislikeClickedFlag == false){
    this.dislikes_counter--;
    this.showDisLiked =false;
  }
}
}
