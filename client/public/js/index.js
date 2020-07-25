let socket = io();

socket.on('connect', () => { 
  console.log('Connected to server!')

  socket.emit('bookSaved', { 
    from: "GoogleBookSearch",
    text: "One Book Saved!"
  })
});

socket.on('disconnect', () => { 
  console.log('Disconnected from server!')
});