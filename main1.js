function deleteBook(id) {
    if (confirm("Are you sure you want to delete this book?")) {
      fetch(`/books/${id}`, {
        method: "DELETE"
      }).then(() => {
        alert("Book deleted!");
        location.reload();
      });
    }
  }
  