const getStoreBookApplication = () =>{
    const storedBookApplication = localStorage.getItem('Book-applications')
    if(storedBookApplication){
        return JSON.parse(storedBookApplication);
    }
    return []; 
}
const saveBookApplication = id =>{
 const storedBookApplication = getStoreBookApplication();
 const exists = storedBookApplication.find(BookId =>BookId === id)
 if(!exists){
    storedBookApplication.push(id);
    localStorage.setItem('Book-applications', JSON.stringify(storedBookApplication))
 }
}
export {getStoreBookApplication,saveBookApplication}
