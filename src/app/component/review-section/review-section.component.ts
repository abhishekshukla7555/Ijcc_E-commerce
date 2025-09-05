import { Component } from '@angular/core';

@Component({
  selector: 'app-review-section',
  standalone: false,
  templateUrl: './review-section.component.html',
  styleUrl: './review-section.component.css'
})
export class ReviewSectionComponent {
 reviews = [
    { name: 'Rohan Sharma', rating: 5, comment: 'Amazing website! Fast delivery & great products.' },
    { name: 'Ayumi Tanaka', rating: 4, comment: 'Good quality, but shipping was a little slow.' }
  ];

  newReview = { name: '', rating: 0, comment: '' };

  addReview() {
    if (this.newReview.name && this.newReview.rating && this.newReview.comment) {
      this.reviews.unshift({ ...this.newReview });
      this.newReview = { name: '', rating: 0, comment: '' }; // reset form
    }
  }
}
