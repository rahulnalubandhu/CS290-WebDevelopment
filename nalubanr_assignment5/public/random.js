'use strict'

async function fetchRandomPerson(type) {
    let url;
    // console.log(type);//debugging
    if (type === 'direct') {
      url = 'https://randomuser.me/api/';
    } 

    else if (type === 'express') {
      url = '/random-person'; //from here it is sent to server.mjs which gets and exceutes the json read
    }
    // refrence:https://canvas.oregonstate.edu/courses/1901690/pages/exploration-writing-asynchronous-code
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);//debugging
  
    const person = data.results[0];
    const firstName = person.name.first;
    const lastName = person.name.last;
    const phone = person.phone;
    const email = person.email;
  
    const div = document.getElementById('random-person');
    
    // displaying the data sent in the response by Random User Api and below is just for one node where everything(fname,lname,phone) is concatinated (it was mentiones as one or more nodes )
    //Refrence:https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    const alL_in_node = document.createElement('p');
    alL_in_node.textContent = `Name: ${firstName} ${lastName},\nPhone: ${phone},\nEmail: ${email}`;
    div.appendChild(alL_in_node);

    // we can enable this for displaying the data sent in the response by Random User Api and below are 3 different nodes using DOM API
   
    // const nameNode = document.createElement('p');
    // nameNode.textContent = `Name: ${firstName} ${lastName}`;
    // div.appendChild(nameNode);
  
    // const phoneNode = document.createElement('p');
    // phoneNode.textContent = `Phone: ${phone}`;
    // div.appendChild(phoneNode);
  
    // const emailNode = document.createElement('p');
    // emailNode.textContent = `Email: ${email}`;
    // div.appendChild(emailNode);

}
  