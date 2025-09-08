import { Star, Quote } from "lucide-react";
import reviews  from "../data/reviews";

const Reviews = () => {

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? "text-repairx-yellow fill-repairx-yellow" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-repairx-yellow">Students</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our students and customers have to say about RepairX services and training programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-lg border text-card-foreground shadow-sm border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card relative overflow-hidden">
                <div className="p-6">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote size={40} className="text-repairx-yellow"/>
                  </div>
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground mb-1">
                    {review.name}
                  </div>
                  <div className="text-sm text-repairx-yellow font-medium mb-1">
                    {review.course}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {review.location}
                  </div>
                </div>
                </div>
              </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-card border border-border rounded-lg p-6 shadow-soft">
            <div className="flex items-center mr-4">
              <div className="text-2xl font-bold text-repairx-yellow mr-2">4.6</div>
              <div className="flex">{renderStars(4)}</div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-card-foreground">Excellent Rating</div>
              <div className="text-sm text-muted-foreground">Based on 20+ Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews