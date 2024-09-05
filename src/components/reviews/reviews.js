import React from "react";
import "./reviews.css";
function Reviews() {
  const reviews = [
    "МНЕ ОЧЕНЬ ПОНРАВИЛСЯ КВЕСТ. БОЛЬШЕ ВСЕГО МНЕ ПОНРАВИЛОСЬ ИСКАТЬ ЗАПИСКИ, ТАК КАК ТРЕБУЕТСЯ ЛОГИЧЕСКИ ПОДУМАТЬ. А ЕЩЁ ТАКИЕ КВЕСТЫ БУДУТ? =)",
    "МНЕ ОЧЕНЬ ПОНРАВИЛСЯ КВЕСТ. БОЛЬШЕ ВСЕГО МНЕ ПОНРАВИЛОСЬ ИСКАТЬ ЗАПИСКИ, ТАК КАК ТРЕБУЕТСЯ ЛОГИЧЕСКИ ПОДУМАТЬ. А ЕЩЁ ТАКИЕ КВЕСТЫ БУДУТ? =)",
  ];

  return (
    <div className="reviews-container">
      <h1 className="reviews-header">ОТЗЫВЫ</h1>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
