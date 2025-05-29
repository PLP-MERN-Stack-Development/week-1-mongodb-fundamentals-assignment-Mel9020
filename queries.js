db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
        .sort({ title: 1 })     // optional sort
        .skip((pageNumber - 1) * 5)
        .limit(5);

 db.books.find({published_year: 2018})
 
 db.books.find({author: 'James Clear'})

db.books.updateOne(
  { title: "The Alchemist" },              
  { $set: { price: 19.99 } }           
)

db.books.deleteOne({ title: "Becoming" });

db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});
