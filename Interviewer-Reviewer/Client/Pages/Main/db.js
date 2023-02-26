db.collection("users").doc("user1").collection("interviews").doc("interview1").collection("questions").doc("question1").set({
    question: "What is your name?",
    answer: "My name is John Doe."
    }
)
.then(function() {
    console.log("Document successfully written!");
    }
)
.catch(function(error) {
    console.error("Error writing document: ", error);
    }
);


// db.collection("users").doc("user1").collection("interviews").doc("interview1").collection("questions").doc("question1").get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
// db.collection("users").doc("user1").collection("interviews").doc("interview1").collection("questions").doc("question1").update({
//     answer: "My name is John Doe. I am a software developer."
// })
// .then(function() {
//     console.log("Document successfully updated!");
// })
// .catch(function(error) {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
// });