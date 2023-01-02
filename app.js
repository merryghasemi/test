

class Book{


constructor(title,subject){

    this.title=title;
    this.subject=subject;
}

}

class UI{


    addbook(book){


        const list = document.getElementById('book-list')
        const row = document.createElement('tr');
        row.innerHTML=`
        
        <td> ${book.title} </td>
        
        
        <td>  ${book.subject} </td>`


        list.appendChild(row)

    }
}



document.querySelector('form').addEventListener('submit',addbook);

function addbook(e){

    const mytitle= document.getElementById('title').value;
    const mysubject=document.getElementById('subject').value;

  const mybook = new Book(mytitle,mysubject)


  const myui = new UI();

  myui.addbook(mybook)

 console.log(mybook)

    e.perventDefault();
}