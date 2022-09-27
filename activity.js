db.courses.insertMany([
    { "name" : "HTML Basics",
     "price" : 20000,
     "isActive" : true,
     "instructor" : "Sir Alvin" 
     },
     {
     "name" : "CSS 101 + Flexbox",
     "price" : 21000,
     "isActive" : true,
     "instructor" : "Sir Alvin"
     },
     {
     "name" : "Javascript 101",
     "price" : 32000,
     "isActive" : true,
     "instuctror" : "Ma'am Tine"
     },
     {
     "name" : "Git 101, IDE and CLI",
     "price" : 19000,
     "isActive" : false,
     "instructor" : "Ma'am Tine"
     },
     {
     "name" : "React.Js 101",
     "price" : 25000,
     "isActive" : true,
     "instructor" : "Ma'am Miah"
     }
 ]);
 
 
     // Find courses whose instructor is "Sir Alvin" and is priced greater than or equal to 20000
     // 	-show only its name and price
         db.courses.find( { $and: [ {price: { $gte: 2000}}, {instructor: "Sir Alvin"} ] }, {name:1,price:1,_id:0} );
     // Find courses whose instructor is "Ma'am Tine" and is inactive.
     // 	-show only its name and price
         db.courses.find( { $and: [ {isActive : false}, {instructor: "Ma'am Tine"} ] }, {name:1,price:1,_id:0} );
     // Find courses with letter 'r' in its name and has a price lower than or equal to 25000
         db.courses.find( {$and: [ {name:{$regex:"(?i)R"}}, {price:{$lte:25000}} ] }, {name:1,price:1,_id:0});
     // Update all courses with price less than 21000 to inactive.
         db.courses.updateMany(
             { "price": {$lt:21000} },
             { $set: { "isActive": false } }
         );
     // Delete all courses with price greater than or equal to 25000.
         db.courses.deleteMany( { price: {$gte:25000} } );