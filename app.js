// Custom Clothes Form Submission
document.getElementById('customClothesForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const size = document.getElementById('customSize').value;
    const color = document.getElementById('customColor').value;
    const message = document.getElementById('customMessage').value;

    alert(`Customization Submitted:\nSize: ${size}\nColor: ${color}\nSpecial Requests: ${message}`);
    this.reset(); // Reset the form
});

// Payment Options Validation
document.getElementById('paymentMethod').addEventListener('change', function () {
    const selectedMethod = this.value;
    if (selectedMethod === "choose...") {
        alert('Please select a valid payment method.');
    } else {
        alert(`You have selected: ${selectedMethod}`);
    }
});

// Customer Reviews Section
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('reviewName').value;
    const rating = document.getElementById('reviewRating').value;
    const reviewText = document.getElementById('reviewText').value;

    const reviewsList = document.getElementById('reviewsList');

    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.innerHTML = `
        <h6>${name} - ${rating} Stars</h6>
        <p>${reviewText}</p>
    `;

    reviewsList.appendChild(reviewDiv);

    // Clear the form
    document.getElementById('reviewForm').reset();
});

// Example of dynamically adding reviews
const sampleReviews = [
    { name: "Alice", rating: 5, text: "Great product!" },
    { name: "Bob", rating: 4, text: "Very satisfied with my purchase." },
];

sampleReviews.forEach(review => {
    const reviewsList = document.getElementById('reviewsList');
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.innerHTML = `
        <h6>${review.name} - ${review.rating} Stars</h6>
        <p>${review.text}</p>
    `;
    reviewsList.appendChild(reviewDiv);
});



// const chatboxBody = document.getElementById('chatbox-body');

// const responses = {
//     "hello": "Hello! How can I assist you today?",
//     "how are you": "I'm just a bot, but I'm functioning as expected. How about you?",
//     "what is your name": "I'm your friendly chatbot!",
//     "What are the categories do you have": "We have clothes, accessories, and many more.",
//     "bye": "Goodbye! Have a great day!"
// };

// function sendMessage() {
//     const userInput = document.getElementById('userInput').value.toLowerCase();
//     if (userInput.trim() !== "") {
//         // Display the user's message
//         appendMessage(userInput, 'user-message');
//         // Clear input
//         document.getElementById('userInput').value = '';
        
//         // Find bot response
//         const botResponse = getBotResponse(userInput);
//         setTimeout(() => appendMessage(botResponse, 'bot-message'), 500);  // Simulate a delay for bot response
//     }
// }

// function getBotResponse(input) {
//     // Check if there's a predefined response
//     return responses[input] || "Sorry, I didn't understand that. Can you try asking something else?";
// }

// function appendMessage(message, className) {
//     const messageElement = document.createElement('div');
//     messageElement.className = className;
//     messageElement.textContent = message;
//     chatboxBody.appendChild(messageElement);
//     chatboxBody.scrollTop = chatboxBody.scrollHeight;  // Scroll to bottom
// }
// sell

// Show/hide the handicraft form when the button is clicked
// document.getElementById('handicraftButton').addEventListener('click', function() {
//     const formContainer = document.getElementById('handicraftFormContainer');
//     formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
// });

// // Handle form submission
// document.getElementById('handicraftForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form data
//     const productName = document.getElementById('productName').value;
//     const productDescription = document.getElementById('productDescription').value;
//     const productPrice = document.getElementById('productPrice').value;
//     const productImage = document.getElementById('productImage').value;

//     // Display a success message
//     const messageDiv = document.getElementById('message');
//     messageDiv.innerHTML = `
//         <div class="alert alert-success" role="alert">
//             Your product "${productName}" has been submitted successfully!
//         </div>
//     `;

//     // Clear the form
//     document.getElementById('handicraftForm').reset();
// });



// chatbot
const chatbox = document.getElementById('chatbox');
        const chatboxBody = document.getElementById('chatbox-body');

        const responses = {
            "hello": "Hello! How can I assist you today?",
            "how are you": "I'm just a bot, but I'm functioning as expected. How about you?",
            "what is your name": "I'm your friendly chatbot!",
            "what are the categories do you have": "We have clothes, accessories, and many more.",
            "bye": "Goodbye! Have a great day!"
        };

        // Toggle chatbox visibility
        document.getElementById('chatbotToggle').addEventListener('click', function() {
            chatbox.style.display = chatbox.style.display === 'none' || chatbox.style.display === '' ? 'block' : 'none';
        });

        function sendMessage() {
            const userInput = document.getElementById('userInput').value.toLowerCase();
            if (userInput.trim() !== "") {
                // Display the user's message
                appendMessage(userInput, 'user-message');
                // Clear input
                document.getElementById('userInput').value = '';

                // Find bot response
                const botResponse = getBotResponse(userInput);
                setTimeout(() => appendMessage(botResponse, 'bot-message'), 500);  // Simulate a delay for bot response
            }
        }

        function getBotResponse(input) {
            // Check if there's a predefined response
            return responses[input] || "Sorry, I didn't understand that. Can you try asking something else?";
        }

        function appendMessage(message, className) {
            const messageElement = document.createElement('div');
            messageElement.className = className;
            messageElement.textContent = message;
            chatboxBody.appendChild(messageElement);
            chatboxBody.scrollTop = chatboxBody.scrollHeight;  // Scroll to bottom
        }
    //  sell
    // Show/hide the handicraft form when the button is clicked
    document.addEventListener('DOMContentLoaded', function() {
        // Show/hide the handicraft form when the button is clicked
        document.getElementById('handicraftButton').addEventListener('click', function() {
            const formContainer = document.getElementById('handicraftFormContainer');
            formContainer.style.display = formContainer.style.display === 'none' || formContainer.style.display === '' ? 'block' : 'none';
        });
    
        // Handle form submission
        document.getElementById('handicraftForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
    
            // Get form data
            const productName = document.getElementById('productName').value;
            const productDescription = document.getElementById('productDescription').value;
            const productPrice = document.getElementById('productPrice').value;
            const productImage = document.getElementById('productImage').files[0]; // Correct file handling
    
            // Validate that all fields are filled
            if (!productName || !productDescription || !productPrice || !productImage) {
                alert('Please fill out all fields, including uploading an image.');
                return;
            }
    
            // Display a success message
            const messageDiv = document.getElementById('message');
            messageDiv.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Your product "${productName}" has been submitted successfully!
                </div>
            `;
    
            // Clear the form
            document.getElementById('handicraftForm').reset();
        });
    
        // Handle review form submission
        document.getElementById('reviewForm').addEventListener('submit', function(event) {
            event.preventDefault();
    
            const reviewName = document.getElementById('reviewName').value;
            const reviewRating = document.getElementById('reviewRating').value;
            const reviewText = document.getElementById('reviewText').value;
    
            // Validate that a valid rating is selected
            if (reviewRating === 'Choose...') {
                alert('Please select a valid rating.');
                return;
            }
    
            // Display the new review
            const reviewsList = document.getElementById('reviewsList');
            reviewsList.innerHTML += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${reviewName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${reviewRating} Stars</h6>
                        <p class="card-text">${reviewText}</p>
                    </div>
                </div>
            `;
    
            // Clear the review form
            document.getElementById('reviewForm').reset();
        });
    });
    


