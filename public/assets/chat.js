let socket=io.connect('http://localhost:4000/');

let message=document.getElementById('message'),
    handle =document.getElementById('handle'),
    output=document.getElementById('output'),
    outputp=document.getElementById('output-p'),
    send=document.getElementById('send'),
    chatWindow=document.querySelector('#chat-window');

    getData=async ()=>{
      const data = await fetch('http://localhost:4000/api/users');
      const lol = await data.json();
      return lol;
    }

let userEmail='';

getData().then((data)=>{
    handle.value=data.name;
     send.addEventListener('click',()=>{
       socket.emit('chat', {
         email : data.email,
         name : data.name,
         message : message.value
       });
       message.value='';
     });
     userEmail=data.email;
      socket.emit('output');

     socket.on('output',(lol)=>{
      if(userEmail==='rachit@gmail.com'){
        lol.forEach((gg)=>{
          output.innerHTML+=`<p><strong>${gg.handler} : </strong>${gg.message}</p>`;
          chatWindow.scrollTop=chatWindow.scrollHeight;
        })
      }else{
       lol.forEach((gg)=>{
         console.log(gg);
         output.innerHTML+=`<p><strong>Anonymous : </strong>${gg.message}</p>`;
         chatWindow.scrollTop=chatWindow.scrollHeight;
       }) 
      }
    });
    socket.on('chat',(data)=>{
      if(userEmail==='rachit@gmail.com'){
        output.innerHTML+=`<p><strong>${data.handler} : </strong>${data.message}</p>`;
        chatWindow.scrollTop=chatWindow.scrollHeight;
      }else{
        output.innerHTML+=`<p><strong>Anonymous : </strong>${data.message}</p>`;
        chatWindow.scrollTop=chatWindow.scrollHeight;
      }
    }); 
    })


  