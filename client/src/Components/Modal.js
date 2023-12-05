

const Modal = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <h3>Let's {mode} you task</h3>
          <button>X</button>
        </div>
        <form>
          <input maxLength={30} placeholder="" name=""/>
          <input/>
          <input type = 'submit'/>
        </form>
      </div>
    </div>
  )
}

export default Modal