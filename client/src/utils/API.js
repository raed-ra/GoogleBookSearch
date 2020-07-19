export default {
    /**
     * Get a list of books from the google books api.
     * @param {string} title 
     */

    async searchBooks(title) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
        const response = await fetch(url);
        return response.json();
    },

    async getBooks() {
        const response = await fetch('/api/books')
        return response.json()
    },

    async saveBook(book) {
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        return response.json()
    },

    async deleteBook(_id) {
        console.log(_id)
        const response = await fetch(`/api/books/` + _id , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({_id}),
        });
        return response.json()
    }

}