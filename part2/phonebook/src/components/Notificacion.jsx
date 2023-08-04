const NotificationPhoneBook = ({ succesfulMessage,errorMessage }) => {

    
    if (succesfulMessage === null && errorMessage===null) {
      return null
    }

    if(errorMessage){
      return (
        <div className="error">
          {errorMessage}
        </div>
      )
    }
    

    if(succesfulMessage){
      return (
        <div className="succesful">
          {succesfulMessage}
        </div>
      )
    }
    

 

}

export default NotificationPhoneBook